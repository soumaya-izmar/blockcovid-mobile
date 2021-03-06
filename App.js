import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { ProviderWrapper as ProviderWrapper } from "./src/contexts/MainContext";

import Stack from "./src/Components/Stack/Stack.js";

export default function AppMain() {


  return (
    <>
      <ProviderWrapper>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </ProviderWrapper>
    </>
  );
}
