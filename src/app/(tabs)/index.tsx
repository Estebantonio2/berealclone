import { Button, Host } from "@expo/ui/jetpack-compose";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>Hello World!</Text>
      <Image
        source={{
          uri: "https://media.tenor.com/4BTM6JjtqmUAAAAe/why-you-lying.png",
        }}
        style={styles.image}
      />
      <TextInput placeholder="Email" />
      <ActivityIndicator />
      <Link href="/about">Go to About Screen</Link>
      <Host matchContents>
        <Button onClick={() => router.push("/profile")}>
          <Text>Navigate to profile</Text>
        </Button>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  helloWorldTitle: {
    color: "red",
  },
  image: {
    width: 200,
    height: 200,
  },
});
