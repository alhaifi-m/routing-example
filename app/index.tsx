import { Text, View, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my first routing app!</Text>
      <Link href={"/about"} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to About Page</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
