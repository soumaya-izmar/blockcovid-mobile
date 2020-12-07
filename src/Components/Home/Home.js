import React, { useContext } from "react";
import { Text, View, Dimensions } from "react-native";
import Clipboard from "@react-native-community/clipboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SAFESTATE, CONTACTSTATE, COVIDSTATE } from "@env";

import AuthContext from "../../contexts/MainContext";

import styles from "../../styles/styles.js";
import ButtonApp from "..//Button/ButtonApp.js";
import CovidState from "../StateView/CovidState.js";
import ContactState from "../StateView/ContactState.js";
import SafeState from "../StateView/SafeState.js";
import Carousel from "../Carousel/CarouselInfo.js";
import Loader from "../Loader/Loader.js";

const Home = ({ navigation, route }) => {
  const { state, homeState, restoreState } = React.useContext(AuthContext);

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let clientInfo;
      try {
        let jsonValue = await AsyncStorage.getItem("clientInfo");
     
        clientInfo =
          jsonValue != null
            ? JSON.parse(jsonValue)
            : { ...jsonValue, userToken: null, clientId: null };
      } catch (error) {
        console.log(error);
      }
      restoreState(clientInfo.userToken);
    };

    bootstrapAsync();
  }, []);

  let currentEtat = homeState.etat;
  let majDate = homeState.majDate;
  const scanHandler = () => {
    navigation.navigate("QRcode");
  };

  return (
    <>
      <View style={{ flex: 0.1 }}></View>

      <View style={styles.infoStyle}>
        <Carousel />
      </View>

      {homeState.isHomeLoading ? (
        <Loader />
      ) : currentEtat === `${COVIDSTATE}` ? (
        <CovidState date={majDate} />
      ) : currentEtat === `${SAFESTATE}` ? (
        <SafeState date={majDate} />
      ) : (
        <ContactState date={majDate} />
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
