import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, Image, Text, View } from "react-native";
import GradientBackground from "../components/GradientBackground";
import GradientButton from "../components/GradientButton";
import TagItem from "../components/TagItem";
import { Colors, recipeStyles as styles } from "../constants/Colors";

interface Recipe {
    id: number;
    name: string;
    image: string;
    tags: string[];
}

const { width } = Dimensions.get('window');
const itemWidth = (width - 60) / 2;

export default function RecipeScreen() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [recipesRes, tagsRes] = await Promise.all([
                    fetch('https://dummyjson.com/recipes?limit=20&select=name,image,tags'),
                    fetch('https://dummyjson.com/recipes/tags'),
                ]);
                const recipesData = await recipesRes.json();
                const tagsData = await tagsRes.json();
                setRecipes(recipesData.recipes);
                setTags(tagsData);
            } catch (error) {
                console.error('Gagal mengambil data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <GradientBackground style={styles.container}>
                <ActivityIndicator size="large" color={Colors.white} />
            </GradientBackground>
        );
    }

    const filteredRecipes = selectedTag
        ? recipes.filter((r) => r.tags?.includes(selectedTag))
        : recipes;

    const renderItem = ({ item }: { item: Recipe }) => (
        <View style={[styles.card, { width: itemWidth }]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Link href={`/recipe/${item.id}`} asChild>
                <GradientButton title={item.name} onPress={() => { }} />
            </Link>
        </View>
    );

    return (
        <GradientBackground style={styles.container}>
            <Text style={styles.title}>Daftar Resep</Text>

            {/* List Tags */}
            <View>
                <FlatList
                    data={tags}
                    renderItem={({ item }) => (
                        <TagItem
                            name={item}
                            isSelected={selectedTag === item}
                            onPress={() => setSelectedTag(selectedTag === item ? null : item)}
                        />
                    )}
                    keyExtractor={(item) => item}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 8, paddingBottom: 12 }}
                />
            </View>

            {/* List Recipe */}
            <View style={{ flex: 1, marginTop: 10 }}>
                <FlatList
                    data={filteredRecipes}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                    contentContainerStyle={styles.listContent}
                    renderItem={renderItem}
                />
            </View>
        </GradientBackground>
    );
}

