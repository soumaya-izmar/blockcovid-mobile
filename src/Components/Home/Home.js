import React, { useContext } from "react";
import { Text, View, Dimensions } from "react-native";
import Clipboard from '@react-native-community/clipboard';

import styles from "../../styles/styles.js";
import ButtonApp from "..//Button/ButtonApp.js";
import CovidState from "../StateView/CovidState.js";
import ContactState from "../StateView/ContactState.js";
import SafeState from "../StateView/SafeState.js";
import Carousel from "../Carousel/CarouselInfo.js";

import AuthContext from "../../contexts/MainContext";

const Home = ({ navigation, route }) => {
  const { state } = React.useContext(AuthContext);
  console.log(state.userToken);

  let currentEtat = "sain";
  const scanHandler = () => {
    navigation.navigate("QRcode");
  };

  return (
    <>
      <View style={{ flex: 0.1 }}></View>

      <View style={styles.infoStyle}>
        <Carousel />
      </View>

      {currentEtat === "contamine" ? (
        <CovidState />
      ) : currentEtat === "sain" ? (
        <SafeState />
      ) : (
        <ContactState />
      )}

      <View style={{ flex: 0.3 }}></View>
      <View
        style={{
          flex: 0.9,
          alignItems: "center",
        }}
      >
        <ButtonApp
          text="Scanner un QR code"
          handler={scanHandler}
          disable={false}
        />
      </View>
      <Text style={styles.idStyle}>Id: {state.clientId}</Text>
    </>
  );
};

export default Home;
