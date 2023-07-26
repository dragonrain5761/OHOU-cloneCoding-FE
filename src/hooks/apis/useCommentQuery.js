import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment, likeComment, postComment } from "../../api/comment";

export const CommentQueryKey = "comment";

export const usePostCommentMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });
  return mutate;
};

export const useDeleteCommenttMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
  return mutate;
};

export const useLikeCommentMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(likeComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
  return mutate;
};
