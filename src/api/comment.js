import { authInstance } from "./axios";

export const postComment = async (data) => {
  const [postId, comment] = data;
  const api = authInstance();
  const res = await api.post(`/api/posts/${postId}/comments`, {
    comment: comment,
  });
  return res;
};

export const deleteComment = async (data) => {
  console.log(data);
  const [postId, commentId] = data;
  const api = authInstance();
  const res = await api.delete(`/api/posts/${postId}/comments/${commentId}`);
  return res;
};

export const likeComment = async (postId, commentId) => {
  const api = authInstance();
  const res = await api.post(`/api/posts/${postId}/comments/${commentId}/like`);
  return res;
};
