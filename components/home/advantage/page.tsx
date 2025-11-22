"use client";
import CardSwap, { Card } from "@/components/CardSwap";
import Image from "next/image";
import { useState } from "react";

const Advantage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardTexts = () => [
    "Automation AI membantu meningkatkan efisiensi melalui proses otomatisasi.",
    "Data Analytics memberikan wawasan untuk pengambilan keputusan yang tepat.",
    "Integrasi Sistem mempermudah penghubungan berbagai platform bisnis.",
  ];

  return (
    <div className="relative w-full min-h-screen flex overflow-hidden bg-[#F5F5F5]">
      <div className="flex items-center w-full gap-10">
        {/* Left Side — Title */}
        <div className="flex flex-col max-w-lg mt-[200px] ms-30">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">
            Kelebihan Kami
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            {cardTexts()[activeIndex]}
          </p>
        </div>

        {/* Right Side — Cards */}
        <div className="relative w-full">
          <div className="flex justify-around ms-[500px]">
            <div className="relative h-[600px] w-[450px] md:w-[400px]">
              <CardSwap
                cardDistance={70}
                verticalDistance={80}
                delay={5000}
                pauseOnHover={false}
                height={500}
                width={700}
                onChange={(i) => setActiveIndex(i)}
              >
                {/* CARD 1 */}
                <Card
                  style={{
                    background:
                      "linear-gradient(135deg, #130F26, #0A2F5A, #64B5F6)",
                  }}
                  className="relative rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-bold text-white p-3">
                    Automation AI
                  </h3>
                  <hr className="border-t-2 border-white mb-4" />

                  <div className="flex justify-center items-center h-[400px]">
                    <Image
                      src="/image/VectorAI.png"
                      width={200}
                      height={100}
                      alt=""
                    />
                  </div>
                </Card>

                {/* CARD 2 */}
                <Card
                  style={{
                    background:
                      "linear-gradient(135deg, #130F26, #0A2F5A, #64B5F6)",
                  }}
                  className="relative rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-bold text-white p-3">
                    Data Analyst
                  </h3>
                  <hr className="border-t-2 border-white mb-4" />

                  <div className="flex justify-center items-center h-[400px]">
                    <Image
                      src="/image/VectorAI.png"
                      width={200}
                      height={100}
                      alt=""
                    />
                  </div>
                </Card>

                {/* CARD 3 */}
                <Card
                  style={{
                    background:
                      "linear-gradient(135deg, #130F26, #0A2F5A, #64B5F6)",
                  }}
                  className="relative rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-bold text-white p-3">
                    Network Engineering
                  </h3>
                  <hr className="border-t-2 border-white mb-4" />

                  <div className="flex justify-center items-center h-[400px]">
                    <Image
                      src="/image/VectorAI.png"
                      width={200}
                      height={100}
                      alt=""
                    />
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
