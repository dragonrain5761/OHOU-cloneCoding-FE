import styled, { css } from "styled-components";
import theme from "../../lib/styles/theme";

const Input = ({ w, h, sizes, color, ...rest }) => {
  return <StyledInput w={w} h={h} {...rest} />;
};

export default Input;

const sizes = {
  small: css`
    height: 30px;
    width: 80px;
  `,
  medium: css`
    height: 40px;
    width: 120px;
  `,
  large: css`
    height: 45px;
    width: 135px;
  `,
};

const colors = {
  primary: css`
    background-color: ${theme.whiteColor};
  `,
  secondary: css`
    background-color: ${theme.lightGrayColor};
  `,
};

const StyledInput = styled.input`
  display: ${theme.flexCenter};
  font-size: 1rem;
  border-radius: 5px;
  padding-left: 10px;

  &:focus {
    outline: none;
  }

  ${(props) =>
    sizes[props.size] ||
    css`
      height: ${props.h};
      width: ${props.w};
    `}
  ${(props) => colors[props.color] || colors.primary}
`;
