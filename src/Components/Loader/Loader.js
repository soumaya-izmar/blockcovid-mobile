import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { Card } from "react-native-elements";

import styles from "../../styles/styles";

const Loader = () => {
  return (
    <Card
      blurRadius={50}
      containerStyle={{
        ...styles.containerStyle,
        backgroundColor: "white",
      }}
    >
      <ActivityIndicator
        size="large"
        color="black"
        style={styles.loaderStyle}
      />
      <Text style={styles.textContentStyle}>Chargement de l'etat</Text>
    </Card>
  );
};

export default Loader;
