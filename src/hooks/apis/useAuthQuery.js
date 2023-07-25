import { useMutation } from "@tanstack/react-query";
import { login, mailCheck, signup } from "../../api/auth";

export const useSigninMutation = () => {
  const { mutate } = useMutation(login);
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
