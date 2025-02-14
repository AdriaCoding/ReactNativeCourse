import { View, Text } from "react-native";
import MEALS from "../data/dummy-data";

function MealDetailScreen({route}) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Meal detail {mealId}</Text>
    </View>
  )
}


export default MealDetailScreen;