import { useState } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  ScrollView,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  
  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      enteredGoalText
    ])
    console.log(courseGoals);
  };
  function deleteGoalHandler(){
    console.log('DELETE');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onAddGoal={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem 
              text={itemData.item}
              onDeleteItem={deleteGoalHandler}
            />
          }}
          keyExtractor={(item, index) => {
            console.log('index:', index, 'item:', item);
            return index
          }}
          alwaysBounceVertical={false}
        /> 
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
  goalsContainer: {
    flex: 4,
  },

});
