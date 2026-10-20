// Path: src/components/ProjectCard.tsx

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiExternalLink, FiFigma, FiGithub } from "react-icons/fi";
import type { Project } from "@/data/projects";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { demo, github, figma } = project.links;

  return (
    // Seluruh kartu bisa diklik menuju studi kasus (lewat link judul yang direntangkan),
    // sementara ikon link eksternal tetap bisa diklik terpisah (z-10)
    <article className="group relative flex h-full flex-col p-4 rounded-2xl bg-card/40 border border-border/60 hover:bg-muted/30 hover:border-input/60 transition-all duration-300 overflow-hidden">
      <div className="w-full h-56 sm:h-64 relative rounded-xl bg-muted overflow-hidden border border-input/20 mb-4">
        <Image src={project.image} alt={project.title} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
      </div>

      <div className="flex-1 flex flex-col justify-between px-1">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{project.category}</p>
          <div className="mt-1 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-foreground">
              <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 after:absolute after:inset-0 after:content-['']">
                {project.title}
                <FiArrowUpRight className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={16} />
              </Link>
            </h3>

            <div className="relative z-10 flex items-center gap-3 text-muted-foreground">
              {figma && (
                <a href={figma} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="View Figma File" aria-label={`View ${project.title} Figma file`}>
                  <FiFigma size={18} />
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="View Source Code" aria-label={`View ${project.title} source code`}>
                  <FiGithub size={18} />
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="View Live Demo" aria-label={`View ${project.title} live demo`}>
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2 group-hover:text-secondary-foreground transition-colors">{project.summary}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((techName) => (
            <span key={techName} className="px-2 py-0.5 text-xs font-medium rounded bg-muted text-muted-foreground border border-input/20">
              {techName}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
