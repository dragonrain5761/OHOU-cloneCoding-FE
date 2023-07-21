import { Button, Input } from "../common";
import { CiSearch } from "react-icons/ci";
import HeaderBlock from "./Header.style";
import src from "../../assets/logo.jpg";

const Header = () => {
  return (
    <HeaderBlock>
      <p className="logo">
        <img src={src} alt="logo" />
      </p>
      <div className="nav">
        <Input w={"250px"} h={"40px"} placeholder={"통합검색"} />
        <Button size={"small"}>로그인</Button>
        <Button size={"small"}>회원가입</Button>
        <p className="searchIcon">
          <CiSearch />
        </p>
        <Button size={"small"} color={"primary"}>
          글쓰기
        </Button>
      </div>
    </HeaderBlock>
  );
};

export default Header;
