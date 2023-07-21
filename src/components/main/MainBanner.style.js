import styled from "styled-components";
import theme from "../../lib/styles/theme";

const MainBannerBlock = styled.div`
  ${theme.flexCenter}
  width: 1250px;
  margin: 0 auto;
  margin-top: 2rem;
  gap: 20px;
  position: relative;

  .mainPost {
    border-radius: 4px;
    width: 700px;
    height: 430px;
    overflow: hidden;
    background-image: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
  }
  .sideBanner {
    width: 223px;
    height: 430px;
    border-radius: 6px;
    position: relative;

    .imgLength {
      ${theme.flexCenter}
      width: 48px;
      height: 23px;
      background-color: rgba(58, 58, 58, 0.59);
      color: white;
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 10px;
      padding: 3px;
      font-size: 0.9rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      border-radius: 13px;
    }
  }
  .content {
    position: absolute;
    bottom: 4%;
    left: 15%;
    color: ${theme.whiteColor};
    h1 {
      font-size: 1.8rem;
      font-weight: bold;
    }
    h5 {
      margin: 10px;
      font-size: 1.3rem;
    }
  }
`;

export default MainBannerBlock;
