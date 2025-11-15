import Image from "next/image";

const Advantage = () => {
  const BackgroundImage = () => [
    "url('/image/blueCircle.png')",
    "url('/image/blueCircle2.png')",
  ];

  const PositionImage = () => ["left 0px top 0px", "center center"];

  const backgroundSize = () => ["auto", "auto"];

  return (
    <div
      style={{
        backgroundImage: BackgroundImage().join(", "),
        backgroundPosition: PositionImage().join(", "),
        backgroundSize: backgroundSize().join(", "),
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full h-[400px] flex items-center px-8 overflow-hidden bg-linear-to-br from-white to-blue-50"
    >
      {/* Text */}
      <h2 className="relative text-2xl font-semibold text-slate-700">
        Kelebihan Kami
      </h2>
    </div>
  );
};

export default Advantage;
