import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textbox}>Marti</Text>
      <Text style={styles.textbox}>Hello World!</Text>
      <View>
        <Button title='Pínchame '/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    margin: 20,
    borderWidth: 1,
    borderColor: 'red',
    padding: 23
  }
});
