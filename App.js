import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from "@expo/vector-icons";

import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Translate from "./components/Translate";
import Game from "./components/Game";
import Profile from "./components/Profile"
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

const Tab = createBottomTabNavigator();
export default function App() {
    const [token, setToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
  
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
      androidClientId: "548276154804-hq8deg65ubhof40m15j51is7n505pm2e.apps.googleusercontent.com",
      iosClientId: "548276154804-9pg8tg7ea8jaa06lpdv5mnni34076aeg.apps.googleusercontent.com",
      clientId: "548276154804-rg7tjhq8c0595gnmomtdhmol2mjpdnj1.apps.googleusercontent.com",
    });
  
    useEffect(() => {
      handleEffect();
    }, [response, token]);
  
    async function handleEffect() {
      console.log('in handleeffect', token)
      const user = await getLocalUser();
      console.log("user", user);
      if (!user) {
        if (response?.type === "success") {
          console.log(response)
          setToken(response.params.id_token);
          token && getUserInfo(token);
        }
      } else {
        setUserInfo(user);
        console.log("loaded locally");
      }
    }
  
    const getLocalUser = async () => {
      const data = await AsyncStorage.getItem("@user");
      if (!data) return null;
      return JSON.parse(data);
    };
  
    const getUserInfo = async (token) => {
      if (!token) return;
      try {
        const response = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
  
        const user = await response.json();
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        setUserInfo(user);
      } catch (error) {
        console.log(error)
      }
    };
  
    return !userInfo ? (
          <View style={styles.container}>
            <Button
              title="Sign in with Google"
              disabled={!request}
              onPress={() => {
                promptAsync(); 
              }}
            />
          </View>
        ) : (
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
        <Button
          title="Sign Out/Clear Session"
          style = {{}}
          onPress={async () => {
            await AsyncStorage.removeItem("@user")
            setUserInfo(null)
          }}
        />
        </NavigationContainer>
        )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
