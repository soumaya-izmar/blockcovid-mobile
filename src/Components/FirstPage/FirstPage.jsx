import { Text, View } from "react-native";
import React, { useState } from "react";

import * as utilsServices from "../../services/utils";

import styles from "../../styles/styles";
import ButtonApp from "../Button/ButtonApp";

const FirstPage = ({ navigation }) => {
  console.log(navigation)
  const [client, setClient] = useState([]);
  let clients = [];
  const getAllInfo = () => {
    return utilsServices
      .getAll()
      .then((response) => {
    
        //setClient(response);
        clients = response;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function anonymeHandler() {
    //creation de l'id dans le backend + renvoie => context a ajouté
    await getAllInfo();
    console.log(typeof(clients));
    navigation.navigate("Home", { "client": clients[0] });
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
