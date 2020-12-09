import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import messaging from "@react-native-firebase/messaging";

import { Alert ,ToastAndroid} from "react-native";

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
    nbLieuxVisite: 0,
  });

  const restoreState = (userToken, nbLieux) => {
    return utilsServices
      .retrieveState(userToken)
      .then((response) => {
        const newHomeState = {
          ...homeState,
          isHomeLoading: false,
          etat: response.etat,
          majDate: new Date(),
          nbLieuxVisite: nbLieux,
        };
        setHomeState(newHomeState);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        let errorMessage = error.response.data.error;
        Alert.alert(
          "Une erreur s'est produite",
          errorMessage,
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
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
            let errorMessage = error.response.data.error;
            Alert.alert(
              "Une erreur s'est produite",
              errorMessage +
                " : Token non-attribuer, veuillez réssayer plus-tard.",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false }
            );
          });
      })
      .catch((e) => console.log(e));
  };

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();

    if (fcmToken) {
      return fcmToken;
    } else {
      console.log("Failed", "No token received");
    }
  };

  const sendQrCode = (qrcode) => {
    utilsServices
      .sendQrcode(state.clientId, qrcode, state.userToken)
      .then((response) => {
        let date = new Date();
        let nbLieux = 0;
        if (response.nbLieuxVisitesDansLaJournee !== 0) {
          nbLieux = response.nbLieuxVisitesDansLaJournee;
          console.log("nbLieux", nbLieux);
          AsyncStorage.setItem("nbLieux", JSON.stringify(nbLieux));
        }
        setHomeState({
          ...homeState,
          isHomeLoading: false,
          etat: response.citoyen.etat,
          majDate: date,
          nbLieuxVisite: nbLieux,
        });
        ToastAndroid.show("QR code enregistré", ToastAndroid.CENTER);
      })
      .catch((error) => {
        console.log(error.message);
        let errorMessage = error.message;
        Alert.alert(
          "Une erreur s'est produite",
          errorMessage,
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      });
  };

  const authContextData = {
    signIn: signIn,
    state: state,
    homeState: homeState,
    dispatch: restoreToken,
    getClientInfo: getClientInfo,
    restoreState: restoreState,
    getFcmToken: getFcmToken,
    sendQrCode: sendQrCode,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { ProviderWrapper, AuthContext };

export default AuthContext;
