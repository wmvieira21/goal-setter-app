import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [enteredText, setEnteredText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    async function addGoalHandler() {
        await setCourseGoals(currentGoals => {
            return [...currentGoals, enteredText]
        });
        setEnteredText('');
    }

    function goalInputHandler(enteredText) {
        setEnteredText(enteredText);
    }

    return <>
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Set your goal!" onChangeText={goalInputHandler} value={enteredText}></TextInput>
                <Button title="Add Goal" onPress={addGoalHandler}></Button>
            </View>
            <View style={styles.goalsContainer}>
                {courseGoals.map((goal, index) => (
                    <View key={index} style={styles.goalItem}>
                        <Text style={styles.goalItemText}>{goal}</Text>
                    </View>
                )
                )}
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '75%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 6
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0accc4',
        color: 'white'
    },
    goalItemText: {
        color: 'white'
    }
});