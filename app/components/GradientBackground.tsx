import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ViewStyle } from 'react-native';
import { Colors, gradientBackgroundStyles as styles } from '../constants/Colors';

interface Props {
    children: React.ReactNode;
    style?: ViewStyle;
}

export default function GradientBackground({ children, style }: Props) {
    return (
        <LinearGradient
            colors={[Colors.gradientStart, Colors.gradientEnd]}
            locations={[0.55, 1]}
            style={[styles.container, style]}
        >
            {children}
        </LinearGradient>
    );
}

