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

// Define the config
const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};



//i'll deal with this later, surely...
export default function PageOne( {navigation}: any, colorManager: StorageManager) {
  const [selected, setSelected] = React.useState(0);
  
    return (
<NativeBaseProvider>
  <VStack
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "blueGray.50" }}

    flex={1}
    height = "100%">
  
  <HStack     _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "blueGray.50" }} alignItems = 'center' marginRight = {4} justifyContent='right' p = {5} m = {2} space-between = {4}>

  <Text fontSize="4xl">Veerasamy, J</Text>

    <Avatar p = {1} bg="primary.200" alignSelf="right" size="xl" source={{
      uri: "https://i0.wp.com/cs.utdallas.edu/wp-content/uploads/2022/05/Jey-Veerasamy-May-13-2022-3-scaled.jpg?fit=750%2C750&ssl=1"
    }}/>

  </HStack>

  <VStack
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "blueGray.50" }}
    flex={1}
    height = {1}
    safeAreaTop = {10}
    space = {6}
    justifyContent= ' center '
    alignItems = 'center'
  >
 

  <Card     
    _dark={{ bg: "red.100"  }} _light={{ bg: "blueGray.200" }} width = "70%" height={20} alignContent = 'center' alignItems = 'center'>
      <Text  _dark={{
      color: "coolgray.800"
    }} fontSize = {[10, 20]}>
        Schedule an appointment with your doctor!
      </Text>
  </Card>


  <Box alignItems="center">
    <Stack w="100%" alignItems="center" alignSelf = "center">
      <Input w={{
      base: "100%",
    }} InputLeftElement={<SearchIcon/>} size={5} ml="2" color="muted.400" placeholder="Search all things medical" />
    </Stack>
    </Box>

    <View minHeight="50%" alignItems="center">
      
      <Heading>
        Upcoming Appointments
      </Heading>

      <ScrollView w="100%" h="80" horizontal = {true}>
      <Center mt="3" mb="4">
        <Heading fontSize="xl">Dr J.</Heading>
        <Card     
    _dark={{ bg: "red.100"  }} _light={{ bg: "primary.400" }} width = "90%" height={20} alignContent = 'center' alignItems = 'center'>
      <Text  _dark={{
      color: "coolgray.800"
    }}>
        Meeting to discuss JavaScript
      </Text>
  </Card>
      </Center>
      <VStack flex="1">
      </VStack>
      <Center mt="8" mb="4">
        <Heading fontSize="xl">Dr. S</Heading>
        <Card minWidth = {["300", "200"]}     
    _dark={{ bg: "red.100"  }} _light={{ bg: "primary.300" }} width = "90%" height={20} alignContent = 'center' alignItems = 'center'>
      <Text  _dark={{
      color: "coolgray.800"
    }}>
        Therapy Session for JavaScript Trust Issues
      </Text>
  </Card>
      </Center>
      <VStack flex="1">
      </VStack>
      <Center mt="12" mb="4">
        <Heading fontSize="xl"> Dr. Ock</Heading>
        <Card     
    _dark={{ bg: "red.100"  }} _light={{ bg: "primary.200" }} width = "90%" height={20} alignContent = 'center' alignItems = 'center'>
      <Text  _dark={{
      color: "coolgray.800"
    }}>
        Might want to stay away from this one...
      </Text>
  </Card>
      </Center>
      <VStack flex="1">
      </VStack>
    </ScrollView>
    </View>
<Box width= "100%" bg="white">

<HStack safeAreaLeft = {10} _dark={{ bg: "red.200"}} _light ={{ bg: "indigo.600"  }} alignItems="center" safeAreaBottom = {1} shadow={6}>
  <ToggleDarkMode/>
  <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
    <Center>
      <Icon _light = { {color: "white"} } _dark = { {color: "indigo.900"} } mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
      <Text _light = { {color: "white"} } _dark = { {color: "indigo.800"} } fontSize="12">
        Home
      </Text>
    </Center>
  </Pressable>
  <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => navigation.navigate('Symptoms')}>
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
  
</VStack>
</VStack>
     


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