import React from "react";
import { Card, ListItem, Avatar } from "react-native-elements";

import styles from "../../styles/styles";

const SafeState = ({ date, nbLieux }) => {
  return (
    <Card
      containerStyle={{
        ...styles.containerStyle,
        backgroundColor: "#2DA145",
      }}
    >
      <Card.Title style={styles.titleStyle}>Risque faible</Card.Title>

      <ListItem
        containerStyle={{ ...styles.listItemStyle, backgroundColor: "#2DA145" }}
      >
        <Avatar icon={{ name: "heart", type: "font-awesome" }} />
        <ListItem.Title style={styles.listItemTitleStyle}>
          Aucune exposition au virus
        </ListItem.Title>
      </ListItem>
      <Card.Divider style={styles.dividerStyle} />
      <ListItem
        containerStyle={{
          ...styles.listItemStyle,
          backgroundColor: "#2DA145",
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
          backgroundColor: "#2DA145",
          paddingBottom: 15,
        }}
      >
        <Avatar icon={{ name: "calendar-check-o", type: "font-awesome" }}/>
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
  );
};

export default SafeState;
