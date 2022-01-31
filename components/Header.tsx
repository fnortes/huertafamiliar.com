import Link from "next/link";
import { FC } from "react";
import { HeaderPropsType } from "./login/login.types";
import { Logo } from "./logos/Logo";
import { NavUser } from "./NavUser";
import { CalendarIcon, ViewGridIcon, HomeIcon } from "@heroicons/react/solid";

export const Header: FC<HeaderPropsType> = ({
  userLoading,
  onClickExitButton,
}) => {
  return (
    <header className="grid grid-cols-auto-max-content-auto items-center gap-2 p-2">
      <Logo />
      <ul className="grid grid-cols-3 gap-2 justify-items-center">
        <li className="w-full max-w-48 h-full">
          <Link href="/admin">
            <a className="text-sm rounded bg-green-secondary text-white grid grid-rows-1 items-center justify-items-center p-2 bg-opacity-70">
              <HomeIcon className="h-5 w-5" />
              <span>Mis cultivos</span>
            </a>
          </Link>
        </li>
        <li className="w-full max-w-48 h-full">
          <Link href="/admin">
            <a className="text-sm rounded text-gray-500 grid grid-rows-1 items-center justify-items-center p-2 hover:bg-green-secondary hover:text-white">
              <ViewGridIcon className="h-5 w-5" />
              <span>Organizador</span>
            </a>
          </Link>
        </li>
        <li className="w-full max-w-48 h-full">
          <Link href="/admin">
            <a className="text-sm rounded text-gray-500 grid grid-rows-1 items-center justify-items-center p-2 hover:bg-green-secondary hover:text-white">
              <CalendarIcon className="h-5 w-5" />
              <span>Tareas</span>
            </a>
          </Link>
        </li>
      </ul>
      <NavUser
        userLoading={userLoading}
        onClickExitButton={onClickExitButton}
      />
    </header>
  );
};
