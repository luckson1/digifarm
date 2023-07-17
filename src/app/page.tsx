import Collections from "@/components/collections";
import { Hero } from "@/components/hero";
import { DownloadCard, HowItWorksCard } from "@/components/home-cards";
import { Icons } from "@/components/icons";
import Products from "@/components/products";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Page() {
  return (
    <div className="flex justify-center items-center text-6xl flex-col px-4 sm:px-6 lg:px-8 ">
      <Hero />
      <Collections />
      <div className="my-7 md:my-16 flex lg:flex-row flex-col space-y-2 justify-between w-full px-4 sm:px-6 lg:px-8">
        <DownloadCard />
        <HowItWorksCard />
      </div>
      <div className="flex flex-col space-y-3 px-4 sm:px-6 lg:px-8 my-7 md:my-16">
        <p className="text-2xl font-light tracking-tight">Hot Deals</p>
        <Products />
        <Button variant={"ghost"} className="w-60 text-primary">
          Browse more products
          <Icons.right className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
