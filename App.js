import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import { ProviderWrapper as ProviderWrapper } from "./src/contexts/MainContext";

import Stack from "./src/Components/Stack/Stack.js";

export default function AppMain() {
 
  return (
    <>
      
      <ProviderWrapper>
        <NavigationContainer>
          <Stack> </Stack>
        </NavigationContainer>
      </ProviderWrapper>
    </>
  );
}
