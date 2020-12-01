import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";


import Stack from "./src/Components/Stack/Stack";

export default function AppMain() {
  return (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </>
  );
}
