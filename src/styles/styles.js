import React from "react";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";
import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: "white",
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
    fontSize: 30,
    alignSelf:"flex-start",
    padding:10
  },
  ButtonStyle: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "black",
    padding: 20,
    borderRadius: 15,
  },

  textStyleButton: {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  idStyle: {
    color: "black",
    fontFamily: "Arial",
    fontWeight: "bold",
    left: 0,
    padding: 5,
    fontSize: 15,
  },
  textContentStyle: {
    color: "black",
    fontFamily: "Arial",
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    paddingLeft: 10,
    fontSize: 20,
    marginTop: +30,
  },

  imageStateStyle: { width: deviceWidth / 3, height: deviceWidth / 3 },

  infoStyle: {
    flex: 2.6,
    borderRadius: 35,
    marginLeft: +10,
    marginRight: +10,
    alignSelf: "center",
    borderColor: "black",
  },

  infoTitleStyle: {
    color: "black",
    fontFamily: "Arial",
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    padding: 20,
  },
  containerStyle: { padding: 0, borderRadius: 15 },
  subInfoStyle: {
    color: "black",
    fontFamily: "Arial",
    fontWeight: "bold",
    justifyContent: "center",
    padding: 10,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    shadowOffset: {
      height: 12,
      width: 1,
    },
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  titleStyle: {
    color: "#ECE9E9",
    textAlign: "left",
    fontSize: 20,
    padding: 7,
  },
  listItemStyle: {
    paddingBottom: 5,
    paddingTop: 0,
   
  },
  dividerStyle: {
    backgroundColor: "white",
    marginLeft: +20,
    marginRight: +20,
    padding: 0,
  },
  listItemTitleStyle: {
    color: "#ECE9E9",
  },
});

export default styles;
