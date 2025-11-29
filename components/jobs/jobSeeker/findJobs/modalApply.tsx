"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getFromCookies } from "@/lib/cookies";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface ModalApplyProps {
  onClose: () => void;
  lowonganId: string;
  userId?: string | null;
}

interface Biodata {
  fullName?: string;
  email?: string;
  documentUrl?: string;
  portfolio?: string[];
  imgProfile?: string;
}

const ModalApply = ({ onClose, lowonganId, userId }: ModalApplyProps) => {
  const [biodata, setBiodata] = useState<Biodata | null>(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const user = getFromCookies<{ email: string; username?: string }>("user");
    if (user?.email) setEmail(user.email);
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchBiodata = async () => {
      try {
        const res = await fetch(`/api/biodata/${userId}`);
        if (!res.ok) throw new Error("Gagal mengambil biodata");

        const data = await res.json();
        const bio: Biodata = data.biodata;
        setBiodata(bio);

        const oldFiles: File[] = [];

        if (bio.documentUrl) {
          try {
            const resCV = await fetch(bio.documentUrl);
            const blobCV = await resCV.blob();
            oldFiles[0] = new File(
              [blobCV],
              bio.documentUrl.split("/").pop() || "cv.pdf",
              { type: blobCV.type }
            );
          } catch (err) {
            console.error(err);
          }
        }

        if (bio.portfolio?.length) {
          for (let i = 0; i < bio.portfolio.length; i++) {
            try {
              const resP = await fetch(bio.portfolio[i]);
              const blobP = await resP.blob();
              oldFiles[i + 1] = new File(
                [blobP],
                bio.portfolio[i].split("/").pop() || `portfolio${i}.pdf`,
                { type: blobP.type }
              );
            } catch (err) {
              console.error(err);
            }
          }
        }

        setFiles(oldFiles);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBiodata();
  }, [userId]);

  const handleFileChange = (index: number, file: File) => {
    setFiles((prev) => {
      const updated = [...prev];
      updated[index] = file;
      return updated;
    });
  };

  const handleSubmit = async () => {
    if (!email) return alert("Email tidak ditemukan");
    if (!coverLetter) return alert("Motivation wajib diisi");

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("lowonganId", lowonganId);
      formData.append("email", email);
      formData.append("coverLetter", coverLetter);

      files.forEach((file, idx) => {
        if (file) formData.append(`file${idx}`, file);
      });

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
      <div className="w-full max-w-2xl bg-white h-[85vh] rounded-lg shadow-lg relative animate-fadeIn overflow-y-auto">
        <div className="max-h-screen flex flex-col p-8 gap-6">
          
          {/* CLOSE */}
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

          {/* PERSONAL */}
          <div className="border border-black rounded-lg p-4 flex items-center gap-4">
            {biodata?.imgProfile && (
              <Image
                src={biodata.imgProfile}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-semibold text-primary">{biodata?.fullName}</p>
              <p className="text-sm text-primary">{email}</p>
            </div>
          </div>

          {/* MOTIVATION */}
          <div className="border border-black rounded-lg p-4 flex flex-col">
            <Label className="text-primary font-semibold" htmlFor="coverLetter">
              Motivation To Register *
            </Label>
            <Textarea
              id="coverLetter"
              placeholder="What motivates you to apply for this position? (Max 1000 characters)"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              rows={6}
              className="mt-2 text-primary"
            />
          </div>

          {/* DOCUMENT */}
          <div className="flex flex-col gap-4">
            {/* CV */}
            <div className="flex flex-col gap-1">
              <Label className="text-primary">CV</Label>

              {biodata?.documentUrl && (
                <p className="text-sm text-primary">
                  Current file:{" "}
                  <a
                    href={biodata.documentUrl}
                    target="_blank"
                    className="underline"
                  >
                    View CV
                  </a>
                </p>
              )}

              <Input
                type="file"
                className="text-primary"
                onChange={(e) =>
                  e.target.files && handleFileChange(0, e.target.files[0])
                }
              />
            </div>

            {/* PORTFOLIO */}
            <div className="flex flex-col gap-1">
              <Label className="text-primary">PORTFOLIO</Label>

              {biodata?.portfolio?.length ? (
                <ul className="text-sm text-primary list-disc ml-4">
                  {biodata.portfolio.map((file, idx) => (
                    <li key={idx}>
                      <a href={file} target="_blank" className="underline">
                        {file.split("/").pop()}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}

              <Input
                type="file"
                className="text-primary"
                multiple
                onChange={(e) => {
                  if (e.target.files) {
                    const newFiles = Array.from(e.target.files);
                    setFiles((prev) => [prev[0], ...newFiles]);
                  }
                }}
              />
            </div>
          </div>

          {/* SUBMIT */}
          <div className="pb-3">
            <Button
              onClick={handleSubmit}
              className="mt-4 w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Apply Now"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalApply;
