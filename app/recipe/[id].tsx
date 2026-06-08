import { Link, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/Header'
import GradientBackground from '../components/GradientBackground'
import { detailRecipeStyles as styles } from '../constants/Colors'

const DetailRecipe = () => {
    const { id } = useLocalSearchParams()
    return (
        <GradientBackground style={styles.container}>
            <View style={{ flex: 1 }}>
                <Header btnBack={true} />
                <Text style={styles.title}>Detail Recipe : {id}</Text>
                <Link href="/" style={styles.backLink}>Kembali</Link>
            </View>
        </GradientBackground>
    )
}

export default DetailRecipe