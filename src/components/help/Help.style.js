import styled from "styled-components";
import theme from "../../lib/styles/theme";

export const HelpBlock = styled.section`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 0 16px;
  height: 1000px;

  .pBox {
    margin: 40px 0;
  }
  .pInquiry {
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme.darkColor};
  }

  .pRequest {
    margin-top: 15px;
    color: #828c94;
    font-size: 14px;
    line-height: 1.4;
  }

  .helpForm {
    margin: 40px 0;
  }
  .helpDiv {
    margin: 16px 0;

    > div {
      width: 343px;
      > input {
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
    }

    > span {
      position: relative;
      display: block;
      margin-top: 10px;
      padding-left: 12px;
      font-size: 12px;
      color: ${(props) => props.theme.mediumGrayColor};
    }

    > input {
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

    > textarea {
      height: 160px;
      overflow: hidden;
      overflow-wrap: break-word;
      display: inline-block;
      width: 100%;
      margin: 0;
      padding: 8px 15px 9px;
      border: 1px solid ${(props) => props.theme.lightGrayColor};
      background-color: #fff;
      color: #000;
      border-radius: 4px;
      font-size: 15px;
      line-height: 21px;
      transition: border-color 0.1s, background-color 0.1s;
      resize: none;
    }
  }

  .helpinqurydiv {
    position: relative;
    display: inline-block;
    width: 343px;

    > select {
      width: 100%;
      height: 44px;
      padding: 10px 14px 11px;
      font-size: 16px;
      line-height: inherit;
      letter-spacing: inherit;
      border: 1px solid ${(props) => props.theme.lightGrayColor};
      border-radius: 4px;
    }
  }

  .helpAgreeDiv {
    margin-top: 30px;
    display: block;
    letter-spacing: -0.4px;
    line-height: 1;
    > div {
      width: 620px;
      height: 220px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      max-width: 600px;
      margin: 30px 0;
      padding: 20px;
      border-radius: 4px;
      background: #f7f8fa;
      > div {
        width: 20px;
        height: 20px;
        padding: 0;
        position: relative;
        display: inline-block;
        font-size: 0;
        margin-right: 6px;
        > input {
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 2px solid #bcbcbc;
          cursor: pointer;
        }
      }
    }
  }

  .helpAgreelabel {
    flex: 1;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
  }
  .helpAgreeP {
    width: 100%;
    margin-top: 8px;
    padding-left: 26px;
    font-size: 12px;
    color: #656e75;
    line-height: 1.5;
  }

  .helpSubmitButton {
    display: inline-block;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    width: 343px;
    height: 50px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
    background: #35c5f0;
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
