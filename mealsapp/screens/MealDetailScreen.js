import { View, Text, Image } from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailScreen({route}) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((m) => m.id === mealId);  
  const mealDetailsProps = {
    duration: meal.duration,
    complexity: meal.complexity,
    affordability: meal.affordability,
  };
  return (
    <View>
      <Image source={{uri: meal.imageUrl}} />
      <Text>{meal.title}</Text>
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