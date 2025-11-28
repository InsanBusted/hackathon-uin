"use client";

import Image from "next/image";
import logo from "@/public/image/bni.png";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType?: string[];
  createdAt?: string;
  logoUrl?: string;
  startDate: string;
  endDate: string;
}

interface CardJobsProps {
  jobs: Job[];
  loading: boolean;
  onSelect: (job: Job) => void;
}

const CardJobs = ({ jobs, loading, onSelect }: CardJobsProps) => {
  const ITEMS_PER_PAGE = 3;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);

  const paginatedJobs = jobs.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // --- Generate pagination numbers with ellipsis ---
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // Kalau total halaman sedikit → tampilkan semua
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1); // Always show first page

    if (page > 3) pages.push("...");

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    if (page < totalPages - 2) pages.push("...");

    pages.push(totalPages); // Always show last page

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  if (loading) return <p>Loading...</p>;
  if (jobs.length === 0) return <p>Tidak ada lowongan.</p>;

  return (
    <div className="flex flex-col gap-4">
      {/* LIST JOBS */}
      <div className="flex flex-col gap-4">
        {paginatedJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => onSelect(job)}
            className="bg-white rounded-md shadow-lg p-5 hover:shadow-xl transition cursor-pointer h-[30vh] flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <Image
                src={job.logoUrl || logo}
                width={60}
                height={60}
                alt="logo perusahaan"
                className="rounded-md"
              />

              <div>
                <p className="font-bold text-gray-500">{job.company}</p>
                <h2 className="text-lg font-bold text-primary">{job.title}</h2>
                <p className="text-gray-500 text-sm">{job.location}</p>

                {job.jobType && (
                  <Badge className="bg-[#F9F5FE] text-primary mt-1">
                    {job.jobType}
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-black mt-auto text-sm">
              Apply Before{" "}
              {new Date(job.endDate).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <Pagination>
        <PaginationContent>
          {/* PREVIOUS */}
          <PaginationItem>
            <PaginationPrevious
              onClick={() => page > 1 && setPage(page - 1)}
              className={
                page === 1
                  ? "bg-black pointer-events-none opacity-50"
                  : "bg-black"
              }
            />
          </PaginationItem>

          {/* PAGE NUMBERS WITH ELLIPSIS */}
          {pageNumbers.map((num, idx) => (
            <PaginationItem key={idx} className="bg-black rounded-lg">
              {num === "..." ? (
                <span className=" px-3 text-gray-500">...</span>
              ) : (
                <PaginationLink
                  onClick={() => setPage(Number(num))}
                  isActive={page === num}
                >
                  {num}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* NEXT */}
          <PaginationItem>
            <PaginationNext
              onClick={() => page < totalPages && setPage(page + 1)}
              className={
                page === totalPages
                  ? "bg-black pointer-events-none opacity-50"
                  : "bg-black"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CardJobs;
