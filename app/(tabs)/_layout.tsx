import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Tabs } from 'expo-router';

const PRIMARY = '#C9A84C';
const BG = '#0D1117';
const INACTIVE = '#556070';

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: BG,
                    borderTopColor: 'rgba(201,168,76,0.2)',
                    borderTopWidth: 1,
                    height: 62,
                    paddingBottom: 8,
                    paddingTop: 6,
                },
                tabBarActiveTintColor: PRIMARY,
                tabBarInactiveTintColor: INACTIVE,
                tabBarLabelStyle: {
                    fontWeight: '600',
                    fontSize: 10,
                },
            }}
        >
            {/* Hide old index */}
            <Tabs.Screen
                name="index"
                options={{ href: null }}
            />
            <Tabs.Screen
                name="biodata"
                options={{
                    title: 'CV',
                    tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="pendidikan"
                options={{
                    title: 'Pendidikan',
                    tabBarIcon: ({ color, size }) => <Ionicons name="school" color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="aktivitas"
                options={{
                    title: 'Aktivitas',
                    tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="praktikum"
                options={{
                    title: 'Praktikum',
                    tabBarIcon: ({ color, size }) => <Ionicons name="trophy" color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="recipe"
                options={{
                    title: 'Recipe',
                    tabBarIcon: ({ color, size }) => <Ionicons name="receipt" color={color} size={size} />,
                }}
            />
        </Tabs>
    );
};

export default TabLayout;