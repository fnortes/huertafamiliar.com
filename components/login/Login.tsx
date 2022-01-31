import { FC } from "react";
import { Loader } from "../loader";
import { LoginPropsType } from "./login.types";
import { Unauthenticated } from "./Unauthenticated";
import { useSession } from "next-auth/react";

export const Login: FC<LoginPropsType> = ({
  userLoading,
  onClickLoginButton,
}) => {
  const { status } = useSession();

  if (status === "loading" || userLoading) return <Loader />;
  if (status === "unauthenticated")
    return <Unauthenticated onClickLoginButton={onClickLoginButton} />;

  return null;
};
