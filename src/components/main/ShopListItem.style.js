import styled from "styled-components";
import theme from "../../lib/styles/theme";

const ShopListItemBlock = styled.div`
  ${theme.flexCenterColumn}
  flex: 1 1 170px;
  /* width: 230px; */
  max-width: 230px;
  height: 380px;
  padding: 2px;
  overflow: hidden;
  position: relative;
  .itemImg {
    width: 100%;
    height: 235px;
    img {
      width: 100%;
      object-fit: contain;
      border-radius: 5px;
    }
  }
  .contents {
    .itemName {
      width: 220px;
      font-size: 0.7rem;
      color: ${theme.darkGrayColor};
    }
    .title {
      margin: 8px 0px;
      font-size: 0.82rem;
      letter-spacing: 0.3px;
    }
    .priceContents {
      display: flex;
      width: 220px;
      gap: 5px;

      span {
        color: ${theme.primaryColor};
        font-weight: bold;
      }
      .price {
        font-weight: bold;
      }
      img {
        position: absolute;
        width: 80px;
        bottom: -9px;
      }
    }
  }
`;

export default ShopListItemBlock;
