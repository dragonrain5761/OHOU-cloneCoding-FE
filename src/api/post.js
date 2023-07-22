import { authInstance, defaultInstance } from "./axios";

export const getPosts = async () => {
  const api = defaultInstance();
  const res = await api.get("/posts"); // api 연결 후 post로 변경
  return res;
};

export const getPost = async (postId) => {
  const api = defaultInstance();
  const res = await api.get(`/post/${postId}`);
  return res;
};

export const updatePost = async (postId) => {
  const api = authInstance();
  const res = await api.put(`/post/${postId}`);
  return res;
};

export const deletePost = async (postId) => {
  const api = authInstance();
  const res = await api.delete(`/post/${postId}`);
  return res;
};
