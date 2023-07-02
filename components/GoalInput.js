import { View, Button, Text, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";
import CustomButton from "./CustomButton";
import PopUp from "./PopUp";
export default function GoalInput(props) {
  return (
    <View style={styles.addPage}>
      <View style={styles.titleContainer}>
        <Image
          source={require("../assets/imgs/logo.png")}
          style={styles.logoFrontPage}
        />
        <Text style={styles.titleText}>Goals Tracker</Text>
      </View>
      <PopUp
        displayModal={props.displayModal}
        setShowModal={props.setShowModal}
        addGoalHandler={props.addGoalHandler}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "5%",
  },
  logoFrontPage: {
    width: 200,
    height: 200,
    marginLeft: "1%",
  },
  titleText: {
    fontFamily: "RussoOne-Regular",
    fontSize: 40,
  },
});
