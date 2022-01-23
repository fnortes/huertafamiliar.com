import GithubSvg from "components/logos/GithubSvg";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      className="border-2 border-black rounded p-2"
      onClick={() => signIn("github")}
    >
      <GithubSvg width={24} height={24} />
      Entrar
    </button>
  );
}
