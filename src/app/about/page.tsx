// Path: src/app/about/page.tsx

import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { PiSuitcaseSimple, PiCertificate } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import ExperienceList from "@/components/ExperienceList";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { careerData, certificateData, educationData } from "@/data/about";
import { formatDateRange, formatDuration } from "@/lib/date";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: "Learn more about Permana Adi: background, work experience, education, and certificates.",
  path: "/about",
});

// Halaman dibuat ulang sekali sehari agar durasi pengalaman yang masih berjalan ("Present") tetap akurat
export const revalidate = 86400;

export default function AboutPage() {
  const experienceItems = careerData.map(({ start, end, ...job }) => ({
    ...job,
    dateRange: formatDateRange(start, end),
    duration: formatDuration(start, end),
  }));

  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <span className="flex mt-4 text-muted-foreground">A short story of me</span>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-secondary-foreground">
          <p>
            My journey into tech started in vocational high school, where I majored in Software Engineering at SMK Negeri 1 Denpasar. Those years were full of algorithms, late-night debugging sessions, and the thrill of watching my
            first programs come to life. They taught me that technology isn&apos;t just a subject; it&apos;s a powerful tool for creating things and solving problems.
          </p>
          <p>
            Today I&apos;m studying Computer Science at INSTIKI, building on that foundation with more complex concepts and the collaborative spirit of the tech community. Alongside my studies, I&apos;ve worked on real projects through
            internships and contract work, mentored fellow students in UI/UX design, and gained hands-on experience in business operations.
          </p>
          <p>I feel most at home where design meets code: turning ideas into interfaces that are intuitive and enjoyable to use. I&apos;m always looking for new challenges and opportunities to grow.</p>
        </div>
      </div>

      <hr className="my-10 border-border" />

      <Reveal>
        <SectionHeading icon={PiSuitcaseSimple} title="Experience" description="My experience journey." />
        <ExperienceList items={experienceItems} />
      </Reveal>

      <hr className="my-10 border-border" />

      <Reveal>
        <SectionHeading icon={IoSchoolOutline} title="Education" description="My educational journey." />
        <div className="mt-4 space-y-4">
          {educationData.map((edu) => (
            <div key={edu.institution} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border hover:border-input">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 shrink-0 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <Image src={edu.logo} alt={`${edu.institution} logo`} width={40} height={40} className="object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{edu.institution}</h3>
                  <p className="mt-1 text-sm text-secondary-foreground">{edu.degree}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {edu.date} ・ {edu.location}
                  </p>
                </div>
              </div>
              {edu.gpa && (
                <div className="mt-4 pt-4 border-t border-input/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium mr-2 text-muted-foreground">Current GPA :</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">{edu.gpa}</span>
                  </div>
                  <a href={edu.transcriptUrl} download className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <FiDownload />
                    <span>Download Transcript</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <hr className="my-10 border-border" />

      <Reveal>
        <SectionHeading icon={PiCertificate} title="Certificates" />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-0">
          {certificateData.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.08}>
              <div className="h-full rounded-lg overflow-hidden bg-muted/50 hover:bg-muted transition-colors border border-border hover:border-input">
                <div className="relative w-full aspect-video bg-input">
                  <Image src={cert.imageSrc} alt={`Sertifikat ${cert.title}`} fill sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" className="object-cover object-top" />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-foreground line-clamp-2">{cert.title}</h3>
                  <p className="mt-2 text-sm text-secondary-foreground">{cert.issuer}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Issued on {cert.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
