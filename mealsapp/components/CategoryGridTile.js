import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color, onpress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onpress}
        android_ripple={{ color: "#ed1616" }}
      >
        <View style={[styles.innerContainer,  { backgroundColor: color }]}>
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
    backgroundColor: "white",
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});
