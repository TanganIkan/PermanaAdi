// Path: src/app/projects/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiFigma, FiGithub } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import { getProjectBySlug, projectsData } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

type ProjectPageProps = { params: Promise<{ slug: string }> };

// Semua halaman studi kasus dibuat saat build; slug yang tidak terdaftar langsung 404
export const dynamicParams = false;

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);
  if (!project) return {};
  return pageMetadata({ title: project.title, description: project.summary, path: `/projects/${project.slug}`, image: project.image });
}

const CaseStudySection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Reveal>
    <section>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-base leading-relaxed text-secondary-foreground">{children}</div>
    </section>
  </Reveal>
);

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="list-disc pl-5 space-y-2">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);
  if (!project) notFound();

  const { demo, github, figma } = project.links;
  const index = projectsData.indexOf(project);
  const nextProject = projectsData[(index + 1) % projectsData.length];

  return (
    <article className="max-w-4xl mb-8 md:mb-0">
      <Link href="/projects" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <FiArrowLeft className="transition-transform group-hover:-translate-x-0.5" /> Back to projects
      </Link>

      <header className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{project.category}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-secondary-foreground">{project.summary}</p>

        {(demo || github || figma) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90">
                <FiExternalLink /> Live Demo
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-input px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                <FiGithub /> Source Code
              </a>
            )}
            {figma && (
              <a href={figma} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-input px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                <FiFigma /> View in Figma
              </a>
            )}
          </div>
        )}
      </header>

      <Reveal className="mt-8">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-muted">
          <Image src={project.image} alt={`${project.title} preview`} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
        </div>
      </Reveal>

      <div className="mt-10 space-y-10">
        <CaseStudySection title="Overview">
          <p>{project.overview}</p>
        </CaseStudySection>

        {project.role && (
          <CaseStudySection title="My Role">
            <p>{project.role}</p>
          </CaseStudySection>
        )}

        <CaseStudySection title="Key Features">
          <BulletList items={project.features} />
        </CaseStudySection>

        {project.challenges && (
          <CaseStudySection title="Challenges & Solutions">
            <BulletList items={project.challenges} />
          </CaseStudySection>
        )}

        {project.results && (
          <CaseStudySection title="Results">
            <BulletList items={project.results} />
          </CaseStudySection>
        )}

        <CaseStudySection title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((techName) => (
              <span key={techName} className="px-3 py-1 text-sm font-medium rounded-full bg-muted text-secondary-foreground border border-input/20">
                {techName}
              </span>
            ))}
          </div>
        </CaseStudySection>
      </div>

      <hr className="my-10 border-border" />

      <Link href={`/projects/${nextProject.slug}`} className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-muted/30 p-5 transition-colors hover:bg-muted hover:border-input">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Next project</p>
          <p className="mt-1 text-lg font-semibold text-foreground">{nextProject.title}</p>
        </div>
        <FiArrowRight className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" size={20} />
      </Link>
    </article>
  );
}
