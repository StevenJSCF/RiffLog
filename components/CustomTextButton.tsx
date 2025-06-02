import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function CustomTextButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "gray",                     // white text
    fontSize: 15,
    fontWeight: "600"
  }
});
