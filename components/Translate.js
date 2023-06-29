import { StyleSheet, Text, Button, View, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
// import Voice from '@react-native-voice/voice';
import { StatusBar } from 'expo-status-bar';
import LIBRE_API_KEY from '../apiKey'
import * as Speech from 'expo-speech';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Translate() {
  
  const languagesFromEnglish = [
      "ar",
      "az",
      "cs",
      "da",
      "de",
      "el",
      "en",
      "eo",
      "es",
      "fa",
      "fi",
      "fr",
      "ga",
      "he",
      "hi",
      "hu",
      "id",
      "it",
      "ja",
      "ko",
      "nl",
      "pl",
      "pt",
      "ru",
      "ru",
      "sk",
      "sv",
      "tr",
      "uk",
      "zh"
    ]

  const [formData, setFormData] = useState({
    q: "",
    source: "en",
    target: "",
    format: "text",
    api_key: LIBRE_API_KEY
  })
  
  function translate_text(){
    fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(data => {
      playText(data.translatedText)
      // post to our server with the information
    })
  }

    function handleChange (e) {
      const { name, value } = e.target
      setFormData(prevFormData => ({...prevFormData, [name]: value}))
    }

    function handleSubmit (e) {
      e.preventDefault()
      translate_text()
    }

    function playText(text) {
      console.log(text, formData.target)
      Speech.speak(text, {language: formData.target});
    }

  // let [started, setStarted] = useState(false);
  // let [results, setResults] = useState([]);

  // useEffect(() => {
  //   Voice.onSpeechError = onSpeechError;
  //   Voice.onSpeechResults = onSpeechResults;

  //   return () => {
  //     Voice.destroy().then(Voice.removeAllListeners);
  //   }
  // }, []);

  // const startSpeechToText = async () => {
  //   await Voice.start("en-NZ");
  //   setStarted(true);
  // };

  // const stopSpeechToText = async () => {
  //   await Voice.stop();
  //   setStarted(false);
  // };

  // const onSpeechResults = (result) => {
  //   setResults(result.value);
  // };

  // const onSpeechError = (error) => {
  //   console.log(error);
  // };

  return (
    <View style={styles.container}>
      {/* {!started ? <Button title='Start Speech to Text' onPress={startSpeechToText} /> : undefined}
      {started ? <Button title='Stop Speech to Text' onPress={stopSpeechToText} /> : undefined}
      {results.map((result, index) => <Text key={index}>{result}</Text>)} */}
          <form className="new-translation" onSubmit={handleSubmit}>
            <label>
              Text:
              <input type="text" name="q" onChange={handleChange} value={formData.q}/>
            </label>
            <br/>
            <label>
              Target Language:
              <select name="target" onChange={handleChange} value={formData.target}>
                <option></option>
                {languagesFromEnglish.map((languageCode, index) => <option key={index} value={languageCode}>{languageCode}</option>)}
              </select>
            </label>
            <br/>
            <button type="submit">Translate</button>
          </form>
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
