import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem(props) {
  const item = props.itemData.item;

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, item.id)}
        android_ripple={{ color: "#1e0342c4" }}
        style={({ pressed }) => pressed && { opacity: 0.5 }}
      >
        <Text style={styles.goalItemText}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0accc4",
    color: "white",
  },
  goalItemText: {
    padding: 8,
    color: "white",
  },
});
