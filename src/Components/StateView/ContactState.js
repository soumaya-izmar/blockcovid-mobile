import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { Card, ListItem, Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../../styles/styles";

const ContactState = ({date}) => {
  const infectedImage = require("../../../assets/infected.png");
  const deviceWidth = Dimensions.get("window").width;

  return (
    <>
      <Card
        containerStyle={{
          ...styles.containerStyle,
          backgroundColor: "#f0ad4e",
        }}
      >
        <Card.Title style={styles.titleStyle}>MEDIUM RISK</Card.Title>
       
        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#f0ad4e",
          }}
        >
          <Avatar icon={{ name: "heart", type: "font-awesome" }} />
          <ListItem.Title style={styles.listItemTitleStyle}>
            Une ou plusieurs expositions au virus
          </ListItem.Title>
        </ListItem>
        <Card.Divider style={styles.dividerStyle} />
        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#f0ad4e",
          }}
        >
          <Avatar icon={{ name: "home", type: "font-awesome" }} />
          <ListItem.Title style={styles.listItemTitleStyle}>
            Autres informations
          </ListItem.Title>
        </ListItem>
        <Card.Divider style={styles.dividerStyle} />
        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#f0ad4e",
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

export default ContactState;
