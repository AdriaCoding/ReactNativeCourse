import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function pressHandler() {
  console.log("Pressed");
}

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onpress={pressHandler}
    />
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

export default CategoriesScreen;
