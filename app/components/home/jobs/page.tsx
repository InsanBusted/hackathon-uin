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
    <div className="bg-linear-to-b from-[#F5F5F5] to-[#FFFFFF] p-10">
      <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#63D9FA] to-[#1565C0] bg-clip-text text-transparent mb-10">
        Daftar Pekerjaan
      </h2>

      <div className="flex flex-col justify-center items-center bg-linear-to-r from-[#0A2F5A] via-[#145593] to-[#64B5F6] rounded-2xl p-6 h-[400px]">
        <div className="flex gap-x-20 mb-10">
          {JobsList.map((job) => (
            <div
              key={job.id}
              className="bg-white border shadow-sm rounded-2xl p-6 hover:shadow-md transition w-[380px]"
            >
              {/* TOP: Logo + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14">
                  <Image
                    src={job.logo}
                    alt="logo-company"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-black text-base font-bold leading-tight line-clamp-1">
                    {job.title}
                  </h2>
                  <p className="text-gray-700 text-sm line-clamp-1">
                    {job.company}
                  </p>
                </div>

                {/* Bookmark Icon */}
                <button className="text-gray-400 hover:text-purple-500">
                  <i className="fa-regular fa-bookmark text-lg"></i>
                </button>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap justify-around mb-6">
                {job.type.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-lg bg-purple-50 text-purple-600 text-xs font-semibold"
                  >
                    {t.name}
                  </span>
                ))}
              </div>

              {/* LOCATION */}
              <div className="flex items-center text-gray-700 text-sm mb-2">
                <i className="fa-solid fa-location-dot text-purple-500 mr-2"></i>
                <span>{job.location}</span>
              </div>

              {/* DEADLINE / STATUS */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center text-gray-700 text-xs">
                  <i className="fa-regular fa-calendar mr-1"></i>
                  <span>
                    Apply before: <b>{job.dueDate}</b>
                  </span>
                </div>

                {/* STATUS BADGE */}
                <span
                  className={`px-3 py-1 text-xs rounded-lg font-semibold ${
                    job.status === "Closed"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {job.status === "Closed" ? "Job Already Closed" : job.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="bg-[#63D9FA] hover:bg-[#0A2F5A] transition-colors duration-300 text-white font-bold py-2 px-4 rounded-lg">
            Temukan lebih banyak pekerjaan
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsComponent;
