import React, { useState } from "react";
import { LoginBlock } from "../../components/auth/Login.style";
import Login from "../../components/auth/Login";
import { useSigninMutation } from "../../hooks/apis/useAuthQuery";

const LoginContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const loginMutate = useSigninMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutate(formData);
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
