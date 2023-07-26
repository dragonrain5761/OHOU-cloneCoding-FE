import { defaultInstance } from "./axios";

//전체 아이템 조회
export const getItems = async (size = 8, page) => {
  const api = defaultInstance();
  const params = { size: size, page: page };
  const res = await api.get("/api/items/home", { params });
  return res;
};

//상품 조회
export const getItem = async (itemId) => {
  const api = defaultInstance();
  const res = await api.get(`/api/items/${itemId}`);
  return res;
};

//상품 검색
export const getSearchItems = async (keyword, size = 16, page) => {
  const api = defaultInstance();
  const params = { keyword: keyword, size: size, page: page + 1 };
  const res = await api.get("/api/items/search", { params });
  return res;
};
