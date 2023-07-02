import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <Pressable
      onPress={props.deleteGoalHandler.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalsItem}>
        <Text style={styles.goalsText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalsItem: {
    backgroundColor: "#d8e2dc",
    padding: "5%",
    borderRadius: 10,
    marginBottom: "5%",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalsText: {
    fontSize: 16,
    // fontFamily: "RussoOne-Regular",
    fontFamily: "Acme-Regular",
  },
});
