import Register from "../../components/auth/Register";
import React, { useState } from "react";
import { RegisterBlock } from "../../components/auth/Register.style";
import logo from "../../assets/transparent-logo.png";
import {
  useMailCheckMutation,
  useSignupMutation,
} from "../../hooks/apis/useAuthQuery";
import { basicAlert } from "../../shared/alert/SwalAlert";
import { useNavigate } from "react-router-dom";

const RegisterContainer = () => {
  const [formData, setFormData] = useState({
    email: "",
    emailSelect: "",
    password: "",
    pwCheck: "",
    nickname: "",
  });
  const [emailCheck, setEmailCheck] = useState("");
  const [sentEmail, setSentEmail] = useState(false);
  const [authCode, setAuthCode] = useState(4); // null로 변경
  const [emailVerified, setEmailVerified] = useState(false);
  const registerMutate = useSignupMutation();
  const mailCheckMutate = useMailCheckMutation();
  const navigate = useNavigate();

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

  const handleMailCheck = async (e) => {
    setSentEmail(true);
    e.preventDefault();
    console.log(formData);
    try {
      const response = await mailCheckMutate.mutateAsync({
        email: `${formData.email}@${formData.emailSelect}`,
      });
      setAuthCode((prev) => response.data); //또는 response
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeEmailCheck = (e) => {
    setEmailCheck(e.target.value);
  };

  const onCheckEmail = (e) => {
    e.preventDefault();
    if (emailCheck == authCode) {
      basicAlert("인증되었습니다 :)");
      setEmailVerified(true);
    } else {
      basicAlert("인증 실패");
      setFormData({ ...formData, email: "", emailSelect: "" });
      setEmailCheck("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //4 -> null로 변경
    // if (!emailVerified) {
    //   basicAlert("이메일 인증을 먼저 완료해주세요.");
    // } else {
    registerMutate(formData);
    // }
  };

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <>
      <RegisterBlock>
        <img
          className="RegisterImg"
          src={logo}
          alt="register"
          onClick={onClickLogo}
        ></img>
        <div className="registerBox">
          <label className="registerlabel">회원가입</label>
          <Register
            formData={formData}
            emailCheck={emailCheck}
            sentEmail={sentEmail}
            onCheckEmail={onCheckEmail}
            onChangeEmailCheck={onChangeEmailCheck}
            handleMailCheck={handleMailCheck}
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
