import CardSwap, { Card } from "@/components/CardSwap";
import Image from "next/image";

const Advantage = () => {
  const BackgroundImage = () => [
    "url('/image/blueCircle.png')",
    "url('/image/blueCircle.png')",
  ];

  const PositionImage = () => ["-30px 30px", "900px 150px"];

  const backgroundSize = () => ["1500px", "1500px"];

  return (
    <div
      style={{
        backgroundImage: BackgroundImage().join(", "),
        backgroundPosition: PositionImage().join(", "),
        backgroundSize: backgroundSize().join(", "),
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full h-[100vh] flex px-8 overflow-hidden bg-[#F5F5F5]"
    >
      <div className="flex items-center w-full gap-10">
        {/* Left Side — Title */}
        <div className="flex flex-col max-w-lg mt-[200px] ms-30">
          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
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
                <Card className="p-5">
                  <h3 className="text-xl font-bold">Reliable</h3>
                  <p>Your content here</p>
                </Card>
                <Card className="p-5">
                  <h3 className="text-xl font-bold">Smooth</h3>
                  <p>Your content here</p>
                </Card>
                <Card className="p-5">
                  <h3 className="text-xl font-bold">Customizable</h3>
                  <p>Your content here</p>
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
