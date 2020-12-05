import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as utilsStorage from "../storage/asyncStorageUtils.js";
import * as utilsServices from "../services/utils.js";

const AuthContext = React.createContext(null);

const ProviderWrapper = (props) => {
  const [state, setState] = React.useState({
    isLoading: true,
    userToken: null,
    clientId: null,
  });

  const signIn = (token, id) => {
    console.log("signIn");

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
    console.log("state", state);
    setState(newState);
  };
  const getAllInfo = () => {
    console.log("get info");
    return utilsServices
      .getAll()
      .then((response) => {
        console.log(response);
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
  };

  const authContextData = {
    signIn: signIn,
    state: state,
    dispatch: restoreToken,
    getAllInfo: getAllInfo,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { ProviderWrapper, AuthContext };

export default AuthContext;
