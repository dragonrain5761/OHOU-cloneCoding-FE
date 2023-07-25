import { authInstance, defaultInstance } from "./axios";

export const getPosts = async (size, page) => {
  const api = defaultInstance();
  const res = await api.get("/api/posts"); //size, page 추가
  return res;
};

export const getPost = async (postId) => {
  const api = defaultInstance();
  const res = await api.get(`/api/posts/${postId}`);
  return res;
};

export const updatePost = async (postId, updatedPost) => {
  const api = authInstance();
  const res = await api.put(`/api/posts/${postId}`, updatedPost);
  return res;
};

export const deletePost = async (postId) => {
  const api = authInstance();
  const res = await api.delete(`/api/posts/${postId}`);
  return res;
};

export const likePost = async (postId) => {
  const api = authInstance();
  const res = await api.post(`/api/posts/${postId}/like`);
  return res;
};
