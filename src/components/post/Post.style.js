import theme from "../../lib/styles/theme";
import styled, { css } from "styled-components";

const PostBlock = styled.div`
  width: 100%;
  max-width: 1020px;
  min-height: 700px;
  .detail {
    ${theme.flexCenterColumn}
    position: relative;
    img {
      width: 80%;
      max-width: 700px;
      max-height: 800px;
    }
    .updateDelete {
      width: 68%;
      height: 35px;
      display: flex;
      flex-direction: column;
      align-items: end;
      p {
        font-size: 1.4rem;
        cursor: pointer;
      }
      ul {
        ${theme.flexCenterColumn}
        width: 120px;
        z-index: 999;
        border-radius: 10px;
        border: 1px solid ${theme.lightGrayColor};
        background-color: ${theme.whiteColor};
        li {
          width: 100%;
          ${theme.flexCenter}
          height: 43px;
          cursor: pointer;

          &:hover {
            background-color: ${theme.lightGrayColor};
          }
        }
        .delete {
          color: red;
        }
      }
    }
    .contents {
      margin-top: 4rem;
      width: 80%;
      max-width: 850px;
      padding-bottom: 6rem;
      border-bottom: 0.8px solid #ccc;
      line-height: 1.6rem;
    }
    .summary {
      ${theme.flexCenter}
      position: absolute;
      bottom: 7px;
      gap: 10px;
      color: ${theme.mediumGrayColor};
      font-weight: bold;
      font-size: 0.9rem;
    }
    .side {
      position: sticky;
      padding-left: 880px;
      top: 230px;
      ${theme.flexCenterColumn}
      gap: 10px;
      > div {
        ${theme.flexCenter}
        background-color: white;
        font-size: 1.4rem;
        box-shadow: rgba(26, 28, 30, 0.2) 0px 4px 10px;
        color: ${theme.darkGrayColor};
        border: 0.3px solid ${theme.mediumGrayColor};
        border-radius: 50%;
        width: 60px;
        height: 60px;
      }
      .like {
        ${(props) =>
          props.hasLiked &&
          css`
            color: ${theme.primaryColor};
          `}
        cursor: pointer;
      }
      p {
        margin-bottom: 10px;
        color: ${theme.mediumGrayColor};
        font-size: 0.9rem;
      }
    }
  }
`;

export default PostBlock;
