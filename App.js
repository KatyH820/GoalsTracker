import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import CustomButton from "./components/CustomButton";
const fetchFonts = async () =>
  await Font.loadAsync({
    "Acme-Regular": require("./assets/fonts/Acme-Regular.ttf"),
    "RussoOne-Regular": require("./assets/fonts/RussoOne-Regular.ttf"),
  });

export default function App() {
  const [goals, setGoals] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const loadFonts = async () => {
    await useFonts();
  };
  function addGoalHandler(enteredText) {
    setGoals((prev) => [
      ...prev,
      { text: enteredText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setGoals((prev) => prev.filter((goal) => goal.key !== id));
  }

  function startAddGoalHandler() {
    setShowModal(!showModal);
  }
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <View style={styles.titleInputContainer}>
          <GoalInput
            addGoalHandler={addGoalHandler}
            displayModal={showModal}
            setShowModal={setShowModal}
          />
          <View style={styles.button}>
            <CustomButton value="Add Goal" onPress={startAddGoalHandler} />
          </View>
        </View>

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                  id={itemData.item.key}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: "9%",
    paddingHorizontal: "4%",
    backgroundColor: "#f1faee",
  },
  titleInputContainer: {
    flex: 2.5,
    justifyContent: "center",
    alignContent: "center",
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  goalsContainer: {
    flex: 4,
    paddingTop: "5%",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: "5%",
  },
});
