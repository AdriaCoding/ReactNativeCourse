import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput}/>
        <Button title="add goal" />
      </View>
      <View>
        <Text>Your course goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    backgroundColor: '#fff'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput :{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 10,
    padding: 8
  }
});
