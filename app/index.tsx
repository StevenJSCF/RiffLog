import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Image
        source={require('./assets/RiffLogLogo.png')}
        />
      <Text style={style.welcomeText}>Welcome to{'\n'}RiffLog</Text>
      <Text style={style.descText}>Save the songs you're learning on guitar and lever lose track</Text>
    </View>
  );
}

const style = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText:{
    fontSize: 50,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  descText:{
    fontSize: 20,
    textAlign: "center",
  }
})
