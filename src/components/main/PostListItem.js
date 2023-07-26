import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import profileSrc from "../../assets/profile.png";
import PostListItemBlock from "./PostListItem.style";

const PostListItem = ({ post }) => {
  const { nickname, content, postImg, commentSize, likeSize, postViewCount } =
    post;
  return (
    <PostListItemBlock>
      <div className="profile">
        <img src={profileSrc} alt="profile" />
        <p>{nickname}</p>
      </div>
      <div className="postImgWrapper">
        <img className="postImg" src={postImg} alt="main" />
      </div>
      <div className="icons">
        <div className="like">
          <BsHeart />
          <span>{likeSize}</span>
        </div>
        <div className="comment">
          <FaRegComment />
          <span>{commentSize}</span>
        </div>
        <div className="view">
          <span>조회 {postViewCount}</span>
        </div>
      </div>
      <p className="contents">{content}</p>
    </PostListItemBlock>
  );
};

export default PostListItem;
