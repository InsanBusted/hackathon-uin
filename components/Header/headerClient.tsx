"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Nav from "../Navbar/page";

const ClientHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.includes("/sign-in")) return null;

  return (
    <div
      className={`
        fixed  left-1/2 -translate-x-1/2 z-50
        transition-all duration-500 ease-in-out
        ${isScrolled ? "w-full px-4 " : "w-[80vw] px-0 rounded-xl top-4"}
        bg-white text-black shadow-lg
      `}
    >
      <header className="flex items-center justify-between py-3 px-6">
        <div>
          <Image
            src="/lokerin.png"
            alt="Lokerin Logo"
            width={80}
            height={50}
            priority
          />
        </div>
        <div>
          <Nav />
        </div>
      </header>
    </div>
  );
};

export default ClientHeader;
