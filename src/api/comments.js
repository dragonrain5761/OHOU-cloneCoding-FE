import { authInstance } from "./axios";

export const postComment = async (postId, comment) => {
  const api = authInstance();
  const res = await api.post(`/comment/${postId}`, comment);
  return res;
};

export const updateComment = async (commentId, updatedComment) => {
  const api = authInstance();
  const res = await api.put(`/comment/${commentId}`, updatedComment);
  return res;
};

export const deleteComment = async (commentId) => {
  const api = authInstance();
  const res = await api.delete(`/comment/${commentId}`);
  return res;
};
