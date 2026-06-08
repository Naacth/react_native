import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';

interface Props {
    name: string;
    isSelected: boolean;
    onPress: () => void;
}

const TagItem: FC<Props> = ({ name, isSelected, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.tag, isSelected && styles.tagSelected]}
        >
            <Text style={[styles.tagText, isSelected && styles.tagTextSelected]}>
                {name}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tag: {
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.white,
        backgroundColor: 'transparent',
    },
    tagSelected: {
        backgroundColor: Colors.white,
    },
    tagText: {
        color: Colors.white,
        fontSize: 13,
        fontWeight: '500',
    },
    tagTextSelected: {
        color: Colors.gradientStart,
        fontWeight: 'bold',
    },
});

export default TagItem;
