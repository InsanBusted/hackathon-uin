"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { getFromCookies } from "@/lib/cookies";
import Image from "next/image";

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

  // New state for deadline/milestone
  const [applyType, setApplyType] = useState<"deadline" | "milestone">(
    "deadline"
  );
  const [price, setPrice] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [milestones, setMilestones] = useState<
    { stage: string; amount: string; deadline: string }[]
  >([{ stage: "", amount: "", deadline: "" }]);

  useEffect(() => {
    const user = getFromCookies<{ email: string; username?: string }>("user");
    if (user && user.email) setEmail(user.email);
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchBiodata = async () => {
      try {
        const res = await fetch(`/api/biodata/${userId}`);
        if (!res.ok) throw new Error("Gagal mengambil biodata");
        const data = await res.json();
        setBiodata(data.biodata);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBiodata();
  }, [userId]);

  const handleFileChange = (index: number, file: File) => {
    setFiles((prev) => {
      const newFiles = [...prev];
      newFiles[index] = file;
      return newFiles;
    });
  };

  const handleMilestoneChange = (
    index: number,
    field: keyof (typeof milestones)[0],
    value: string
  ) => {
    setMilestones((prev) => {
      const newArr = [...prev];
      newArr[index][field] = value;
      return newArr;
    });
  };

  const addMilestone = () => {
    setMilestones((prev) => [...prev, { stage: "", amount: "", deadline: "" }]);
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
      formData.append("applyType", applyType);

      files.forEach((file, idx) => {
        if (file) formData.append(`file${idx}`, file);
      });

      if (applyType === "deadline") {
        if (price) formData.append("price", price);
        if (endDate) formData.append("endDate", endDate);
      } else if (applyType === "milestone") {
        const validMilestones = milestones.filter(
          (m) => m.stage && m.amount && m.deadline
        );
        formData.append("milestones", JSON.stringify(validMilestones));
      }

      const res = await fetch("/api/sendLowongan", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Gagal mengirim lamaran");

      alert("Lamaran berhasil dikirim!");
      onClose();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white h-[85vh]  rounded-lg shadow-lg relative animate-fadeIn overflow-y-auto">
        <div className="max-h-screen flex flex-col p-8 gap-6">
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
            Make sure all the information and files below are correct and match
            your data.
          </p>

          {/* PERSONAL DATA */}
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

          {/* Document & Portfolio */}
          <div className="flex flex-col gap-4">
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
            <div className="flex flex-col gap-1">
              <Label className="text-primary">PORTFOLIO</Label>
              {biodata?.portfolio && biodata.portfolio.length > 0 && (
                <ul className="text-sm text-primary list-disc ml-4">
                  {biodata.portfolio.map((file, idx) => (
                    <li key={idx}>
                      <a href={file} target="_blank" className="underline">
                        {file.split("/").pop()}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <Input
                type="file"
                className="text-primary"
                multiple
                onChange={(e) => {
                  const filesList = e.target.files;
                  if (!filesList) return;
                  setFiles((prev) => [prev[0], ...Array.from(filesList)]);
                }}
              />
            </div>
          </div>

          {/* Apply Type Radio */}
          <div className="border border-black rounded-lg p-4 flex flex-col gap-2">
            <Label className="text-primary font-semibold">Apply Type *</Label>
            <div className="flex gap-4 mt-1">
              <Label className="text-primary flex items-center gap-1">
                <input
                  type="radio"
                  name="applyType"
                  value="deadline"
                  checked={applyType === "deadline"}
                  onChange={() => setApplyType("deadline")}
                />
                By Deadline
              </Label>
              <Label className="text-primary flex items-center gap-1">
                <input
                  type="radio"
                  name="applyType"
                  value="milestone"
                  checked={applyType === "milestone"}
                  onChange={() => setApplyType("milestone")}
                />
                By Milestone
              </Label>
            </div>
          </div>

          {/* Deadline Inputs */}
          {applyType === "deadline" && (
            <div className="border border-black rounded-lg p-4 flex flex-col gap-2">
              <Label className="text-primary font-semibold">Price (ETH)</Label>
              <Input
                type="text"
                placeholder="Amount in ETH"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="text-primary"
              />
              <p className="text-xs text-gray-500">
                Enter the amount in ETH. It will be converted to smart contract
                unit automatically.
              </p>

              <Label className="text-primary font-semibold">End Date</Label>
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="text-primary"
              />
            </div>
          )}

          {/* Milestones Inputs */}
          {applyType === "milestone" && (
            <div className="border border-black rounded-lg p-4 flex flex-col gap-4">
              <Label className="text-primary font-semibold">Milestones</Label>
              {milestones.map((ms, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <Input
                    placeholder="Stage"
                    value={ms.stage}
                    onChange={(e) =>
                      handleMilestoneChange(idx, "stage", e.target.value)
                    }
                    className="text-primary"
                  />
                  <div className="flex flex-col gap-1">
                    <Input
                      placeholder="Amount in ETH"
                      type="text"
                      value={ms.amount}
                      onChange={(e) =>
                        handleMilestoneChange(idx, "amount", e.target.value)
                      }
                      className="text-primary"
                    />
                    <p className="text-xs text-gray-500">
                      Enter amount in ETH. Will convert to smart contract unit
                      automatically.
                    </p>
                  </div>
                  <Input
                    type="date"
                    value={ms.deadline}
                    onChange={(e) =>
                      handleMilestoneChange(idx, "deadline", e.target.value)
                    }
                    className="text-primary"
                  />
                </div>
              ))}
              <Button size="sm" onClick={addMilestone} className="w-max mt-2">
                + Add Milestone
              </Button>
            </div>
          )}

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
