import React from "react";
import { Text, View, Dimensions } from "react-native";
import styles from "../../styles/styles";
import LinearGradient from "react-native-linear-gradient";

const InfoApp = () => {
  return (
    <>
      <LinearGradient
        colors={["#54bb90", "#53bb57"]}
        style={styles.linearGradient}
      >
        <Text style={styles.infoTitleStyle}>
          Comment utiliser l'application BlockCovid
        </Text>
        <Text style={styles.subInfoStyle}>
          1. Lorsque vous entrez dans un lieu publique
        </Text>
        <Text style={styles.subInfoStyle}>
          2. Appuyez sur le bouton du bas pour scanner le QR code
        </Text>
        <Text style={styles.subInfoStyle}> 2. Visez bien le QR code</Text>
        <Text style={styles.subInfoStyle}> 3. Voila le tour est joué!</Text>
      </LinearGradient>
    </>
  );
};

export default InfoApp;
