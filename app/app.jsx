import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "../components/GoalInput";
import GoalItem from "../components/GoalItem";

export default function App() {
    const [enteredText, setEnteredText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    async function addGoalHandler() {
        if (enteredText.length > 0) {
            await setCourseGoals(currentGoals => {
                return [...currentGoals, { text: enteredText, id: Math.random().toString() }];
            });
            setEnteredText('');
        }
    }

    function goalInputHandler(enteredText) {
        setEnteredText(enteredText);
    }

    return <>
        <View style={styles.container}>
            <GoalInput enteredText={enteredText} addGoalHandler={addGoalHandler} goalInputHandler={goalInputHandler}></GoalInput>
            <View style={styles.goalsContainer}>
                <FlatList alwaysBounceVertical="false" keyExtractor={(item, index) => { return item.id }} data={courseGoals}
                    renderItem={(itemData) => <GoalItem itemData={itemData} />
                    }>
                </FlatList>
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
    goalsContainer: {
        flex: 6
    }
});