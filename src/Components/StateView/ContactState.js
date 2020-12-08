import React from "react";
import { Card, ListItem,Avatar } from "react-native-elements";

import styles from "../../styles/styles";

const ContactState = ({ date, nbLieux }) => {
  return (
    <>
      <Card
        containerStyle={{
          ...styles.containerStyle,
          backgroundColor: "#F29C19",
        }}
      >
        <Card.Title style={styles.titleStyle}>Risque moyen</Card.Title>

        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#F29C19",
          }}
        >
          <Avatar icon={{ name: "heart", type: "font-awesome" }} />
          <ListItem.Title style={styles.listItemTitleStyle}>
            Une ou plusieurs exposition(s) au virus
          </ListItem.Title>
        </ListItem>
        <Card.Divider style={styles.dividerStyle} />
        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#F29C19",
          }}
        >
          <Avatar icon={{ name: "place", type: "MaterialIcons" }}/>
          <ListItem.Title style={styles.listItemTitleStyle}>
            Nombre de lieux visités : {nbLieux}
          </ListItem.Title>
        </ListItem>
        <Card.Divider style={styles.dividerStyle} />
        <ListItem
          containerStyle={{
            ...styles.listItemStyle,
            backgroundColor: "#F29C19",
          }}
        >
          <Avatar icon={{ name: "calendar-check-o", type: "font-awesome" }} />
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

export default ContactState;
