// Path: src/app/page.tsx

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { PiCodeBold, PiFolderBold } from "react-icons/pi";
import { TbTools } from "react-icons/tb";
import { Sun } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SkillsMarquee from "@/components/SkillsMarquee";
import { educationData } from "@/data/about";
import { projectsData } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ path: "/" });

const featuredProjects = projectsData.filter((project) => project.featured);

// Data terstruktur (JSON-LD) agar Google memahami siapa pemilik website ini
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/profile.jpg`,
  email: `mailto:${siteConfig.email}`,
  jobTitle: "Frontend Developer",
  address: { "@type": "PostalAddress", addressLocality: "Denpasar", addressRegion: "Bali", addressCountry: "ID" },
  alumniOf: educationData.map((edu) => ({ "@type": "EducationalOrganization", name: edu.institution })),
  sameAs: Object.values(siteConfig.socials),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <Hero />

      <hr className="my-8 border-border" />

      <Reveal>
        <section>
          <SectionHeading icon={PiCodeBold} title="Skills" description="My professional skills." />
          <div className="mt-6">
            <SkillsMarquee />
          </div>
        </section>
      </Reveal>

      <hr className="my-8 border-border" />

      <Reveal>
        <section>
          <SectionHeading icon={TbTools} title="Service" />
          <p className="mt-4 text-base leading-relaxed text-secondary-foreground">I work as a freelancer, building exceptional websites for brands, companies, institutions, and startups, with a focus on strategic web solutions.</p>

          <div className="mt-8 mb-8 md:mb-0 rounded-lg p-4 bg-muted/50 transition-colors border border-border">
            <div className="flex items-start gap-4">
              <Sun className="w-6 h-6 shrink-0 mt-1 animate-spin" style={{ animationDuration: "3s" }} />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Let&apos;s work together!</h3>
                <p className="mt-1 text-sm text-muted-foreground">I&apos;m open for freelance projects, feel free to email me to see how we can collaborate.</p>
                <Link href="/contact" className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium bg-muted text-foreground h-10 px-4 py-2 hover:bg-input transition-colors">
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
