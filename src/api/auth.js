
import { authInstance, defaultInstance } from "./axios";

import axios from "axios";

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
// export const registerUser = async (userData) => {
//   try {
//     const response = await defaultInstance().post(
//       `${REACT_API_URL}/signup`,
//       userData,
//     );
//     return response.data;
//   } catch (error) {
//     console.error("회원가입 실패:", error);
//     throw new Error("회원가입에 실패하였습니다.");
//   }
// };

// // 로그인 요청을 보내는 함수
// export const loginUser = async (userData) => {
//   try {
//     const response = await defaultInstance().post(
//       `${REACT_API_URL}/login`,
//       userData,
//     );
//     return response.data;
//   } catch (error) {
//     console.error("로그인 실패:", error);
//     throw new Error("로그인에 실패하였습니다.");
//   }
// };
