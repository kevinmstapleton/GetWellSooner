import React, { useState, Component } from "react";
import {
  Text,
  Link,
  HStack,
  Stack,
  Center,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Input,
  Icon,
  Avatar,
  SearchIcon,
  Pressable,
  Card,
  Container,
  Heading,
  Flex,
  Circle,
  View,
  ScrollView,
  useTheme
} from "native-base";

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


import NativeBaseIcon from "./NativeBaseIcon";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Define the config
const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};


let data: string[][]

//i'll deal with this later, surely...
export default function SymptomDisplay(props): JSX.Element {
  var day: number = props.selectedDay
  var data: string[][] = props.projectData

  var symptoms: JSX.Element[] = []

  data[day].forEach(symptom => {
    console.log(symptom)
    symptoms.push(

      <Pressable alignItems = 'center' rounded = {80} _dark={{ bg: "red.300"  }} _light={{ bg: "secondary.200" }} size="80px" bg="secondary.400">
      <Icon as={<MaterialIcons name="info" />} color="white" size={5} />
      {symptom}
      </Pressable>
    
    )
  });

    return (
      <View>
        <Text>Selected Day: {day}</Text>
      <ScrollView flex={1} w="90%" h="80%" px = {10} mt="3" mb="8" justify-content='space-between' horizontal={true} mx = {4}>

      {symptoms}
  </ScrollView>
  </View>
    )
  }
