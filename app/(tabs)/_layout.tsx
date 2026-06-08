import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Tabs } from 'expo-router';
import { Colors } from '../constants/Colors';

const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: Colors.gradientStart,
                borderTopColor: Colors.gradientStart,
            },
            tabBarActiveTintColor: Colors.gradientEnd,
            tabBarInactiveTintColor: Colors.white,
            tabBarLabelStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} /> }} />
            <Tabs.Screen name="recipe" options={{ title: "Resep Makanan", tabBarIcon: ({ color, size }) => <Ionicons name="receipt" color={color} size={size} /> }} />
        </Tabs>
    )
}

export default TabLayout