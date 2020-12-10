import * as React from "react";
import { Text, View, Image } from "react-native";

import AuthContext from "../../contexts/MainContext";

import styles from "../../styles/styles.js";
import ButtonApp from "../Button/ButtonApp.js";

const FirstPage = ({ navigation }) => {
  const { getClientInfo } = React.useContext(AuthContext);

  function anonymeHandler(e) {
    e.preventDefault();
    //creation de l'id dans le backend + renvoie => context a ajouté

    getClientInfo();
  }

  return (
    <>
      <View style={styles.Maincontainer}>
      <View style={{ flex: 1}}></View>

        <View style={{ flex: 2.5}}>
          <Image
            style={{ height:250,width:258,justifyContent:"center" }}
            source={require("../../../assets/Logo-final-v2.png")}
          />
        </View>

        <View style={{ flex: 2.5}}>
          <View style={styles.addPadding}></View>
          <ButtonApp
            text={"Rester anonyme"}
            handler={anonymeHandler}
            disable={false}
          />
        </View>
      </View>
    </>
  );
};

export default FirstPage;
