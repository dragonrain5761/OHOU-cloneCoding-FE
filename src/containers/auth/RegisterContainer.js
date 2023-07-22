import Register from "../../components/auth/Register";
import React, { useState } from "react";
import { RegisterBlock } from "../../components/auth/Register.style";
import logo from "../../assets/transparent-logo.png";
import { useMutation } from "react-query";
import { signup } from "../../api/auth"; // signup 함수 import

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

  const mutation = useMutation((formData) =>
    signup(formData.email, formData.password)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <>
      <RegisterBlock>
        <img className="RegisterImg" src={logo}></img>
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
