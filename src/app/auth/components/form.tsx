"use client";
import useStore from "@/lib/state-management";
import React from "react";
import { UserLoginForm } from "./user-login";
import { FarmerSignUpForm } from "./farmer-signup";
import { BuyerSignUpForm } from "./buyer-signup";

export default function Form() {
  const form = useStore((store) => store.form);
  return (
    <>
      {form === "Login" ? (
        <UserLoginForm />
      ) : form === "Farmer" ? (
        <FarmerSignUpForm />
      ) : (
        <BuyerSignUpForm />
      )}
    </>
  );
}
