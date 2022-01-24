import Link from "next/link";
import { ElementType } from "react";
import { LogoSvg } from "./LogoSvg";

export const Logo: ElementType = () => (
  <Link href="/">
    <a
      aria-label="huertafamiliar.com"
      title="huertafamiliar.com - Organizar tu huerta familiar fácil y rápido"
      className="inline-flex items-center lg:mx-auto"
    >
      <LogoSvg />
      <span className="ml-2 text-xl font-bold tracking-wide">
        huertafamiliar.com
      </span>
    </a>
  </Link>
);
