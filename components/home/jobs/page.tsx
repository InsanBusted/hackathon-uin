"use client";

import Image from "next/image";

interface JobType {
  name: string;
}

interface Job {
  id: number;
  logo: string;
  title: string;
  company: string;
  location: string;
  type: JobType[];
  status: string;
  dueDate: string;
}

const JobsList: Job[] = [
  {
    id: 1,
    logo: "/image/logomandiri2.png",
    title: "Officer Development Program Regional...",
    company: "PT Bank Mandiri (Persero), Tbk.",
    location: "Jakarta, Indonesia",
    type: [{ name: "Full-time" }, { name: "Hybrid" }, { name: "Remote" }],
    status: "Closed",
    dueDate: "2024-07-15",
  },
  {
    id: 2,
    logo: "/image/logomandiri2.png",
    title: "Kriya Mandiri - Region 8/Jawa 2 2025",
    company: "PT Bank Mandiri (Persero), Tbk.",
    location: "Jawa Timur, Indonesia",
    type: [{ name: "Full-time" }, { name: "Hybrid" }, { name: "Remote" }],
    status: "Closed",
    dueDate: "2024-07-15",
  },
  {
    id: 3,
    logo: "/image/logoastra.png",
    title: "Kriya Mandiri - Region 8/Jawa 3 2025",
    company: "PT Bank Mandiri (Persero), Tbk.",
    location: "Jakarta, Indonesia",
    type: [{ name: "Full-time" }, { name: "Hybrid" }, { name: "Remote" }],
    status: "Closed",
    dueDate: "2024-07-15",
  },
];

const JobsComponent = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#F5F5F5] via-[#FFFFFF] to-[#F5F5F5] flex flex-col items-center gap-10 py-16 px-4 sm:px-6 lg:px-20">
      {/* HERO SECTION */}
      <div className="text-center mt-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-b from-[#63D9FA] to-[#1565C0] bg-clip-text text-transparent">
          Daftar Pekerjaan
        </h1>
      </div>

      {/* JOB CARDS */}
      <div className="w-full flex justify-center mt-10">
        <div className="flex flex-wrap justify-center gap-6">
          {JobsList.map((job) => (
            <div
              key={job.id}
              className="bg-white border shadow-md rounded-2xl p-4 sm:p-6 w-full sm:w-[260px] md:w-[300px] hover:shadow-xl transition"
            >
              {/* TOP: Logo + Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                  <Image
                    src={job.logo}
                    alt="logo-company"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-black text-sm sm:text-sm font-bold leading-tight line-clamp-2">
                    {job.title}
                  </h2>
                  <p className="text-gray-700 text-xs sm:text-xs line-clamp-1">
                    {job.company}
                  </p>
                </div>

                {/* Bookmark */}
                <button className="text-gray-400 hover:text-blue-500">
                  <i className="fa-regular fa-bookmark text-lg sm:text-lg"></i>
                </button>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-3">
                {job.type.map((t, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 rounded-lg bg-blue-50 text-blue-600 text-xs font-semibold"
                  >
                    {t.name}
                  </span>
                ))}
              </div>

              {/* LOCATION */}
              <div className="flex items-center text-gray-700 text-xs mb-2">
                <i className="fa-solid fa-location-dot text-blue-500 mr-1"></i>
                <span className="text-xs sm:text-xs">{job.location}</span>
              </div>

              {/* DEADLINE + STATUS */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 gap-2">
                <div className="flex items-center text-gray-700 text-xs">
                  <i className="fa-regular fa-calendar mr-1"></i>
                  <span>
                    Apply before: <b>{job.dueDate}</b>
                  </span>
                </div>

                <span
                  className={`px-3 py-1 text-xs rounded-lg font-semibold ${
                    job.status === "Closed"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {job.status === "Closed" ? "Job Closed" : job.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-6 sm:mt-10">
        <button className="bg-[#63D9FA] hover:bg-[#0A2F5A] transition-colors duration-300 text-white font-bold py-2 px-6 rounded-lg w-full sm:w-auto">
          Temukan lebih banyak pekerjaan
        </button>
      </div>
    </div>
  );
};

export default JobsComponent;
