"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-4">
      {/* LOGO */}
      <div className="absolute top-6 left-6">
        <Image
          src="/image/logoLoker.png"
          width={120}
          height={50}
          alt="LokerIn Logo"
        />
      </div>
        <Image
          src="/image/gatotSenyum.png"
          width={200}
          height={200}
          alt="Gatot"
          className="absolute -top-1 mt-14"
        />
      {/* CARD UTAMA */}
      <div className="relative flex flex-col items-center justify-center bg-white rounded-lg py-16 px-10 z-50 mt-30">
        
        <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent leading-snug">
          Perkuat Profil, Perluas Kesempatan.
        </h1>

        <p className="text-gray-600 mt-3">
          Lengkapi Informasimu Untuk Mendapatkan Hasil Pencarian Kerja Yang
          Lebih Akurat.
        </p>
      </div>
    </div>
  );
};

export default Hero;
