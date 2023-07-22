import styled from "styled-components";
import theme from "../../lib/styles/theme";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import profileSrc from "../../assets/profile.png";

const PostListItem = ({ post }) => {
  const { nickname, contents, postImg, commentSize, likeSize } = post;
  console.log(post);
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

const PostListItemBlock = styled.div`
  ${theme.flexCenterColumn}
  width: 220px;
  height: 320px;
  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    border-radius: 8px;
    margin: 8px 0px;
  }
  .profile {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 30px;
    font-size: 0.9rem;
    img {
      margin: 0px 6px 0 0;
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  }
  .icons {
    ${theme.flexCenter}
    margin: 6px 0px;
    gap: 20px;
    color: ${theme.darkGrayColor};
    span {
      font-size: 0.75rem;
      margin-left: 5px;
    }
    .like {
      ${theme.flexCenter}
    }
    .comment {
      ${theme.flexCenter}
      margin-bottom: 2px;
      span {
        margin-top: 2px;
      }
    }
  }
  .contents {
    width: 190px;
    height: 155px;
    margin: 0 1rem;
    font-size: 0.75rem;
    color: ${theme.darkGrayColor};
    line-height: 1.3;
    overflow: hidden; // 추가된 줄
    text-overflow: ellipsis; // 추가된 줄
    display: -webkit-box; // 추가된 줄
    -webkit-line-clamp: 3; // 추가된 줄
    -webkit-box-orient: vertical; // 추가된 줄
  }
`;
