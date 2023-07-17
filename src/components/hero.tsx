"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import useStore from "@/lib/state-management";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const setForm = useStore((store) => store.setBizForm);
  const router = useRouter();
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 w-full h-3/4">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full transform -translate-x-1/2 lg:block bg-inherit"
          viewBox="0 0 100 100"
          fill="hsl(var(--background))"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full hidden lg:flex"
          src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="food"
          width={600}
          height={800}
          quality={50}
          priority
        />
        <Image
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full lg:hidden"
          src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="food"
          width={300}
          height={300}
          quality={50}
          priority
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            From Farm to Table,
            <br className="hidden md:block" />{" "}
            <span className="inline-block ">Delivered with Love!</span>
          </h2>
          <p className="pr-5 mb-5 text-base  md:text-lg">
            Discover the bounty of Kenya and support local farmers. Join us at
            Digifarm and Taste the Difference.
          </p>
          <div className="flex items-center space-x-4">
            <Button
              size={"lg"}
              className="w-48"
              onClick={() => {
                setForm(), router.replace("/auth");
              }}
            >
              Sign Up
            </Button>
            <Button size={"lg"} variant={"ghost"} className="w-48 text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
