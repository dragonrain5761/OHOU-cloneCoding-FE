import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/pages/MainPage";
import SearchPage from "../pages/pages/SearchPage";
import ArticlePage from "../pages/pages/ArticlePage";
import HelpPage from "../pages/pages/HelpPage";
import WritePage from "../pages/pages/WritePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

const Router = () => {
  //api명세서 따라서 path 수정해주세요
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
