// Path: src/app/about/page.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi"; // Ikon untuk link eksternal
import { PiSuitcaseSimple } from "react-icons/pi";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

// Contoh data untuk riwayat pendidikan
const educationData = [
  {
    institution: "Institue Bisnis dan Teknologi Indonesia (INSTIKI)",
    degree: "S1 Teknik Informatika",
    years: "2024 - Sekarang",
  },
  {
    institution: "SMK Negeri 1 Denpasar",
    degree: "Software Engineering",
    years: "2021 - 2024",
  },
];

// Contoh data untuk sertifikat
const certificateData = [
  {
    title: "Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Juli 2025",
    link: "#", // Ganti dengan link sertifikat Anda
  },
  {
    title: "Cloud Practitioner Essentials",
    issuer: "AWS Skill Builder",
    date: "Juni 2025",
    link: "#",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Mei 2025",
    link: "#",
  },
];

const careerData = [
  {
    id: 1,
    role: "Frontend Developer Internship",
    company: "Taksu Technology",
    logo: "/images/taksutech.png",
    date: "Dec 2024 - Present",
    duration: "3 Months",
    type: "Full-time",
    location: "Jambi, Indonesia",
    responsibilities: ["Memimpin dan mengelola tim teknologi dalam divisi riset.", "Mengembangkan strategi teknologi untuk mendukung kegiatan himpunan.", "Mengadakan workshop dan pelatihan untuk anggota."],
  },
  {
    id: 2,
    role: "Web Designer Internship",
    company: "PT. Benlaris Sahabat Dewata",
    logo: "/images/benlaris.jpg",
    date: "Sep 2024 - Dec 2024",
    duration: "3 Months",
    type: "Part-time",
    location: "Bandung, Indonesia",
    responsibilities: [
      "Mastered Android development using Kotlin, Jetpack Components, and modern tools like Room Database and DataStore for state and data management.",
      "Gained hands-on experience with ViewModel, RecyclerView, and Hilt for dependency injection to create robust and scalable mobile applications.",
      "Collaborated with a cross-functional team to develop a Company-Based Capstone Project, applying Agile methodologies and real-world problem-solving.",
    ],
  },
  {
    id: 3,
    role: "Wordpress Developer",
    company: "PT. Benlaris Sahabat Dewata",
    logo: "/images/benlaris.jpg",
    date: "Sep 2024 - Dec 2024",
    duration: "3 Months",
    type: "Part-time",
    location: "Bandung, Indonesia",
    responsibilities: [
      "Mastered Android development using Kotlin, Jetpack Components, and modern tools like Room Database and DataStore for state and data management.",
      "Gained hands-on experience with ViewModel, RecyclerView, and Hilt for dependency injection to create robust and scalable mobile applications.",
      "Collaborated with a cross-functional team to develop a Company-Based Capstone Project, applying Agile methodologies and real-world problem-solving.",
    ],
  },
];

const AboutPage: React.FC = () => {
  // state untuk mengelola apakah bagian pengalaman kerja terbuka atau tidak
  const [expandedId, setExpandedId] = useState<number | null>(2);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  return (
    <section>
      {/* Judul Utama dan Deskripsi */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <span className="flex  mt-2 text-zinc-400">A short story of me</span>
        <p className="mt-6 text-base leading-relaxed text-zinc-300">
          Di sini Anda bisa menulis paragraf yang lebih mendalam tentang diri Anda. Ceritakan tentang perjalanan Anda memasuki dunia teknologi, apa yang membuat Anda tertarik dengan pemrograman, dan apa tujuan karir Anda di masa depan.
          Jelaskan juga bagaimana Anda suka belajar hal baru dan berkontribusi dalam sebuah tim.
        </p>
      </div>

      {/* Garis Pemisah */}
      <hr className="my-10 border-zinc-800" />

      {/* Bagian Experience */}
      <div>
        <div className="flex items-center gap-3">
          <PiSuitcaseSimple className="text-zinc-400" size={20} />
          <h2 className="text-xl font-semibold">Experience</h2>
        </div>
        <p className="mt-2 text-sm text-zinc-400">My experience journey.</p>
        <div className="mt-4 space-y-4">
          {careerData.map((job) => {
            const isExpanded = expandedId === job.id;
            return (
              <div key={job.id} className="p-4 rounded-lg bg-zinc-800/50">
                {/* Bagian Atas Kartu */}
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
                {/* Bagian Bawah Kartu (Responsibilities) */}
                <div className="mt-4">
                  {/* Tombol Show/Hide */}
                  <button onClick={() => handleToggle(job.id)} className="flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-200">
                    {isExpanded ? <VscChevronUp /> : <VscChevronDown />}
                    <span>{isExpanded ? "Hide responsibilities" : "Show responsibilities"}</span>
                  </button>
                  {/* Daftar Responsibilities yang bisa muncul/hilang */}
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

      {/* Bagian Riwayat Pendidikan */}
      <div>
        <h2 className="text-xl font-semibold">Pendidikan</h2>
        <div className="mt-4 space-y-4">
          {educationData.map((edu) => (
            <div key={edu.institution} className="p-4 rounded-lg bg-zinc-800/50">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-zinc-100">{edu.institution}</h3>
                <p className="text-sm text-zinc-400">{edu.years}</p>
              </div>
              <p className="mt-1 text-sm text-zinc-300">{edu.degree}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Garis Pemisah */}
      <hr className="my-10 border-zinc-800" />

      {/* Bagian Sertifikat */}
      <div>
        <h2 className="text-xl font-semibold">Sertifikat</h2>
        {/* Layout Grid untuk sertifikat */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificateData.map((cert) => (
            <a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors">
              <div>
                <p className="text-sm text-zinc-400">{cert.issuer}</p>
                <h3 className="mt-1 font-medium text-zinc-100 group-hover:text-white">{cert.title}</h3>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xs text-zinc-500">{cert.date}</p>
                <FiExternalLink className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
