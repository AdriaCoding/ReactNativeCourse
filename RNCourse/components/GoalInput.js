import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
function GoalInput(props){
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function goalInputHandler(muxotesto){
    setEnteredGoalText(muxotesto);

  };

  function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder='Your course goal!'
        onChangeText={goalInputHandler}
        style={styles.textInput}
        value={enteredGoalText}
      />
      <Button 
        title="Add goal"
        onPress={addGoalHandler}
      />
    </View>
  );
}

styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput :{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 10,
    padding: 8
  },
});

export default GoalInput;