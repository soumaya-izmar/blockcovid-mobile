import React from "react";
import { Text, Alert } from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";

import { CONTACTSTATE, COVIDSTATE } from "@env";

import AuthContext from "../../contexts/MainContext";

import styles from "../../styles/styles.js";

const QRcode = ({ navigation }) => {
  const { sendQrCode, homeState } = React.useContext(AuthContext);

  const readQrCodeSuccess = (e) => {
  
    if (homeState.etat === CONTACTSTATE || homeState.etat === COVIDSTATE) {
      //console.log("etat ==>" ,homeState.etat)
      Alert.alert(
        "Respectez les règles",
        "Veuillez respectez les règles sanitaires et rentrez chez vous.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      sendQrCode(e.data);
    }
    navigation.goBack();
  };

  return (
    <QRCodeScanner
      onRead={readQrCodeSuccess}
      reactivateTimeout={2000}
      flashMode={RNCamera.Constants.FlashMode.torch.auto}
      topContent={
        <Text style={styles.centerText}>
          Visez <Text style={styles.textBold}>le QR code</Text> pour
          l'enregistrer
        </Text>
      }
    />
  );
};

export default QRcode;
