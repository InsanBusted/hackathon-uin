"use client";

import Image from "next/image";
import Maskot from "@/public/image/gatotKerja.png";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import Link from "next/link";

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
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto min-h-[70vh] md:min-h-[60vh] rounded-xl overflow-hidden shadow-lg bg-white">
      {/* LEFT SECTION (Image) */}
      <div className="bg-[#ECECEC] flex justify-center items-center p-6 md:p-10 w-full md:w-1/2">
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
          <Image
            src={Maskot}
            alt="Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 bg-white flex flex-col items-center justify-center px-6 py-10 sm:px-10 gap-6 w-full">
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#64B5F6]">
            Welcome
          </h1>
          <p className="text-xs sm:text-sm text-[#64B5F6]">
            {loginAsText ?? "Log In As User"}
          </p>
        </div>

        <div className="w-full max-w-sm sm:max-w-md">
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
                        type="text"
                        placeholder={emailPlaceholder ?? "Email:"}
                        className="text-black border-none rounded-lg bg-gray-100"
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
                        className="text-black border-none rounded-lg bg-gray-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Remember + Forgot */}
              <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Remember me
                </label>
                <button type="button" className="hover:underline">
                  Forgot Password?
                </button>
              </div>

              {/* Button */}
              <div className="flex justify-center mt-4">
                <Button
                  type="submit"
                  className="mx-auto w-[70%] sm:w-[60%] bg-[#64B5F6] text-white hover:bg-[#42A5F5]"
                >
                  Continue
                </Button>
              </div>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="px-3 text-gray-500 text-sm">
                  Other login option
                </span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              {/* Links */}
              <div className="flex flex-col justify-center items-center gap-1 text-center">
                <p className="text-sm text-black">
                  Don’t Have an account?
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
