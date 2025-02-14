import { View, Text, StyleSheet } from "react-native";
function Subtitle({subtitle}) {
  return(
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{subtitle} </Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#c69f89",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical:4,
    padding: 6,
    borderBottomColor: "#c69f89",
    borderBottomWidth: 2,
  }
});
