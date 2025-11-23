"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const links = [
    { title: "Home", path: "/" },
    {
      title: "Jobs",
      subLinks: [
        { title: "Job Seeker", path: "/jobs/jobs-seeker" },
        { title: "Employer", path: "/jobs/employer" },
        { title: "Internships", path: "/jobs/internships" },
      ],
    },
  ];

  const handleMouseEnter = (idx: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
      timeoutRef.current = null;
    }, 80); // 1 detik delay
  };

  return (
    <nav className="w-full top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link, idx) => (
            <div
              key={idx}
              className="relative"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Menu utama */}
              <Link href={link.path || '#'}>
              <button className="text-[1.1rem] flex items-center gap-1 font-medium text-black">
                {link.title}
                {link.subLinks && (
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
              </Link>

              {/* Submenu */}
              {link.subLinks && dropdownOpen === idx && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  {link.subLinks.map((child) => (
                    <Link
                      key={child.title}
                      href={child.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Button className="font-semibold text-white bg-black hover:bg-white/80">
            <Link href="/sign-up">Login</Link>
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileNav links={links} onClose={() => setMobileMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Nav;
