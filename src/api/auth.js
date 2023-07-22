import axios from "axios";
import { defalutInstance } from "./axios";

const REACT_API_URL = process.env.REACT_APP_API_URL;

// 회원가입 요청을 보내는 함수
export const registerUser = async (userData) => {
  try {
    const response = await defalutInstance().post(
      `${REACT_API_URL}/signup`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error("회원가입 실패:", error);
    throw new Error("회원가입에 실패하였습니다.");
  }
};

// 로그인 요청을 보내는 함수
export const loginUser = async (userData) => {
  try {
    const response = await defalutInstance().post(
      `${REACT_API_URL}/login`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error("로그인 실패:", error);
    throw new Error("로그인에 실패하였습니다.");
  }
};
