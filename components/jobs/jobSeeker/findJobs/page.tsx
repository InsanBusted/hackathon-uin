"use client";
import { Search, MapPin, Bookmark } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const listJobs = [
  {
    image: "/image/bni.png",
    company: "PT Bank negara indonesia (persero) Tbk",
    jobFunction:
      "Internship digital learning and knowledge management team (DKM)",
    location: "Kota adm, Jakarta Barat",
    position: "4 Position",
    applicant: "25 Applicant",
    jobType: "Contract employees",
    workplace: "WFO",
    applyDate: "Apply Before 31 Dec 2025",
  },
  {
    image: "/image/bri.png",
    company: "BRI Finance",
    jobFunction: "Board Secretary",
    location: "Kota Jakarta Selatan, DKI Jakarta",
    position: "2 Position",
    applicant: "96 Applicant",
    jobType: "Contract employees",
    workplace: "WFO",
    applyDate: "Apply Before 18 Dec 2025",
  },
  {
    image: "/image/persada.png",
    company: "PT.Personel Alih Daya TBK",
    jobFunction: "Engineer On Site",
    location: "DKI Jakarta (Indonesia)",
    position: "3 Position",
    applicant: "100 Applicant",
    jobType: "Contract employees",
    workplace: "WFO",
    applyDate: "Apply Before 31 Dec 2025",
  },
];
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

interface DropdownProps {
  label: string;
  items: string[];
  selected: string[];
  setSelected: (values: string[]) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  selected,
  setSelected,
}) => {
  const [open, setOpen] = useState(false);

  const toggleSelect = (item: string) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((v) => v !== item));
    } else {
      setSelected([...selected, item]);
    }
  };
  return (
    <div className="relative w-70">
      <button
        onClick={() => setOpen(!open)}
        className="border flex items-center justify-between border-[#64B5F6] text-[#64B5F6] rounded-md px-4 py-2 bg-white w-full"
      >
        {label}
        <span className="text-sm">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-xl z-20 p-4 w-[260px] h-[200px] overflow-y-auto">
          {items.map((item, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2 mb-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="accent-[#64B5F6]"
                checked={selected.includes(item)}
                onChange={() => toggleSelect(item)}
              />
              <span className="text-[#64B5F6]">{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const FindJobs = () => {
  const [search, setSearch] = useState("");

  const [filterJobType, setFilterJobType] = useState<string[]>([]);
  const [filterWorkplace, setFilterWorkplace] = useState<string[]>([]);
  const [filterLocation, setFilterLocation] = useState<string[]>([]);
  const [filterJobFunction, setFilterJobFunction] = useState<string[]>([]);
  const [filterJobLevel, setFilterJobLevel] = useState<string[]>([]);

  const filteredJobs = listJobs.filter((job) => {
    const searchLower = search.toLowerCase();

    // SEARCH filter
    const matchesSearch =
      job.jobFunction.toLowerCase().includes(searchLower) ||
      job.company.toLowerCase().includes(searchLower) ||
      job.location.toLowerCase().includes(searchLower);

    // Dropdown filters
    const matchJobType =
      filterJobType.length === 0 || filterJobType.includes(job.jobType);
    const matchWorkplace =
      filterWorkplace.length === 0 || filterWorkplace.includes(job.workplace);
    const matchLocation =
      filterLocation.length === 0 || filterLocation.includes(job.location);
    const matchJobFunction =
      filterJobFunction.length === 0 ||
      filterJobFunction.includes(job.jobFunction);

    return (
      matchesSearch &&
      matchJobType &&
      matchWorkplace &&
      matchLocation &&
      matchJobFunction
    );
  });
  return (
    <div className="w-full flex flex-col px-30 mt-5 min-h-screen gap-4">
      {/* Search Bar */}
      <div className="flex gap-3 border border-[#64B5F6] bg-white rounded-lg px-4 py-2 w-full">
        <input
          type="text"
          placeholder="Search Job"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-[#64B5F6] placeholder-[#64B5F6]"
        />
        <Search size={30} className="text-[#64B5F6]" />
      </div>

      {/* Dropdown section */}
      <div className="flex justify-between items-center gap-5 mt-7">
        <Dropdown
          label="Job Type"
          items={dropdownData.jobType}
          selected={filterJobType}
          setSelected={setFilterJobType}
        />
        <Dropdown
          label="Workplace"
          items={dropdownData.workplace}
          selected={filterWorkplace}
          setSelected={setFilterWorkplace}
        />
        <Dropdown
          label="Location"
          items={dropdownData.location}
          selected={filterLocation}
          setSelected={setFilterLocation}
        />
        <Dropdown
          label="Job Function"
          items={dropdownData.jobFunction}
          selected={filterJobFunction}
          setSelected={setFilterJobFunction}
        />
        <Dropdown
          label="Job Level"
          items={dropdownData.jobLevel}
          selected={filterJobLevel}
          setSelected={setFilterJobLevel}
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex flex-col w-[30%] gap-6">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-sm p-5 hover:shadow-md bg-white"
            >
              {/* Header */}
              <div className="gap-4 mb-4">
                <Image
                  src={job.image}
                  alt={job.company}
                  width={70}
                  height={70}
                />

                <div className="flex flex-col">
                  <h3 className="font-bold text-lg text-[#626262]">
                    {job.company}
                  </h3>
                  <p className="font-bold text-xl text-[#0A2F5A] mt-3">
                    {job.jobFunction}
                  </p>
                  <p className="text-md font-semibold text-[#626262]">
                    {job.location}
                  </p>
                  <p className="text-sm text-[#626262] mt-3">
                    {job.position} &#8226; {job.applicant}
                  </p>

                  {/* Job Details */}

                  <div className="flex items-center gap-4">
                    <p className="bg-[#F5F5F5] rounded-md px-3 py-1 text-[#3204A8]">
                      {job.jobType}
                    </p>
                    <p className="bg-[#F5F5F5] rounded-md px-3 py-1 text-[#3204A8]">
                      {job.workplace}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-[#626262] mt-6">
                  {job.applyDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
