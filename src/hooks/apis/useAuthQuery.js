import { useMutation } from "@tanstack/react-query";
import { login, signup } from "../../api/auth";

export const useSigninMutation = () => {
  const { mutate } = useMutation(login);
  return mutate;
};

export const useSignupMutation = () => {
  const { mutate } = useMutation(signup);
  return mutate;
};
