// Path: src/app/projects/page.tsx

import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projectsData } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description: "A collection of web applications, websites, and UI/UX designs built by Permana Adi.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 text-base text-muted-foreground">A collection of web applications and systems I have built, ranging from frontend exploration to full-stack development. Click a project to read the full story.</p>
      </div>

      <hr className="my-8 border-border" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-0">
        {projectsData.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
