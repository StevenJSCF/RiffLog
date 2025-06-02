import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333",           // dark gray background
    paddingVertical: 14,               // vertical padding
    paddingHorizontal: 30,             // horizontal padding
    borderRadius: 15,                  // makes the edges round
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  text: {
    color: "#fff",                     // white text
    fontSize: 18,
    fontWeight: "600"
  }
});
