import { useParams } from "react-router-dom";
import PostContainer from "../../containers/post/PostContainer";
import CommentsContainer from "../../containers/comments/CommentsContainer";
import Header from "../../components/layout/Header";

const PostPage = () => {
  const { postId } = useParams();

  return (
    <>
      <Header />
      <PostContainer postId={postId} />
      <CommentsContainer postId={postId} />
    </>
  );
};

export default PostPage;
