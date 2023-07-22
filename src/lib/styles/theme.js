import { css } from "styled-components";

const colors = {
  whiteColor: "#ffffff",
  lightGrayColor: "#efefef",
  mediumGrayColor: "#939393",
  darkGrayColor: "#565656",
  darkColor: "#000000",

  primaryColor: "#35C5F0",
};

const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
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
  breakpoints,
  flexCenter,
  flexCenterColumn,
};

export default theme;
