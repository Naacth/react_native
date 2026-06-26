import { StyleSheet } from 'react-native';


export const COLOR = {
    primary: '#C9A84C',
    secondary: '#A0785A',
    background: '#0D1117',
    text: '#E8E8E8',
    white: '#FFFFFF',
    gradientStart: '#073780ff',
    gradientEnd: '#1C2A3A'
}
export const Colors = {
    primary: '#C9A84C',
    secondary: '#A0785A',
    background: '#1a2a41ff',
    text: '#E8E8E8',
    white: '#FFFFFF',
    gradientStart: '#0D1117',
    gradientEnd: '#1C2A3A'
}
export const Colors2 = {
    primary: '#C9A84C',
    secondary: '#A0785A',
    background: '#0D1117',
    text: '#E8E8E8',
    white: '#FFFFFF',
    gradientStart: '#1C2A3A',
    gradientEnd: '#0D1117'
}

export const indexStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageFull: {
        width: '100%',
        height: 400,
        borderRadius: 25,
    },
    imageWrapper: {
        width: '100%',
        borderRadius: 25,
        overflow: 'hidden',
        elevation: 15,
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        borderRadius: 12,
        paddingTop: 16,
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    title: {
        fontSize: 27,
        fontWeight: "600",
        color: Colors.primary,
        marginBottom: 4,
        textShadowColor: 'rgba(0,0,0,0.9)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 8,
    },
    overlay: {
        position: 'absolute',
        bottom: 16,
        left: 16,
    },
    randomText: {
        fontSize: 20,
        color: Colors.primary,
        paddingHorizontal: 15,
        letterSpacing: 5,
    },
    minutes: {
        color: Colors.white,
        fontSize: 13,
        textShadowColor: 'rgba(0,0,0,0.9)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 6,
    },
});

export const recipeStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: Colors.white,
        marginTop: 50,
        marginBottom: 20,
        textAlign: "center",
    },
    listContent: {
        paddingBottom: 30,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    card: {
        alignItems: 'center',
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingBottom: 10,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
    },
});

export const detailRecipeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
        color: Colors.white,
        textAlign: "center",
        marginTop: 20,
    },
    backLink: {
        color: Colors.gradientEnd,
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
    },
});

export const gradientBackgroundStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export const gradientButtonStyles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        elevation: 3,
        marginBottom: 15,
    },
    buttonText: {
        color: Colors2.white,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});

// Fix expo-router warning for non-route files in app folder
export default function DummyColors() { return null; }
