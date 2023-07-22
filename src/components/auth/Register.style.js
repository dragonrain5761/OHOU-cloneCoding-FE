import styled from "styled-components";
import theme from "../../lib/styles/theme";

export const RegisterBlock = styled.section`
  padding-top: 40px;
  width: calc(100% - 30px);
  margin: auto;

  .registerBox {
    width: 360px;
    margin: 0px auto;
    padding: 60px 0px;
    border: 1px solid ${(props) => props.theme.mediumGrayColor};

    ${theme.flexCenterColumn};
  }

  .registerlabel {
    display: block;
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: ${(props) => props.theme.darkColor};
    letter-spacing: -0.3px;
    word-break: keep-all;
  }

  .emailDiv {
    display: -webkit-flex;
  }

  .emailSpan {
    -webkit-flex: 1 1 0px;
  }

  .emailInput {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 170px;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    color: ${(props) => props.theme.darkColor};
  }

  .emailSeparator {
    flex: 0 0 20px;
    text-align: center;
    line-height: 40px;
    color: ${(props) => props.theme.mediumGrayColor};
  }

  .emailSelect {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 170px;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    color: ${(props) => props.theme.darkColor};
    -webkit-appearance: none;
    appearance: none;
  }

  .emailButton {
    margin-top: 10px;
    width: 100%;
    height: 45px;
    padding: 0px;
    background: ${(props) => props.theme.lightGrayColor};
    color: ${(props) => props.theme.mediumGrayColor};
    border-color: ${(props) => props.theme.darkColor};
  }
`;
