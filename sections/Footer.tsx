
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
  FaHeart,
  FaCode,
  FaLaptopCode,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skill" },
  { name: "Projects", href: "/featuredProjects" },
  { name: "Experience", href: "/workExperience" },
  { name: "Contact", href: "/getInTouch" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    name: "Email",
    href: "mailto:gneelam2004@gmail.com",
    icon: FaEnvelope,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("hrithik@example.com");
      setCopied(true);

      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:hrithik@example.com";
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative z-10 overflow-hidden bg-[#292d32] text-gray-300">
      {/* Animated top border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#8fc1e3] to-transparent"
      />

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-[#8fc1e3]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-10">
        {/* Main footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:gap-16">
          {/* About */}
          <div>
            <Link
              href="/"
              aria-label="Go to homepage"
              className="group inline-flex items-center gap-1 text-2xl font-bold tracking-tight"
            >
              <span className="text-white transition-colors group-hover:text-[#8fc1e3]">
                Neelam
              </span>
              <span className="text-[#8fc1e3]">Gupta</span>
              <span className="ml-1 h-2 w-2 self-end rounded-full bg-[#8fc1e3] transition-transform duration-300 group-hover:scale-150" />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-300">
              Full Stack Developer passionate about building
              modern web applications and turning ideas into
              engaging digital experiences.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 transition-colors hover:border-[#8fc1e3]/40 hover:bg-[#8fc1e3]/10">
              <FaCode className="text-[#8fc1e3]" />
              <span>Building something meaningful</span>
            </div>
          </div>

          {/* Quick links */}
          {/* <div>
            <h4 className="text-lg font-bold text-white">
              Quick Links
            </h4>

            <div className="mb-5 mt-3 h-0.5 w-10 rounded-full bg-[#8fc1e3]" />

            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-[#8fc1e3]"
                    >
                      <FaArrowRight
                        aria-hidden="true"
                        className="text-[10px] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div> */}

          {/* Contact and socials */}
          <div>
            <h4 className="text-lg font-bold text-white">
              Get In Touch
            </h4>

            <div className="mb-5 mt-3 h-0.5 w-10 rounded-full bg-[#8fc1e3]" />

            <button
              type="button"
              onClick={copyEmail}
              className="group flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-left transition-all duration-300 hover:border-[#8fc1e3]/40 hover:bg-[#8fc1e3]/10"
              aria-label="Copy email address"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8fc1e3]/10 text-[#8fc1e3] transition-all duration-300 group-hover:bg-[#8fc1e3] group-hover:text-[#292d32]">
                <FaEnvelope />
              </span>

              <span className="min-w-0 flex-1">
                <span className="mt-1 block break-all text-sm font-medium text-gray-200">
                  {copied ? "Email copied!" : "gneelam2004@gmail.com"}
                </span>
              </span>

              <span className="shrink-0 text-xs text-[#8fc1e3]">
                {copied ? "Copied" : "Copy"}
              </span>
            </button>

           

            <p className="mt-4 flex items-center gap-2 text-sm text-gray-300">
              <FaLocationDot className="text-[#8fc1e3]" />
              India
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8fc1e3] hover:bg-[#8fc1e3] hover:text-[#292d32] hover:shadow-lg hover:shadow-[#8fc1e3]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fc1e3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#292d32]"
                  >
                    <Icon
                      size={17}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-gray-300 sm:text-sm">
            © {currentYear} Neelam. Made with{" "}
            <FaHeart
              aria-label="love"
              className="mx-1 inline-block text-red-400 transition-transform duration-300 hover:scale-125"
            />{" "}
            and lots of coffee.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-300 sm:justify-end">
            <span className="inline-flex items-center gap-1.5 transition-colors hover:text-[#8fc1e3]">
              <FaLaptopCode />
              React & Tailwind CSS
            </span>

            <span aria-hidden="true" className="text-gray-300">
              •
            </span>

            <span className="transition-colors hover:text-[#8fc1e3]">
              Hosted on Vercel
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}