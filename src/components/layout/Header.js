import { Button } from "../common";
import HeaderBlock from "./Header.style";
import src from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import Search from "../search/Search";

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

  const onClickToHome = () => {
    navigate("/");
  };
  return (
    <HeaderBlock>
      <p className="logo">
        <img src={src} alt="logo" onClick={onClickToHome} />
      </p>
      <div className="nav">
        <div className="search">
          <Search />
        </div>
        <Button size={"small"} onClick={onClickToLogin}>
          로그인
        </Button>
        <Button size={"small"} onClick={onClickToRegister}>
          회원가입
        </Button>
        <Button size={"small"} color={"primary"} onClick={onClickToWrite}>
          글쓰기
        </Button>
      </div>
    </HeaderBlock>
  );
};

export default Header;
