import { authInstance, defaultInstance } from "./axios";
import axios from "axios";

const REACT_API_URL = process.env.REACT_APP_API_URL;

const api = defaultInstance();
const authApi = authInstance();

// 회원가입 요청을 보내는 함수
export const signup = async ({
  email,
  emailSelect,
  password,
  pwCheck,
  nickname,
}) => {
  const combinedEmail = `${email}@${emailSelect}`;
  const response = await api.post("/api/auth/signup", {
    email: combinedEmail,
    password,
    pwCheck,
    nickname,
  });

  return response.data;
};

// 로그인 요청을 보내는 함수
export const login = async ({ email, password }) => {
  console.log(email, password);
  const response = await api.post("/api/auth/login", { email, password });
  const Access = response.headers.access.replace("Bearer ", "");
  const Refresh = response.headers.refresh.replace("Bearer ", "");

  console.log(response.headers);

  localStorage.setItem("Access", Access);
  localStorage.setItem("Refresh", Refresh);

  return response.headers;
};

//이메일 인증
export const mailCheck = async (email) => {
  console.log(email);
  const response = await api.post("/api/mailCheck", email);
  return response;
};
