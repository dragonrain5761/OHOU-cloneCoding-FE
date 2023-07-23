import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import profileSrc from "../../assets/profile.png";
import PostListItemBlock from "./PostListItem.style";

const PostListItem = ({ post }) => {
  const { nickname, contents, postImg, commentSize, likeSize } = post;
  return (
    <PostListItemBlock>
      <div className="profile">
        <img src={profileSrc} alt="profile" />
        <p>{nickname}</p>
      </div>
      <img src={postImg} alt="main" />
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
          {/* 조회수 구현 */}
          <span>{" 조회 189"}</span>
        </div>
      </div>
      <p className="contents">{contents}</p>
    </PostListItemBlock>
  );
};

export default PostListItem;
