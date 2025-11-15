import Image from "next/image";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full h-[100vh] bg-linear-to-b from-[#63D9FA] to-[#F5F5F5] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Happy Users */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <p className="text-white font-medium">5000+ Happy Users</p>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Temukan Pekerjaan Yang Tepat,
          <br />
          Secara <span className="text-[#003C82]">Otomatis</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white max-w-2xl mx-auto mt-4">
          Platform Kami Memanfaatkan AI Dan Analisis Data Untuk Menemukan
          Peluang Kerja Terbaik Bagi Anda, Tanpa Proses Rumit, Agar Anda Bisa
          Fokus Mengembangkan Diri Dan Karier.
        </p>

        {/* Card Search */}
        <div className="bg-white mt-10 p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex w-full bg-[#E1F2FF] rounded-full p-1 mb-5">
            <button className="flex-1 py-2 rounded-full bg-[#009DFF] text-white font-semibold">
              Cari Talent
            </button>
            <button className="flex-1 py-2 rounded-full text-[#009DFF] font-semibold">
              Cari Pekerjaan
            </button>
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Cari dengan role, skills, atau keyword"
              className="flex-1 outline-none text-black"
            />
            <button className="flex items-center justify-center gap-2 bg-[#5CC7FF] text-white text-2xl px-6 py-2 rounded-full font-semibold">
              <Search size={30} />
              Search
            </button>
          </div>
          {/* Logos */}
          <div className="flex items-center justify-around mt-6 opacity-80">
            <Image
              src="/image/logoGojek.png"
              alt="Gojek"
              width={100}
              height={20}
            />
            <Image
              src="/image/logoMandiri.png"
              alt="Gojek"
              width={100}
              height={20}
            />
            <Image
              src="/image/logoGrab.png"
              alt="Gojek"
              width={100}
              height={20}
            />
            <Image
              src="/image/logoTokped.png"
              alt="Gojek"
              width={100}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
