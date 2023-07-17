import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Form from "./components/form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Login or create a new account",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative  h-fit min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden  h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1581515286348-98549702050f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)",
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              src={"/logo.png"}
              height={50}
              width={50}
              alt="Digi Farm"
              className="mr-2 h-6 w-6"
            />{" "}
            Digi Farm
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo; Life is too short to eat boring food. Spice it up with
                farm-fresh flavors and let your taste buds dance! &rdquo;
              </p>
              <footer className="text-sm">- Anonymous Foodie Farmer</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <Form />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
