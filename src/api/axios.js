import axios from "axios";

const defaultInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // withCredentials: true,
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
      return res;
    },
    async (error) => {
      const originalRequest = error.config;
      const accessTokenError = error.response.headers["TokenError"];
      if (
        accessTokenError &&
        accessTokenError.includes("expired Access Token") &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        const newAccessToken = error.response.headers["Access"]; //변수명 확인 필요
        localStorage.setItem("Access", newAccessToken);
        originalRequest.headers["Access"] = `Bearer ${newAccessToken}`;
        //이전 요청 재시도
        console.log("새 access token 받음");
        return instance(originalRequest);
      }

      if (
        accessTokenError &&
        accessTokenError.includes("expired Refresh Token") &&
        !originalRequest._retry
      ) {
        localStorage.removeItem("Access");
        localStorage.removeItem("Refresh");
        console.log("refresh token 만료");
        window.location.href = "/login";
      }
      return Promise.reject(error); // 그 외 에러 반환
    },
  );
  return instance;
};

//토큰 확인 필요
const addInstance = () => {
  const Access = localStorage.getItem("Access");
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Access: `Bearer ${Access}`,
      "Content-Type": "multipart/form-data",
      //Refresh: refresh
    },
  });
  console.log("instance", instance);
  return instance;
};

export { defaultInstance, authInstance, addInstance };
