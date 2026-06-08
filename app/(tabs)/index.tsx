import { Link } from "expo-router";
import { Colors } from "../constants/Colors"
import { Dimensions, Text, View, Image } from "react-native";
import Header from "../../components/Header";
import GradientBackground from "../components/GradientBackground";
import GradientButton from "../components/GradientButton";
import { indexStyles as styles } from "../constants/Colors";

const HomeScreen = () => {
  return (
    <GradientBackground style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image 
            source={require('../../assets/images/my.jpg')}
            style={styles.imageFull} 
          />
          <View style={styles.overlay}>
            <Text style={styles.title}>MBG</Text>
          </View>
        </View>
        <Text style={styles.randomText}>
          Random Recipe
        </Text>
      </View>
    </GradientBackground>
  );
};

export default HomeScreen;