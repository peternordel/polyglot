import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from "@expo/vector-icons";

import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Translate from "./components/Translate";
import Game from "./components/Game";
import Profile from "./components/Profile"

import * as Speech from 'expo-speech';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName = "question-circle";
            if (route.name === "Translate") {
              iconName = "people-arrows";
            }
            else if (route.name === "Check") {
              iconName = "play";
            }
            else if (route.name === "Profile") {
              iconName = 'user'
            }
            return <FontAwesome5 name={iconName} size={24} color="black" />;
          },
        })}
      >
        <Tab.Screen name="Translate" component={Translate} />
        <Tab.Screen name="Check" component={Game} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
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
