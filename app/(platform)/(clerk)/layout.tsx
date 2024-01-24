import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const Marketinglayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-full bg-slate-100">
        <main className="pt-40 pb-20 bg-slate-100 flex justify-center">
          {children}
        </main>
      </div>
    </ClerkProvider>
  );
};

export default Marketinglayout;
