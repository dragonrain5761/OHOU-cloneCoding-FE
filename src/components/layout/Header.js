import { Button } from "../common";
import HeaderBlock from "./Header.style";
import src from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import Search from "../search/Search";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/modules/user";
import { useEffect } from "react";
import { basicAlert } from "../../shared/alert/SwalAlert";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
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

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("Access");
    basicAlert("로그아웃 되었습니다.");
    navigate("/");
  };

  useEffect(() => {
    if (isLoggedIn) {
      console.log("로그인 상태:", isLoggedIn);
    } else {
      console.log("로그아웃 상태:", isLoggedIn);
    }
  }, [isLoggedIn]);

  return (
    <HeaderBlock>
      <p className="logo">
        <img src={src} alt="logo" onClick={onClickToHome} />
      </p>
      <div className="nav">
        <div className="search">
          <Search />
        </div>
        {isLoggedIn ? (
          <Button size={"small"} onClick={handleLogout}>
            로그아웃
          </Button>
        ) : (
          <>
            <Button size={"small"} onClick={onClickToLogin}>
              로그인
            </Button>
            <Button size={"small"} onClick={onClickToRegister}>
              회원가입
            </Button>
          </>
        )}
        <Button size={"small"} color={"primary"} onClick={onClickToWrite}>
          글쓰기
        </Button>
      </div>
    </HeaderBlock>
  );
};

export default Header;
