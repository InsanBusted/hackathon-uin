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
  };
}

const BioSidebar = ({ bio }: BioSidebarProps) => {
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
    <Card className="w-[300px] shadow-md rounded-xl">
      {/* Header */}
      <CardHeader className="flex flex-col items-center gap-3">
        <Avatar className="w-20 h-20">
          <AvatarImage src="" alt={bio.fullName} />
          <AvatarFallback>{bio.fullName[0]}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-center">{bio.fullName}</CardTitle>
        <p className="text-sm text-muted-foreground">{bio.phone}</p>
        <Button
          variant={isActive ? "default" : "outline"}
          className={isActive ? "bg-green-500 text-white" : ""}
          onClick={toggleActive}
        >
          {isActive ? "Active" : "Inactive"}
        </Button>
      </CardHeader>

      <Separator className="my-3" />

      {/* Menu */}
      <CardContent className="flex flex-col gap-2">
        <Button variant="ghost" className="justify-start">
          📄 Curriculum Vitae
        </Button>
        <Button variant="ghost" className="justify-start">
          📊 Status Lamaran
        </Button>
        <Button variant="ghost" className="justify-start">
          ⚙️ Preferensi Lamaran
        </Button>
        <Button variant="ghost" className="justify-start">
          📝 Lapor Ketua
        </Button>
        <Button variant="ghost" className="justify-start text-red-600 hover:bg-red-50">
          🚪 Keluar
        </Button>
      </CardContent>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <Card className="w-[300px] p-6 text-center">
            <p className="mb-4">
              Apakah Anda yakin ingin {isActive ? "menonaktifkan" : "mengaktifkan"} user ini?
            </p>
            <div className="flex justify-around mt-4">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Batal
              </Button>
              <Button className="bg-green-500 text-white" onClick={confirmToggle}>
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
