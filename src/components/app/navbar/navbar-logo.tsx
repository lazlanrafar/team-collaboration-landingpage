import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavbarLogo() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Team Flow Logo</span>
      <Image className="h-8 w-auto" src={Logo} width={202} height={45} alt="" />
    </Link>
  );
}
