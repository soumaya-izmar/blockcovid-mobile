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

const QRcode = ({ navigation }) => {

  const readQrCodeSuccess = (e) => {
    console.log("QrCOde", e.data);
    ToastAndroid.show("QR code enregistré", ToastAndroid.CENTER);
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 👋",
      visibilityTime: 4000,
      autoHide: true,
    
    });

    navigation.goBack();
  };

  return (
    <QRCodeScanner
      onRead={readQrCodeSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch.auto}
      topContent={
        <Text style={styles.centerText}>
          Visez le <Text style={styles.textBold}>le QR code</Text> pour
          l'enregistrer
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
      }
    />
  );
};
const styles = StyleSheet.create({
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
});

export default QRcode;
