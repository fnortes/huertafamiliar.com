import { Session } from "next-auth";

export type UserLoadingType = {
  userLoading: boolean;
};

export type UnauthenticatedPropsType = {
  onClickLoginButton: () => void;
};

export type LoginPropsType = UnauthenticatedPropsType & UserLoadingType;

type ExitButtonType = {
  onClickExitButton: () => void;
};

export type HeaderPropsType = UserLoadingType & ExitButtonType;

export type DropdownUserPropsType = ExitButtonType & {
  user: Session["user"];
};
