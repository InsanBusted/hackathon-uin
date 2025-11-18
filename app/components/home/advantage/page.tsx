import CardSwap, { Card } from "@/components/CardSwap";
import Image from "next/image";

const Advantage = () => {
  const BackgroundImage = () => [
    "url('/image/blueCircle.png')",
    "url('/image/blueCircle.png')",
  ];

  const PositionImage = () => ["-30px 30px", "900px 300px"];

  const backgroundSize = () => ["1500px", "1500px"];

  return (
    <div
      style={{
        backgroundImage: BackgroundImage().join(", "),
        backgroundPosition: PositionImage().join(", "),
        backgroundSize: backgroundSize().join(", "),
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full h-[200vh] flex overflow-hidden bg-[#F5F5F5]"
    >
      <div className="flex items-center w-full gap-10">
        {/* Left Side — Title */}
        <div className="flex flex-col max-w-lg mt-[200px] ms-30">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">
            Kelebihan Kami
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Kami menyediakan berbagai keunggulan untuk membantu Anda menemukan
            solusi terbaik.
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
              >
                {/* CARD 1 */}
                <Card style={{
                    background:
                      "linear-gradient(135deg, #130F26, #0A2F5A, #64B5F6)",
                  }}
                  className="relative rounded-xl shadow-lg">
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

                {/* CARD 3 */}
                <Card style={{
                    background:
                      "linear-gradient(135deg, #130F26, #0A2F5A, #64B5F6)",
                  }}
                  className="relative rounded-xl shadow-lg">
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
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
