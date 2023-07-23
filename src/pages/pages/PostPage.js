import { useParams } from "react-router-dom";
import PostContainer from "../../containers/post/PostContainer";
import CommentsContainer from "../../containers/comments/CommentsContainer";

const PostPage = () => {
  const { postId } = useParams();

  return (
    <>
      <PostContainer postId={postId} />
      <CommentsContainer postId={postId} />
    </>
  );
};

export default PostPage;
