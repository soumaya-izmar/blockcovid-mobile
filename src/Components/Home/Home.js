import * as React from "react";

import { Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";
import SweetAlert from "react-native-sweet-alert";

import { SAFESTATE, CONTACTSTATE, COVIDSTATE } from "@env";

import AuthContext from "../../contexts/MainContext";

import styles from "../../styles/styles.js";
import ButtonApp from "..//Button/ButtonApp.js";
import CovidState from "../StateView/CovidState.js";
import ContactState from "../StateView/ContactState.js";
import SafeState from "../StateView/SafeState.js";
import Carousel from "../Carousel/CarouselInfo.js";
import Loader from "../Loader/Loader.js";

const Home = ({ navigation }) => {
  const { state, homeState, restoreState } = React.useContext(AuthContext);
  const [alert, setAlert] = React.useState({ visible: false, time: 0 });

  const toggleOverlay = () => {
    setAlert({
      visible: !alert.visible,
      time: alert.time + 1,
    });
  };

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let clientInfo;
      let nbLieux;
      try {
        let jsonValue = await AsyncStorage.getItem("clientInfo");
        nbLieux = await AsyncStorage.getItem("nbLieux");

        nbLieux = nbLieux != null ? nbLieux : 0;
        nbLieux = JSON.parse(nbLieux);
        clientInfo =
          jsonValue != null
            ? JSON.parse(jsonValue)
            : { ...jsonValue, userToken: null, clientId: null };
      } catch (error) {
        console.log(error);
      }
      restoreState(clientInfo.userToken, nbLieux);
    };

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      SweetAlert.showAlertWithOptions(
        {
          title: remoteMessage.notification.title,
          subTitle: remoteMessage.notification.body,
          style: "warning",
        },
        (callback) => {
          bootstrapAsync();
          console.log("callback");
        }
      );
    });

    bootstrapAsync();
  }, []);

  let currentEtat = homeState.etat;

  let majDate = homeState.majDate;

  const scanHandler = () => {
    navigation.navigate("QRcode");
  };

  if (homeState.nbLieuxVisite >= 5 && alert.time === 0) {
    SweetAlert.showAlertWithOptions(
      {
        title: "Information importante",
        subTitle:
          "vous avez visité plus de 5 lieux aujourd'hui. RENTREZ CHEZ-VOUS!!!!!",
        style: "warning",
      },
      (callback) => {
        console.log("callback");
      }
    );

    toggleOverlay();
  }

  return (
    <>
      <View style={{ flex: 0.1 }}></View>

      <View style={styles.infoStyle}>
        <Carousel />
      </View>

      {homeState.isHomeLoading ? (
        <Loader />
      ) : currentEtat === `${COVIDSTATE}` ? (
        <CovidState date={majDate} nbLieux={homeState.nbLieuxVisite} />
      ) : currentEtat === `${SAFESTATE}` ? (
        <SafeState date={majDate} nbLieux={homeState.nbLieuxVisite} />
      ) : (
        <ContactState date={majDate} nbLieux={homeState.nbLieuxVisite} />
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
