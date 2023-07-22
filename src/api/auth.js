import { authInstance, defaultInstance } from "./axios";

const REACT_API_URL = process.env.REACT_APP_API_URL;

const api = defaultInstance(); // axios 인스턴스 생성
const authApi = authInstance(); // 인증된 axios 인스턴스 생성

// 회원가입 요청을 보내는 함수
export const signup = async (email, password) => {
  const response = await api.post("/signup", { email, password });
  return response.data;
};

// 로그인 요청을 보내는 함수
export const login = async (email, password) => {
  const response = await api.post("/login", { email, password });
  return response.data;
};

// 인증된 사용자로 로그인 요청을 보내는 함수
export const authLogin = async (email, password) => {
  const response = await authApi.post("/login", { email, password });
  return response.data;
};
