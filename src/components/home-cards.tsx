import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Image from "next/image";

export function DownloadCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          Download our App on Google Play Store
        </CardTitle>
        <CardDescription>Shop From Anywhere Any Time</CardDescription>
      </CardHeader>
      <CardContent className="text-base font-light tracking-wide">
        <p>Have the largest food market at the palm of your hand</p>
      </CardContent>
      <CardFooter>
        <div className="md:space-x-6 space-y-4 md:space-y-0 w-full flex flex-col md:flex-row justify-center items-center">
          <Button size={"lg"}>
            <Image
              src="/play2.png"
              alt="google play"
              height={100}
              width={100}
            />
          </Button>
          <Button size={"lg"}>
            <Image
              src="/store2.png"
              alt="google play"
              height={100}
              width={100}
            />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export function HowItWorksCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">How it Works</CardTitle>
        <CardDescription>Using our service is as easy as ABC</CardDescription>
        <CardContent>
          <div className="flex flex-col md:flex-row space-y-2   md:space-y-0 space-x-2 lg:space-x-6 text-sm justify-center items-center">
            <div className="flex  flex-col">
              <div className="text-base font-light tracking-wide">
                <Icons.register className="w-12 h-12 text-primary" />
                <p>1. Register online</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-base font-light tracking-wide">
                <Icons.search className="w-12 h-12 text-primary" />
                <p>2. Search for a product</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-base font-light tracking-wide">
                <Icons.cart className="w-12 h-12 text-primary" />
                <p>3. Make a purchase</p>
              </div>
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
