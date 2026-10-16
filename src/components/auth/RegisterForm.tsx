"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { AuthFormProps } from "./AuthForm";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import {
  emailConstraint,
  nameConstraint,
  passwordCreationConstraint,
} from "@/app/schemas.ts/common";
const SignUpForm = ({ setTypeSelected }: AuthFormProps) => {
  const [isLoading, setisLoading] = useState<boolean>(false);

  // ============ Form ============
  const formSchema = z.object({
    name: nameConstraint,
    email: emailConstraint,
    password: passwordCreationConstraint,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = form;

  // ============ Sign Up ===========
  const onSubmit = async (user: z.infer<typeof formSchema>) => {
    setisLoading(true);

    try {
      console.log(user);
    } catch (error: any) {
      // Manejar errores específicos de Supabase
      if (error.message.includes("User already registered")) {
        toast.error("Este correo electrónico ya está registrado", {
          duration: 4000,
        });
      } else if (
        error.message.includes("Password should be at least 6 characters")
      ) {
        toast.error("La contraseña debe tener al menos 6 caracteres", {
          duration: 4000,
        });
      } else if (error.message.includes("Invalid email")) {
        toast.error("Por favor ingresa un correo electrónico válido", {
          duration: 4000,
        });
      } else {
        toast.error(error.message || "Error al registrar el usuario", {
          duration: 4000,
        });
      }
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Crear Cuenta</CardTitle>
        <CardDescription>
          Crea una cuenta para acceder a todo el contenido
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} id="signup-form">
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">Nombre</FieldLabel>
                  <Input
                    {...field}
                    id="form-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Pon tu nombre"
                    autoComplete="off"
                    disabled={isLoading}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Correo Electrónico</FieldLabel>
                  <Input
                    {...field}
                    id="form-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="name@example.com"
                    autoComplete="off"
                    disabled={isLoading}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-password">Contraseña</FieldLabel>
                  <Input
                    {...field}
                    id="form-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="*****"
                    autoComplete="off"
                    type="password"
                    disabled={isLoading}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Field orientation="horizontal">
          <Button
            className="my-6 w-full"
            type="submit"
            form="signup-form"
            disabled={isLoading}
          >
            {isLoading && (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            )}
            Registrarse
          </Button>
        </Field>
        <p className="text-center text-sm text-black mt-4">
          ¿Ya tienes una cuenta?{" "}
          <Button variant="link" onClick={() => setTypeSelected("login")}>
            Inicia sesión
          </Button>{" "}
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
