"use client";

import { Search } from "lucide-react";
import { CheckboxSelect } from "@/components/ui/CheckboxSelect";
import CardJobs from "./CardJobs";

interface DropdownData {
  jobType: string[];
  workplace: string[];
  location: string[];
  jobFunction: string[];
  jobLevel: string[];
}

const dropdownData: DropdownData = {
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
    <div className="w-full flex flex-col px-6 md:px-20 mt-5 min-h-screen gap-6">
      {/* Search Box */}
      <div className="relative w-full">
        <input
          className="bg-white text-main w-full p-3 shadow-lg rounded-lg"
          placeholder="Search Job"
        />
        <Search
          size={25}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        />
      </div>

      {/* FILTERS FLEX */}
      <div className="flex flex-col md:flex-row gap-4 w-full flex-wrap justify-around">
        {Object.keys(dropdownData).map((key) => {
          const typedKey = key as keyof DropdownData;

          return (
            <div key={key} className="w-full md:w-auto">
              <CheckboxSelect
                label={key.replace(/([A-Z])/g, " $1").toUpperCase()}
                options={dropdownData[typedKey]}
              />
            </div>
          );
        })}
      </div>

      <div>
        <CardJobs />
      </div>
    </div>
  );
};

export default FindJobs;
