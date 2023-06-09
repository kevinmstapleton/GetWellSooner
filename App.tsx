import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  ColorMode,
  NativeBaseProvider,
  extendTheme,
  StorageManager,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";

import HomeScreen from './components/HomeScreen'
import ProfileScreen from "./components/ProfileScreen";
import SymptomsScreen from "./components/SymptomsScreen";

// Define the config
const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name = "Home" component = {HomeScreen}/>
          <Stack.Screen name = "Profile" component = {ProfileScreen}/>
          <Stack.Screen name = "Symptoms" component = {SymptomsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

