import { useMutation } from "@tanstack/react-query";
import { login, mailCheck, signup } from "../../api/auth";
import { basicAlert } from "../../shared/alert/SwalAlert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/modules/user";

export const useSigninMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      basicAlert("로그인 성공!").then(() => {
        navigate("/");
        dispatch(loginUser());
      });
    },
    onError: (error) => {
      basicAlert("로그인 실패!");
    },
  });
  return mutate;
};

export const useSignupMutation = () => {
  const { mutate } = useMutation(signup);
  return mutate;
};

export const useMailCheckMutation = () => {
  const { mutate, mutateAsync } = useMutation(mailCheck);
  return { mutate, mutateAsync };
};
