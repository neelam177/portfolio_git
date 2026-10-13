"use client";
import { Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <section id="home" className="relative z-10 flex min-h-[calc(100vh-90px)] flex-col items-center justify-center px-6 text-center">
        {/* Name */}
        <h1 className="text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-3xl md:text-6xl">
          Neelam <span className="text-[#8fc1e3]">Gupta</span>
        </h1>

        {/* Role */}
        <h2 className="mt-8 text-3xl font-normal text-gray-500 md:text-3xl">
          Web Developer{" "}
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-[18px]">
          Crafting digital experiences with modern technologies. Passionate
          about creating scalable applications that make a difference.
        </p>

        {/* Buttons */}
        {/* <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/getInTouch"
            className="flex items-center gap-3 rounded-xl bg-[#8fc1e3] px-7 py-2.5 text-[16px] font-medium text-white shadow-lg shadow-[#8fc1e3]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7db4da]"
          >
            <Mail size={20} strokeWidth={1.8} />
            Get In Touch
          </Link>

          <Link
            href="/featuredProjects"
            className="rounded-xl border border-[#cfe6f5] bg-white px-7 py-2.5 text-[16px] font-medium text-[#8fc1e3] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            View My Work
          </Link>
        </div> */}
      </section>
    </motion.div>
  );
};
