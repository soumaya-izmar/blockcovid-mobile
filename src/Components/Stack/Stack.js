import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import * as utilsStorage from "../../storage/asyncStorageUtils.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

import FirstPage from "../FirstPage/FirstPage.js";
import Home from "../Home/Home.js";
import QRcode from "../QRcode/QRcode.js";
import SplashScreen from "../SplashScreen/SplashScreen";
import Toast from "react-native-toast-message";
import AuthContext from "../../contexts/MainContext";

const Stack = createStackNavigator();

const StackComp = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let clientInfo;

      try {
        let jsonValue = await AsyncStorage.getItem("clientInfo");
        console.log("JSON", jsonValue);
        clientInfo = jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.log(e);
      }
      if (clientInfo === null) {
        dispatch(null, null);
      } else {
        dispatch(clientInfo.userToken, clientInfo.clientId);
      }
    };

    bootstrapAsync();
  }, []);

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Stack.Navigator>
        {state.clientId == null ? (
          <>
            <Stack.Screen
              name="FirstPage"
              component={FirstPage}
              options={{
                title: "FirstPage",
                headerStyle: {
                  backgroundColor: "white",
                },
                headerTintColor: "#fff",
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "BlockCovid",
                headerStyle: {
                  backgroundColor: "white",
                },
                headerTintColor: "black",
              }}
            />
            <Stack.Screen
              name="QRcode"
              component={QRcode}
              options={{
                title: "QRcode",
                headerStyle: {
                  backgroundColor: "white",
                },
                headerTintColor: "#fff",
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};

export default StackComp;
