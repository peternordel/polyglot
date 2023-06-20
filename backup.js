// This is before implementing the dictation app part of the project. (includes text to speech)

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const playText = () => {
    const thingToSay = '我愛你';
    Speech.speak(thingToSay, {language: 'zh'});
  };

  return (
    <View style={styles.container}>
      <Text>Hi Whitney!</Text>
      <Button title="Press to hear some words" onPress={playText} />
      <StatusBar style="auto" />
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
});
