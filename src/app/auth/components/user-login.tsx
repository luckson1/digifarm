"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import useStore from "@/lib/state-management";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const [setAuth, setFarmer, setBiz] = useStore((store) => [
    store.login,
    store.setFarmerForm,
    store.setBizForm,
  ]);
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: "Password Required" }),
  });

  type Values = z.infer<typeof formSchema>;
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<Values>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: Values) => {
    setAuth(), console.log(data);
    router.replace("/dashboard");
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <div className="flex flex-col">
              <p className="text-xs font-light tracking-widest">Email</p>
              <ErrorMessage
                errors={errors}
                name="email"
                as="h5"
                className="text-red-600"
              />
            </div>
            <Input
              {...register("email")}
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <div className="flex flex-col">
              <p className="text-xs font-light tracking-widest">Password</p>
              <ErrorMessage
                errors={errors}
                name="password"
                as="h5"
                className="text-red-600"
              />
            </div>
            <Input
              {...register("password")}
              id="password"
              placeholder="xxxxxxxxxxxx"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
            />
          </div>
          <Button>Login</Button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or Create an Account
          </span>
        </div>
      </div>
      <div className="flex  w-full space-x-4">
        <Button
          className="w-full"
          variant={"secondary"}
          onClick={() => {
            setFarmer();
            router.replace("/auth");
          }}
        >
          Sign Up as a Farmer
        </Button>

        <Button
          variant={"outline"}
          className="w-full"
          onClick={() => {
            setBiz();
            router.replace("/auth");
          }}
        >
          Sign up as a Buyer
        </Button>
      </div>
      <p className="font-bold">Guest Login:</p>
      <p>email:test@gmail.com</p>
      <p>password:12345</p>
    </div>
  );
}
