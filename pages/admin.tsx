import { Header } from "components/Header";
import { Login } from "components/login/Login";
import { useEffect, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Admin: NextPage = () => {
  const { status } = useSession();
  const { push } = useRouter();
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      push("/");
    }
  }, [status, push]);

  return (
    <>
      <Head>
        <title>huertafamiliar.com - Administración</title>
        <meta
          name="description"
          content="huertafamiliar.com - Organizar y gestionar tu huerta familiar y sus cultivos de la forma más rápida y cómoda."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-green-50 min-h-screen flex flex-col items-center">
        <div className="w-full p-2">
          <Header
            userLoading={userLoading}
            onClickExitButton={() => setUserLoading(true)}
          />
        </div>
      </main>
    </>
  );
};

export default Admin;
