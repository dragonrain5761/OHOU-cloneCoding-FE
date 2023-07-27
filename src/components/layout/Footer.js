import styled from "styled-components";
import theme from "../../lib/styles/theme";
import { Link, useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();

  const onClickToHelp = () => {
    navigate("/help");
  };

  return (
    <FooterBlock>
      <div className="emailHelp" onClick={onClickToHelp}>
        {"고객센터 >"}
      </div>
      <div className="desc">
        <p>FE : 김나영, 이용우, 홍성민 </p>
        <p>BE : 홍승현, 이채원, 이예원, 최현성, 조성근</p>
      </div>
      <Link to="https://github.com/orgs/OHOU-cloneCoding/repositories">
        <div className="git">
          <AiFillGithub />
        </div>
      </Link>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.div`
  ${theme.flexCenterColumn}
  margin-top: 5rem;
  gap: 10px;
  height: 190px;
  width: 100%;
  background-color: ${theme.lightGrayColor};
  .emailHelp {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${theme.darkGrayColor};
    cursor: pointer;
  }
  p {
    font-size: 0.7rem;
    text-align: center;
    line-height: 20px;
    color: ${theme.darkGrayColor};
  }
  .git {
    cursor: pointer;
    font-size: 2.2rem;
    color: ${theme.darkGrayColor};
  }
`;
