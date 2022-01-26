import { FC } from "react";
import { LoginButton } from "components/buttons/LoginButton";
import { UnauthenticatedPropsType } from "./login.types";
import Link from "next/link";

export const Unauthenticated: FC<UnauthenticatedPropsType> = ({
  onClickLoginButton,
}) => {
  return (
    <>
      <div className="mb-5 font-semibold">Identifícate</div>
      <div className="flex justify-center w-full mb-3">
        <LoginButton onClick={onClickLoginButton} />
      </div>
      <div className="flex items-center w-full mb-5">
        <hr className="flex-1 border-gray-300" />
        <div className="px-3 text-xs text-gray-500 sm:text-sm">o</div>
        <hr className="flex-1 border-gray-300" />
      </div>
      <Link href="/">
        <a className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none">
          Habilita registro con sólo email de nexthAuth
        </a>
      </Link>
    </>
  );
};
