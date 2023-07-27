import { useState } from "react";
import { usePostQuery } from "../../hooks/apis/usePostQuery";
import { useQueryClient } from "@tanstack/react-query";
import {
  useDeleteCommenttMutation,
  useLikeCommentMutation,
  usePostCommentMutation,
} from "../../hooks/apis/useCommentQuery";
import Comments from "../../components/comments/Comments";

const CommentsContainer = ({ postId }) => {
  const [text, setText] = useState("");
  const { data, isLoading, isError } = usePostQuery(postId);
  const deleteMutate = useDeleteCommenttMutation();
  const likeMutate = useLikeCommentMutation();
  const postMutate = usePostCommentMutation();

  const queryClient = useQueryClient();

  if (isError) return <h3>ERROR!</h3>;
  if (isLoading) return <h3>ERROR!</h3>;

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    await postMutate([postId, text], {
      onSuccess: () => {
        queryClient.invalidateQueries(["post", postId]);
      },
    });
    setText("");
  };

  const onToggleLike = async (commentId) => {
    await likeMutate([postId, commentId], {
      onSuccess: () => {
        queryClient.invalidateQueries(["post", postId]);
      },
    });
  };

  const onDeleteHandler = (commentId) => {
    console.log(commentId);
    deleteMutate([postId, commentId], {
      onSuccess: () => {
        queryClient.invalidateQueries(["post", postId]);
      },
    });
  };

  return (
    <Comments
      data={data}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
      onDeleteHandler={onDeleteHandler}
      onToggleLike={onToggleLike}
    />
  );
};

export default CommentsContainer;
