"use client";
import Image from "next/image";

const Advantage = () => {
  return (
    <div className="w-full min-h-screen bg-[#31BAFF] py-20">
      {/* Container */}
      <div className="flex flex-col gap-20 px-4 md:px-20">
        <div className="flex flex-col mt-10 w-[300px] md:w-[700px] mx-auto gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Melamar Kerja Kini Semudah Sekali Klik
          </h2>
          <p className="text-white text-md text-center">
            Biarkan AI kami mencari, mencocokkan, dan mengirim lamaran terbaik
            untuk Anda—lebih cepat, lebih aman, tanpa repot.
          </p>
        </div>

        {/* Card 1 */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Card Image */}
          <div className="w-full md:w-[460px] h-[400px] md:h-[460px] bg-linear-to-br from-[#1565C0] to-[#31BAFF] rounded-2xl shadow-xl flex flex-col items-center p-4">
            <h3 className="text-xl font-semibold text-white text-center">
              Automation AI
            </h3>
            <hr className="border border-white/20 w-full mt-2" />
            <div className="mt-15 md:mt-20">
              <Image
                src="/image/VectorAI.png"
                width={200}
                height={120}
                alt="automation"
                className="opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              />
            </div>
          </div>

          {/* Card Text */}
          <div className="w-full md:w-[400px] flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Automation AI
            </h2>
            <p className="text-md md:text-lg text-white/80">
              Melamar Kerja Jadi Lebih Mudah Cukup pilih jenis pekerjaan yang
              kamu inginkan. Sistem akan mencari lowongan yang cocok dan
              mengirimkan lamaran secara otomatis. Kamu hanya perlu memberikan
              sedikit feedback agar hasilnya makin akurat. Untuk pengalaman
              lebih maksimal, aktifkan fitur lanjutan seperti Smart Matching Pro
              dan Blockchain Security.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-10">
          {/* Card Image */}
          <div className="w-full md:w-[460px] h-[400px] md:h-[460px] bg-linear-to-br from-[#1565C0] to-[#31BAFF] rounded-2xl shadow-xl flex flex-col items-center p-4">
            <h3 className="text-xl font-semibold text-white text-center">
              Blockchain
            </h3>
            <hr className="border border-white/20 w-full mt-2" />
            <div className="mt-15 md:mt-20">
              <Image
                src="/image/iconShield.png"
                width={200}
                height={120}
                alt="blockchain"
                className="opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              />
            </div>
          </div>

          {/* Card Text */}
          <div className="w-full md:w-[400px] flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Blockchain Security
            </h2>
            <p className="text-md md:text-lg text-white/80">
              Data lamaranmu disimpan dengan aman menggunakan teknologi
              blockchain. CV, portofolio, dan informasi pribadi terenkripsi dan
              tidak bisa diubah sembarangan. Semua aktivitas tercatat
              transparan, sehingga kamu memiliki kontrol penuh atas data dan
              terhindar dari penyalahgunaan.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Card Image */}
          <div className="w-full md:w-[460px] h-[400px] md:h-[460px] bg-linear-to-br from-[#1565C0] to-[#31BAFF] rounded-2xl shadow-xl flex flex-col items-center p-4">
            <h3 className="text-xl font-semibold text-white text-center">
              Smart Matching
            </h3>
            <hr className="border border-white/20 w-full mt-2" />
            <div className="mt-15 md:mt-20">
              <Image
                src="/image/smartGrup.png"
                width={200}
                height={120}
                alt="automation"
                className="opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              />
            </div>
          </div>

          {/* Card Text */}
          <div className="w-full md:w-[400px] flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Smart Matching
            </h2>
            <p className="text-md md:text-lg text-white/80">
              Sistem secara otomatis mencocokkan keterampilan dan pengalamanmu
              dengan lowongan yang paling sesuai. Kamu akan mendapatkan
              rekomendasi pekerjaan yang tepat tanpa harus mencari satu per
              satu.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col md:flex-row-reverse gap-10">
          {/* Card Image */}
          <div className="w-full md:w-[460px] h-[400px] md:h-[460px] bg-linear-to-br from-[#1565C0] to-[#31BAFF] rounded-2xl shadow-xl flex flex-col items-center p-4">
            <h3 className="text-xl font-semibold text-white text-center">
              Time Efficiency
            </h3>
            <hr className="border border-white/20 w-full mt-2" />
            <div className="mt-15 md:mt-20">
              <Image
                src="/image/time.png"
                width={200}
                height={120}
                alt="blockchain"
                className="opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              />
            </div>
          </div>

          {/* Card Text */}
          <div className="w-full md:w-[400px] flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Time Efficiency
            </h2>
            <p className="text-md md:text-lg text-white/80">
              Semua proses lamaran dilakukan secara otomatis, dari pencarian
              hingga submit. Kamu dapat melamar banyak pekerjaan dalam waktu
              singkat tanpa mengisi data berulang kali.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
