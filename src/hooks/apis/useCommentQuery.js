import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment, likeComment, updateComment } from "../../api/comment";

export const CommentQueryKey = "comment";

export const useUpdateCommentMutation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(updateComment, {
    onSuccess: (data) => {
      queryClient.setQueryData(CommentQueryKey, (prevData) => ({
        ...prevData,
        data: [...prevData.data, data.data],
      }));
    },
  });
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
