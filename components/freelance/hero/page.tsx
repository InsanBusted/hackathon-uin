"use client"
import Image from "next/image";
import maskot from "@/public/maskot.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  find: string;
}

const Hero = ({ find }: HeroProps) => {
  return (
    <section className="mt-25 gap-5 md:mt-0 px-3 w-full h-screen flex flex-col md:flex-row md:justify-around items-center">
      <div className="flex items-center flex-col">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Lupakan Apply Satu per Satu.
          <br />
          Biar{" "}
          <span className="font-bold bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">
            {" "}
            AI Kami yang Bekerja.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white font-sans max-w-2xl mx-auto mt-4">
          Algoritma cerdas Lokerin menganalisis profil Anda, mencocokkannya
          dengan ribuan project freelance, dan mengirimkan apply terbaik secara
          otomatis.
        </p>
        <div className="flex items-center justify-center mt-10 gap-2">
          <Link href="/">
            <Image
              src="/buttonsvg/buttonApply.svg"
              width={250}
              height={80}
              alt="Button Apply Project Freelance"
              className="cursor-pointer"
            />
          </Link>

          <Link href={find} scroll={false}>
            <Button
              onClick={() => {
                const element = document.querySelector(find);
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="bg-black text-white p-5.5 md:p-6 md:w-50 rounded-4xl hover:bg-gray-900 cursor-pointer"
            >
              Cari Project Freelance
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative flex items-start justify-center">
        <div className="absolute -bottom-20 w-[250px] h-[200px] md:w-[450px] md:h-[480px] bg-white rounded-full z-10 shadow-2xl opacity-95" />
        <div className="absolute bottom-0 w-[300px] h-20 bg-black/25 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-20 w-[380px] h-[380px] bg-white/10 rounded-full blur-3xl z-0" />

        {/* Maskot */}
        <Image
          src={maskot}
          alt="Maskot"
          width={150}
          height={80}
          className=" z-20 relative drop-shadow-2xl w-[150px] md:w-[250px] lg:w-[320px]"
        />
      </div>
    </section>
  );
};

export default Hero;
