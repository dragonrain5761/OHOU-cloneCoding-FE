import { useState } from "react";
import Post from "../../components/post/Post";
import { useNavigate } from "react-router-dom";
import {
  usePostQuery,
  useLikePostMutation,
  useDeletePostMutation,
} from "../../hooks/apis/usePostQuery";
import { confirmAlert } from "../../shared/alert/SwalAlert";

const PostContainer = ({ postId }) => {
  const navigate = useNavigate();
  const [onSelected, setOnSelected] = useState(false);
  const { data, isLoading, isError } = usePostQuery(postId);
  const deleteMutate = useDeletePostMutation();
  const likeMutate = useLikePostMutation();

  const onClickToUpdate = () => {
    navigate(`/edit/${postId}`);
  };

  const onClickToDelete = () => {
    confirmAlert(
      "게시물을 삭제하시겠습니까?",
      "삭제",
      "삭제되었습니다 :)",
    ).then((res) => {
      deleteMutate(postId);
      navigate("/");
    });
  };

  const onToggleSelected = () => {
    setOnSelected(!onSelected);
  };

  const onLikePost = (e) => {
    e.preventDefault();
    console.log(postId);
    likeMutate(postId);
  };

  if (isError) return <h3>ERROR!</h3>;
  if (isLoading) return <h3>ERROR!</h3>;

  return (
    <Post
      post={data.data}
      onSelected={onSelected}
      onToggleSelected={onToggleSelected}
      onClickToUpdate={onClickToUpdate}
      onClickToDelete={onClickToDelete}
      onLikePost={onLikePost}
    />
  );
};

export default PostContainer;
