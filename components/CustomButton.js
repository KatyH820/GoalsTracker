import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPressIn={(pressed) => pressed && styles.pressedEffect}
      onPress={props.onPress}
    >
      <Text style={styles.title}>{props.value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: "3%",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3%",
    backgroundColor: "#d8e2dc",
  },
  pressedEffect: {
    opacity: 0.5,
  },
  title: {
    fontSize: 16,
    fontFamily: "Acme-Regular",
  },
});
