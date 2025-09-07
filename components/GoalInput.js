import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredText);
    setEnteredText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Set your goal!"
        onChangeText={goalInputHandler}
        value={enteredText}
      ></TextInput>
      <Button
        color={"#5e0accc4"}
        title="Add Goal"
        onPress={addGoalHandler}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    marginRight: 8,
    padding: 8,
  },
});
