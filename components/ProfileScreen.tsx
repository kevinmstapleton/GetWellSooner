import React, { Component } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Button,
} from "native-base";
import NativeBaseIcon from "./NativeBaseIcon";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ProfileScreen( {navigation} : any) {

  const color = useColorMode()

    return (
<NativeBaseProvider>
<Center
  _dark={{ bg: "blueGray.900" }}
  _light={{ bg: "blue.250" }}
  px={4}
  flex={1}
>
  <VStack space={5} alignItems="center">
    <Heading size="lg">Welcome to Your Profile!</Heading>
    <HStack space={2} alignItems="center">
      <Text>Edit</Text>
      <Box
        _web={{
          _text: {
            fontFamily: "monospace",
            fontSize: "sm",
          },
        }}
        px={2}
        py={1}
        _dark={{ bg: "blueGray.800" }}
        _light={{ bg: "blueGray.200" }}
      >
        Profile.js
      </Box>
      <Text>and save to reload.</Text>
    </HStack>

  </VStack>
</Center>
</NativeBaseProvider>
    )
}