import { View, Text, Image, StyleSheet } from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailScreen({route}) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((m) => m.id === mealId);  
  const mealDetailsProps = {
    duration: meal.duration,
    complexity: meal.complexity,
    affordability: meal.affordability,
    textStyle: styles.detailText,
  };
  return (
    <View>
      <Image source={{uri: meal.imageUrl}} style={styles.image}/>
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails {...mealDetailsProps}/>
      <View>

      </View>
      <Text> Ingredients </Text>
      {meal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text> Steps </Text>
      {meal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  )
}


export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title:{
    fontWeight: "bold",
    fontSize:24, 
    margin: 8,
    textAlign: "center",
    color: "white"
  },
  detailText: {
    color: "white"
  }
});