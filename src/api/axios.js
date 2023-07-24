import axios from "axios";

const defaultInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // withCredentials: true,
  });
  return instance;
};

const authInstance = () => {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      //Refresh: refresh
    },
  });
  return instance;
};

export { defaultInstance, authInstance };
