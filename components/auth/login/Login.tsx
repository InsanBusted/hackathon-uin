"use client";

import CardLogin from "@/components/auth/login/CardLogin";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

interface LoginProps {
  emailPlaceholder?: string;
  loginAsText?: string;
  loginAsLink?: string;
  hideLinks?: boolean;
}

const Login = ({ emailPlaceholder, loginAsText, loginAsLink, hideLinks }: LoginProps) => {
  const form = useForm<LoginForm>();
  const onSubmit = (data: LoginForm) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="bg-linear-to-b from-[rgba(21,101,192,1)] to-[rgba(10,47,90,1)] flex justify-center items-center min-h-screen p-4">
      <CardLogin form={form} onSubmit={onSubmit} emailPlaceholder={emailPlaceholder} loginAsText={loginAsText} loginAsLink={loginAsLink} hideLinks={hideLinks} />
    </div>
  );
};

export default Login;
