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
    /* border: 1px solid ${(props) => props.theme.mediumGrayColor}; */

    ${theme.flexCenterColumn}
  }

  .RegisterImg {
    width: 88px;
    height: 31px;
    object-fit: contain;
  }

  .registerDiv {
    margin-bottom: 30px;
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

  .resisterExplan {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 18px;
    color: #828c94;
    letter-spacing: -0.3px;
  }

  .resisterP {
    color: ${(props) => props.theme.darkColor};
    font-size: 15px;
    text-align: center;
    margin-top: 30px;
  }

  .emailDiv {
    display: flex;
  }

  .emailSpan {
    display: flex;
  }

  .emailInput {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.lightGrayColor};
    background-color: ${(props) => props.theme.whiteColor};
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
    font-size: 17px;
    min-height: 50px;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    transition: color 0.1s, background-color 0.1s, border-color 0.1s;
    border-radius: 4px;
    cursor: pointer;
  }

  .pwInput {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.lightGrayColor};
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.darkColor};
  }

  .nameInput {
    font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.lightGrayColor};
    background-color: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.darkColor};
  }

  .submitButton {
    margin-top: 10px;
    width: 100%;
    height: 45px;
    padding: 0px;
    background-color: #35c5f0;
    border-color: #35c5f0;
    color: #fff;
    font-size: 17px;
    min-height: 50px;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    transition: color 0.1s, background-color 0.1s, border-color 0.1s;
    border-radius: 4px;
    cursor: pointer;
  }
`;
