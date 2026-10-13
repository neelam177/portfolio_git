"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skill", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleHash = () => setActiveHash(window.location.hash || "#home");

    handleHash();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHash);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  // Close menu with Escape and lock page scroll while it's open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.body.style.overflow = isOpen ? "hidden" : "";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const isActive = (href: string) => href === `/${activeHash}`;

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link
          href="/#home"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-bold text-gray-800"
        >
          Neelam
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group relative py-2 text-[17px] font-medium transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-[#8fc1e3]"
                    : "text-gray-800 hover:text-[#8fc1e3]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#8fc1e3] transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop resume button (hidden on phone) */}
        <a
          href="/NeelamGupta.pdf"
          download="Neelam_Resume.pdf"
          className="hidden items-center gap-2 rounded-xl border border-[#cfe6f5] bg-white/70 px-4 py-1.5 text-[16px] font-medium text-[#8fc1e3] transition-all duration-300 hover:bg-white hover:shadow-md md:flex"
        >
          <Download size={18} strokeWidth={1.8} />
          Resume
        </a>

        {/* Hamburger (phone only) */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="p-2 text-gray-800 hover:text-[#8fc1e3] focus:outline-none md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Phone menu panel */}
      <div
        className={`absolute left-0 h-screen top-full w-full overflow-hidden bg-white shadow-md transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "max-h-[calc(100vh-72px)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-3 text-[17px] font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-[#eaf4fb] text-[#8fc1e3]"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume button inside the menu */}
        <div className="border-t border-gray-100 p-4">
          <a
            href="/NeelamGupta.pdf"
            download="Neelam_Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#cfe6f5] bg-white px-4 py-2.5 text-[16px] font-medium text-[#8fc1e3] transition-all hover:shadow-md"
          >
            <Download size={18} strokeWidth={1.8} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}