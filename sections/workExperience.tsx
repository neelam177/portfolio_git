
"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaRegCalendar,
  FaLocationDot,
  FaLaptopCode,
} from "react-icons/fa6";

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
  tags: string[];
  initials: string;
};

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Personal Projects & Portfolio",
    period: "Currently",
    location: "India",
    current: true,
    initials: "FS",
    points: [
      "Developing responsive web applications using Next.js, React, and TypeScript.",
      "Building backend functionality, REST APIs, and database-driven applications with Laravel and PHP.",
      "Creating reusable UI components with Tailwind CSS and improving user experience.",
      "Working across frontend and backend development, from interface design to API integration.",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Git",
    ],
  },
  {
    role: "Web Developer",
    company: "Web Development Projects",
    period: "Project-Based",
    location: "India / Remote",
    initials: "WD",
    points: [
      "Building dynamic websites and web applications based on project requirements.",
      "Developing backend features and server-side functionality using Laravel and PHP.",
      "Working with MySQL databases to store, retrieve, and manage application data.",
      "Creating responsive layouts and integrating frontend interfaces with backend APIs.",
    ],
    tags: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      // "Bootstrap",
      "API Integration",
    ],
  },
];

function TimelineItem({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative mb-10 last:mb-0 md:pb-1"
    >
      {/* Timeline line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[11px] top-0 w-px bg-gradient-to-b from-[#8fc1e3] via-[#e6eaef] to-transparent md:left-1/2 md:-translate-x-1/2"
      />

      {/* Timeline dot */}
      <div
        aria-hidden="true"
        className="absolute left-[11px] top-8 z-10 -translate-x-1/2 md:left-1/2"
      >
        {exp.current && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#8fc1e3]/50 motion-reduce:animate-none" />
        )}

        <span
          className={`relative block h-3.5 w-3.5 rounded-full border-2 border-white bg-[#4285b4] ring-2 ring-[#8fc1e3]/40 transition-transform duration-300 ${
            shown ? "scale-100" : "scale-0"
          }`}
        />
      </div>

      {/* Card wrapper: alternates sides on desktop */}
      <div
        className={`pl-10 md:w-1/2 md:pl-0 ${
          isLeft ? "md:pr-10" : "md:ml-auto md:pl-10"
        }`}
      >
        <article
          tabIndex={0}
          className={`group/card relative w-full overflow-hidden rounded-2xl border border-[#e6eaef] bg-white p-5 shadow-[0_5px_25px_rgba(143,193,227,0.09)] transition-all duration-700 hover:-translate-y-1.5 hover:border-[#8fc1e3] hover:shadow-[0_18px_45px_rgba(143,193,227,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fc1e3] sm:p-6 ${
            shown
              ? "translate-x-0 translate-y-0 opacity-100"
              : `translate-y-6 opacity-0 ${
                  isLeft ? "md:-translate-x-8" : "md:translate-x-8"
                }`
          } motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100`}
        >
          {/* Hover accent */}
          <div
            aria-hidden="true"
            className="absolute inset-x-6 top-0 h-[3px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-[#8fc1e3] to-[#1fc3ff] transition-transform duration-300 group-hover/card:scale-x-100"
          />

          {/* Header */}
          <div className="flex items-start gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 text-lg font-bold text-[#4285b4] transition-transform duration-300 group-hover/card:scale-105">
              <FaLaptopCode
                size={21}
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold leading-snug text-[#2d2d2d] transition-colors duration-300 group-hover/card:text-[#4285b4] sm:text-xl">
                {exp.role}
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#8fc1e3]">
                {exp.company}
              </p>

              {exp.current && (
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Currently Working
                </span>
              )}
            </div>
          </div>

          {/* Date and location */}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2">
              <FaRegCalendar size={13} aria-hidden="true" />
              {exp.period}
            </span>

            <span className="inline-flex items-center gap-2">
              <FaLocationDot size={13} aria-hidden="true" />
              {exp.location}
            </span>
          </div>

          {/* Highlights */}
          <ul className="mt-5 space-y-2.5">
            {exp.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-6 text-gray-600"
              >
                <span
                  aria-hidden="true"
                  className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8fc1e3]"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Technology tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#e6eaef] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#8fc1e3] transition-all duration-300 hover:border-[#8fc1e3] hover:bg-[#8fc1e3] hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-18"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#8fc1e3]/15 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#1fc3ff]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
         

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl md:text-5xl">
            Work{" "}
            <span className="text-[#8fc1e3]">
              Experience
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            My journey in web development, building modern
            interfaces, exploring new technologies, and turning
            ideas into digital experiences.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#8fc1e3] to-[#1fc3ff]" />
        </div>

        {/* Alternating timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={`${exp.company}-${exp.role}`}
              exp={exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}