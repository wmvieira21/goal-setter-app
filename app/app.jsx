import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredText) {
    if (enteredText.length > 0) {
      setCourseGoals((currentGoals) => {
        return [
          ...currentGoals,
          { text: enteredText, id: Math.random().toString() },
        ];
      });
      endAddGoalHandler();
    }
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <View style={styles.container}>
        <GoalInput
          visible={modalIsVisible}
          addGoalHandler={(value) => addGoalHandler(value)}
          cancelGoalHandler={endAddGoalHandler}
        ></GoalInput>
        <View style={styles.inputContainer}>
          <Button
            title="Add Goal"
            color="#726eafff"
            onPress={startAddGoalHandler}
          ></Button>
        </View>

        <View>
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Goals:
          </Text>
        </View>

        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical="false"
            keyExtractor={(item, index) => {
              return item.id;
            }}
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                itemData={itemData}
                onDeleteItem={(id) => deleteGoalHandler(id)}
              />
            )}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#25206ee5",
  },
  goalsContainer: {
    flex: 6,
  },
  inputContainer: {
    marginBottom: 24,
    padding: 8,
  },
});
