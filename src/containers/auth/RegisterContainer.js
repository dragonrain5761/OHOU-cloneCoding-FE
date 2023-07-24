import Register from "../../components/auth/Register";
import React, { useState } from "react";
import { RegisterBlock } from "../../components/auth/Register.style";
import logo from "../../assets/transparent-logo.png";
import { useSignupMutation } from "../../hooks/apis/useAuthQuery";

const RegisterContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    emailSelect: "",
    password: "",
    pwCheck: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEmailSelect = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      emailSelect: value,
    }));
  };

  const registerMutate = useSignupMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutate(formData);
  };

  return (
    <>
      <RegisterBlock>
        <img className="RegisterImg" src={logo} alt="register"></img>
        <div className="registerBox">
          <label className="registerlabel">회원가입</label>
          <Register
            formData={formData}
            handleChange={handleChange}
            handleEmailSelect={handleEmailSelect}
            handleSubmit={handleSubmit}
          />
        </div>
      </RegisterBlock>
    </>
  );
};

export default RegisterContainer;
