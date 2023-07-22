import React from "react";
import { RegisterBlock, RegisterBox } from "./Register.style";

const Register = () => {
  return (
    <>
      <RegisterBlock>
        <div>오늘의집</div>
        <div className="registerBox">
          <h1>회원가입</h1>
          <form>
            <div>
              <label className="registerlabel">이메일</label>
              <div className="emailDiv">
                <span className="emailSpan">
                  <input
                    className="emailInput"
                    type="email"
                    placeholder="이메일"
                  ></input>
                </span>
                <span className="emailSeparator">@</span>
                <span>
                  <select className="emailSelect">
                    <option selected disabled>
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
                    <option value="">직접 입력</option>
                  </select>
                </span>
              </div>
            </div>
            <div>
              <button className="emailButton" name="emailAuth" type="button">
                이메일 인증하기
              </button>
            </div>
            <div>
              <label className="registerlabel">비밀번호</label>
              <div>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</div>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
              ></input>
            </div>
            <div>
              <label className="registerlabel">비밀번호</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="비밀번호 확인"
              ></input>
            </div>
            <div>
              <label className="registerlabel">닉네임</label>
              <div>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</div>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
              ></input>
            </div>
            <button type="submit">회원가입 하기</button>
          </form>
          <p>이미 아이디가 있으신가요?</p>
          <div>로그인</div>
        </div>
      </RegisterBlock>
    </>
  );
};

export default Register;
