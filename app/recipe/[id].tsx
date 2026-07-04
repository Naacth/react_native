import axios from 'axios'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import GradientBackground from '../components/GradientBackground'
import { COLOR, Colors } from '../constants/Colors'

const DetailRecipe = () => {
    const { id } = useLocalSearchParams()
    const [recipe, setRecipe] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const { data } = await axios.get(`https://dummyjson.com/recipes/${id}`)
                setRecipe(data)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        fetchRecipe()
    }, [id])

    return (
        <GradientBackground style={{ flex: 1 }}>
            <Header btnBack={true} />
            {loading ? (
                <View style={styles.center}>
                    <ActivityIndicator size="large" color={COLOR.primary} />
                </View>
            ) : !recipe ? (
                <View style={styles.center}>
                    <Text style={styles.errorText}>Recipe tidak ditemukan.</Text>
                </View>
            ) : (
                <ScrollView contentContainerStyle={styles.container}>
                    <Image source={{ uri: recipe.image }} style={styles.image} />
                    <Text style={styles.title}>{recipe.name}</Text>

                    <View style={styles.metaRow}>
                        <Text style={styles.metaText}>⏱ {recipe.cookTimeMinutes} menit</Text>
                        <Text style={styles.metaText}>👤 {recipe.servings} porsi</Text>
                        <Text style={styles.metaText}>🔥 {recipe.caloriesPerServing} kal</Text>
                    </View>

                    <View style={styles.ratingRow}>
                        <Text style={styles.metaText}>⭐ {recipe.rating} ({recipe.reviewCount} ulasan)</Text>
                        <Text style={styles.metaText}>📊 {recipe.difficulty}</Text>
                    </View>

                    {/* Ingredients */}
                    <Text style={styles.sectionTitle}>🧂 Bahan-Bahan</Text>
                    {recipe.ingredients?.map((item: string, index: number) => (
                        <View key={index} style={styles.ingredientRow}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.ingredientText}>{item}</Text>
                        </View>
                    ))}

                    {/* Instructions */}
                    <Text style={styles.sectionTitle}>📋 Cara Membuat</Text>
                    {recipe.instructions?.map((step: string, index: number) => (
                        <View key={index} style={styles.stepRow}>
                            <Text style={styles.stepNumber}>{index + 1}.</Text>
                            <Text style={styles.stepText}>{step}</Text>
                        </View>
                    ))}

                    {/* Tags */}
                    {recipe.tags?.length > 0 && (
                        <View style={styles.tagsContainer}>
                            {recipe.tags.map((tag: string, index: number) => (
                                <View key={index} style={styles.tag}>
                                    <Text style={styles.tagText}>{tag}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </ScrollView>
            )}
        </GradientBackground>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: Colors.text,
        fontSize: 16,
    },
    container: {
        padding: 16,
        paddingBottom: 40,
    },
    image: {
        width: '100%',
        height: 220,
        borderRadius: 16,
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLOR.primary,
        textAlign: 'center',
        marginBottom: 10,
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 6,
    },
    ratingRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    metaText: {
        color: Colors.text,
        fontSize: 13,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: COLOR.primary,
        marginTop: 16,
        marginBottom: 8,
    },
    ingredientRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 4,
        paddingHorizontal: 4,
    },
    bullet: {
        color: COLOR.primary,
        fontSize: 16,
        marginRight: 8,
        lineHeight: 22,
    },
    ingredientText: {
        color: Colors.text,
        fontSize: 14,
        flex: 1,
        lineHeight: 22,
    },
    stepRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        paddingHorizontal: 4,
    },
    stepNumber: {
        color: COLOR.primary,
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 8,
        lineHeight: 22,
        minWidth: 20,
    },
    stepText: {
        color: Colors.text,
        fontSize: 14,
        flex: 1,
        lineHeight: 22,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 20,
    },
    tag: {
        backgroundColor: 'rgba(201, 168, 76, 0.2)',
        borderColor: COLOR.primary,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    tagText: {
        color: COLOR.primary,
        fontSize: 12,
    },
})

export default DetailRecipe
