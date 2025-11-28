"use client";
import CircularText from "@/components/CircularText";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-top bg-white pb-10"
      style={{
        backgroundImage: "url('/image/backgroundEmote.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full flex flex-col justify-center items-center px-4 text-center gap-6">
        <h1
          className="
            w-full
            max-w-[1300px]
            text-3xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
            font-bold
            bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6]
            bg-clip-text text-transparent
            leading-snug
            mx-auto
          "
        >
          Your Next Career Move Starts With One Click
        </h1>
        <Link href="/login">
          <Image src="/image/mata.png" width={200} height={120} alt="eye" />
          <div className="relative w-[200px] sm:w-[260px] md:w-[300px] flex justify-center items-center">
            <div className="absolute inset-0 flex justify-center items-center">
              <CircularText
                text=" Get In Touch * Get In Touch * Get In Touch * Get In Touch * Get In Touch * "
                onHover="speedUp"
                spinDuration={20}
              />
            </div>

            <Image
              src="/image/arrow.png"
              width={200}
              height={120}
              alt="arrow"
              className=" w-[200px] h-auto sm:w-[220px] md:w-[260px] lg:w-[300px] "
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
