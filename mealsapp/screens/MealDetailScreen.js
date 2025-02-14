import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { Header } from "react-native/Libraries/NewAppScreen";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((m) => m.id === mealId);
  const mealDetailsProps = {
    duration: meal.duration,
    complexity: meal.complexity,
    affordability: meal.affordability,
    textStyle: styles.detailText,
  };

  function headerButtonPressHandler(){
    console.log('Header button pressed!');

  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me" onPress={headerButtonPressHandler}/>
      }
    })
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails {...mealDetailsProps} />
      <View style={styles.listsOuterContainer}>
        <View style={styles.listsContainer}>
          <Subtitle subtitle="Ingredients" />
          <List array={meal.ingredients} />
          <Subtitle subtitle="Steps" />
          <List array={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer : {
    marginBottom:32,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listsContainer: {
    width: "80%",
  },
  listsOuterContainer: {
    alignItems: "center",
  },
});
