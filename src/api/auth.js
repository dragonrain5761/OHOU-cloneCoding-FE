import { authInstance, defaultInstance } from "./axios";
import axios from "axios";

const REACT_API_URL = process.env.REACT_APP_API_URL;

const api = defaultInstance();
const authApi = authInstance();

// 회원가입 요청을 보내는 함수
export const signup = async ({ email, password, pwCheck, nickname }) => {
  const response = await api.post("/signup", {
    email,
    password,
    pwCheck,
    nickname,
  });
  return response.data;
};

// 로그인 요청을 보내는 함수
export const login = async (email, password) => {
  const response = await authApi.post("/login", { email, password });
  const { accessToken, refreshToken } = response.data;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  console.log(localStorage.setItem("accessToken", accessToken));
  console.log(localStorage.setItem("refreshToken", refreshToken));
  return response.data;
};

//이메일 인증
export const mailCheck = async (email) => {
  const response = await api.post("/mailCheck", { email });
  return response;
};
