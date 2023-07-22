import React from "react";
import { LoginBlock } from "./Login.style";

const Login = () => {
  return (
    <>
      <LoginBlock>
        <label>오늘의집</label>
        <form>
          <div>
            <input name="email" type="email" placeholder="이메일"></input>
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
            ></input>
          </div>
          <button>로그인</button>
          <section>
            <span>비밀번호 재설정</span>
            <span>회원가입</span>
          </section>
        </form>
        <div>로그인에 문제가 있으신가요?</div>
      </LoginBlock>
    </>
  );
};

export default Login;
