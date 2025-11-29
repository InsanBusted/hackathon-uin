"use client";

import React, { useState } from "react";
import BioSidebar from "./BioSidebar";
import CardCv from "./CardCv";
import CardStatusLamaran from "./CardStatusLamaran";

interface ProfileClientProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bio: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listLowongan: any;
}

const ProfileClient = ({ bio, listLowongan }: ProfileClientProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>("cv");

  return (
    <div
      className="min-h-screen pt-[20vh] bg-linear-to-b from-[#63D9FA] to-[#F5F5F5] p-6 
     flex flex-col lg:flex-row gap-6"
    >
      <div className="w-full lg:w-auto">
        <BioSidebar
          bio={bio}
          onCvClick={() => setActiveMenu("cv")}
          onStatusClick={() => setActiveMenu("status")}
          onPreferenceClick={() => setActiveMenu("preference")}
          onLogout={() => console.log("Logout")}
        />
      </div>

      <div className="flex-1 w-full">
        {activeMenu === "cv" && <CardCv bio={bio} />}
        {activeMenu === "status" && (
          <CardStatusLamaran listLowongan={listLowongan} />
        )}
        {activeMenu === "preference" && <div>Preferensi Lamaran Panel</div>}
        {activeMenu === "lapor" && <div>Lapor Ketua Panel</div>}
      </div>
    </div>
  );
};

export default ProfileClient;
