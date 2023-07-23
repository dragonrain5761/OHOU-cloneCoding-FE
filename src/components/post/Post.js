import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import PostBlock from "./Post.style";

const Post = ({ post }) => {
  return (
    <PostBlock>
      <div className="detail">
        <div className="side">
          <div className="like">
            <BsHeart />
          </div>
          <p>{post.likeSize}</p>
          <div className="comment">
            <FaRegComment />
          </div>
          <p>{post.commentSize}</p>
        </div>
        <img src={post.postImg} alt="title" />
        <div className="contents">
          {post.contents}
          <div className="summary">
            {/* viewCount로 바꾸기 */}
            <p className="view">조회 {"30"}</p>
            <p className="댓글">댓글 {post.commentSize}</p>
          </div>
        </div>
      </div>
    </PostBlock>
  );
};

export default Post;
