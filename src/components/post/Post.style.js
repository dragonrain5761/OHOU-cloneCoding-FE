import theme from "../../lib/styles/theme";
import styled from "styled-components";

const PostBlock = styled.div`
  width: 100%;
  max-width: 1020px;
  .detail {
    ${theme.flexCenterColumn}
    position: relative;

    img {
      width: 80%;
      max-width: 700px;
      max-height: 800px;
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
      top: 200px;
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
      p {
        margin-bottom: 10px;
        color: ${theme.mediumGrayColor};
        font-size: 0.9rem;
      }
    }
  }
`;

export default PostBlock;
