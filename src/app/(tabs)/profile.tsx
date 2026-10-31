import { Platform, StyleSheet, Text, View } from "react-native";
import BottomSheetAndroid from "../components/bottom-sheet.android";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      {Platform.OS === "android" && <BottomSheetAndroid />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
