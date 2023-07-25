import axios from "axios";

const defaultInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  });
  return instance;
};

const authInstance = () => {
  const Access = localStorage.getItem("Access");
  const Refresh = localStorage.getItem("Refresh");
  // console.log("token", token);
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Access: `Bearer ${Access}`,
      Refresh: `Bearer ${Refresh}`,
    },
  });
  console.log("instance", instance);
  return instance;
};

const addInstance = () => {
  const token = localStorage.getItem("token");
  console.log("token", token);
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      //Refresh: refresh
    },
  });
  console.log("instance", instance);
  return instance;
};

export { defaultInstance, authInstance, addInstance };
