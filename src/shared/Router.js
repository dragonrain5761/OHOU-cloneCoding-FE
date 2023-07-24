import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/pages/MainPage";
import SearchPage from "../pages/pages/SearchPage";
import ProductPage from "../pages/pages/ProductPage";
import HelpPage from "../pages/pages/HelpPage";
import WritePage from "../pages/pages/WritePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import { useEffect } from "react";
import PostPage from "../pages/pages/PostPage";

const Router = () => {
  useEffect(() => {}, []);

  //template page 만들어서 outlet 으로 children보여주기
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/item/:itemId" element={<ProductPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route>
          <Route path="/write" element={<WritePage />} />
          {/* 수정용 */}
          <Route path="/edit/:postId" element={<WritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

//권한별 페이지 라우팅 컴포넌트 필요
