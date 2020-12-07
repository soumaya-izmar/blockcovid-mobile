import axios from "axios";
import { BASEURL } from "@env";

const getClient = (deviceToken) => {
  return axios
    .post(`${BASEURL}` + "/auth/register/citoyen", {
      params: { deviceToken: deviceToken },
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
    .get(
      `${BASEURL}` + "/citoyen",
      {
        headers: { Authorization: `Bearer ${token}` },
      },
      { params: { uuid: clientId, qrcode: qrcodeId } }
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export { getClient, retrieveState, sendQrcode };
