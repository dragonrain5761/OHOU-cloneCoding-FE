import styled from "styled-components";
import theme from "../../lib/styles/theme";

const PostListItemBlock = styled.div`
  margin: 2.3rem 0rem;
  .postImgWrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    border-radius: 7px;
    .postImg {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: translate(-50%, -50%);
    }
  }

  .profile {
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 0.9rem;
    img {
      margin: 0px 6px 0 0;
      width: 32px;
      height: 32px;
      object-fit: contain;
    }
  }
  .icons {
    ${theme.flexCenter}
    margin: 0.5rem 0px;
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
    max-width: 250px;
    max-height: 110px;
    padding: 0px 10px;
    font-size: 0.85rem;
    color: ${theme.darkGrayColor};
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export default PostListItemBlock;
