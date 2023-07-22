import React, { useState } from "react";

const Register = ({
  formData,
  handleChange,
  handleEmailSelect,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="registerDiv">
        <label className="registerlabel">이메일</label>
        <div className="emailDiv">
          <span className="emailSpan">
            <input
              type="text" // email을 입력받을 때 text 타입으로 변경
              name="email"
              className="emailInput"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </span>
          <span className="emailSeparator">@</span>
          <span>
            <select
              className="emailSelect"
              value={formData.emailSelect}
              onChange={handleEmailSelect}
            >
              <option value="" disabled>
                선택해주세요
              </option>
              <option value="naver.com">naver.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="daum.net">daum.net</option>
              <option value="gmail.com">gmail.com</option>
              <option value="nate.com">nate.com</option>
              <option value="hotmail.com">hotmail.com</option>
              <option value="outlook.com">outlook.com</option>
              <option value="icloud.com">icloud.com</option>
            </select>
          </span>
        </div>
        <div>
          <button className="emailButton" name="emailAuth" type="button">
            이메일 인증하기
          </button>
        </div>
      </div>

      <div className="registerDiv">
        <label className="registerlabel">비밀번호</label>
        <div className="resisterExplan">
          영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
        </div>
        <input
          type="password"
          name="password"
          className="pwInput"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
        ></input>
      </div>

      <div className="registerDiv">
        <label className="registerlabel">비밀번호 확인</label>
        <input
          type="password"
          name="confirmPassword"
          className="pwInput"
          placeholder="비밀번호 확인"
          value={formData.confirmPassword}
          onChange={handleChange}
        ></input>
      </div>

      <div className="registerDiv">
        <label className="registerlabel">닉네임</label>
        <div className="resisterExplan">
          다른 유저와 겹치지 않도록 입력해주세요. (2~15자)
        </div>
        <input
          type="nickname"
          name="nickname"
          className="nameInput"
          placeholder="별명 (2~14자)"
          value={formData.nickname}
          onChange={handleChange}
        ></input>
      </div>

      <button type="submit" className="submitButton">
        회원가입 하기
      </button>
    </form>
  );
};

export default Register;
