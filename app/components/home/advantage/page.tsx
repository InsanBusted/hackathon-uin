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
      <div className="flex items-center w-full">

        {/* Left Side — Title */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
            Kelebihan Kami
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-md">
            Kami menyediakan berbagai keunggulan untuk membantu Anda menemukan solusi terbaik.
          </p>
        </div>

        {/* Right Side — Cards */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[500px] w-[350px] md:w-[400px]">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <h3 className="text-xl font-bold">Card 1</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold">Card 2</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold">Card 3</h3>
                <p>Your content here</p>
              </Card>
            </CardSwap>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Advantage;
