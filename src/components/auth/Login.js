import React from "react";
import { LoginBlock } from "./Login.style";
import logo from "../../assets/transparent-logo.png";

const Login = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="loginBox">
        <img className="loginImg" src={logo} alt="logo" />
        <div className="inputDiv">
          <input
            className="loginEmailInput"
            name="email"
            type="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <input
            className="loginPwInput"
            name="password"
            type="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="submitButton" type="submit">
          로그인
        </button>
        <section className="loginSection">
          <span>비밀번호 재설정</span>
          <span>회원가입</span>
        </section>
      </div>
    </form>
  );
};

export default Login;
