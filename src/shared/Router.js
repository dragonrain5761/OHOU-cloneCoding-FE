import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import MainPage from "../pages/pages/MainPage";
import SearchPage from "../pages/pages/SearchPage";
import ProductPage from "../pages/pages/ProductPage";
import HelpPage from "../pages/pages/HelpPage";
import WritePage from "../pages/pages/WritePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import PostPage from "../pages/pages/PostPage";
import Template from "../containers/layout/Template";
import EditPage from "../pages/pages/EditPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginUser } from "../redux/modules/user";
import { basicAlert } from "./alert/SwalAlert";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("Access")) {
      dispatch(loginUser());
    }
  }, [dispatch]);
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
            <Template header footer>
              <SearchPage />
            </Template>
          }
        />

        <Route
          path="/item/:itemId"
          element={
            <Template header footer>
              <ProductPage />
            </Template>
          }
        />
        <Route
          path="/help"
          element={
            <Template header footer>
              <HelpPage />
            </Template>
          }
        />
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route
            path="/write"
            element={
              <Template footer>
                <WritePage />
              </Template>
            }
          />
          <Route
            path="/post/:postId"
            element={
              <Template header footer>
                <PostPage />
              </Template>
            }
          />
          <Route
            path="/edit/:postId"
            element={
              <Template footer>
                <EditPage />
              </Template>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (isLoggedIn) return <Outlet />;
  else {
    basicAlert("로그인이 필요합니다.");
    return <Navigate to="/login" />;
  }
};

const AuthRoute = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};
