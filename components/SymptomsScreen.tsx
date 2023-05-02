import React, { Component } from "react";
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
import ScrollableCalendar from "./ScrollableCalendar";
import SymptomDisplay from "./SymptomDisplay";

// Define the config
const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};


// in a fuller implementation, this would be sourced from a backend...
var data: string[][] = [
  ["cough, sneeze"],
  ["cough"],
  ['headache'],
  [],
  [],
  [],
  ["blurry vision"],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  ["cough, sneeze"],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]



//i'll deal with this later, surely...
export default function PageOne( {navigation}: any, colorManager: StorageManager) {
  const [selected, setSelected] = React.useState();
  const [day, setDay] = React.useState(1);

  let dates: Array<String> = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

    return (
<NativeBaseProvider>
  <VStack
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "blueGray.50" }}
    px={4}
    p = {5}
    flex={1}
    height = "100%">
  
  <HStack     _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "blueGray.50" }} alignItems = 'center' marginRight = {4} justifyContent='right' p = {5} m = {2} space-between = {4}>

  <Text _light = { {color: "blueGray.900"} } _dark = { {color: "white"} } fontSize="2xl">Veerasamy, J</Text>

    <Avatar p = {1} bg="primary.200" alignSelf="right" size="md" source={{
      uri: "https://i0.wp.com/cs.utdallas.edu/wp-content/uploads/2022/05/Jey-Veerasamy-May-13-2022-3-scaled.jpg?fit=750%2C750&ssl=1"
    }}/>
  </HStack>

  <VStack   _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "blueGray.50" }} alignItems = 'center' marginRight = {4} justifyContent='left' p = {5} m = {2} space-between = {4}>

  <Text alignSelf = 'center' fontSize="4xl">Symptoms</Text>
  
    <ScrollableCalendar projectData = {data} setDate = {setDay} />


  </VStack>

<Center
  _dark={{ bg: "blueGray.900" }}
  _light={{ bg: "blueGray.50" }}
  px={4}
  flex={1}
  height = {1}
>
 

<SymptomDisplay projectData = {data} selectedDay = {day}/>
  
</Center>

</VStack>
     
<Box width= "100%" bg="white" alignSelf="flex-end">

        <HStack safeAreaLeft = {10} _dark={{ bg: "red.200"}} _light ={{ bg: "indigo.600"  }} alignItems="center" safeAreaBottom shadow={6}>
          <ToggleDarkMode/>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => navigation.navigate('Home')}>
            <Center>
              <Icon _light = { {color: "white"} } _dark = { {color: "indigo.900"} } mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
              <Text _light = { {color: "white"} } _dark = { {color: "indigo.800"} } fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon _light = { {color: "white"} } _dark = { {color: "indigo.800"} } mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
              <Text _light = { {color: "white"} } _dark = { {color: "indigo.800"} } fontSize="12">
                Symptoms
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Icon _light = { {color: "white"} } _dark = { {color: "indigo.800"} } mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} color="white" size="sm" />
              <Text _light = { {color: "white"} } _dark = { {color: "indigo.800"} } fontSize="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => navigation.navigate('Profile')}>
            <Center >
              <Icon _light = { {color: "white"} } _dark = { {color: "indigo.800"} } mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
              <Text _light = { {color: "white"} } _dark = { {color: "indigo.800"} } fontSize="12">
                Profile
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>  

</NativeBaseProvider>


    )
}
// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text _light = { {color: "white"} } _dark = { {color: "indigo.900"} }>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text _light = { {color: "white"} } _dark = { {color: "indigo.900"} } >Light</Text>
    </HStack>
  );
}
