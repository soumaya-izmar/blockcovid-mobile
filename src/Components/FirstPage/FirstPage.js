import { Text, View } from "react-native";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as utilsStorage from "../../storage/asyncStorageUtils.js";
import * as utilsServices from "../../services/utils.js";

import  AuthContext from "../../contexts/MainContext";

import styles from "../../styles/styles.js";
import ButtonApp from "../Button/ButtonApp.js";

const FirstPage = ({ navigation }) => {
 
  const { getAllInfo } = React.useContext(AuthContext);
   
  function anonymeHandler(e) {
    e.preventDefault();
    //creation de l'id dans le backend + renvoie => context a ajouté
    getAllInfo();
  }

  return (
    <>
      <View style={styles.Maincontainer}>
        <View style={{ flex: 1 }}></View>

        <View style={{ flex: 2 }}>
          <Text style={styles.textStyle}>BlockCovid</Text>
        </View>

        <View style={{ flex: 3 }}>
          <ButtonApp text={"Se connecter/S'inscrire"} />
          <View style={styles.addPadding}></View>
          <ButtonApp text={"Rester anonyme"} handler={anonymeHandler} />
        </View>
      </View>
    </>
  );
};

export default FirstPage;
