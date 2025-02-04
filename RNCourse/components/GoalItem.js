import { StyleSheet, View, Text } from "react-native";

function GoalItem(props){
  return(
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#5f21f0',
    borderColor: '#cccccc',
    borderRadius: 6,
    color: '#f1f1f1',
    borderWidth: 1
  },
  goalText: {
    color: '#f1f1f1'
  }
});