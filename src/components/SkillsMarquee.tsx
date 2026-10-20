// Path: src/components/SkillsMarquee.tsx
"use client";

import Marquee from "react-fast-marquee";
import { SiReact, SiNextdotjs, SiJavascript, SiLaravel, SiBootstrap, SiTypescript, SiTailwindcss, SiMysql, SiPython, SiGithub, SiWordpress, SiFigma, SiGit, SiPostman, SiHtml5, SiCss } from "react-icons/si";
import { FaMasksTheater } from "react-icons/fa6";

// Data untuk skill agar mudah dikelola
const skillsData = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "GitHub", icon: SiGithub, color: "currentColor" }, // Mengikuti warna teks agar terlihat di tema gelap maupun terang
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Figma", icon: SiFigma, color: "currentColor" }, // Mengikuti warna teks agar terlihat di tema gelap maupun terang
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Playwright", icon: FaMasksTheater, color: "#2EAD33" }, // react-icons belum punya logo Playwright; topeng teater mengikuti logonya
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
];

// Bagi data skill menjadi dua baris secara otomatis agar skill baru tidak terpotong
const half = Math.ceil(skillsData.length / 2);
const skillsRow1 = skillsData.slice(0, half);
const skillsRow2 = skillsData.slice(half);

const SkillChip: React.FC<{ skill: (typeof skillsData)[number] }> = ({ skill }) => (
  <div className="flex shrink-0 items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm mx-1.5">
    <skill.icon style={{ color: skill.color }} className="w-4 h-4" />
    <span>{skill.name}</span>
  </div>
);

const SkillsMarquee: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* Daftar statis untuk screen reader; marquee menduplikasi item sehingga disembunyikan */}
      <ul className="sr-only">
        {skillsData.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="flex flex-col gap-3">
        <Marquee direction="right" speed={40} autoFill={true} pauseOnHover={true}>
          {skillsRow1.map((skill) => (
            <SkillChip key={skill.name} skill={skill} />
          ))}
        </Marquee>
        <Marquee direction="left" speed={40} autoFill={true} pauseOnHover={true}>
          {skillsRow2.map((skill) => (
            <SkillChip key={skill.name} skill={skill} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SkillsMarquee;
