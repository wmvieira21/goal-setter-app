import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredText) {
    if (enteredText.length > 0) {
      setCourseGoals((currentGoals) => {
        return [
          ...currentGoals,
          { text: enteredText, id: Math.random().toString() },
        ];
      });
    }
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <View style={styles.container}>
        <GoalInput
          addGoalHandler={(value) => addGoalHandler(value)}
        ></GoalInput>

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
  },
  goalsContainer: {
    flex: 6,
  },
});
