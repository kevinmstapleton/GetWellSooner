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

export default function ProfileScreen( {navigation} : any) {

  const [selected, setSelected] = React.useState(1);
  
  return (
<NativeBaseProvider>
<VStack
  _dark={{ bg: "blueGray.900" }}
  _light={{ bg: "primary.50" }}
  px={8}
  p = {[8, 16]}
  flex={1}
  height = "100%">

<HStack     _dark={{ bg: "blueGray.900" }}
  _light={{ bg: "primary.50" }} alignItems = 'center' marginRight = {4} justifyContent='center' p = {[4, 8]} m = {[4, 8]} space-between = {4}>

<Text fontSize="4xl">Veerasamy, J</Text>

  <Avatar p = {1} _dark={{ bg: "red.100" }}
  _light={{ bg: "primary.50" }} alignSelf="right" size="xl" source={{
    uri: "https://i0.wp.com/cs.utdallas.edu/wp-content/uploads/2022/05/Jey-Veerasamy-May-13-2022-3-scaled.jpg?fit=750%2C750&ssl=1"
  }}/>

</HStack>

<Center
  _dark={{ bg: "blueGray.900" }}
  _light={{ bg: "primary.50" }}
px={4}
flex={1}
height = {1}
>


<VStack space="30%" alignItems="center" >

<Pressable    
  minW = {[200, 300]} p = {4} shadow = {1} _hover = { {bg: "red.200"} } _dark={{ bg: "red.100"  }} _light={{ bg: "primary.200" }}  height={20} alignContent = 'center' alignItems = 'center' rounded = {8}>
    <Text  _dark={{
    color: "coolgray.800"
  }} fontSize = {[10, 20]} >
      Account Settings
    </Text>
</Pressable>

<Pressable    
  minWidth = {[200, 300]} p = {4} shadow = {1} _hover = { {bg: "red.200"} } _dark={{ bg: "red.100"  }} _light={{ bg: "primary.300" }}  height={20} alignContent = 'center' alignItems = 'center' rounded = {8}>
    <Text  _dark={{
    color: "coolgray.800"
  }} fontSize = {[10, 20]} >
      Privacy Policy
    </Text>
</Pressable>

<Pressable    
  minWidth = {[200, 300]} p = {4} shadow = {1} _hover = { {bg: "red.200"} } _dark={{ bg: "red.100"  }} _light={{ bg: "primary.400" }} height={20} alignContent = 'center' alignItems = 'center' rounded = {8}>
    <Text  _dark={{
    color: "coolgray.800"
  }} fontSize = {[10, 20]} >
      Payment Settings
    </Text>
</Pressable>

</VStack>


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
              Search
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