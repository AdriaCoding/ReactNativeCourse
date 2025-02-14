import { StyleSheet, Text, View } from "react-native";
function List({ array }) {
  return array.map((item) => (
    <View style={styles.listItem}>
      <Text style={styles.listText} key={item}>
        {item}
      </Text>
    </View>
  ));
}
export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#c69f89",
  },
  listText: {
    color: "#351401",
    textAlign: "center",
  },
});
