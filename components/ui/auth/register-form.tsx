"use client";
import * as z from "zod";
import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../input";
import { Button } from "../button";
import { FormError } from "@/components/global/form-error";
import { FormSuccess } from "@/components/global/form-success";
import { register } from "@/actions/register";
import { useState, useTransition } from "react";

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");


  const [isPending , startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name:""
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setError("")
    setSuccess("")

    startTransition(()=>{
      register(data)
      .then((data)=>{
        setError(data.error)
        setSuccess(data.success)
  
      })
    })
  }

  

  return (
    <CardWrapper
      headerLabel="Create an Account!"
      backButtonLabel="Already have an account? login"
      backButtonHref="/auth/login/"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input disabled={isPending} placeholder="jhon doe"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled={isPending} placeholder="jhon.doe@emaple.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

          />
          
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input disabled={isPending} placeholder="securePassword" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
          type="submit"
          className="w-full"
          >
            Create an Account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
