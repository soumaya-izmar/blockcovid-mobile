import axios from "axios";
const baseUrl = "https://blockcovid-pfe.azurewebsites.net/api";

const getAll = () => {
  return axios.post(baseUrl + "/auth/register/citoyen").then((response) => {
    return response.data;
  });
};


export { getAll };
