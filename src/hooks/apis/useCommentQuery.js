import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment, likeComment, postComment } from "../../api/comment";

export const CommentQueryKey = "comment";
export const usePostCommentMutation = () => {
  const { mutate } = useMutation(postComment);
  return mutate;
};

export const useDeleteCommenttMutation = () => {
  const { mutate } = useMutation(deleteComment);
  return mutate;
};

export const useLikeCommentMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(likeComment, {
    onSuccess: (data) => {
      queryClient.setQueryData(CommentQueryKey, (prevData) => ({
        ...prevData,
        data: [...prevData.data, data.data],
      }));
    },
  });
  return mutate;
};
