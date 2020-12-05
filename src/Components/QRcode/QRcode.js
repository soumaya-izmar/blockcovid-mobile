import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import Toast from "react-native-toast-message";

import styles from "../../styles/styles.js";

const QRcode = ({ navigation }) => {

  const readQrCodeSuccess = (e) => {
    console.log("QrCOde", e.data);
    ToastAndroid.show("QR code enregistré", ToastAndroid.CENTER);
   

    navigation.goBack();
  };

  return (
    <QRCodeScanner
      onRead={readQrCodeSuccess}
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
