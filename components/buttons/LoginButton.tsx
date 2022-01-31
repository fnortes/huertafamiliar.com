import { GithubSvg } from "components/login/GithubSvg";
import { signIn } from "next-auth/react";
import { FC } from "react";
import { ButtonPropsType } from "./button.types";

export const LoginButton: FC<ButtonPropsType> = ({ onClick }) => {
  const handleOnClick = () => {
    signIn("github");
    onClick && onClick();
  };

  return (
    <button
      className="text-sm rounded bg-green-secondary text-white p-1 pl-2 pr-2 inline-flex items-center justify-center hover:bg-opacity-80"
      onClick={handleOnClick}
    >
      <GithubSvg width={24} height={24} />
      Iniciar sesión con Github
    </button>
  );
};
