import { authInstance } from "./axios";

export const postComment = async (postId, comment) => {
  const api = authInstance();
  const res = await api.post(`/api/posts/${postId}/comments`, comment);
  return res;
};

export const deleteComment = async (postId, commentId) => {
  const api = authInstance();
  const res = await api.delete(`/api/posts/${postId}/comments/${commentId}`);
  return res;
};

export const likeComment = async (postId, commentId) => {
  const api = authInstance();
  const res = await api.post(`/api/posts/${postId}/comments/${commentId}/like`);
  return res;
};
