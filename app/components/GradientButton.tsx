import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity } from 'react-native';
import { Colors2, gradientButtonStyles as styles } from '../constants/Colors';

export default function GradientButton({
    title,
    onPress,
}: {
    title: string;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={[Colors2.gradientEnd, Colors2.gradientStart]}
                locations={[0.01, 1]}
                style={styles.button}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

