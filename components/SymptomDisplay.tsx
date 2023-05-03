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
  Button,
  Modal,
  Container,
  Heading,
  Flex,
  Circle,
  View,
  ScrollView,
  useTheme,
  Divider
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
  const [showModalCough, setShowModalCough] = useState(false);
  const [showModalSneeze, setShowModalSneeze] = useState(false);
  const [showModalHeadache, setShowModalHeadache] = useState(false);
  let states = {showModalCough, showModalSneeze, showModalHeadache}

  // I am aware this is hella spaghetti code, but for the demo it works
  const symptomsList = {
    Cough: 0,
    Sneeze: 1,
    Headache: 2
  }
  data[day].forEach(symptom => {
    console.log(symptom)
    symptoms.push(
      <Center mt="3" mb="8" px = {1}>
      <Text>{Math.floor(Math.random() * 12) + 1}:00</Text>
      <Pressable _hover={{ bg: 'secondary.400' }} onPress = {() => console.log(symptom)} alignItems = 'center' rounded = {80} _dark={{ bg: "red.300"  }} _light={{ bg: "secondary.200" }} size="100px" bg="secondary.400">
      <Icon as={<MaterialIcons name="info" />} color="white" size={5} />
      <Text>{symptom}</Text>
      </Pressable>
      <Modal isOpen={states[symptomsList.symptom]} 
      onClose={() => console.log('closed')}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header >{symptom}</Modal.Header>
          <Modal.Body>
          {info[symptom]}
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              ;
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              ;
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      </Center>
    )
  });


    return (
  <View>
          
    <ScrollView flex={1} padding = {10} w="100%" h="80%" px = {10} mt="3" mb="8" horizontal = {true} justify-content='space-between'   
    contentContainerStyle={{
    padding: 25,
    margin: 25,
    flex: 1,
    flexDirection: 'row',
  }} 
    mx = {4}>
      {symptoms}
    </ScrollView>
  </View>
    )
  }

  let info = {
    Cough: "A cough is a sudden expulsion of air through the large breathing passages which can help clear them of fluids, irritants, foreign particles and microbes.",
    Sneeze: "A sudden blast of air or mucus expelled from the mouth and nose.",
    Headache: "A painful sensation in any part of the head, ranging from sharp to dull, that may occur with other symptoms.",
  }
