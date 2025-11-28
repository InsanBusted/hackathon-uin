"use client";

import Image from "next/image";
import logo from "@/public/image/bni.png";

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

interface DetailJobProps {
  job: Job;
}

const DetailJob1 = ({ job }: DetailJobProps) => {
  return (
    <div className="p-5 bg-white w-full h-full rounded-xl">
      <Image
        src={job.logoUrl || logo}
        width={30}
        height={30}
        alt="logo perusahaan"
        className="w-20 h-20 rounded-md"
      />

      <h1 className="text-2xl font-bold text-black mt-4">{job.title}</h1>
      <p className="text-gray-700">{job.company}</p>
      <p className="text-gray-500 text-sm">{job.location}</p>

      {job.jobType && (
        <p className="mt-3 bg-purple-100 px-2 py-1 inline-block rounded">
          {job.jobType}
        </p>
      )}

      {job.createdAt && (
        <p className="text-xs text-gray-400 mt-2">
          Posted on: {new Date(job.createdAt).toLocaleDateString("id-ID")}
        </p>
      )}
    </div>
  );
};

export default DetailJob1;
