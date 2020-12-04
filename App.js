import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";

import { ProviderWrapper as ProviderWrapper } from "./src/contexts/MainContext";

import Stack from "./src/Components/Stack/Stack.js";

export default function AppMain() {
  toastRef = React.createRef();
  return (
    <>
       <Toast ref={(ref) => Toast.setRef(ref)} />
      <ProviderWrapper>
        <NavigationContainer>
          <Stack> </Stack>
        </NavigationContainer>
      </ProviderWrapper>
    </>
  );
}
