import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";

export default function Profile({ userInfo, setUserInfo }) {
  return (
    <View style={styles.container}>
      <Text>User is logged in.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});