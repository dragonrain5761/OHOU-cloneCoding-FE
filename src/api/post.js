import { authInstance, defaultInstance, addInstance } from "./axios";

export const getPosts = async (size, page) => {
  const api = defaultInstance();
  const params = { size, page };
  const res = await api.get("/api/posts", { params }); //파라미터로 전달 확인
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

export const addPost = async (FormData) => {
  const api = addInstance();
  const res = await api.post("/posts", FormData);
  return res;
}
