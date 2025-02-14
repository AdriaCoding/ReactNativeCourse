import { useState } from "react";
import { StyleSheet, View, Button, FlatList, Image } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    console.log(courseGoals);
    closeModalHandler();
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    console.log("Deleted goal with id:", id);
  }

  function closeModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color={"#a617c6"}
        onPress={startAddGoalHandler}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={closeModalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
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
    backgroundColor: "#fff",
  },
  goalsContainer: {
    flex: 4,
  },
});
