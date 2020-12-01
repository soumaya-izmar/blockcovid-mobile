import React,{useState} from "react";
import * as utilsServices from "services/utils";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [client, setClient] = useState({});

  const getAllInfo = () => {
    utilsServices
      .getAll()
      .then((response) => {
        setClient(response[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const ExposedValues = {
    client,
    getAllInfo
  };

  return (
    <Context.Provider value={ExposedValues}> </Context.Provider>
  );
};

export { Context, ProviderWrapper };

export default Context;
