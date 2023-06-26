import React, { Component, useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
} from "react-native";
import Voice from "@react-native-voice/voice";
import * as Speech from 'expo-speech';


export default function Translate() {
  // const [started, setStarted] = useState(false);
  // const [results, setResults] = useState([]);

  // useEffect(() => {
  //   Voice.onSpeechError = onSpeechError;
  //   Voice.onSpeechResults = onSpeechResults;
  //   return () => {
  //     Voice.destroy().then(Voice.removeAllListeners);
  //   }
  // }, [])

  // async function startSpeechToText() {
  //   await Voice.start('en-US');
  //   console.log('in start')
  //   setStarted(true);

  //   playText();
  // }

  // async function stopSpeechToText() {
  //   await Voice.stop();
  //   console.log('in stop')
  //   setStarted(false);
  // }

  // function onSpeechResults(result) {
  //   setResults(result.value);
  // }

  // function onSpeechError(error) {
  //   console.log(error);
  // }
  
  // function translateText(string) {
  //   // fetch from deepL...
  //   playText(translatedString, language);
  // }
  
  // function playText(string = 'Error: no args received.', language = 'en') {
  //   Speech.speak(string, {'language': language});
  // }

  return (
    <View style={styles.container}>
        <Text>Hello, world! We are in the Translate component.</Text>
        {/* {started ? 
          (<Button title='Stop recording' onPress={() => stopSpeechToText} />) :
          (<Button title='Start recording' onPress={() => startSpeechToText} />)
        }
        {results.map((result, index) => <Text key={index}>{result}</Text>)} */}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
  container: {},
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  action: {
    textAlign: "center",
    color: "#0000FF",
    marginVertical: 5,
    fontWeight: "bold",
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  stat: {
    textAlign: "center",
    color: "#B0171F",
    marginBottom: 1,
  },
});
