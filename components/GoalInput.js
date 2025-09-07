import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function GoalInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredText);
    setEnteredText("");
  }

  function cancelGoalHandler() {
    props.cancelGoalHandler();
    setEnteredText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal (2).png")}
        ></Image>
        <TextInput
          style={styles.textInput}
          placeholder="Set your goal!"
          onChangeText={goalInputHandler}
          value={enteredText}
        ></TextInput>

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              color={"#f312828e"}
              title="Cancel"
              onPress={cancelGoalHandler}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              color={"#716adbff"}
              title="Add Goal"
              onPress={addGoalHandler}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#25206ee5",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    gap: 16,
  },
  button: {
    width: "40%",
    textAlign: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "90%",
    padding: 16,
    backgroundColor: "#e4d0ff",
    borderColor: "e4d0ff",
    borderRadius: 6,
    color: "#120438",
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
