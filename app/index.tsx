import { Text, View, StyleSheet, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomTextButton from "../components/CustomTextButton";
import { router } from "expo-router";

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

      <CustomButton title="Sign Up" onPress={() => router.push("/signup")} />
      <Text style={{...styles.description, marginBottom: 0 }} >Already have an account?</Text><Text/>
      <CustomTextButton title="Log in" onPress={() => router.push("/login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: 30,
    lineHeight: 22,
  },
});
