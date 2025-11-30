"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BioSidebarProps {
  bio: {
    fullName: string;
    phone: string;
    isActive: boolean;
    userId: string;
    photoProfile: string;
  };
  onCvClick?: () => void;
  onStatusClick?: () => void;
  onPreferenceClick?: () => void;
  onLogout?: () => void;
}

const BioSidebar = ({
  bio,
  onCvClick,
  onStatusClick,
  onLogout,
}: BioSidebarProps) => {
  const [isActive, setIsActive] = useState(bio.isActive);
  const [showModal, setShowModal] = useState(false);

  const toggleActive = async () => {
    setShowModal(true);
  };

  const confirmToggle = async () => {
    try {
      const res = await fetch(`/api/biodata/${bio.userId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ statusAuto: !isActive }),
      });

      const data = await res.json();
      if (res.ok) {
        setIsActive(!isActive);
        console.log("Status updated:", data.updated);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowModal(false);
    }
  };

  return (
    <Card className="w-full lg:w-[300px] bg-white text-primary shadow-md rounded-xl">
      {/* Header */}
      <CardHeader className="flex flex-col items-center gap-3 text-center">
        <Avatar className="w-20 h-20">
          <AvatarImage src={bio.photoProfile} alt="photo profile" />
          <AvatarFallback className="text-primary">
            {bio.fullName[0]}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-center text-primary">
          {bio.fullName}
        </CardTitle>
        <p className="text-sm text-primary">{bio.phone}</p>
        <Button
          className={`w-full ${
            isActive
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-900 text-white hover:bg-gray-200"
          }`}
          onClick={toggleActive}
        >
          {isActive ? "Lamar Otomatis Sudah Aktif" : "Aktifkan Lamar Otomatis"}
        </Button>
      </CardHeader>

      <Separator className="my-3" />

      {/* Menu */}
      <CardContent className="flex flex-col gap-2">
        {[
          { name: "Curriculum Vitae", icon: "📄", onClick: onCvClick },
          { name: "Status Lamaran", icon: "📊", onClick: onStatusClick },
        ].map((menu) => (
          <Button
            key={menu.name}
            variant="ghost"
            className="justify-start"
            onClick={menu.onClick}
          >
            {menu.icon} {menu.name}
          </Button>
        ))}
        <Button
          variant="ghost"
          onClick={onLogout}
          className="justify-start text-red-600 hover:bg-red-50"
        >
          🚪 Keluar
        </Button>
      </CardContent>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <Card className="w-[300px] p-6 text-center bg-white text-primary">
            <p className="mb-4">
              Apakah Anda yakin ingin{" "}
              {isActive ? "menonaktifkan" : "mengaktifkan"} Lamar Otomatis ini?
            </p>
            <div className="flex justify-around mt-4">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Batal
              </Button>
              <Button
                className="bg-green-500 text-white"
                onClick={confirmToggle}
              >
                Ya, {isActive ? "Nonaktifkan" : "Aktifkan"}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </Card>
  );
};

export default BioSidebar;
