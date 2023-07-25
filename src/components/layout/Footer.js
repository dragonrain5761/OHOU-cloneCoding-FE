import styled from "styled-components";
import theme from "../../lib/styles/theme";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  // const navigate = useNavigate();

  const onClickToHelp = () => {
    // navigate("/help");
  };
  return (
    <FooterBlock>
      <div onClick={onClickToHelp}>이메일 문의</div>
      <p>
        평일: 전체 문의 상담 가능 주말, 공휴일: 오늘의집 직접배송,
        이사/시공/수리 문의 상담 가능
      </p>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.div`
  margin-top: 5rem;
  height: 190px;
  width: 100%;
  background-color: ${theme.lightGrayColor};
`;
