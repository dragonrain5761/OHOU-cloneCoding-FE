import styled from "styled-components";
import theme from "../../lib/styles/theme";

const HeaderBlock = styled.div`
  display: flex;
  top: 0;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  width: 100%;
  height: 75px;
  padding: 10px 60px;
  background-color: ${theme.whiteColor};
  border-bottom: 2px solid ${theme.lightGrayColor};

  .logo {
    width: 140px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .nav {
    ${theme.flexCenter}
    position: relative;
    button {
      font-weight: 400;
      border-radius: 3px;
    }
    input {
      padding-left: 45px;
      border: 2.125px solid ${theme.lightGrayColor};
      &:hover {
        background-color: ${theme.lightGrayColor};
      }
      &::placeholder {
        color: #bebebe;
      }
    }
  }
  .searchIcon {
    position: absolute;
    top: 10px;
    left: 13px;
    font-size: 1.5rem;
    color: ${theme.mediumGrayColor};
  }
`;

export default HeaderBlock;
