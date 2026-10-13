"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
// import type { IconType } from "react-icons";

/* ---------- Data ---------- */

const floatingChips = [
  { label: "React", pos: "-left-1 -top-4 sm:-left-8 sm:top-6", delay: "0s" },
  { label: "Laravel", pos: "-right-1 top-16 sm:-right-8", delay: "0.8s" },
  { label: "Next.js", pos: "-left-1 bottom-14 sm:-left-10", delay: "1.6s" },
  { label: "MySQL", pos: "-right-1 bottom-6 sm:-right-6", delay: "2.4s" },
];

/* ---------- Helpers ---------- */

// function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (reduce) {
//       setValue(to);
//       return;
//     }

//     let raf = 0;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;
//         io.disconnect();
//         const start = performance.now();
//         const duration = 1600;
//         const tick = (now: number) => {
//           const p = Math.min((now - start) / duration, 1);
//           const eased = 1 - Math.pow(1 - p, 3);
//           setValue(Math.round(to * eased));
//           if (p < 1) raf = requestAnimationFrame(tick);
//         };
//         raf = requestAnimationFrame(tick);
//       },
//       { threshold: 0.4 }
//     );
//     io.observe(el);

//     return () => {
//       io.disconnect();
//       cancelAnimationFrame(raf);
//     };
//   }, [to]);

//   return (
//     <span ref={ref}>
//       {value}
//       {suffix}
//     </span>
//   );
// }

const Hl = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-[#4285b4]">{children}</span>
);

/* ---------- Page ---------- */

export default function AboutPage() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 8, y: px * 10 });
  };

  return (
    <section
      id="about"
      className="relative z-10 overflow-hidden bg-[#fafbfc] px-5 py-20 sm:px-8 lg:py-28 lg:min-h-screen lg:items-center lg:flex"
    >
      <style>{`
        @keyframes aboutFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes aboutBlink { 50% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .about-float, .about-blink { animation: none !important; }
        }
      `}</style>

      {/* Background glow + dotted pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#8fc1e3]/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#1fc3ff]/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#c9dff0_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 grid-cols-1 lg:gap-20">
          {/* ---------- Text ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8fc1e3]/40 bg-[#8fc1e3]/10 px-4 py-2 text-sm font-medium text-[#4285b4]">
              <span className="h-2 w-2 rounded-full bg-[#1fc3ff]" />
              Get To Know Me
            </span> */}

            <h2 className="text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-3xl md:text-6xl">
              About <span className="text-[#8fc1e3]">Me</span>
            </h2>

            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#8fc1e3] to-[#1fc3ff]" />

            <div className="mt-8 space-y-3 md:space-y-5 text-base text-justify leading-7 md:leading-8 text-gray-600 sm:text-lg">
              <p>
                I&apos;m a passionate <Hl>Full Stack Developer</Hl>, building
                real-world web applications that bridge the gap between design
                and functionality.
              </p>
              <p>
                My expertise spans modern web technologies including{" "}
                <Hl>React</Hl>, <Hl>Next.js</Hl>, <Hl>TypeScript</Hl>,{" "}
                <Hl>Laravel</Hl>, <Hl>PHP</Hl> and <Hl>MySQL</Hl>. I thrive on
                solving complex problems and turning ideas into scalable,
                user-friendly applications.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-[#d5e6f3] bg-white px-6 py-3.5 text-sm font-semibold text-[#4285b4] transition-all duration-300 hover:-translate-y-1 hover:border-[#8fc1e3] hover:bg-[#8fc1e3]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fc1e3] focus-visible:ring-offset-2"
              >
                Let&apos;s Talk
                <FaArrowRight
                  size={13}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          {/* ---------- Visual: code card ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full min-w-0 max-w-lg px-3 sm:px-0"
          >
            {/* Floating tech chips */}
            {floatingChips.map((c) => (
              <span
                key={c.label}
                style={{
                  animation: `aboutFloat 5s ease-in-out ${c.delay} infinite`,
                }}
                className={`about-float absolute z-20 rounded-full border border-[#8fc1e3]/40 bg-white px-3 py-1.5 text-xs font-bold text-[#4285b4] shadow-[0_8px_20px_rgba(143,193,227,0.3)] sm:px-4 sm:text-sm ${c.pos}`}
              >
                {c.label}
              </span>
            ))}

            {/* Glow behind card */}
            <div
              aria-hidden="true"
              className="absolute inset-6 rounded-3xl bg-gradient-to-br from-[#8fc1e3]/40 to-[#1fc3ff]/30 blur-3xl"
            />

            {/* Card (3D tilt on hover) */}
            <div
              onMouseMove={onMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              style={{
                transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
              className="relative overflow-hidden rounded-3xl border border-[#e6eaef] bg-white shadow-[0_20px_60px_rgba(143,193,227,0.3)] transition-transform duration-200 ease-out"
            >
              {/* Window bar */}
              <div className="flex items-center gap-2 border-b border-[#edf0f4] bg-[#f6f9fc] px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
                <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
                <span className="h-3 w-3 rounded-full bg-[#4cd964]" />
                <span className="ml-3 text-xs font-medium text-gray-400">
                  about-me.ts
                </span>
              </div>

              {/* Code */}
              <pre className="overflow-x-auto p-3 md:p-5 text-[11px] md:text-[12.5px] md:leading-7 sm:p-7 sm:text-sm">
                <code>
                  <span className="text-[#c678dd]">const</span>{" "}
                  <span className="text-[#4285b4]">developer</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-gray-500">{"{"}</span>
                  {"\n"}
                  {"  "}<span className="text-black">name:</span>{" "}
                  <span className="text-[#2e9d6a]">
                    &quot;Neelam Gupta&quot;
                  </span>
                  ,{"\n"}
                  {"  "}<span className="text-black">role:</span>{" "}
                  <span className="text-[#2e9d6a]">
                    &quot;Full Stack Developer&quot;
                  </span>
                  ,{"\n"}
                  {"  "}<span className="text-black">status:</span>{" "}
                  <span className="text-[#2e9d6a]">
                    &quot;Working since 16 Mar 2026&quot;
                  </span>
                  ,{"\n"}
                  {"  "} <span className="text-black">stack: [</span>
                  <span className="text-[#2e9d6a]">&quot;React&quot;</span>,{" "}
                  <span className="text-[#2e9d6a]">&quot;Laravel&quot;</span>,{" "}
                  <span className="text-[#2e9d6a]">&quot;TS&quot;</span>],
                  {"\n"}
                  {"  "}loves:{" "}
                  <span className="text-[#2e9d6a]">
                    &quot;Scalable apps&quot;
                  </span>
                  ,{"\n"}
                  {"  "}<span className="text-black">learning:</span><span className="text-[#c678dd]">true</span>
                  <span className="about-blink ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-[#8fc1e3] [animation:aboutBlink_1s_steps(1)_infinite]" />
                  {"\n"}
                  <span className="text-gray-500">{"};"}</span>
                </code>
              </pre>

              {/* Status bar */}
              <div className="flex items-center justify-between border-t border-[#edf0f4] bg-[#f6f9fc] px-5 py-3 text-xs text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4cd964] opacity-70 motion-reduce:hidden" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4cd964]" />
                  </span>
                  Currently working
                </span>
                <span>TypeScript</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
