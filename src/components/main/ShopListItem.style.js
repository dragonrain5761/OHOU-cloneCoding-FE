import styled from "styled-components";
import theme from "../../lib/styles/theme";

const ShopListItemBlock = styled.div`
  ${theme.flexCenterColumn}
  overflow: hidden;
  position: relative;
  .itemImg {
    width: 95%;
    margin-bottom: 1rem;
    img {
      width: 100%;
      object-fit: contain;
      border-radius: 5px;
    }
  }
  .contents {
    width: 100%;
    min-height: 150px;
    padding: 0 0.6rem;
    .itemName {
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
      margin-top: 1rem;

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
        bottom: 10px;
      }
    }
  }
`;

export default ShopListItemBlock;
