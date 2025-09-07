import { StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
    return <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.itemData.item.text}</Text>
    </View>
}

const styles = StyleSheet.create({
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