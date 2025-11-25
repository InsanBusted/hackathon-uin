import Image from "next/image";
import maskot from "@/public/maskot.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center flex-wrap justify-around">
      <div>
        {/* Title */}
        <h1 className="mt-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Lupakan Apply Satu per Satu.
          <br />
          Biar{" "}
          <span className="font-bold bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">
            {" "}
            AI Kami yang Bekerja.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-black max-w-2xl mx-auto mt-4">
          Algoritma cerdas Lokerin menganalisis profil Anda, mencocokkannya
          dengan ribuan lowongan, dan mengirimkan lamaran terbaik secara
          otomatis. Lebih banyak hasil, lebih sedikit usaha.
        </p>
        <div className="flex items-center justify-center mt-10">
          <Link href="/">
            <Image
              src="/buttonsvg/buttonApply.svg"
              width={250}
              height={80}
              alt="Button Apply"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="relative flex items-end justify-center">
        <div className="absolute -bottom-20 w-[450px] h-[480px] bg-white rounded-full z-10 shadow-2xl opacity-95" />
        <div className="absolute bottom-0 w-[300px] h-[80px] bg-black/25 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-20 w-[380px] h-[380px] bg-white/10 rounded-full blur-3xl z-0" />

        {/* Maskot */}
        <Image
          src={maskot}
          width={350}
          height={80}
          alt="Maskot"
          className="z-20 relative drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
