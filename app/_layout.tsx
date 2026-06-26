import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AppProvider } from "./context/AppContext";

export default function RootLayout() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="recipe/[id]" options={{ title: "Detail Resep" }} />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </AppProvider>
  );
}
