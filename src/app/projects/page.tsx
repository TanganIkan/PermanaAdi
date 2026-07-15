// Path: src/app/projects/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiFigma } from "react-icons/fi";
// import { PiFolderBold } from "react-icons/pi";

const projectsData = [
  {
    title: "Fit Med Medical",
    description: "A comprehensive medical clinic website featuring a backend CMS management system and detailed information about integrated home care services.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/fitmed.jpg",
    github: "#",
    demo: "https://fitmedmedical.com",
  },
  {
    title: "Atlania",
    description: "A personal article and blogging platform built to deliver clean readability and dynamic content publishing layout.",
    tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    image: "/images/atlania.jpg",
    github: "https://github.com/TanganIkan/Atlania",
    demo: "#",
  },
  {
    title: "Library Management System",
    description: "A comprehensive library management system featuring an intuitive user interface for book inventory, borrowing tracking, and member administration.",
    tech: ["Figma"],
    image: "/images/library.jpg",
    github: "#",
    demo: "#",
    figma: "https://www.figma.com/design/wrUCQ8aTiLEWhAFHXU8Xy2/UI-SISTEM-MANAJEMEN-PERPUSTAKAAN-OOAD?node-id=0-1&t=d6KA36jrTEGK7Aic-1",
  },
  {
    title: "Maintenance Application UI",
    description: "Modern and minimalist dashboard UI/UX design crafted for equipment maintenance tracking, facility management, and real-time analytics, featuring a comprehensive component-based design system.",
    tech: ["Figma"],
    image: "/images/maintenance.jpg",
    github: "#",
    demo: "#",
    figma: "https://www.figma.com/design/dBINLYMdax6acLcmNZeySE/Aplikasi-Maintenance?node-id=0-1&t=ZJ98yE6ui1Qr0kyO-1",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section>
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        </div>
        <p className="mt-3 text-base text-zinc-400">A collection of web applications and systems I have built, ranging from frontend exploration to full-stack development.</p>
      </div>

      <hr className="my-8 border-zinc-800" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div key={project.title} className="group flex flex-col p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:bg-zinc-800/30 hover:border-zinc-700/60 transition-all duration-300 overflow-hidden">
            <div className="w-full h-64 sm:h-[300px] relative rounded-xl bg-zinc-800 overflow-hidden border border-zinc-700/20 mb-4">
              <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
            </div>

            <div className="flex-1 flex flex-col justify-between px-1">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">{project.title}</h3>

                  <div className="flex items-center gap-3 text-zinc-400">
                    {project.figma && project.figma !== "#" && (
                      <a href={project.figma} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors" title="View Figma File">
                        <FiFigma size={18} />
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors" title="View Source Code">
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} target="blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors" title="View Live Demo">
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-2 group-hover:text-zinc-300 transition-colors">{project.description}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((techName) => (
                  <span key={techName} className="px-2 py-0.5 text-xs font-medium rounded bg-zinc-800 text-zinc-400 border border-zinc-700/20">
                    {techName}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
