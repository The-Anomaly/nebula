import axios from "axios";

export const postRequest = (url, data, config?) => {
  return axios.post(url, data, config);
};

export const getRequest = (url, config?) => {
  return axios.get(url, config);
};
