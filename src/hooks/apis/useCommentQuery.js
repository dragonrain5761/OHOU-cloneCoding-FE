import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteComment, likeComment, updateComment } from "../../api/comment";

export const CommentQueryKey = "comment";

export const useUpdateCommenttMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateComment, {
    onSuccess: (data) => {
      //   queryClient.setQueryData(PostQueryKey, (prevData) => ({
      //     ...prevData,
      //     data: [...prevData.data, data.data],
      //   }));
      //post refetch ?
    },
  });
};

export const useDeleteCommenttMutation = () => {
  return useMutation(deleteComment);
};

export const useLikeCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    likeComment,
    //   {
    //   onSuccess: (data) => {
    //     queryClient.setQueryData(PostQueryKey, (prevData) => ({
    //       ...prevData,
    //       data: [...prevData.data, data.data],
    //     }));
    //   },
    // }
  );
};
