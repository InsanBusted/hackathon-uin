"use client";

import Image from "next/image";
import logo from "@/public/image/bni.png";
import { useEffect, useState } from "react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  workplace?: string;
  jobType?: string;
  createdAt?: string;
  logoUrl?: string;
}

const CardJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/loker");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading jobs...</p>;
  }

  if (jobs.length === 0) {
    return <p className="text-center text-gray-500">Tidak ada lowongan.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-md shadow-lg p-5 hover:shadow-xl transition cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={job.logoUrl || logo}
              width={60}
              height={60}
              alt="logo perusahaan"
              className="rounded-md"
            />

            <div>
              <p className="font-bold">{job.company}</p>
              {job.createdAt && (
                <p className="text-xs text-gray-500">
                  {new Date(job.createdAt).toLocaleDateString("id-ID")}
                </p>
              )}
            </div>
          </div>

          <h2 className="text-lg font-bold text-main">{job.title}</h2>

          <div className="mt-3 text-gray-600 text-sm flex flex-col gap-1">
            <p>📍 {job.location}</p>
            {job.workplace && <p>🏢 {job.workplace}</p>}
            {job.jobType && <p>💼 {job.jobType}</p>}
          </div>

          <button className="mt-4 bg-main text-white px-4 py-2 rounded-md hover:bg-main/80 transition w-full">
            Lihat Detail
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardJobs;
