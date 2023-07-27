import styled from "styled-components";
import theme from "../../lib/styles/theme";

export const CommentsBlock = styled.div`
  ${theme.flexCenterColumn}
  margin-top: 3rem;
  width: 100%;
  max-width: 1020px;
  .header {
    width: 80%;
    gap: 6px;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    font-weight: bold;
    span {
      color: ${theme.primaryColor};
    }
  }
  .input {
    ${theme.flexCenter}
    width: 80%;
    position: relative;

    img {
      width: 40px;
      height: 40px;
    }
    button {
      position: absolute;
      right: 4%;
      font-size: 1rem;
      color: ${theme.mediumGrayColor};
      font-weight: bold;
    }
    input {
      border: 2px solid ${theme.lightGrayColor};
      width: 90%;
      height: 45px;

      &::placeholder {
        overflow: hidden;
        color: ${theme.mediumGrayColor};
      }
    }
  }
`;

export const CommentBlock = styled.div`
  width: 80%;
  padding: 3rem 2rem;
  li {
    margin: 0px 0px 40px 25px;
    position: relative;
    .main {
      padding-left: 50px;
    }
    img {
      position: absolute;
      width: 40px;
      height: 40px;
    }
    .nickname {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: bold;
      font-size: 1.1rem;
      margin-bottom: 10px;
      .myComment {
        font-size: 0.75rem;
        background-color: ${theme.primaryColor};
        padding: 4px;
        border-radius: 5px;
        color: white;
      }
    }
    .contents {
      margin-bottom: 10px;
    }
    .menu {
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 0.8rem;
      color: ${theme.mediumGrayColor};
      .like {
        ${theme.flexCenter}
        cursor: pointer;
        gap: 5px;

        .hasLikedTrue {
          color: ${theme.primaryColor};
        }
      }
    }
  }

  .deleteComment {
    cursor: pointer;
  }
`;
