import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton, auth } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  const { orgId } = auth();
  return (
    <div className="h-14 flex bg-slate-400 items-center justify-between">
      <div className="flex">
        <Logo />
        <Button className="ml-4">Create</Button>
      </div>
      <div className="flex">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterSelectOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
        />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
