"use client";

import CardRegister from "@/components/auth/register/CardRegister";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
  role: string;
}

const Register = () => {
  const [successModal, setSuccessModal] = useState<{
    open: boolean;
    role: string | null;
  }>({ open: false, role: null });

  const form = useForm<RegisterForm>();
  const onSubmit = async (data: RegisterForm) => {
    const payload = {
      email: data.email,
      username: data.fullName.replace(/\s+/g, "").toLowerCase(),
      password: data.password,
      role: data.role,
    };

    try {
      const res = await fetch("/api/auth/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        alert("Register gagal: " + err.message);
        return;
      }

      setSuccessModal({
        open: true,
        role: data.role,
      });
    } catch (error) {
      alert("Terjadi error saat register.");
    }
  };

  return (
    <div className="bg-linear-to-b from-[rgba(21,101,192,1)] to-[rgba(10,47,90,1)] flex justify-center items-center min-h-screen p-4">
      <CardRegister form={form} onSubmit={onSubmit} />

      <Dialog
        open={successModal.open}
        onOpenChange={(open) => {
          if (!open) setSuccessModal({ open: false, role: null });
        }}
      >
        <DialogContent className="rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-green-600 text-center">
              Registration Successful 🎉
            </DialogTitle>
          </DialogHeader>

          <p className="text-center text-gray-600">
            Akun kamu berhasil dibuat!
          </p>

          <DialogFooter className="mt-4">
            <Button
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => {
                const role = successModal.role;

                switch (role) {
                  case "COMPANY":
                    window.location.href = "/dashboard/company";
                    break;
                  case "CLIENT":
                    window.location.href = "/dashboard/client";
                    break;
                  default:
                    window.location.href = "/";
                }
              }}
            >
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Register;
