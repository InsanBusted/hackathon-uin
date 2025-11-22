"use client";
import Image from "next/image";

const Advantage = () => {
  return (
    <div className="w-full min-h-screen bg-[#2BB7FF] py-20">
      {/* Container */}
      <div className="flex flex-col gap-20">
        <div className="flex flex-col mt-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
            Kelebihan Kami
          </h2>
        </div>

        <div className="flex flex-col gap-20 mt-10 px-20">
          {/* CARD 1 */}
          <div className="flex gap-20 items-start">
            {/* Card Image */}
            <div className="w-[460px] h-[460px] bg-gradient-to-br from-[#1565C0] to-[#31BAFF] rounded-2xl shadow-xl">
              <h3 className="mt-5 text-xl font-semibold text-white text-center">
                Automation AI
              </h3>
              <hr className="border border-white/20 mt-2" />
              <div className="flex justify-center mt-20">
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
            <div className="w-[400px] flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Automation AI
              </h2>
              <p className="text-md text-white/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit labore illum dolore porro delectus, ea exercitationem soluta repellendus quod officiis iure, reiciendis inventore. Quae earum eius magnam nihil autem nostrum!
                Numquam autem dignissimos molestias magni quis mollitia voluptatibus maiores asperiores rem vitae eum, eos culpa in dolores ratione! Nostrum inventore ut quibusdam quos cum dolores facere, exercitationem a neque magni.
                Repudiandae recusandae odit, iusto provident laboriosam incidunt repellat inventore perspiciatis pariatur itaque rerum reprehenderit quo aliquam delectus temporibus saepe totam facilis explicabo illum quae officia quod laudantium quam aspernatur. Dignissimos.
               
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex gap-20 justify-end items-start">
            {/* Card Text */}
            <div className="w-[400px] flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Blockchain
              </h2>
              <p className="text-md text-white/80">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim incidunt deserunt itaque vitae, cumque repudiandae? Ipsa nesciunt laudantium, facere ab similique voluptate consequatur dolores obcaecati eius. Exercitationem ipsum optio cupiditate.
                Similique officiis dolor excepturi quasi ad asperiores reprehenderit nesciunt iste? Molestias repudiandae quibusdam maxime dolorem omnis. Possimus deleniti id, facere, cumque rerum, inventore voluptatibus natus incidunt quasi cupiditate excepturi sint?
                Repudiandae minus velit, nostrum error ratione minima blanditiis suscipit rem culpa dolores perspiciatis ad, voluptatibus ipsa odit, ea harum voluptates ab aperiam. Numquam, error? Dolorem sit reprehenderit aut exercitationem labore.
              </p>
            </div>

            {/* Card Image */}
            <div className="w-[460px] h-[460px] bg-gradient-to-br from-[#1565C0] to-[#31BAFF] rounded-2xl shadow-xl">
              <h3 className="mt-5 text-xl font-semibold text-white text-center">
                Blockchain
              </h3>
              <hr className="border border-white/20 mt-2" />
              <div className="flex justify-center mt-20">
                <Image
                  src="/image/iconShield.png"
                  width={200}
                  height={120}
                  alt="blockchain"
                  className="opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex gap-20 items-start">
            {/* Card Image */}
            <div className="w-[460px] h-[460px] bg-gradient-to-br from-[#1565C0] to-[#31BAFF] rounded-2xl shadow-xl">
              <h3 className="mt-5 text-xl font-semibold text-white text-center">
                Automation AI
              </h3>
              <hr className="border border-white/20 mt-2" />
              <div className="flex justify-center mt-20">
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
            <div className="w-[400px] flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Automation AI
              </h2>
              <p className="text-md text-white/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corrupti expedita, iusto, voluptatum reiciendis numquam debitis ad eligendi totam ducimus minus facilis natus cumque. Sapiente deserunt soluta aliquid facilis fugiat?
                Eos eaque ad harum facere officiis at inventore iure odio sed assumenda blanditiis ipsum maxime esse, quasi soluta voluptas rem. Veniam sapiente quisquam quasi laborum illo, similique quos maiores voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
