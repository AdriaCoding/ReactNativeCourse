import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverview";
import MealDetailScreen from "./screens/MealDetailScreen";
import Meal from "./models/meal";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#31241d" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Categorías de Comida",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
            //options={({route, navigation})=>{
            //  return {title:route.params.categoryId};
            //}}
            
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
