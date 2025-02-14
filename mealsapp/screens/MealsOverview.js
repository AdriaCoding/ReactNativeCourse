import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });
  console.log(categoryId);
  return (
    <View style={styles.container}>
      <Text>
        {"Category ID ->"} {categoryId}
      </Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
