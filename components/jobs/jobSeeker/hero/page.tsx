import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full mt-10 h-[100vh]  py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Lupakan Apply Satu per Satu.
          <br />
          Biar{" "}
          <span className="font-bold bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">
            {" "}
            AI Kami yang Bekerja.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white max-w-2xl mx-auto mt-4">
          Algoritma cerdas Lokerin menganalisis profil Anda, mencocokkannya
          dengan ribuan lowongan, dan mengirimkan lamaran terbaik secara
          otomatis. Lebih banyak hasil, lebih sedikit usaha.
        </p>
        <div className="flex items-center justify-center mt-10">
          <Image
            src="/buttonsvg/buttonApply.svg"
            width={250}
            height={80}
            alt="Button Apply"
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
