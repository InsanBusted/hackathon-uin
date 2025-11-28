"use client";

import Image from "next/image";
import logo from "@/public/image/bni.png";
import { useState } from "react";

interface DetailJobProps {
  title: string;
  company: string;
  location: string;
  logoUrl?: string;

  // tambahan dari API
  jobType?: string[];
  description?: string;
  kualifikasi?: string[];
  tugasTanggungJawab?: string[];
  kualifikasiTambahan?: string[];
}

const DetailJob1 = ({
  title,
  company,
  location,
  logoUrl,

  jobType,
  description,
  kualifikasi,
  tugasTanggungJawab,
  kualifikasiTambahan,
}: DetailJobProps) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="w-full bg-white rounded-xl border border-[#DDE6ED] p-8 shadow-sm">
      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <Image
            src={logoUrl || logo}
            width={70}
            height={70}
            alt="logo perusahaan"
            className="rounded-md"
          />

          <div>
            <h1 className="text-2xl font-bold text-black leading-snug">
              {title}
            </h1>

            <p className="text-gray-700">{company}</p>

            <div className="flex items-center gap-3 mt-1 text-gray-500 text-sm">
              <p>{location}</p>
              <span>•</span>
              <p>{jobType?.join(", ") || "Onsite"}</p>
            </div>
          </div>
        </div>

        {/* STATUS + APPLY */}
        <div className="flex flex-col items-end gap-3">
          <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            Public
          </span>
          <p className="text-gray-500 text-sm">
            <b>1 Position</b> • 0 Applicant
          </p>

          <button
          onClick={() => setIsOpen(true)}
          className="bg-[#1C62FF] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>
      {/* ==== POPUP MODAL ==== */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg relative animate-fadeIn overflow-y-auto">
              <div className="max-h-screen flex flex-col p-8 ">
              
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-black hover:text-black text-xl"
              >
                ✕
              </button>

              {/* TITLE */}
              <h2 className="text-2xl font-bold mb-10 text-[#0A2F5A]">Completeness Of Files</h2>
              <h2 className="text-2xl font-bold mb-4 text-center text-[#0A2F5A]">Register For This Vacancy</h2>
              <p className="text-center text-[#0A2F5A] max-w-lg mx-auto mb-6">
                Make Sure All The Information And Files Below Are Correct And Match Your Data.
              </p>

              {/* PERSONAL DATA */}
              <div className="border-black-800 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-lg mb-2 text-black">Personal Data</h3>
                <div className="flex items-center gap-3">
                  <Image
                    src="/image/profile.png"
                    alt="avatar"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-black">Zacky Alvansyah</p>
                    <p className="text-gray-500 text-sm">zacky@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* MOTIVATION */}
              <div className="mb-6">
                <label className="font-semibold text-black">Motivation To Register</label>
                <textarea
                  className="w-full mt-2 border rounded-lg p-3 text-black"
                  rows={4}
                  placeholder="What motivates you to apply?"
                />
              </div>

              {/* FILE UPLOAD SECTIONS */}
              <div className="space-y-4">
                {["CV", "KTP", "KTM", "Other Documents"].map((label, index) => (
                  <div key={index} className="border p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-black">{label}</p>

                    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                      <div>
                        <p className="font-medium text-black">file_example.pdf</p>
                        <p className="text-xs text-gray-500">Uploaded: 22-02-2025</p>
                      </div>

                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg">
                        Replace File
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* SUBMIT */}
              <button className="mt-7 w-full bg-[#1C62FF] text-white py-3 rounded-lg font-semibold">
                Apply Now
              </button>
              </div>
            </div>
          </div>
        )}

      {/* TABS */}
      <div className="border-b mt-10 flex gap-6">
        <button className="font-semibold text-[#1C62FF] border-b-2 border-[#1C62FF] pb-2">
          Job Description
        </button>
      </div>

      <div className="mt-6 space-y-10">

        {/* JOB DESCRIPTION */}
        <section>
          <h3 className="font-bold text-lg flex items-center gap-2">📝 Job Description</h3>
          <p className="mt-3 text-gray-700">
            {description || "-"}
          </p>
        </section>

        {/* QUALIFICATION */}
        <section>
          <h3 className="font-bold text-lg flex items-center gap-2">
            🎓 Qualification
          </h3>

          <ul className="mt-3 text-gray-700">
            {kualifikasi?.map((item, i) => (
              <li key={i}>- {item}</li>
            ))}

            {kualifikasiTambahan?.map((item, i) => (
              <li key={`extra-${i}`}>- {item}</li>
            ))}

            {!kualifikasi?.length && !kualifikasiTambahan?.length && (
              <li>- Tidak ada kualifikasi</li>
            )}
          </ul>
        </section>

        {/* RESPONSIBILITIES */}
        <section>
          <h3 className="font-bold text-lg flex items-center gap-2">
            📌 Responsibilities
          </h3>

          <ul className="mt-3 text-gray-700">
            {tugasTanggungJawab?.map((item, i) => (
              <li key={i}>- {item}</li>
            ))}

            {!tugasTanggungJawab?.length && <li>- Tidak ada tugas yang tercantum</li>}
          </ul>
        </section>

        {/* IMPORTANT DATE (DATA KOSONG) */}
        <section>
          <h3 className="font-bold text-lg">📅 Important Date</h3>

          <ul className="mt-3 text-gray-700">
            <li>- Durasi: -</li>
            <li>- Penutupan Lamaran: -</li>
            <li>- Pengumuman Seleksi: -</li>
          </ul>
        </section>

        {/* TIMELINE (DATA KOSONG) */}
        <section>
          <h3 className="font-bold text-lg">⏳ Timeline</h3>

          <ul className="mt-3 text-gray-700">
            <li>- Tahapan tidak tersedia</li>
          </ul>
        </section>

        {/* LOCATION */}
        <section>
          <h3 className="font-bold text-lg">📍 Location</h3>

          <p className="mt-3 text-gray-700">{location}</p>
        </section>
      </div>
    </div>
  );
};

export default DetailJob1;
