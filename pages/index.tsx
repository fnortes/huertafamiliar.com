import { Header } from "components/Header";
import { Login } from "components/login/Login";
import { useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { status } = useSession();
  const { push } = useRouter();
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      push("/admin");
    }
  }, [status, push]);

  return (
    <>
      <Head>
        <title>
          huertafamiliar.com - Organizar tu huerta familiar fácil y rápido
        </title>
        <meta
          name="description"
          content="huertafamiliar.com es una web para ayudarte a organizar y gestionar tu huerta familiar y sus cultivos de la forma más rápida y cómoda."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-green-50 min-h-screen flex flex-col items-center">
        <div className="w-full max-w-4xl p-2">
          <Header
            userLoading={userLoading}
            onClickExitButton={() => setUserLoading(true)}
          />
          <div className="flex flex-col justify-between lg:flex-row mt-10">
            <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                  Organizar tu{" "}
                  <span className="text-orange-600 uppercase font-extrabold">
                    huerta familiar
                  </span>{" "}
                  fácil y rápido
                </h2>
                <p className="text-base md:text-lg text-gray-700">
                  <strong>huertafamiliar.com</strong> es una web para ayudarte a
                  organizar y gestionar tu huerta familiar y sus cultivos de la
                  forma más rápida y cómoda.
                </p>
              </div>
              <hr className="mb-6 border-gray-300" />
              <div className="flex text-gray-700">
                Poner aquí un listado de la features disponibles. Por ejemplo un
                listado de cards con capturas de ejemplo, etc...
              </div>
            </div>
            <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
              <Login
                userLoading={userLoading}
                onClickLoginButton={() => setUserLoading(true)}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
