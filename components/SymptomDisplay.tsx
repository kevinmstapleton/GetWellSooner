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
export default function SymptomDisplay(projectData: string[][], selectedDay: number) {
  data = projectData
  let day = localStorage.getItem("day")
  console.log(localStorage.getItem("day"))
   
    return (
    <ScrollView flex={1} w="90%" h="80%" px = {10} justify-content='space-between' mx = {4}>
        {day}
    </ScrollView>
    )
}