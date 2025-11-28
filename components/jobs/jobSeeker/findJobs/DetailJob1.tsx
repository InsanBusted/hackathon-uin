"use client";

import Image from "next/image";
import logo from "@/public/image/bni.png";

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

          <button className="bg-[#1C62FF] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>

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
