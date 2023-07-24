import { Button, Input } from "../common";
import { CiSearch } from "react-icons/ci";
import HeaderBlock from "./Header.style";
import src from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onClickToLogin = () => {
    navigate("/login");
  };

  const onClickToRegister = () => {
    navigate("/register");
  };

  const onClickToWrite = () => {
    navigate("/write");
  };
  return (
    <HeaderBlock>
      <p className="logo">
        <img src={src} alt="logo" />
      </p>
      <div className="nav">
        <Input w={"250px"} h={"40px"} placeholder={"통합검색"} />
        <Button size={"small"} onClick={onClickToLogin}>
          로그인
        </Button>
        <Button size={"small"} onClick={onClickToRegister}>
          회원가입
        </Button>
        <p className="searchIcon">
          <CiSearch />
        </p>
        <Button size={"small"} color={"primary"} onClick={onClickToWrite}>
          글쓰기
        </Button>
      </div>
    </HeaderBlock>
  );
};

export default Header;
