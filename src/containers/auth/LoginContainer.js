import React, { useState } from "react";
import Login from "../../components/auth/Login";
import { loginUser } from "../../api/auth";
import { LoginBlock } from "../../components/auth/Login.style";

const LoginContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("로그인 정보 전달");

    try {
      const response = await loginUser(formData);
      console.log("로그인 성공:", response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <LoginBlock>
      <Login
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </LoginBlock>
  );
};

export default LoginContainer;
