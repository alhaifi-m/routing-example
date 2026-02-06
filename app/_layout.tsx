import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTitle: "My First Routing App",
        headerTitleAlign: "center",
      }}
    />
  );
}
