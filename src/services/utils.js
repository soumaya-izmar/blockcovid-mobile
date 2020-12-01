import axios from "axios";
const baseUrl = "https://stopcovid-pfe.azurewebsites.net";

const getAll = () => {
  return axios.get(baseUrl + "/api/test/").then((response) => {
    return response.data;
  });
};


export { getAll };
