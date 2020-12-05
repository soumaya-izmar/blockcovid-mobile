import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles/styles.js";

const ButtonApp = ({ text, handler, disable }) => {
  return (
    <TouchableOpacity
      disabled={disable}
      style={styles.ButtonStyle}
      onPress={handler}
    >
      <Text style={styles.textStyleButton}>{text}</Text>
    </TouchableOpacity>
  );
};
export default ButtonApp;
