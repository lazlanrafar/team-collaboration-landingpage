import { Logo, LogoDark } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  is_dark?: boolean;
}

export default function NavbarLogo({ is_dark = false }: Props): JSX.Element {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Team Flow Logo</span>
      <Image
        className="h-8 w-auto"
        src={is_dark ? LogoDark : Logo}
        width={202}
        height={45}
        alt=""
      />
    </Link>
  );
}
