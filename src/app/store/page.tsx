import { CommandMenu } from "@/components/command-menu";
import Products from "@/components/products";
import React from "react";

export default function Page() {
  return (
    <div className=" h-fit min-h-screen py-5 px-7 flex flex-col md:px-10 space-y-4 lg:space-x-4 ">
      <div className="w-full flex justify-center">
        <CommandMenu />
      </div>
      <div className="w-full ">
        <Products />
      </div>
    </div>
  );
}
