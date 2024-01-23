import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-200  w-full flex items-center border-t shadow-2xl justify-between fixed bottom-0">
      <Link href="/privacy">
        <Button variant="ghost">Privacy</Button>
      </Link>
      <Link href="/terms">
        <Button variant="ghost">Terms Of Service</Button>
      </Link>
    </div>
  );
};

export default Footer;
