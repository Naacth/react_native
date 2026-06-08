import { Colors } from '../app/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    btnBack?: Boolean
}

const Header: FC<Props> = ({ btnBack = false }) => {
    const router = useRouter();

    return (
        <View style={styles.header}>
            {btnBack && (
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name='arrow-back' color={Colors.primary} size={20} />
                </TouchableOpacity>
            )}
            <Text style={styles.title}>Recipe-App</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        padding: 16,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: Colors.primary,
        letterSpacing: 5
    }
})