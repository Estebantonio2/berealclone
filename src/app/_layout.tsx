import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: false
    // headerStyle: { backgroundColor: "cornflowerblue" },
    // headerTintColor: "white",
    // animation: "slide_from_right"
  }}>
    <Stack.Screen name="(tabs)" />
  </Stack>;
}
