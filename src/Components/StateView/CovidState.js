import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { Card, ListItem, Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../../styles/styles";

const CovidState = () => {
  return (
    <>
      <Card
        containerStyle={{
          ...styles.containerStyle,
          backgroundColor: "#d9534f",
        }}
      >
        <Card.Title style={styles.titleStyle}>HIGH RISK</Card.Title>
        <Card.Divider style={{ backgroundColor: "white" }} />
        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#d9534f",
          }}
        >
          <Avatar icon={{ name: "heart", type: "font-awesome" }} />
          <ListItem.Title style={styles.listItemTitleStyle}>
            Exposiotion élevé au virus
          </ListItem.Title>
        </ListItem>
        <Card.Divider style={styles.dividerStyle} />
        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#d9534f",
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
            backgroundColor: "#d9534f",
          }}
        >
          <Avatar icon={{ name: "calendar-check-o", type: "font-awesome" }} />
          <ListItem.Title style={styles.listItemTitleStyle}>
            Mise à jour : 22/12 à 12h13
          </ListItem.Title>
        </ListItem>
      </Card>
    </>
  );
};

export default CovidState;
