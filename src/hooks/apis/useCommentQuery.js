import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment, likeComment } from "../../api/comment";

export const CommentQueryKey = "comment";

//댓글 작성 추가

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
