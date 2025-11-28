"use client";

import Image from "next/image";
import logo from "@/public/image/bni.png";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

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
        console.log(data)
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
    return <p className="text-center text-black">Loading jobs...</p>;
  }

  if (jobs.length === 0) {
    return <p className="text-center text-black">Tidak ada lowongan.</p>;
  }

  return (
    <div className="flex flex-col  w-full gap-2">
    
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-md shadow-lg p-5 hover:shadow-xl transition cursor-pointer"
        >
          <div className="flex flex-col gap-3 mb-4">
            <Image
              src={job.logoUrl || logo}
              width={60}
              height={60}
              alt="logo perusahaan"
              className="rounded-md"
            />

            <p className="font-bold text-black">{job.company}</p>
            <h2 className="text-lg font-bold text-primary">{job.title}</h2>
            <p className="text-black"> {job.location}</p>
            <Badge>{job.jobType}</Badge>
            {job.createdAt && (
              <p className="text-xs text-black">
                {new Date(job.createdAt).toLocaleDateString("id-ID")}
              </p>
            )}
          </div>

          <div className=" text-black text-sm flex flex-col gap-1">
            {job.workplace && <p>🏢 {job.workplace}</p>}
            {job.jobType && <p>💼 {job.jobType}</p>}
          </div>

          <button className="mt-4 bg-main text-black px-4 py-2 rounded-md hover:bg-main/80 transition w-full">
            Lihat Detail
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardJobs;
