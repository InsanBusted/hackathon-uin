"use client";
import Image from "next/image";

const Advantage = () => {
  return (
    <div className="w-full h-[600px] bg-[#2BB7FF] flex justify-center py-20">

      {/* Container */}
      <div className="flex flex-col items-center w-full gap-20">

        {/* LEFT SIDE */}
        <div className="flex flex-col mt-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-[#63D9FA] to-[#1565C0] bg-clip-text text-transparent">
            Kelebihan Kami
          </h2>
        </div>

        {/* RIGHT SIDE — CARDS */}
        <div className="relative flex flex-col gap-20 mt-10">

          {/* CARD 1 */}
          <div className="relative flex items-center justify-between">
            <div className="w-[260px] h-[260px] bg-gradient-to-br from-[#1565C0] to-[#31BAFF] rounded-2xl shadow-xl">
              <h3 className="mt-5 text-xl font-semibold text-white text-center">Automation AI</h3>
              <hr className="border border-white/20 mt-2" />
            <Image
              src="/icons/automation.png"
              width={120}
              height={120}
              alt="automation"
              className="opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            />
            </div>
            <p className="text-sm text-white/80 text-center mt-2">
              Proses mencari kerja otomatis dengan kecerdasan buatan.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="relative w-[260px] h-[260px] bg-gradient-to-b from-[#63D9FA] to-[#0A84FF] rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center mx-20">
            <Image
              src="/icons/profile.png"
              width={120}
              height={120}
              alt="profile"
              className="opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            />
            <h3 className="mt-5 text-xl font-semibold text-white">Rekomendasi</h3>
            <p className="text-sm text-white/80 text-center mt-2">
              Rekomendasi pekerjaan berdasarkan skill & pengalaman.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="relative w-[260px] h-[260px] bg-gradient-to-b from-[#63D9FA] to-[#0A84FF] rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center">
            <Image
              src="/icons/shield.png"
              width={120}
              height={120}
              alt="shield"
              className="opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            />
            <h3 className="mt-5 text-xl font-semibold text-white">Keamanan</h3>
            <p className="text-sm text-white/80 text-center mt-2">
              Data Anda aman dengan sistem enkripsi modern.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Advantage;
