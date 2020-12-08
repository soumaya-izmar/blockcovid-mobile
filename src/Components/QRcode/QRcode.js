import React from "react";
import { Text, ToastAndroid } from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";

import AuthContext from "../../contexts/MainContext";

import styles from "../../styles/styles.js";

const QRcode = ({ navigation }) => {
  const { sendQrCode } = React.useContext(AuthContext);

  const readQrCodeSuccess = (e) => {
    console.log("QrCOde", e.data);

    sendQrCode(e.data);
    ToastAndroid.show("QR code enregistré", ToastAndroid.CENTER);

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
