"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { AuthFormProps } from "./AuthForm";
import { emailConstraint } from "@/app/schemas.ts/common";

const RecoverPasswordForm = ({ setTypeSelected }: AuthFormProps) => {
  const [isLoading, setisLoading] = useState<boolean>(false);

  // ============ Form ============
  const formSchema = z.object({
    email: emailConstraint,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit } = form;

  // ============ Password Recovery ===========
  function onSubmit(user: z.infer<typeof formSchema>) {
    setisLoading(true);
    try {
      console.log(user);
    } catch (error: any) {
      toast.error(error.message, { duration: 2500 });
    } finally {
      toast("You submitted the following values:", {
        description: (
          <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
            <code>{JSON.stringify(user, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
      });
      setisLoading(false);
    }
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Recuperar Contraseña</CardTitle>
        <CardDescription>
          Te enviaremos un correo para recuperar tu contraseña
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} id="recover-password-form">
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Correo Electrónico
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
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
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button
            className="my-6"
            type="submit"
            form="recover-password-form"
            disabled={isLoading}
          >
            {isLoading && (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            )}
            Recuperar
          </Button>
        </Field>
        <p className="text-center text-sm text-white mt-3">
          <Button variant="link" onClick={() => setTypeSelected("login")}>
            Volver
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default RecoverPasswordForm;
