"use client";

import { useState } from "react";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

type Category = "Web App" | "Mobile App" | "API" | "Tool";

type Project = {
  id: number;
  title: string;
  description: string;
  category: Category;
  featured: boolean;
  image: string; // put images in /public/images
  fallback: string; // gradient shown if image is missing
  tags: string[];
  live: string;
  code: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    category: "Web App",
    featured: true,
    image: "/images/ecommerce.jpg",
    fallback: "linear-gradient(135deg,#cfe3f3,#f3e4d7)",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    live: "#",
    code: "#",
  },
  {
    id: 2,
    title: "Task Management API",
    description: "RESTful API for task management with real-time updates",
    category: "API",
    featured: true,
    image: "/images/tasks.jpg",
    fallback: "linear-gradient(135deg,#f7c6d9,#f6efb4)",
    tags: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    live: "#",
    code: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization",
    category: "Web App",
    featured: false,
    image: "/images/weather.jpg",
    fallback: "linear-gradient(135deg,#1d3b57,#d98a3d)",
    tags: ["React", "TypeScript", "Chart.js", "Weather API"],
    live: "#",
    code: "#",
  },
  //   {
  //     id: 4,
  //     title: "Fitness Tracker",
  //     description: "Cross-platform mobile app to track workouts and goals",
  //     category: "Mobile App",
  //     featured: false,
  //     image: "/images/fitness.jpg",
  //     fallback: "linear-gradient(135deg,#cdeede,#bcd7f0)",
  //     tags: ["React Native", "Expo", "Firebase"],
  //     live: "#",
  //     code: "#",
  //   },
  //   {
  //     id: 5,
  //     title: "CLI Deploy Tool",
  //     description: "Command-line tool that ships projects to the cloud in one step",
  //     category: "Tool",
  //     featured: false,
  //     image: "/images/cli.jpg",
  //     fallback: "linear-gradient(135deg,#2b2f3a,#6b7a90)",
  //     tags: ["Node.js", "Commander", "Docker"],
  //     live: "#",
  //     code: "#",
  //   },
  //   {
  //     id: 6,
  //     title: "Recipe Finder",
  //     description: "Search recipes by ingredients with saved favourites",
  //     category: "Mobile App",
  //     featured: false,
  //     image: "/images/recipes.jpg",
  //     fallback: "linear-gradient(135deg,#fde2c8,#f6c0b8)",
  //     tags: ["Flutter", "Dart", "REST API"],
  //     live: "#",
  //     code: "#",
  //   },
];

// const filters: ("All" | Category)[] = ["All", "Web App", "Mobile App", "API", "Tool"];

function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="h-full w-full"
        style={{ background: project.fallback }}
        aria-hidden="true"
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}

export default function FeaturedProjects() {
  const [active] = useState<"All" | Category>("All");
  const [animKey] = useState(0);

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative z-10 overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-18"
    >
      <style>{`
        @keyframes projectIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .project-card { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-[#8fc1e3]/15 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#1fc3ff]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          {/* <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8fc1e3]/40 bg-[#8fc1e3]/10 px-4 py-2 text-sm font-medium text-[#4285b4]">
            <span className="h-2 w-2 rounded-full bg-[#1fc3ff]" />
            My Recent Work
          </span> */}

          <h2 className="text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl md:text-5xl">
            Featured <span className="text-[#8fc1e3]">Projects</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            A showcase of my recent work across various domains, from web
            applications to mobile apps and developer tools.
          </p>
        </div>

        {/* Cards */}
        {visible.length === 0 ? (
          <p className="py-16 text-center text-gray-500">
            No projects in this category yet.
          </p>
        ) : (
          <div
            key={animKey}
            className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {visible.map((project, i) => (
              <article
                key={project.id}
                style={{
                  animation: "projectIn .5s ease forwards",
                  animationDelay: `${i * 70}ms`,
                  opacity: 0,
                }}
                className="project-card group relative flex flex-col overflow-hidden rounded-3xl border border-[#e6eaef] bg-white/90 shadow-[0_5px_25px_rgba(143,193,227,0.09)] transition-all duration-300 hover:-translate-y-2 hover:border-[#8fc1e3] hover:shadow-[0_18px_45px_rgba(143,193,227,0.22)]"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ProjectImage project={project} />

                  {/* {project.featured && (
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-[#8fc1e3] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Featured
                    </span>
                  )} */}

                  {/* Bottom accent */}
                  <div className="absolute inset-x-0 bottom-0 h-0.75 origin-left scale-x-0 bg-linear-to-r from-[#8fc1e3] to-[#1fc3ff] transition-transform duration-500 group-hover:scale-x-100" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-[#2d2d2d] transition-colors duration-300 group-hover:text-[#4285b4] sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-gray-600">
                    {project.description}
                  </p>

                  {/* <div className="mt-5 flex flex-1 flex-wrap content-start gap-2.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#e6eaef] bg-white px-3 py-1 text-xs font-semibold text-[#8fc1e3] transition-all duration-300 hover:border-[#8fc1e3] hover:bg-[#8fc1e3] hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}

                  {/* Project Links */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#8fc1e3] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(143,193,227,0.6)]"
                    >
                      Live demo
                      <FaArrowUpRightFromSquare size={12} aria-hidden="true" />
                    </a>

                    {/* <a
                      href={project.code}
                      className="inline-flex items-center gap-2 rounded-xl border border-[#e6eaef] bg-white px-4 py-2 text-sm font-semibold text-[#4285b4] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8fc1e3]/10"
                    >
                      <FaGithub size={15} aria-hidden="true" />
                      Source
                    </a> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
