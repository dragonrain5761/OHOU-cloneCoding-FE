import { defaultInstance } from "./axios";

//전체 아이템 조회
export const getItems = async (size, page) => {
  const api = defaultInstance();
  const res = await api.get("/items"); //size, page 추가
  return res;
};
