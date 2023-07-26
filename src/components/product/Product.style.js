import styled from "styled-components";

export const StyledProduct = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > div:nth-of-type(2) {
    width: calc(50% - 20px);
    margin: 20px;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  & img {
    position: absolute;
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  margin-top: 20px;

  & p:nth-of-type(1) {
    color: #656e75;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  & p:nth-of-type(2) {
    font-size: 22px;
    margin-bottom: 16px;
  }
`;

export const StarContainer = styled.div`
  margin-bottom: 16px;

  & svg {
    width: 16px;
    height: 16px;
    color: #35C5F0;
  }

  & p {
    display: inline-block;
    font-weight: bold;
    margin-left: 8px;
    color: #35C5F0;
  }
`

export const PriceContainer = styled.div`
  margin-bottom: 16px;

  & p:nth-of-type(1) {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
  }

  & p:nth-of-type(2) {
    display: inline-block;
    font-size: 32px;
    font-weight: bold;
  }

  & p:nth-of-type(3) {
    margin-left: 8px;
    display: inline-block;
    font-size: 32px;
    font-weight: normal;
  }

  & > div {
    margin-left: 8px;
    display: inline-block;
    width: 100px;
  }

  & > div img {
    width: 100%;
  }
`;

export const InfoContainer =styled.div`
  & p {
    display: inline-block;
    margin-bottom: 8px;
  }

  & p span {
    margin-left: 8px;
    display: block;
  }
`;

export const OrderContainer = styled.div`
  margin-top: 20px;

  & select {
    width: 100%;
    height: 40px;
    margin-bottom: 16px;
    padding: 0 16px;
    border-radius: 4px;
  }

  & > div button {
    font-size: 16px;
    font-weight: bold;
    margin-right: 8px;
    padding: 16px 32px;
    background-color: #35c5f0;
    color: #fff;
    border-radius: 4px;
  }
`;
