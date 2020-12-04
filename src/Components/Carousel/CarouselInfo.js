import React, { useContext } from "react";
import { Text, View, Dimensions, SafeAreaView } from "react-native";

import Carousel from "react-native-snap-carousel";

const CarouselInfo = () => {
  const deviceWidth = Dimensions.get("window").width;

  const state = {
    activeIndex: 0,
    carouselItems: [
      {
        title: "Lavez-vous les mains regulièrement avec du savon.",
        color: "#94ADFF",
      },
      {
        title:
          "Limitez les contacts rapprochés(1,5m) avec d’autres personnes.",
        color: "#C78AFF",
      },
      {
        title: "Portez un masque dans les endroits publique.",
        color: "#FFC180",
      },
      {
        title: "Si vous avez des symptomes de type grippal.Restez chez vous !",
        color: "#FFFE8F",
      },
    ],
  };

  const _renderItem = ({ item, index }) => {
    let currentColor = item.color;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: currentColor,
          borderRadius: 15,
          padding: 32,
          paddingTop :20,
          marginLeft: +20,
          marginRight: +20,
          shadowColor: "#000000",
          shadowOpacity: 0.70,
          shadowRadius: 15.0,
          shadowOffset: {
            height: 3,
            width: 1,
          },
          elevation: 10,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: "black",
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
          autoplayDelay={3000}
          autoplay={true}
          loop={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default CarouselInfo;
