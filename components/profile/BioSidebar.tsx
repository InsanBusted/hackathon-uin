"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface BioSidebarProps {
  bio: {
    fullName: string;
    phone: string;
    isActive: boolean;
  };
}

const BioSidebar: React.FC<BioSidebarProps> = ({ bio }) => {
  const [isActive, setIsActive] = useState(bio.isActive);

  const toggleActive = () => {
    setIsActive(!isActive);
    console.log("User active:", !isActive);
    // Panggil API untuk update status jika perlu
  };

  return (
    <div className="w-[300px] bg-white p-5 rounded-xl shadow-sm h-fit">
      <div className="flex items-center gap-3 border-b pb-4">
        <div className="w-14 h-14 rounded-full bg-gray-300" />
        <div className="flex-1">
          <h2 className="font-semibold text-lg text-primary">{bio.fullName}</h2>
          <p className="text-sm text-primary">{bio.phone}</p>
        </div>
        <Button
          className={`px-4 py-2 ${
            isActive ? "bg-green-500 text-primary" : "bg-gray-200 text-primary"
          }`}
          onClick={toggleActive}
        >
          {isActive ? "Active" : "Inactive"}
        </Button>
      </div>

      <div className="mt-6 flex flex-col gap-3 text-primary text-sm">
        <button className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg">
          📄 Curriculum Vitae
        </button>
        <button className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg">
          📊 Status Lamaran
        </button>
        <button className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg">
          ⚙️ Preferensi Lamaran
        </button>
        <button className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-lg">
          📝 Lapor Ketua
        </button>
        <button className="flex items-center gap-2 p-3 text-red-600 hover:bg-red-50 rounded-lg">
          🚪 Keluar
        </button>
      </div>
    </div>
  );
};

export default BioSidebar;
