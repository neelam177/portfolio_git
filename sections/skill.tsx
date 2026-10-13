
"use client";

import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaServer,
  FaScrewdriverWrench,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

type Category = {
  title: string;
  description: string;
  icon: IconType;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Frontend",
    description: "Building modern and responsive user interfaces.",
    icon: FaLaptopCode,
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "#171717" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#EAB308" },
    ],
  },
  {
    title: "Backend",
    description: "Developing APIs and working with databases.",
    icon: FaServer,
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "REST APIs", icon: FaCode, color: "#8B5CF6" },
    ],
  },
  {
    title: "Tools",
    description: "Tools I use for development and collaboration.",
    icon: FaScrewdriverWrench,
    skills: [
      { name: "GitHub", icon: FaGithub, color: "#171717" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      // { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      // { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

export default function SkillPage() {
  return (
    <section
      id="skills"
      className="relative z-10 overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-18"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#8fc1e3]/15 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#1fc3ff]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl md:text-5xl">
            Skills &amp;{" "}
            <span className="text-[#8fc1e3]">Expertise</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Technologies and tools I use to build modern, responsive,
            and user-friendly digital experiences.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <article
                key={category.title}
                className="group relative flex flex-col rounded-3xl border border-[#e6eaef] bg-white/90 p-6 shadow-[0_5px_25px_rgba(143,193,227,0.09)] transition-all duration-300 hover:-translate-y-2 hover:border-[#8fc1e3] hover:shadow-[0_18px_45px_rgba(143,193,227,0.22)] sm:p-7"
              >
                {/* Top accent */}
                <div className="absolute inset-x-8 top-0 h-[3px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-[#8fc1e3] to-[#1fc3ff] transition-transform duration-300 group-hover:scale-x-100" />

                {/* Category heading */}
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#8fc1e3]/15 text-[#4285b4] transition-all duration-300 group-hover:rotate-3 group-hover:bg-[#8fc1e3]/25">
                    <CategoryIcon size={25} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold text-[#2d2d2d] sm:text-2xl">
                      {category.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill cards */}
                <div className="flex-1 grid grid-cols-2 gap-3 content-start">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        tabIndex={0}
                        className="group/skill relative flex min-h-[94px] cursor-default items-center gap-3 overflow-hidden rounded-2xl border border-[#edf0f4] bg-[#fafcff] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#8fc1e3] hover:bg-white hover:shadow-[0_8px_20px_rgba(143,193,227,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fc1e3]"
                      >
                        {/* Hover background glow */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-5 -top-5 h-16 w-16 rounded-full bg-[#8fc1e3]/0 blur-2xl transition-all duration-300 group-hover/skill:bg-[#8fc1e3]/40"
                        />

                        {/* Technology icon */}
                        <div
                          className="relative flex md:h-10 md:w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-transform duration-300 group-hover/skill:scale-110"
                        >
                          <SkillIcon
                            size={20}
                            style={{ color: skill.color }}
                            aria-hidden="true"
                          />
                        </div>

                        {/* Technology name */}
                        <div className="relative min-w-0 flex-1">
                          <span className="block break-words text-xs md:text-sm font-bold leading-5 text-gray-700 transition-colors duration-300 group-hover/skill:text-[#4285b4]">
                            {skill.name}
                          </span>
                        </div>

                        {/* Arrow appears on hover */}
                        {/* <FaArrowUpRightFromSquare
                          size={11}
                          aria-hidden="true"
                          className="absolute right-2.5 top-2.5 text-[#8fc1e3] opacity-0 transition-all duration-300 group-hover/skill:translate-x-0.5 group-hover/skill:-translate-y-0.5 group-hover/skill:opacity-100"
                        /> */}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom label */}
                <div className="mt-6 flex items-center justify-between border-t border-[#edf0f4] pt-5">
                  <span className="text-xs font-medium tracking-wide text-gray-400">
                    TECHNOLOGIES
                  </span>

                  {/* <span className="rounded-full bg-[#8fc1e3]/15 px-3 py-1 text-xs font-semibold text-[#4285b4]">
                    {category.skills.length} skills
                  </span> */}
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer message */}
        <div className="mt-12 text-center">
          <p className="text-sm leading-6 text-gray-500 sm:text-base">
            Always learning, exploring new technologies, and improving
            my development skills.
          </p>
        </div>
      </div>
    </section>
  );
}

