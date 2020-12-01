import React,{useContext} from "react";
import { Text, View } from "react-native";



import styles from "../../styles/styles";
import ButtonApp from "..//Button/ButtonApp";

const Home = ({ navigation ,route}) => {
  
  //const { client } = useContext(MainContext);
  
  console.log("navigation ",route.params.client.id);
  const client  = route.params.client.id;
  console.log(client)
  return (
    <View style={styles.Maincontainer}>
         <Text>{client}</Text>  
      <Text>HOME</Text> 
   
    </View>
  );
};

export default Home;
