import styled from "styled-components";

export const StyledProductInfo = styled.div`
  display: flex;
`;

export const ProductInfoInner = styled.div`
  width: calc(100% - 365.25px - 20px);
  margin-right: 20px;

  & p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  & div {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  margin-bottom: 12px;

  & img {
    width: 100%;
  }
`;

export const OrderContainer = styled.div`
  width: 365.25px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  & div select {
    width: 100%;
    height: 40px;
    margin-bottom: 12px;
  }

  & div button {
    font-size: 16px;
    font-weight: bold;
    margin-right: 8px;
    padding: 16px 32px;
    border-radius: 4px;
    background-color: #35c5f0;
    color: #fff;
  }
`;
