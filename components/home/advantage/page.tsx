"use client";
import Image from "next/image";

const Advantage = () => {
  return (
    <div className="w-full min-h-screen bg-[#2BB7FF] py-20">
      {/* Container */}
      <div className="flex flex-col gap-20 px-4 md:px-20">
        <div className="flex flex-col mt-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Kelebihan Kami
          </h2>
        </div>

        {/* Card 1 */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Card Image */}
          <div className="w-full md:w-[460px] h-[400px] md:h-[460px] bg-linear-to-br from-[#1565C0] to-[#31BAFF] rounded-2xl shadow-xl flex flex-col items-center p-4">
            <h3 className="text-xl font-semibold text-white text-center">
              Automation AI
            </h3>
            <hr className="border border-white/20 w-full mt-2" />
            <div className="mt-5 md:mt-20">
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
            <p className="text-sm sm:text-md text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit labore illum dolore porro delectus, ea
              exercitationem soluta repellendus quod officiis iure...
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
            <div className="mt-5 md:mt-20">
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
              Blockchain
            </h2>
            <p className="text-sm sm:text-md text-white/80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              incidunt deserunt itaque vitae, cumque repudiandae? Ipsa nesciunt
              laudantium...
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Card Image */}
          <div className="w-full md:w-[460px] h-[400px] md:h-[460px] bg-linear-to-br from-[#1565C0] to-[#31BAFF] rounded-2xl shadow-xl flex flex-col items-center p-4">
            <h3 className="text-xl font-semibold text-white text-center">
              Automation AI
            </h3>
            <hr className="border border-white/20 w-full mt-2" />
            <div className="mt-5 md:mt-20">
              <Image
                src="/image/iconShield.png"
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
            <p className="text-sm sm:text-md text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              corrupti expedita, iusto, voluptatum reiciendis numquam debitis
              ad...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
