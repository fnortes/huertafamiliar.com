import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FC, useState } from "react";
import { LoginButton } from "./buttons/LoginButton";
import { Loader } from "./loader";
import { Logo } from "./logos/Logo";
import { Nav } from "./Nav";

export const Header: FC = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <header className="grid grid-cols-2 gap-2">
        <div className="text-left">
          <Logo />
        </div>
        <div className="text-right">
          <Link href="/">
            <a className="text-sm rounded bg-green-700 text-white p-1 pl-2 pr-2 inline-flex items-center justify-center hover:bg-opacity-80">
              Entrar
            </a>
          </Link>
        </div>
        {/* <Nav /> */}
      </header>
      <div className="flex flex-col justify-between lg:flex-row mt-10">
        <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              Organizar tu huerta familiar fácil y rápido
            </h2>
            <p className="text-base md:text-lg">
              <strong>huertafamiliar.com</strong> es una web para ayudarte a
              organizar y gestionar tu huerta familiar y sus cultivos de la
              forma más rápida y cómoda.
            </p>
          </div>
          <hr className="mb-6 border-gray-300" />
          <div className="flex">
            Poner aquí un listado de la features disponibles. Por ejemplo un
            listado de cards con capturas de ejemplo, etc...
            {/* <a href="/" aria-label="Play Song" className="mr-3">
              <div className="flex items-center justify-center w-10 h-10 text-white transition duration-300 transform rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:scale-110">
                <svg className="w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                </svg>
              </div>
            </a>
            <div className="flex flex-col">
              <div className="text-sm font-semibold">
                Rich the kid &amp; Famous Dex
              </div>
              <div className="text-xs text-gray-700">Rich Forever Intro</div>
            </div> */}
          </div>
        </div>
        <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
          {status === "loading" || loading ? (
            <Loader />
          ) : status === "unauthenticated" ? (
            <>
              <div className="mb-5 font-semibold">Identifícate</div>
              <div className="flex justify-center w-full mb-3">
                <LoginButton onClick={() => setLoading(true)} />
              </div>
              {/* <p className="max-w-md px-5 mb-3 text-xs text-gray-600 sm:text-sm md:mb-5">
                Sed ut unde omnis iste natus accusantium doloremque laudantium
                omnis iste.
              </p> */}
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
          ) : (
            <>
              Logueado como {session?.user?.email} <br />
              <button onClick={() => signOut()}>Salir</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
/*
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        
      </div>
*/
