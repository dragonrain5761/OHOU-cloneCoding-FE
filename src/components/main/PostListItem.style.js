import styled from "styled-components";
import theme from "../../lib/styles/theme";

const PostListItemBlock = styled.div`
  ${theme.flexCenterColumn}
  flex: 1 1 180px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export default PostListItemBlock;
