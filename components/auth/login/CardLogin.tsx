"use client";

import Image from "next/image";
import Maskot from "@/public/image/gatotKerja.png";
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
import { email } from "zod";

interface LoginForm {
  identifier: string;
  password: string;
}

interface CardLoginProps {
  form: UseFormReturn<LoginForm>;
  onSubmit: (data: LoginForm) => void;
  emailPlaceholder?: string;
  loginAsText?: string;
  loginAsLink?: string;
  hideLinks?: boolean;
}

const CardLogin = ({
  form,
  onSubmit,
  emailPlaceholder,
  loginAsText,
  loginAsLink,
  hideLinks,
}: CardLoginProps) => {
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
          <p className="text-sm text-[#64B5F6]">
            {loginAsText ?? "Log In As User"}
          </p>
        </div>

        <div className="w-full max-w-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              {/* Email */}
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={emailPlaceholder ?? "Email:"}
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
              <div className="flex justify-between text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Remember me
                </label>
                <button type="button" className="hover:underline">
                  Forgot Password?
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <Button
                  type="submit"
                  className="mx-auto w-[60%] bg-[#64B5F6] text-[#FFFFFF] hover:bg-[#42A5F5]"
                >
                  Continue
                </Button>
              </div>
              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="px-3 text-gray-500 text-sm">
                  Other login option
                </span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm text-black">
                  Dont Have an account?
                  <Link href="/register">
                    <span className="text-black font-bold hover:underline ml-1">
                      Sign Up
                    </span>
                  </Link>
                </p>
                {!hideLinks && (
                  <>
                    <Link href="/login/company">
                      <span className="text-black font-bold hover:underline">
                        Log In With Your Company
                      </span>
                    </Link>
                    <Link href="/login/client">
                      <span className="text-black font-bold hover:underline">
                        {loginAsLink ?? "Log In As Client"}
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CardLogin;
