import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(muxotesto){
    setEnteredGoalText(muxotesto);

  };

  function addGoalHandler(){
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      enteredGoalText
    ])
    console.log(courseGoals);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Your course goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button 
          title="Add goal"
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) =>
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
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
  textInput :{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 10,
    padding: 8
  },
  goalsContainer: {
    flex: 4,
  },
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
