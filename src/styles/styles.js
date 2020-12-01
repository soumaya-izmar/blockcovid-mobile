import React from "react";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";
import { StyleSheet } from "react-native";



const styles= StyleSheet.create({
   Maincontainer :{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
   },
    addPadding: {
      padding: 8,
    },
    textStyle: {
      color: "black",
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: 60,
    },
    ButtonStyle: {
        alignItems: "center",
        textAlign:"center",
        backgroundColor: "black",
        padding: 20,  
        borderRadius: 30 ,
     
    },

    textStyleButton:{
        color:"white",
        fontFamily:"Arial",
        fontWeight: "bold"
    }    
  });

  export default styles;