import { Text, View, StyleSheet, Image } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/RiffLog-Logo.png")}
        style={styles.logo}
      />

      <Text style={styles.titleTop}>Welcome to</Text>
      <Text style={styles.titleMain}>RiffLog</Text>

      <Text style={styles.description}>
        Save the songs you're learning on guitar{"\n"}and never lose track
      </Text>

      <CustomButton title="Get Started" onPress={() => console.log("Pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    padding: 24,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  titleTop: {
    fontSize: 22,
    color: "#333",
  },
  titleMain: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 22,
  },
});
