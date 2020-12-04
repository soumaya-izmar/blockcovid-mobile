import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Card, ListItem, Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../styles/styles";

const SafeState = () => {
  const infectedImage = require("../../../assets/infected.png");
  const deviceWidth = Dimensions.get("window").width;
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <>
      <Card elevate={4}
        containerStyle={{
          ...styles.containerStyle,
          backgroundColor: "#5cb85c",
        }}
      >
        <Card.Title style={styles.titleStyle}>LOW RISK</Card.Title>
        <Card.Divider style={{ backgroundColor: "white" }} />
        <ListItem containerStyle={{ ...styles.listItemStyle, backgroundColor: "#5cb85c" }}>
          <Avatar icon={{ name: "heart", type: "font-awesome" }} />
          <ListItem.Title style={styles.listItemTitleStyle}>
            Aucune exposition
          </ListItem.Title>
        </ListItem>
        <Card.Divider style={styles.dividerStyle} />
        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#5cb85c",
          }}
        >
          <Avatar icon={{ name: "home", type: "font-awesome" }} />
          <ListItem.Title
            style={styles.listItemTitleStyle}
          >
            Autres informations
          </ListItem.Title>
        </ListItem>
        <Card.Divider style={styles.dividerStyle} />
        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#5cb85c",
          }}
        >
          <Avatar icon={{ name: "calendar-check-o", type: "font-awesome" }} />
          <ListItem.Title style={styles.listItemTitleStyle}>
            mise à jour : 22/12 à 12h13
          </ListItem.Title>
        </ListItem>
      </Card>
    </>
  );
};

export default SafeState;
