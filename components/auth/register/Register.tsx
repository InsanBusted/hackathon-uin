"use client";

import CardRegister from "@/components/auth/register/CardRegister";
import Image from "next/image";
import { useForm } from "react-hook-form";

interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
}

const Register = () => {
  const form = useForm<RegisterForm>();
  const onSubmit = (data: RegisterForm) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="bg-linear-to-b from-[rgba(21,101,192,1)] to-[rgba(10,47,90,1)] flex justify-center items-center min-h-screen p-4">
      <CardRegister form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default Register;
