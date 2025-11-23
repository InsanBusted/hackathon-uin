"use client";

import Image from "next/image";
import Maskot from "@/public/maskot.png";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

interface CardLoginProps {
  form: UseFormReturn<LoginForm>;
  onSubmit: (data: LoginForm) => void;
}

const CardLogin = ({ form, onSubmit }: CardLoginProps) => {
  return (
    <div className="flex flex-col md:flex-row w-[90vw] max-w-4xl h-[60vh] md:h-[50vh] rounded-xl overflow-hidden shadow-lg">
      {/* Bagian kiri gradient */}
      <div className="bg-gradient-to-b from-[rgba(21,101,192,1)] to-[rgba(10,47,90,1)] md:w-[35%] w-full flex items-center justify-center p-4">
        <Image src={Maskot} width={300} height={300} alt="maskot" />
      </div>

      {/* Bagian kanan konten */}
      <div className="flex-1 bg-white flex flex-col items-center justify-center p-8 gap-6">
        <h1 className="text-2xl font-bold text-black">Welcome</h1>

        <div className="w-full max-w-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Masukkan Email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Masukkan password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Masukkan Password</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CardLogin;
