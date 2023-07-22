import Register from "../../components/auth/Register";
import React, { useState } from "react";
import { RegisterBlock } from "../../components/auth/Register.style";
import logo from "../../assets/transparent-logo.png";
import { registerUser } from "../../api/auth";

const RegisterContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    emailSelect: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleEmailSelect = (e) => {
    setFormData({
      ...formData,
      emailSelect: e.target.value,
    });
    console.log("Selected Email Domain:", e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("회원가입 정보 전달");
    const email = formData.email + "@" + formData.emailSelect;
    console.log(formData);

    try {
      const response = await registerUser({ ...formData, email });
      console.log("회원가입 성공:", response);
    } catch (error) {
      console.error(error.message);
    }
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
