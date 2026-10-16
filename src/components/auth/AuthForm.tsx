"use client";

import RecoverPasswordForm from "./RecoverPasswordForm";
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

export interface AuthFormProps {
  setTypeSelected: Dispatch<
    SetStateAction<"register" | "login" | "recover-password">
  >;
}

interface AuthModalProps {
  type: "register" | "login" | "recover-password";
}

const AuthForm = ({ type }: AuthModalProps) => {
  const [typeSelected, setTypeSelected] = useState<
    "register" | "login" | "recover-password"
  >(type);

  return (
    <div
      className="mx-auto bg-background max-w-lg lg:border lg:border-white/50 mt-10 lg:p-6"
      style={{ borderRadius: 20 }}
    >
      {typeSelected === "login" && (
        <LogInForm setTypeSelected={setTypeSelected} />
      )}
      {typeSelected === "register" && (
        <RegisterForm setTypeSelected={setTypeSelected} />
      )}
      {typeSelected === "recover-password" && (
        <RecoverPasswordForm setTypeSelected={setTypeSelected} />
      )}
    </div>
  );
};

export default AuthForm;
