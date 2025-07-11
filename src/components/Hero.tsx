// Path: src/components/Hero.tsx

import React from "react";
// Mengimpor ikon-ikon yang kita butuhkan
import { SiReact, SiNextdotjs, SiJavascript, SiLaravel, SiBootstrap, SiTypescript, SiTailwindcss, SiMysql, SiGithub, SiWordpress, SiFigma, SiGit, SiPostman } from "react-icons/si";
import { PiCodeBold } from "react-icons/pi";
import { VscCircleFilled } from "react-icons/vsc";

// Data untuk skill agar mudah dikelola
const skillsData = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" }, // Menggunakan ikon React sebagai placeholder
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Figma", icon: SiFigma, color: "#181717" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

const Hero: React.FC = () => {
  return (
    // Menggunakan <section> sebagai container utama untuk hero
    <section className="max-w-3xl">
      {" "}
      {/* max-w-3xl untuk membatasi lebar konten */}
      {/* Judul Utama */}
      <h1 className="text-5xl font-bold tracking-tight">Hi, I'm Permana Adi</h1>
      {/* Info Lokasi dan Status */}
      <div className="mt-4 flex items-center gap-4 text-zinc-400 text-sm">
        <span>● Based in Denpasar, Bali, Indonesia</span>
        <VscCircleFilled size={6} className="text-zinc-600" />
        <span>● Onsite</span>
      </div>
      {/* Paragraf Deskripsi Diri */}
      <p className="mt-6 text-base leading-relaxed text-zinc-300">
        Passionate and seasoned Software Engineer with a strong focus on frontend development. Proficient in TypeScript and well-versed in all aspects of web technologies. Collaborative team player dedicated to delivering efficient,
        scalable, and visually appealing web applications.
      </p>
      {/* Garis Pemisah */}
      <hr className="my-8 border-zinc-800" />
      {/* Bagian Skills */}
      <div>
        <div className="flex items-center gap-3">
          <PiCodeBold className="text-zinc-400" size={20} />
          <h2 className="text-xl font-semibold">Skills</h2>
        </div>
        <p className="mt-2 text-sm text-zinc-400">My professional skills.</p>

        {/* Kumpulan "Pil" Skill */}
        <div className="mt-4 flex flex-wrap gap-3">
          {skillsData.map((skill) => (
            <div key={skill.name} className="flex items-center gap-3 rounded-full bg-zinc-800 px-3 py-1.5 text-sm">
              <skill.icon style={{ color: skill.color }} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
