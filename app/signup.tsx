import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import CustomTextButton from "../components/CustomTextButton";

export default function SignUp() {
  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

            <Image
              source={require("../assets/images/user-icon.png")} // You can use any icon here
              style={styles.icon}
            />

      <Text style={styles.title}>Sign Up</Text>

      {/* Email input with icon */}
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/email-icon.png")} // your icon here
          style={styles.inputIcon}
        />
        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      </View>

      {/* Password input with icon */}
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/password-icon.png")} // your icon here
          style={styles.inputIcon}
        />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      </View>

      {/* Confirm Password */}
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/password-icon.png")}
          style={styles.inputIcon}
        />
        <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry />
      </View>

      <CustomButton title="Sign Up" onPress={() => console.log("Sign Up Pressed")} />

      <View style={styles.loginPrompt}>
        <Text style={styles.promptText}>Already have an account?</Text>
        <CustomTextButton title="Log in" onPress={() => router.push("/login")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
    },
    backButton: {
      position: "absolute",
      top: 50,
      left: 20,
    },
    backText: {
      fontSize: 16,
      color: "#333",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 24,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: 12,
      paddingHorizontal: 12,
      marginBottom: 16,
      width: "100%",
      height: 50,
    },
    inputIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
    },
    loginPrompt: {
      flexDirection: "row",
      marginTop: 20,
    },
    promptText: {
      fontSize: 14,
      color: "#333",
      marginRight: 6,
    },
    icon: {
        width: 40,
        height: 40,
        marginBottom: 16,
      },
  });
  
