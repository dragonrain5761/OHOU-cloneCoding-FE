import { css } from "styled-components";

const colors = {
  whiteColor: "#ffffff",
  lightGrayColor: "#F6F9FA",
  mediumGrayColor: "#939393",
  darkGrayColor: "#4a4a4a",
  darkColor: "#000000",

  primaryColor: "#34C5EF",
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
