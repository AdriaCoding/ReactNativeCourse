import { StyleSheet, View, Text, Pressable} from "react-native";

function GoalItem(props){
  return(
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{color: '#f1f1f1'}}
        onPress={props.onDeleteItem.bind(this, props.item.id)}
        style={({pressed})=> pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    backgroundColor: '#5f21f0',
    borderColor: '#cccccc',
    borderRadius: 6,
    color: '#f1f1f1',
    borderWidth: 1
  },
  pressedItem:{
    opacity: 0.5
  },
  goalText: {
    padding: 10,
    color: '#f1f1f1'
  }
});