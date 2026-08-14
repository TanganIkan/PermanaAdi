// Path: src/app/about/page.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { PiSuitcaseSimple, PiCertificate } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

// Contoh data untuk riwayat pendidikan
const educationData = [
  {
    institution: "Institut Bisnis dan Teknologi Indonesia (INSTIKI)",
    degree: "Computer Science, (S.Kom)",
    years: "2024 - Present",
    logo: "/images/instiki.jpg",
    gpa: "4.00",
    transcriptUrl: "/transcripts/transcript.pdf",
    date: "2024 - Present",
    location: "Denpasar, Indonesia",
  },
  {
    institution: "SMK Negeri 1 Denpasar",
    degree: "Software Engineering",
    years: "2021 - 2024",
    logo: "/images/smk1.png",
    date: "2021 - 2024",
    location: "Denpasar, Indonesia",
  },
];

// Contoh data untuk sertifikat
const certificateData = [
  {
    title: "Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "October 2024",
    imageSrc: "/images/dasar web.jpg",
  },
  {
    title: "Complete of the internship program at Taksu Technology",
    issuer: "Taksu Technology",
    date: "December 2023",
    imageSrc: "/images/taksu.jpg",
  },
  {
    title: "Complete of the internship program at PT. Benlaris Sahabat Dewata",
    issuer: "PT. Benlaris Sahabat Dewata",
    date: "September 2023",
    imageSrc: "/images/elementor.jpg",
  },
];

const careerData = [
  {
    id: 1,
    role: "Frontend Developer Internship",
    company: "Taksu Technology",
    logo: "/images/taksutech.png",
    date: "Dec 2022 - Feb 2023",
    duration: "3 Months",
    type: "Full-time",
    location: "Denpasar, Indonesia",
    responsibilities: [
      "Developed key components for the Pathlight School Management System using Angular and Laravel. ",
      "Built a dynamic Last Updated By feature.",
      "Created a reusable Attachment Preview component in Angular that shows a file's",
      "Designed and implemented an Admission Email Notification feature using Laravel Blade and CSS",
      "Actively collaborated in a team environment using the Scrum methodology",
      "Utilized Git and GitHub for version control and team collaboration",
    ],
  },
  {
    id: 2,
    role: "Web Designer Internship",
    company: "PT. Benlaris Sahabat Dewata",
    logo: "/images/benlaris.jpg",
    date: "July 2023 - September 2023",
    duration: "3 Months",
    type: "Full-time",
    location: "Denpasar, Indonesia",
    responsibilities: [
      'Designed and developed a company profile website for "Bali Property Konstruksi" using WordPress and Elementor.',
      "Analyzed client needs and translated design concepts into a functional, responsive website.",
      "Managed plugins, templates, and content to build a multi-page website according to specifications.",
      "Gained hands-on experience in the digital marketing and web design industry.",
    ],
  },
  {
    id: 3,
    role: "Wordpress Developer",
    company: "PT. Benlaris Sahabat Dewata",
    logo: "/images/benlaris.jpg",
    date: "June 2024 - August 2024",
    duration: "2 Months",
    type: "Contract",
    location: "Denpasar, Indonesia",
    responsibilities: [
      "Assisted a senior developer in managing and updating the company website.",
      "Responsible for arranging layouts and creating new visual sections within pages using WordPress page builders.",
      "Performed content updates and data entry for tour packages, services, and other site information.",
      "Collaborated to implement UI improvements based on project requirements.",
    ],
  },
  {
    id: 4,
    role: "Operations Administrator",
    company: "PT. Alam Terbuka Ventures",
    logo: "/images/oasis.png",
    date: "Aug 2025 - Jun 2026",
    duration: "10 Months",
    type: "Full-time Remote",
    location: "Denpasar, Indonesia",
    responsibilities: [
      "Managed the daily operations of an outdoor and camping gear rental business, handling everything from order bookings to inventory management.",
      "Handled the company's financial administration, maintaining accurate transaction records and overseeing payroll.",
      "Analyzed business operations and provided strategic recommendations that successfully drove revenue growth.",
      "Maintained direct communication with customers to facilitate a seamless booking experience and ensure high satisfaction.",
    ],
  },
  {
    id: 5,
    role: "UI/UX Designer Mentorship",
    company: "Instiki Developer Club",
    logo: "/images/IDC.png",
    date: "Jul 2025 - Present",
    duration: "1 Year",
    type: "Mentorship",
    location: "INSTIKI",
    responsibilities: ["Mentored students in UI/UX principles, guiding the creation of wireframes and interactive dashboards using Figma.", "Led hands-on training sessions to build functional and user-centered digital prototypes"],
  },
];

const AboutPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <span className="flex mt-4 text-zinc-400">A short story of me</span>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">
          My journey into the world of technology began earlier than for many. It wasn&apos;t a sudden discovery, but a gradual fascination that took root during my time in vocational high school. I chose to major in Software Engineering ,
          a decision that threw me headfirst into the intricate world of code. Those formative years were a blur of algorithms, late-night debugging sessions, and the unparalleled thrill of watching my first programs come to life. It was
          here that I realized technology wasn&apos;t just a subject; it was a powerful tool for creation and problem-solving. That initial spark has now grown into a full-fledged passion. I am currently pursuing a degree in Informatics
          Engineering, building upon the foundational knowledge I gained in high school. University has expanded my perspective, introducing me to more complex concepts and the collaborative spirit of the tech community. My path from a
          curious high school student to a dedicated university undergraduate has been a continuous adventure of learning and growth, and I am excited to see where it takes me next.
        </p>
      </div>

      <hr className="my-10 border-zinc-800" />

      <div>
        <div className="flex items-center gap-3">
          <PiSuitcaseSimple className="text-zinc-400" size={20} />
          <h2 className="text-xl font-semibold">Experience</h2>
        </div>
        <p className="mt-4 text-sm text-zinc-400">My experience journey.</p>
        <div className="mt-4 space-y-4">
          {careerData.map((job) => {
            const isExpanded = expandedId === job.id;
            return (
              <div key={job.id} className="p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors border border-zinc-800 hover:border-zinc-600">
                <div className="flex gap-4">
                  <div className="w-15 h-18 flex-shrink-0 flex items-center justify-center">
                    <Image src={job.logo} alt={job.company} width={60} height={60} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-zinc-100">{job.role}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{job.company}</p>
                    <p className="mt-2 text-xs text-zinc-400">
                      {job.date} ・ {job.duration} ・ {job.type} ・ {job.location}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <button onClick={() => handleToggle(job.id)} className="flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-200">
                    {isExpanded ? <VscChevronUp /> : <VscChevronDown />}
                    <span>{isExpanded ? "Hide responsibilities" : "Show responsibilities"}</span>
                  </button>
                  {isExpanded && (
                    <ul className="mt-3 list-disc list-inside space-y-2 pl-2 text-sm text-zinc-300">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr className="my-10 border-zinc-800" />

      <div>
        <div className="flex items-center gap-3">
          <IoSchoolOutline className="text-zinc-400" size={20} />
          <h2 className="text-xl font-semibold">Education</h2>
        </div>
        <p className="mt-4 text-sm text-zinc-400">My educational journey.</p>
        <div className="mt-4 space-y-4">
          {educationData.map((edu) => (
            <div key={edu.institution} className="p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors border border-zinc-800 hover:border-zinc-600">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <Image src={edu.logo} alt={`${edu.institution} logo`} width={40} height={40} className="object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-zinc-100">{edu.institution}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{edu.degree}</p>
                  <p className="mt-2 text-xs text-zinc-400">
                    {edu.date} ・ {edu.location}
                  </p>
                </div>
              </div>
              {edu.gpa && (
                <div className="mt-4 pt-4 border-t border-zinc-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium mr-2 text-zinc-400">Current GPA :</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-900/50 text-green-300">{edu.gpa}</span>
                  </div>
                  <a href={edu.transcriptUrl} download className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors">
                    <FiDownload />
                    <span>Download Transcript</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <hr className="my-10 border-zinc-800" />

      <div>
        <div className="flex items-center gap-3">
          <PiCertificate className="text-zinc-400" size={20} />
          <h2 className="text-xl font-semibold">Certificates</h2>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-0">
          {certificateData.map((cert) => (
            <a key={cert.title} className="block rounded-lg overflow-hidden bg-zinc-800/50 hover:bg-zinc-800 transition-colors border border-zinc-800 hover:border-zinc-600">
              <div className="w-full aspect-video bg-zinc-700">
                <Image src={cert.imageSrc} alt={`Sertifikat ${cert.title}`} width={400} height={280} className="w-full h-full object-cover" />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-zinc-100 line-clamp-2">{cert.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{cert.issuer}</p>
                <p className="mt-1 text-xs text-zinc-400">Issued on {cert.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
