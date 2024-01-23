import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import React from "react";

const Marketingpage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center p-2 max-w-auto m-auto rounded-lg bg-yellow-300">
        <Medal />
        <h1 className="text-lg"> No.1 Task Management Tool</h1>
      </div>
      <div className="flex justify-center pt-6">
        <h1 className="text-xl font-bold">
          AgileRift: Elevating Team Dynamics
        </h1>
      </div>
      <div className="flex justify-center p-4 rounded-none max-w-auto m-auto bg-gradient-to-r from-pink-500 to-pink-700">
        <h1 className="text-xl font-bold">Work Forward</h1>
      </div>
      <div className="p-4 text-sm text-center font-extralight">
        AgileRift is a cutting-edge project management and collaboration
        platform designed to revolutionize team dynamics. With its intuitive
        interface and robust features, AgileRift empowers teams to seamlessly
        navigate complex projects, fostering agility and efficiency. From
        streamlined task management to real-time communication, AgileRift
        provides a unified workspace, bridging the gap between vision and
        execution. Elevate your team&apos;s performance with AgileRift, where
        innovation meets productivity
      </div>
      <div className="flex justify-center">
        <Button className="">
          <Link href="/sign-in">Try AgileRift For Free</Link>
        </Button>
      </div>
    </div>
  );
};

export default Marketingpage;
