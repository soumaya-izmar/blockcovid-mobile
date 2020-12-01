import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FirstPage from "../FirstPage/FirstPage";
import Home from "../Home/Home";


const Stack = createStackNavigator();

const StackComp = () => {
  return (     
      <Stack.Navigator initialRouteName="FirstPage" >
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      
  );
};

export default StackComp;
