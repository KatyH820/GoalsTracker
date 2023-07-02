import { View, Text, Image, Modal, StyleSheet, TextInput } from "react-native";
import CustomButton from "./CustomButton";
import { useState } from "react";
export default function PopUp(props) {
  const [inputText, setInputText] = useState("");
  function goalInputHandler(enteredText) {
    setInputText(enteredText);
  }
  function addGoal() {
    if (inputText.trim() !== "") {
      props.addGoalHandler(inputText);
    }
    setInputText("");
  }
  return (
    <Modal visible={props.displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={require("../assets/imgs/logo.png")}
            style={styles.logoAddPage}
          />
          <Text style={styles.titleText}>Goals Tracker</Text>
        </View>
        <TextInput
          placeholder="Add Your Goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={inputText}
        />
        <View style={styles.buttonContainer}>
          <CustomButton
            value="Add Goal"
            onPress={() => {
              addGoal();
              props.setShowModal(!props.displayModal);
            }}
          />
          <CustomButton
            value="Cancel"
            onPress={() => {
              props.setShowModal(!props.displayModal);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "15%",
    paddingTop: "30%",
  },

  titleText: {
    fontFamily: "RussoOne-Regular",
    fontSize: 40,
  },

  inputContainer: {
    flex: 1,
    alignContent: "center",
    paddingTop: "5%",
    paddingBottom: "6%",
    backgroundColor: "#f1faee",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "15%",
    padding: "3%",
    fontSize: 20,
    fontFamily: "RussoOne-Regular",
  },
  buttonContainer: {
    marginHorizontal: "5%",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
    alignContent: "center",
  },
  logoAddPage: {
    width: 300,
    height: 300,
  },
});
