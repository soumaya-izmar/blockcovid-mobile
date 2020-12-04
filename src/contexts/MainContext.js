import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as utilsStorage from "../storage/asyncStorageUtils.js";
import * as utilsServices from "../services/utils.js";

const AuthContext = React.createContext(null);

const ProviderWrapper = (props) => {
 
  const [state, setState] = React.useState({isLoading:true, userToken: null});

  const signIn =  (data) => {
    console.log("signIn")
    console.log(data)
    const newState ={
      ...state,
      userToken: data,
      isLoading: false,
    }
    setState(newState);
  };
  
  const restoreToken = (userToken) => {
    const newState ={
      ...state,
      userToken: userToken,
      isLoading: false,
    }
    setState(newState);
  };
  const getAllInfo = () => {
    /*  return utilsServices
      .getAll()
      .then((response) => {
        clientId = response[0].id;
        
     
      })
      .catch((error) => {
        console.error(error);
      });*/
     
      AsyncStorage.setItem("id","2356glpas36djfdb256356h2dfg").then(result=>{
      signIn("2356glpas36djfdb256356h2dfg");

     })

    return true;
  };




  const authContextData ={
    signIn :signIn,
    state : state,
    dispatch : restoreToken,
    getAllInfo : getAllInfo
  } 

  return (
    <AuthContext.Provider value={authContextData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { ProviderWrapper, AuthContext};

export default AuthContext;
