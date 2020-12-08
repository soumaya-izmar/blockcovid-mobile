import React from "react";
import { Card, ListItem, Avatar } from "react-native-elements";

import styles from "../../styles/styles";

const CovidState = ({ date, nbLieux }) => {
  return (
    <>
      <Card
        containerStyle={{
          ...styles.containerStyle,
          backgroundColor: "#d9534f",
        }}
      >
        <Card.Title style={styles.titleStyle}>Risque élevé</Card.Title>

        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#d9534f",
          }}
        >
          <Avatar icon={{ name: "heart", type: "font-awesome" }} />
          <ListItem.Title style={styles.listItemTitleStyle}>
            Vous etes contaminé par le Coronavirus.
          </ListItem.Title>
        </ListItem>
        <Card.Divider style={styles.dividerStyle} />
        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#d9534f",
          }}
        >
          import Icon from "react-native-vector-icons/MaterialIcons";
          <ListItem.Title style={styles.listItemTitleStyle}>
            Nombre de lieux visités : {nbLieux}
          </ListItem.Title>
        </ListItem>
        <Card.Divider style={styles.dividerStyle} />
        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#d9534f",
          }}
        >
          <Avatar icon={{ name: "place", type: "MaterialIcons" }} />
          <ListItem.Title style={styles.listItemTitleStyle}>
            Mise à jour :
            {" " +
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              " à " +
              date.getHours() +
              "h" +
              (date.getMinutes() < 10
                ? "0" + date.getMinutes()
                : date.getMinutes())}
          </ListItem.Title>
        </ListItem>
      </Card>
    </>
  );
};

export default CovidState;
