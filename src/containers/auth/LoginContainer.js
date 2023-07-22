import React, { useState } from "react";
import { LoginBlock } from "../../components/auth/Login.style";
import Login from "../../components/auth/Login";
import { useMutation } from "react-query";
import { login } from "../../api/auth"; // login 함수 import

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

  const mutation = useMutation((formData) =>
    login(formData.email, formData.password)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
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
