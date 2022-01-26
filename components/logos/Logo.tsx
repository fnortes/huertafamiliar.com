import { ElementType } from "react";
import { LogoSvg } from "./LogoSvg";
import Link from "next/link";

export const Logo: ElementType = () => (
  <Link href="/">
    <a
      aria-label="huertafamiliar.com"
      title="huertafamiliar.com - Organizar tu huerta familiar fácil y rápido"
      className="inline-flex items-center"
    >
      <LogoSvg />
      <span className="ml-2 text-xl font-bold tracking-wide text-green-primary">
        huertafamiliar.com
      </span>
    </a>
  </Link>
);
