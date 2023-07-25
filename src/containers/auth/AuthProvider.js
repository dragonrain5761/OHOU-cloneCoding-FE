import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../redux/modules/user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { user, isLoggedIn, isLoading } = useSelector((state) => state.user);

  const checkIsLoggedIn = () => {
    if (localStorage.getItem("google_token")) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const verifyUser = async () => {
      if (checkIsLoggedIn()) {
        try {
          const userFromServer = await fetchUserData(); // 서버에서 사용자 데이터를 가져옴
          dispatch(loginUser(userFromServer)); // 사용자 데이터로 loginUser 액션을 디스패치
        } catch (e) {
          dispatch(logoutUser()); // logoutUser 액션을 디스패치
        }
      } else {
        dispatch(logoutUser()); // logoutUser 액션을 디스패치
      }
    };

    verifyUser();
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
