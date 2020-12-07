import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import messaging from "@react-native-firebase/messaging";
import firebase from "react-native-firebase";

import * as utilsStorage from "../storage/asyncStorageUtils.js";
import * as utilsServices from "../services/utils.js";

const AuthContext = React.createContext(null);

const ProviderWrapper = (props) => {
  const [state, setState] = React.useState({
    isLoading: true,
    userToken: null,
    clientId: null,
  });
  const [homeState, setHomeState] = React.useState({
    isHomeLoading: true,
    etat: "Sain",
    majDate: new Date(),
  });

  const restoreState = (userToken) => {
    return utilsServices
      .retrieveState(userToken)
      .then((response) => {
        const newHomeState = {
          ...homeState,
          isHomeLoading: false,
          etat: response.etat,
          majDate: new Date(),
        };
        setHomeState(newHomeState);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = (token, id) => {
    const newState = {
      ...state,
      userToken: token,
      isLoading: false,
      clientId: id,
    };
    setState(newState);
  };

  const restoreToken = (userToken, id) => {
    const newState = {
      ...state,
      userToken: userToken,
      isLoading: false,
      clientId: id,
    };

    setState(newState);
  };
  const getClientInfo = () => {
    let deviceToken = null;
    getFcmToken()
      .then((response) => {
        deviceToken = response;

        console.log("Your Firebase Token is:", deviceToken);
        return utilsServices
          .getClient(deviceToken)
          .then((response) => {
            const clientInfo = {
              clientId: response.uuid,
              userToken: response.token,
            };
            AsyncStorage.setItem("clientInfo", JSON.stringify(clientInfo))
              .then((result) => {
                signIn(clientInfo.userToken, clientInfo.clientId);
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((e) => console.log(e));
  };

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log(fcmToken);
    if (fcmToken) {
      return fcmToken;
    } else {
      console.log("Failed", "No token received");
    }
  };

  const authContextData = {
    signIn: signIn,
    state: state,
    homeState: homeState,
    dispatch: restoreToken,
    getClientInfo: getClientInfo,
    restoreState: restoreState,
    getFcmToken: getFcmToken,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { ProviderWrapper, AuthContext };

export default AuthContext;
