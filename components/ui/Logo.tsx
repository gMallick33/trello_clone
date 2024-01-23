import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex">
      <Image alt="logo" src="/logo.svg" height={30} width={30} />
      <div className="text-center text-lg text-sky-600"> AgileRift</div>
    </Link>
  );
};

export default Logo;
