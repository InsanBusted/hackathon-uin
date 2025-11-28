"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getFromCookies } from "@/lib/cookies";
import Image from "next/image";

interface ModalApplyProps {
  onClose: () => void;
  lowonganId: string;
}

interface Biodata {
  fullName?: string;
  email?: string;
  documentUrl?: string;
  portfolio?: string[];
  imgProfile?: string;
}

const ModalApply: React.FC<ModalApplyProps> = ({ onClose, lowonganId }) => {
  const [biodata, setBiodata] = useState<Biodata | null>(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  // Ambil biodata dari cookie
  useEffect(() => {
    const user = getFromCookies<{ id: string; email: string; username?: string }>("user");
    if (user) {
      setBiodata({
        fullName: user.username,
        email: user.email,
        documentUrl: "", // bisa diisi jika ada URL default
        portfolio: [],   // bisa diisi jika ada portfolio default
        imgProfile: "",  // bisa diisi dengan avatar/default
      });
    }
  }, []);

  const handleFileChange = (index: number, file: File) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      newFiles[index] = file;
      return newFiles;
    });
  };

  const handleSubmit = async () => {
    if (!biodata?.email) return alert("Email tidak ditemukan");
    if (!coverLetter) return alert("Motivation wajib diisi");

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("lowonganId", lowonganId);
      formData.append("email", biodata.email);
      formData.append("coverLetter", coverLetter);
      files.forEach((file, idx) => formData.append(`file${idx}`, file));

      const res = await fetch("/api/sendLowongan", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Gagal mengirim lamaran");

      alert("Lamaran berhasil dikirim!");
      onClose();
    } catch (err: any) {
      alert(err.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg relative animate-fadeIn overflow-y-auto">
        <div className="max-h-screen flex flex-col p-8 gap-6">
          {/* CLOSE BUTTON */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-black hover:bg-gray-100"
          >
            ✕
          </Button>

          <h2 className="text-2xl font-bold text-center text-[#0A2F5A]">
            Register For This Vacancy
          </h2>
          <p className="text-center text-[#0A2F5A] text-sm">
            Make sure all the information and files below are correct and match your data.
          </p>

          {/* PERSONAL DATA */}
          <div className="border rounded-lg p-4 flex items-center gap-4">
            {biodata?.imgProfile && (
              <Image
                src={biodata.imgProfile}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-semibold">{biodata?.fullName}</p>
              <p className="text-sm text-gray-500">{biodata?.email}</p>
            </div>
          </div>

          {/* MOTIVATION */}
          <div className="flex flex-col">
            <Label htmlFor="coverLetter">Motivation To Register *</Label>
            <Textarea
              id="coverLetter"
              placeholder="What motivates you to apply for this position? (Max 1000 characters)"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              rows={6}
              className="mt-2"
            />
          </div>

          {/* FILES */}
          {["CV", "KTP", "KTM", "Other Documents"].map((label, index) => (
            <div key={index} className="flex flex-col">
              <Label>{label} *</Label>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files?.[0]) handleFileChange(index, e.target.files[0]);
                }}
                className="mt-2"
              />
              {files[index] && (
                <p className="text-sm text-gray-500 mt-1">{files[index].name}</p>
              )}
            </div>
          ))}

          {/* SUBMIT */}
          <Button
            onClick={handleSubmit}
            className="mt-4 w-full"
            disabled={loading || !biodata?.email}
          >
            {loading ? "Sending..." : "Apply Now"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalApply;
