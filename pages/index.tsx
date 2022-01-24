import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          🌱 huertafamiliar.com - Organizar tu huerta familiar fácil y rápido
        </title>
        <meta
          name="description"
          content="huertafamiliar.com es una web para ayudarte a organizar y gestionar tu huerta familiar y sus cultivos de la forma más rápida y cómoda."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-green-50 min-h-screen flex flex-col items-center">
        <div className="w-full max-w-4xl p-2">
          <Header />
        </div>
      </main>
    </>
  );
};

export default Home;
