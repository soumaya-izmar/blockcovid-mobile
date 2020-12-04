import React from "react";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/dev";
import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
baseFontStyle = { fontFamily: "Roboto" };
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
    fontFamily: Roboto_400Regular,
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "flex-start",
    padding: 10,
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
    fontFamily: Roboto_400Regular,
    fontWeight: "bold",
    fontSize:20
  },
  idStyle: {
    color: "black",
    fontFamily: Roboto_400Regular,
    fontWeight: "bold",
    left: 0,
    padding: 5,
    fontSize: 15,
  },
  textContentStyle: {
    color: "black",
    fontFamily: Roboto_400Regular,
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

    alignSelf: "center",
    borderColor: "black",
  },

  containerStyle: {
    padding: 0,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.70,
    shadowRadius: 15.0,
    shadowOffset: {
      height: 3,
      width: 1,
    },
    elevation: 10,
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
    borderRadius: 15,
  },
  dividerStyle: {
    backgroundColor: "white",
    marginLeft: +20,
    marginRight: +20,
    padding: 0,
  },

  listItemTitleStyle: {
    color: "#ECE9E9",
    fontSize: 17,
  },
});

export default styles;
