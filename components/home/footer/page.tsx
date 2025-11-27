import Image from "next/image";

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

        <Image
          src="/image/arrowBlue.png"
          width={200}
          height={120}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Footer;
