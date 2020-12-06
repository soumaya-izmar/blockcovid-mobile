import React from "react";
import { Text, View, Dimensions, SafeAreaView } from "react-native";
import Carousel from "react-native-snap-carousel";

import styles from "../../styles/styles";

const CarouselInfo = () => {
  const deviceWidth = Dimensions.get("window").width;

  const state = {
    activeIndex: 0,
    carouselItems: [
      {
        title: "Lavez-vous les mains regulièrement avec du savon.",
        color: "#94ADFF",
        idx: 1,
      },
      {
        title: "Limitez les contacts rapprochés(1,5m) avec d’autres personnes.",
        color: "#C78AFF",
        idx: 2,
      },
      {
        title: "Portez un masque dans les endroits publique.",
        color: "#FFC180",
        idx: 3,
      },
      {
        title: "Si vous avez des symptomes de type grippal. Restez chez vous !",
        color: "#FFFE8F",
        idx: 4,
      },
    ],
  };

  const _renderItem = ({ item, index }) => {
    let currentColor = item.color;
    return (
      <View
        style={{ ...styles.CarouselContainer, backgroundColor: currentColor }}
      >
        <Text
          style={{
            fontSize: 35,
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: "black",
            alignSelf: "flex-start",
            paddingLeft: 10,
          }}
        >
          Conseil n°{item.idx}:
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: "black",
            alignSelf: "center",
            paddingLeft: 10,
            paddingTop: 15,
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 10 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Carousel
          layout={"default"}
          data={state.carouselItems}
          sliderWidth={deviceWidth}
          itemWidth={deviceWidth}
          renderItem={_renderItem}
          autoplayDelay={8000}
          autoplay={true}
          loop={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default CarouselInfo;
