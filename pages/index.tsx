import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import LoginButton from "components/buttons/LoginButton";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>
          🌱 huertafamiliar.com - Organizar tu huerta familiar fácil y rápido
        </title>
        <meta
          name="description"
          content="huertafamiliar.com es una App para ayudarte a organizar y gestionar tu huerta familiar y sus cultivos de la forma más rápida y cómoda."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {session ? (
          <>
            Logueado como {session.user?.email} <br />
            <button onClick={() => signOut()}>Salir</button>
          </>
        ) : (
          <LoginButton />
        )}
      </main>
    </>
  );
};

export default Home;
