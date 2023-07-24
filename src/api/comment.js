import { authInstance } from "./axios";

export const postComment = async (postId, comment) => {
  const api = authInstance();
  const res = await api.post(`/comments/${postId}`, comment);
  return res;
};

export const updateComment = async (commentId, updatedComment) => {
  const api = authInstance();
  const res = await api.put(`/comments/${commentId}`, updatedComment);
  return res;
};

export const deleteComment = async (commentId) => {
  const api = authInstance();
  const res = await api.delete(`/comments/${commentId}`);
  return res;
};

export const likeComment = async (commentId) => {
  const api = authInstance();
  const res = await api.post(`/comments/${commentId}/like`);
  return res;
};
