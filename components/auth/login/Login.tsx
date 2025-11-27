"use client";

import CardLogin from "@/components/auth/login/CardLogin";
import { useForm } from "react-hook-form";

interface LoginForm {
  username: string;
}

const Login = () => {
  const form = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="bg-linear-to-b from-[rgba(21,101,192,1)] to-[rgba(10,47,90,1)] flex justify-center items-center min-h-screen p-4">
      {/* <CardLogin form={form} onSubmit={onSubmit} /> */}
    </div>
  );
};

export default Login;
