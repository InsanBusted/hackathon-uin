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
    <div className="bg-white p-10">
      <h1 className="text-black text-4xl font-bold mb-10 text-center">
        Daftar Pekerjaan
      </h1>

      <div className="flex justify-center bg-card rounded-md p-6">
        <div className="flex gap-x-10">
          {JobsList.map((job) => (
            <div
              key={job.id}
              className="bg-white border shadow-sm rounded-xl p-6 hover:shadow-md transition w-[380px] h-[248px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14">
                  <Image
                    src={job.logo}
                    alt="logo-company"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-black text-lg font-bold leading-tight">
                    {job.title}
                  </h2>
                  <p className="text-gray-700 text-sm">{job.company}</p>
                </div>
              </div>

              {/* LOCATION */}
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Lokasi:</span> {job.location}
              </p>

              {/* TYPE */}
              <p className="text-gray-700 text-sm mb-1">
                <span className="font-semibold">Tipe:</span>{" "}
                {job.type.map((t) => t.name).join(", ")}
              </p>

              {/* STATUS */}
              <p
                className={`mt-2 inline-block px-3 py-1 text-xs rounded-lg font-semibold ${
                  job.status === "Closed"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {job.status}
              </p>

              {/* DEADLINE */}
              <p className="text-gray-600 text-xs mt-3">
                Batas Waktu:{" "}
                <span className="font-medium text-black">{job.dueDate}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsComponent;
