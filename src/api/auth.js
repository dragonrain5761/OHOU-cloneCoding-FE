import { defaultInstance } from "./axios";
const api = defaultInstance();

// 회원가입
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

// 로그인
export const login = async ({ email, password }) => {
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
