"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skill", href: "/skill" },
  { name: "Projects", href: "/featuredProjects" },
  { name: "Experience", href: "/workExperience" },
  { name: "Contact", href: "/getInTouch" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const pathname = usePathname();

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Neelam
        </Link>

        {/* Links */}
        {/* <ul className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative py-2 text-[17px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#8fc1e3]"
                      : "text-gray-800 hover:text-[#8fc1e3]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#8fc1e3] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul> */}

        {/* Resume button */}
        <a
          href="/NeelamGupta.pdf"
          download="Neelam_Resume.pdf"
          className="flex items-center gap-2 rounded-xl border border-[#cfe6f5] bg-white/70 px-4 py-1.5 text-[16px] font-medium text-[#8fc1e3] transition-all duration-300 hover:bg-white hover:shadow-md"
        >
          <Download size={18} strokeWidth={1.8} />
          Resume
        </a>
      </div>
     
    </nav>
  );
}
