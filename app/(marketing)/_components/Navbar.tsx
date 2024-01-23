import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-200 p-3 flex items-center border-b shadow-2xl justify-between">
      <Logo />
      <div className="space-x-4">
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Get AgileRift For Free</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
