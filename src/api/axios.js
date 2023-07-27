import axios from "axios";

const defaultInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
  return instance;
};

const authInstance = () => {
  const Access = localStorage.getItem("Access");
  const Refresh = localStorage.getItem("Refresh");
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Access: `Bearer ${Access}`,
      Refresh: `Bearer ${Refresh}`,
    },
  });

  instance.interceptors.response.use(
    (res) => {
      if (res.headers.accesstokenerror) {
        localStorage.setItem(
          "Access",
          res.headers.access.replace("Bearer ", ""),
        );
      }
      return res;
    },
    async (error) => {
      //refresh token만료
      console.log(error);
      localStorage.removeItem("Access");
      localStorage.removeItem("Refresh");
      console.log("refresh token 만료");
      window.location.href = "/login";

      return Promise.reject(error);
    },
  );
  return instance;
};

const addInstance = () => {
  const Access = localStorage.getItem("Access");
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Access: `Bearer ${Access}`,
      "Content-Type": "multipart/form-data",
    },
  });

  instance.interceptors.response.use(
    (res) => {
      if (res.headers.accesstokenerror) {
        localStorage.setItem(
          "Access",
          res.headers.access.replace("Bearer ", ""),
        );
      }
      return res;
    },
    async (error) => {
      //refresh token만료
      console.log(error);
      localStorage.removeItem("Access");
      localStorage.removeItem("Refresh");
      console.log("refresh token 만료");
      window.location.href = "/login";

      return Promise.reject(error);
    },
  );

  return instance;
};

const editInstance = () => {
  const Access = localStorage.getItem("Access");
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Access: `Bearer ${Access}`,
    },
  });

  instance.interceptors.response.use(
    (res) => {
      if (res.headers.accesstokenerror) {
        localStorage.setItem(
          "Access",
          res.headers.access.replace("Bearer ", ""),
        );
      }
      return res;
    },
    async (error) => {
      //refresh token만료
      console.log(error);
      localStorage.removeItem("Access");
      localStorage.removeItem("Refresh");
      console.log("refresh token 만료");
      window.location.href = "/login";

      return Promise.reject(error);
    },
  );

  return instance;
};

export { defaultInstance, authInstance, addInstance, editInstance };
