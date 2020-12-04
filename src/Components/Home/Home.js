import React, { useContext } from "react";
import { Text, View, Dimensions } from "react-native";

import * as utilsStorage from "../../storage/asyncStorageUtils.js";

import styles from "../../styles/styles.js";
import ButtonApp from "..//Button/ButtonApp.js";
import CovidState from "../StateView/CovidState.js";
import ContactState from "../StateView/ContactState.js";
import SafeState from "../StateView/SafeState.js";
import InfoApp from "../InfoApp/Info.js";

import AuthContext from "../../contexts/MainContext";

const Home = ({ navigation, route }) => {
  const { state } = React.useContext(AuthContext);
  console.log(state.userToken);
  const deviceWidth = Dimensions.get("window").width;
  let currentEtat = "saint";
  const scanHandler = () => {
    navigation.navigate("QRcode");
  };

  return (
    <>
      <View
        style={{ flex: 0.5, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={styles.textStyle}>BlockCovid</Text>
      </View>
      <View style={{ flex: 1.5 }}>
        {currentEtat === "contamine" ? (
          <CovidState />
        ) : currentEtat === "saint" ? (
          <SafeState />
        ) : (
          <ContactState />
        )}
      </View>
      <View style={{ flex: 0.2 }}></View>
      <View style={styles.infoStyle}></View>
      <View style={{ flex: 0.2 }}></View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <ButtonApp text="Scanner un QR code" handler={scanHandler} />
      </View>
      <Text style={styles.idStyle}>Id: {state.userToken}</Text>
    </>
  );
};

export default Home;
