import { View, Text, StyleSheet} from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ }) {
  const route = useRoute();
  const categoryId = route.params.categoryId;
  console.log(categoryId);
  return(
    <View style={styles.container}>
      <Text>{"Category ID ->"}  {categoryId }</Text>
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});