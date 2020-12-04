import AsyncStorage from "@react-native-async-storage/async-storage";
let id = null;

const getClientId = async () => {
  try {
   return await AsyncStorage.getItem("id").then(value=>{
      console.log("calue =>",value);
      return value;
    });
    console.log("getClient=>",id);
    return id;
  } catch (error) {
    // Error saving data
  }
  
};

function  getId(){
  console.log("id",id);
  return id;
}

const setClientId = async (value) => {
  try {
    await AsyncStorage.setItem("id", value);
  } catch (error) {
    // Error saving data
  }
};

export { setClientId, getClientId,getId };
