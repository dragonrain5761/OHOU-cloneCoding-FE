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
import Template from "../containers/layout/Template";

const Router = () => {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Template header footer>
              <MainPage />
            </Template>
          }
        />
        <Route
          path="/search/:keyword"
          element={
            <Template>
              <SearchPage />
            </Template>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <Template>
              <PostPage />
            </Template>
          }
        />
        <Route
          path="/item/:itemId"
          element={
            <Template>
              <ProductPage />
            </Template>
          }
        />
        <Route
          path="/help"
          element={
            <Template>
              <HelpPage />
            </Template>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/write"
          element={
            <Template>
              <WritePage />
            </Template>
          }
        />
        <Route
          path="/edit/:postId"
          element={
            <Template>
              <WritePage />
            </Template>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

//권한별 페이지 라우팅 컴포넌트 필요
