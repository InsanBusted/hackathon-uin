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
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/loker");
        const data = await res.json();
        setJobs(data);
        setFilteredJobs(data);

        if (data.length > 0) {
          setSelectedJob(data[0]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  useEffect(() => {
    const q = searchQuery.toLowerCase();

    const result = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q)
    );

    setFilteredJobs(result);
  }, [searchQuery, jobs]);

  const handleSelectJob = (job: Job) => {
    setSelectedJob(job);

    // kalau mobile → buka modal
    if (window.innerWidth < 768) {
      setIsMobileModalOpen(true);
    }
  };
  return (
    <div className="w-full flex flex-col px-6 md:px-20 mt-5 min-h-screen gap-6">
      {/* Search Box */}
      <div className="relative w-full">
        <input
          className="bg-white text-main w-full p-3 shadow-lg rounded-lg"
          placeholder="Search Job"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search
          size={25}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* LIST JOBS */}
        <div className="order-2 md:order-1">
          <CardJobs
            jobs={filteredJobs}
            loading={loading}
            onSelect={handleSelectJob}
          />
        </div>

        {/* DETAIL JOB */}
        <div className="md:col-span-2 order-1 md:order-2 hidden md:block">
          {selectedJob ? (
            <DetailJob1 {...selectedJob} />
          ) : (
            <p className="text-center">Pilih lowongan untuk melihat detail.</p>
          )}
        </div>
      </div>

      {isMobileModalOpen && selectedJob && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
          onClick={() => setIsMobileModalOpen(false)}
        >
          <div
            className="relative bg-white w-[90%] max-h-[70vh] overflow-y-auto rounded-xl shadow-xl p-4 animate-slide-up"
            onClick={(e) => e.stopPropagation()} // biar klik dalam modal tidak close
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileModalOpen(false)}
              className="absolute top-3 right-3 px-3 py-1 text-sm font-medium bg-blue-950 text-white rounded-md"
            >
              Close
            </button>

            <DetailJob1 {...selectedJob} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FindJobs;
