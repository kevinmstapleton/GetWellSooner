import React, { useContext, Component } from "react";
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
export default function ScrollableCalendar(props): JSX.Element {

  if (!props.projectData) return (<Text>Loading</Text>)

  data = props.projectData
  let dates: Array<String> = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

  var Cards:[any] = [React.Fragment];
  for (let i = 1; i < 31; i++) {

    if (selectData(i).length > 0) {
      Cards.push(
        <React.Fragment key={i} >
                <Center mt="3" mb="8" px = {1}>
            <Pressable rounded = {5} _hover={{
        bg: 'secondary.400',
      }}    
        _dark={{ bg: "red.300"  }} _light={{ bg: "secondary.200" }} width = {[50, 100]} height={20} alignContent = 'center' alignItems = 'center'
        onPress={() => setData(i, props.setDate)}>
            <Heading _dark={{
              color: "coolgray.800"
              }} 
              _light={{
                color: "primary.800"
                }}
                fontSize="xl">{i}</Heading>
            <Text  _dark={{
              color: "coolgray.800"
              }}
              _light={{
                color: "primary.800"
                }}>
                  {dates.at(i % 7)}
    
              </Text>
            </Pressable>
          </Center>
        </React.Fragment>
        )
    }
    else {
    Cards.push(
    <React.Fragment key={i} >
            <Center mt="3" mb="8" px = {1}>
        <Pressable rounded = {5} _hover={{
    bg: 'secondary.400',
  }}    
    _dark={{ bg: "red.100"  }} _light={{ bg: "primary.400" }} width = {[50, 100]} height={20} alignContent = 'center' alignItems = 'center'
    onPress={() => selectData(i)}>
        <Heading _dark={{
          color: "coolgray.800"
          }} 
          _light={{
            color: "primary.800"
            }}
            fontSize="xl">{i}</Heading>
        <Text  _dark={{
          color: "coolgray.800"
          }}
          _light={{
            color: "primary.800"
            }}>
              {dates.at(i % 7)}

          </Text>
        </Pressable>
      </Center>
    </React.Fragment>
    )
  }
}
    return (
    
    <ScrollView flex={1} w="90%" h="80%" px = {10} justify-content='space-between' horizontal = {true} mx = {4}>
        {Cards}
    </ScrollView>

    )
}

function selectData(index: number): string[] {
  console.log(data[index - 1])
  return data[index - 1]
}

function setData(index: number, setDay: any): string[] {
  console.log(data[index - 1])
  setDay(index - 1)
  return data[index - 1]
}