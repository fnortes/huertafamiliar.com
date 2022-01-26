import { FC } from "react";
import { HeaderPropsType } from "./login/login.types";
import { Logo } from "./logos/Logo";
import { NavUser } from "./NavUser";

export const Header: FC<HeaderPropsType> = ({
  userLoading,
  onClickExitButton,
}) => {
  return (
    <header className="grid gap-2 grid-cols-auto-max-content">
      <Logo />
      <NavUser
        userLoading={userLoading}
        onClickExitButton={onClickExitButton}
      />
    </header>
  );
};
