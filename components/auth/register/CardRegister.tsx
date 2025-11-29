"use client";

import Image from "next/image";
import Maskot from "@/public/image/gatotKetawa.png";
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
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
  role: string;
}

interface CardRegisterProps {
  form: UseFormReturn<RegisterForm>;
  onSubmit: (data: RegisterForm) => void;
}

const CardRegister = ({ form, onSubmit }: CardRegisterProps) => {
  return (
    <div className="flex flex-col md:flex-row w-[90vw] max-w-4xl h-[70vh] md:h-[60vh] rounded-xl overflow-hidden shadow-lg">
      {/* Bagian kiri gradient */}
      <div className="bg-[#ECECEC] flex justify-center items-center p-10">
        <div className="relative w-72 h-72 md:w-85 md:h-85">
          <Image
            src={Maskot}
            alt="Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Bagian kanan konten */}
      <div className="flex-1 bg-white flex flex-col items-center justify-center p-8 gap-6">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-3xl font-bold text-[#64B5F6]">Welcome</h1>
          <p className="text-sm text-[#64B5F6]">Create an Account</p>
        </div>

        <div className="w-full max-w-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="username:"
                        className="text-black border-none rounded-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email:"
                        className="text-black border-none rounded-lg"
                        {...field}
                      />
                    </FormControl>
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
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password:"
                        className="text-black border-none rounded-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Role */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="text-black border-none rounded-lg w-full">
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CLIENT">CLIENT</SelectItem>
                          <SelectItem value="COMPANY">COMPANY</SelectItem>
                          <SelectItem value="USER">USER</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center mt-4">
                <Button
                  type="submit"
                  className="mx-auto w-[60%] bg-[#64B5F6] text-[#FFFFFF] hover:bg-[#42A5F5]"
                >
                  Continue
                </Button>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm text-black">
                  Have an account?
                  <Link href="/login">
                    <span className="text-black font-bold hover:underline ml-1">
                      Sign In
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CardRegister;
