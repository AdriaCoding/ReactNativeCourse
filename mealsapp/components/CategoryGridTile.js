import { Pressable, View, Text, StyleSheet, Button } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable style={styles.button} android_ripple={{ color: "lightgrey" }}>
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white"
  },
  button: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22
  }
});
