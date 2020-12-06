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
    fontSize: 20,
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
    flex: 2.1,
    padding: 0,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.7,
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
    padding: 15,
  },
  listItemStyle: {
    paddingBottom: 5,
    paddingTop: 0,
    borderRadius: 15,
  },
  dividerStyle: {
    marginLeft: +50,
    marginRight: +20,
    padding: 0,
  },

  listItemTitleStyle: {
    color: "#ECE9E9",
    fontSize: 17,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
  textBold: {
    fontWeight: "500",
    color: "#000",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  buttonTouchable: {
    padding: 16,
  },
  loaderStyle: {
    alignSelf: "center",
    paddingTop: 50,
  },

  CarouselContainer: {
    flex: 1,
   
    borderRadius: 15,

    paddingTop: 20,
    marginLeft: +18,
    marginRight: +18,
    shadowColor: "#000000",
    shadowOpacity: 0.7,
    shadowRadius: 15.0,
    shadowOffset: {
      height: 3,
      width: 1,
    },
    elevation: 10,
  },
});

export default styles;
