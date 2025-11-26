"use client";
import Image from "next/image";
import { ArrowUpIcon, Search } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckboxSelect } from "@/components/ui/CheckboxSelect";

const listJobs = [
  {
    image: "/image/bni.png",
    company: "PT Bank negara indonesia (persero) Tbk",
    jobFunction:
      "Internship digital learning and knowledge management team (DKM)",
    location: "Kota adm, Jakarta Barat",
    position: "4 Position",
    applicant: "25 Applicant",
    jobType: "Contract employees",
    workplace: "WFO",
    applyDate: "Apply Before 31 Dec 2025",
  },
  {
    image: "/image/bri.png",
    company: "BRI Finance",
    jobFunction: "Board Secretary",
    location: "Kota Jakarta Selatan, DKI Jakarta",
    position: "2 Position",
    applicant: "96 Applicant",
    jobType: "Contract employees",
    workplace: "WFO",
    applyDate: "Apply Before 18 Dec 2025",
  },
  {
    image: "/image/persada.png",
    company: "PT.Personel Alih Daya TBK",
    jobFunction: "Engineer On Site",
    location: "DKI Jakarta (Indonesia)",
    position: "3 Position",
    applicant: "100 Applicant",
    jobType: "Contract employees",
    workplace: "WFO",
    applyDate: "Apply Before 31 Dec 2025",
  },
];

const dropdownData = {
  jobType: [
    "Karyawan Tetap",
    "Magang",
    "Karyawan Kontrak",
    "Mitra",
    "Freelance",
  ],
  workplace: ["Work From Office", "Work From Home", "Hybrid"],
  location: [
    "Kota Bekasi, Jawa Barat",
    "Kota Jakarta Selatan, DKI Jakarta",
    "Kota Jakarta Timur, DKI Jakarta",
    "Kota Semarang, Jawa Tengah",
    "Kota Bandung, Jawa Barat",
  ],
  jobFunction: [
    "Web Developer",
    "Sales & Business Development",
    "Marketing & Communication",
    "Product Development",
    "Finance, Legal & Accounting",
  ],
  jobLevel: [
    "Intern",
    "Staff",
    "Officer",
    "Supervisor / Team Leader",
    "Department Head / Manager",
  ],
};

const FindJobs = () => {
  return (
    <div className="w-full flex flex-col px-30 mt-5 min-h-screen gap-4">
      <div className="relative w-full">
        <input
          className="bg-white w-full  p-3 shadow-lg rounded-lg"
          placeholder="Search Job"
        />
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={25}
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="w-[20vw]">
          <CheckboxSelect
            label="Select Fruits"
            options={["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]}
          />
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
