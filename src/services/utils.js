import axios from "axios";
import { BASEURL } from "@env";

const getClient = (deviceToken) => {
  console.log("is Token null? ", deviceToken);
  return axios
    .post(`${BASEURL}` + "/auth/register/citoyen", {
     deviceToken: deviceToken ,
    })
    .then((response) => {
      return response.data;
    });
};

const retrieveState = (token) => {
  return axios
    .get(`${BASEURL}` + "/citoyen", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    });
};

const sendQrcode = (clientId, qrcodeId, token) => {
  return axios
    .post(
      `${BASEURL}` + "/scan/" + qrcodeId,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
      { data: { uuid: clientId } }
    )
    .then((response) => {
      console.log("response", response.data);
      return response.data;
    });
};

export { getClient, retrieveState, sendQrcode };
