import styled from "styled-components";
import theme from "../../lib/styles/theme";

const PostListContainerBlock = styled.div`
  ${theme.flexCenterColumn}
  max-width: 1050px;
  padding: 50px 40px;

  h1 {
    width: 100%;
    margin-left: 50px;
    font-size: 1.125rem;
    font-weight: bold;
  }
  li {
    width: 23%;
    min-width: 170px;
    max-height: 440px;
    cursor: pointer;
  }
  .postsContainer {
    width: 100%;
    min-height: 700px;
    display: flex;
    justify-content: space-around;
    align-items: start;
    flex-wrap: wrap;
    gap: 10px;
  }
  .pages {
    ${theme.flexCenter}
    background-color: ${theme.primaryColor};
    letter-spacing: 3px;
    width: 38px;
    height: 38px;
    border-radius: 10px;
    color: white;
    padding: 10px;
    font-weight: bold;
    font-size: 0.9rem;
    padding-bottom: 7px;
    padding-right: 7px;
  }
  .pagination {
    width: 120px;
    margin-top: 2rem;
    ${theme.flexCenter}
    button {
      background-color: ${theme.lightGrayColor};
    }
  }
`;

export default PostListContainerBlock;
