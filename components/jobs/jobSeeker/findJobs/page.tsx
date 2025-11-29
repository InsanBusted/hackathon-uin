"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { CheckboxSelect } from "@/components/ui/CheckboxSelect";
import CardJobs from "./CardJobs";
import DetailJob1 from "./DetailJob1";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  workplace?: string;
  jobType?: string[];
  createdAt?: string;
  logoUrl?: string;
  startDate: string;
  endDate: string;
}

const dropdownData = {
  jobType: ["Karyawan Tetap", "Magang", "Karyawan Kontrak", "Mitra", "Freelance"],
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
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/loker");
        const data = await res.json();

        setJobs(data);
        if (data.length > 0) setSelectedJob(data[0]);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

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

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-4 w-full flex-wrap justify-around">
        {Object.keys(dropdownData).map((key) => {
          const typedKey = key as keyof typeof dropdownData;
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

      {/* MAIN CONTENT — sudah disamakan dengan freelance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* LIST JOBS */}
        <div className="order-2 md:order-1">
          <CardJobs jobs={jobs} loading={loading} onSelect={setSelectedJob} />
        </div>

        {/* DETAIL */}
        <div className="md:col-span-2 order-1 md:order-2 hidden md:block">
          {selectedJob ? (
            <DetailJob1 {...selectedJob} />
          ) : (
            <p className="text-center">Pilih lowongan untuk melihat detail.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
