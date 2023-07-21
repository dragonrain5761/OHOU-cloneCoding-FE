import { css } from "styled-components";

const colors = {
  whiteColor: "#ffffff",
  lightGrayColor: "#efefef",
  mediumGrayColor: "#939393",
  darkGrayColor: "#4a4a4a",
  darkColor: "#000000",

  primaryColor: "#35C5F0",
};

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const flexCenterColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const theme = {
  ...colors,
  flexCenter,
  flexCenterColumn,
};

export default theme;
