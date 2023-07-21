import styled, { css } from "styled-components";
import theme from "../../lib/styles/theme";

const Button = ({ children, size, color, ...rest }) => {
  return (
    <styledButton size={size} color={color} {...rest}>
      {children}
    </styledButton>
  );
};

export default Button;

const sizes = {
  xsmall: css`
    height: 35px;
    width: 35px;
  `,
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
  xlarge: css`
    height: 50px;
    width: 150px;
  `,
  default: css`
    height: auto;
    width: auto;
  `,
};

const colors = {
  primary: css`
    background-color: ${theme.primaryColor};
  `,
  secondary: css`
    background-color: ${theme.lightGrayColor};
  `,
};

const styledButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 5px;

  ${(props) => sizes[props.size] || "default"}
  ${(props) => colors[props.color]}
`;
