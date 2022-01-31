import { DropdownUser } from "./DropdownUser";
import { FC } from "react";
import { HeaderPropsType } from "./login/login.types";
import { Loader } from "./loader";
import { useSession } from "next-auth/react";

export const NavUser: FC<HeaderPropsType> = ({
  userLoading,
  onClickExitButton,
}) => {
  const { data: session, status } = useSession();

  if (status === "loading" || userLoading) return <Loader />;
  if (status === "authenticated" && session?.user)
    return (
      <div className="flex justify-end h-full items-center">
        <DropdownUser
          user={session.user}
          onClickExitButton={onClickExitButton}
        />
      </div>
    );

  return null;
};
