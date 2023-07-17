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
import { usePlacesWidget } from "react-google-autocomplete";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function BuyerSignUpForm({ className, ...props }: UserAuthFormProps) {
  // const {
  //   placePredictions,
  //   getPlacePredictions,
  //   isPlacePredictionsLoading,
  // } = useGoogle({
  //   apiKey: process.env.REACT_APP_GOOGLE,
  // });
  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE,
    onPlaceSelected: (place) => setValue("location", place),
  });
  const [setAuth, setLogin] = useStore((store) => [
    store.login,
    store.setLoginForm,
  ]);
  const router = useRouter();

  const formSchema = z.object({
    organisation: z
      .string()
      .min(1, { message: "Name of Organisation Required" }),
    location: z.string().min(1, { message: "Location Required" }),
    phone: z
      .string()
      .regex(/^(?:\+254|0)[17]\d{8}$/, {
        message: "Enter a valid phone number",
      }),
    website: z.string().url(),
    firstName: z.string().min(1, { message: "First Name Required" }),
    lastName: z.string().min(1, { message: "Last Name Required" }),
    email: z.string().email(),
    password: z.string().min(1, { message: "Password Required" }),
  });

  type Values = z.infer<typeof formSchema>;
  const {
    handleSubmit,
    setValue,
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
        <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Organisation Details
              </span>
            </div>
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="organisation">
              Name of Organisation
            </Label>
            <div className="flex flex-col">
              <p className="text-xs font-light tracking-widest">Organisation</p>
              <ErrorMessage
                errors={errors}
                name="organisation"
                as="h5"
                className="text-red-600"
              />
            </div>
            <Input
              {...register("organisation")}
              id="organisation"
              placeholder="Acme Inc"
              type="string"
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="first-name">
              Location
            </Label>
            <div className="flex flex-col">
              <p className="text-xs font-light tracking-widest">Location</p>
              <ErrorMessage
                errors={errors}
                name="location"
                as="h5"
                className="text-red-600"
              />
            </div>

            <Input
              //  ref={ref}
              {...register("location")}
              id="location"
              placeholder="Start typing your location..."
              type="string"
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="website">
              Website
            </Label>
            <div className="flex flex-col">
              <p className="text-xs font-light tracking-widest">Website</p>
              <ErrorMessage
                errors={errors}
                name="website"
                as="h5"
                className="text-red-600"
              />
            </div>
            <Input
              {...register("website")}
              id="website"
              placeholder="Acme.com"
              type="string"
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="phone-number">
              Phone Number
            </Label>
            <div className="flex flex-col">
              <p className="text-xs font-light tracking-widest">Phone Number</p>
              <ErrorMessage
                errors={errors}
                name="phone"
                as="h5"
                className="text-red-600"
              />
            </div>
            <Input
              {...register("phone")}
              id="phone-number"
              placeholder="07XXXXXXXX"
              type="tel"
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Contact Person Details
              </span>
            </div>
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="first-name">
              First Name
            </Label>
            <div className="flex flex-col">
              <p className="text-xs font-light tracking-widest">First Name</p>
              <ErrorMessage
                errors={errors}
                name="firstName"
                as="h5"
                className="text-red-600"
              />
            </div>
            <Input
              {...register("firstName")}
              id="first-name"
              placeholder="John"
              type="string"
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="last-name">
              Last Name
            </Label>
            <div className="flex flex-col">
              <p className="text-xs font-light tracking-widest">Last Name</p>
              <ErrorMessage
                errors={errors}
                name="lastName"
                as="h5"
                className="text-red-600"
              />
            </div>
            <Input
              {...register("lastName")}
              id="last-name"
              placeholder="Doe"
              type="string"
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
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
          <Button>Sign In</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Have an Account?
          </span>
        </div>
      </div>

      <Button
        variant={"ghost"}
        className="text-primary"
        onClick={() => {
          setLogin();
          router.replace("/auth");
        }}
      >
        Login
      </Button>
    </div>
  );
}
