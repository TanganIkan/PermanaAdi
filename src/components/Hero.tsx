// Path: src/components/Hero.tsx
"use client";

import React from "react";
// Mengimpor ikon-ikon yang kita butuhkan
import { useState, useEffect } from "react";
import { SiReact, SiNextdotjs, SiJavascript, SiLaravel, SiBootstrap, SiTypescript, SiTailwindcss, SiMysql, SiPython, SiGithub, SiWordpress, SiFigma, SiGit, SiPostman, SiHtml5, SiCss3 } from "react-icons/si";
import { PiCodeBold } from "react-icons/pi";
import { VscCircleFilled } from "react-icons/vsc";
import { TbTools } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import { Sun } from "lucide-react";
import Link from "next/link";

// Data untuk skill agar mudah dikelola
const skillsData = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" }, // Dibuat putih agar terlihat di background gelap
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Figma", icon: SiFigma, color: "#FFFFFF" }, // Dibuat putih agar terlihat di background gelap
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" }, // Menggunakan ikon React untuk HTML5
  { name: "CSS", icon: SiCss3, color: "#1572B6" }, // Menggunakan ikon React untuk CSS3
];

// --- LOGIKA BARU: Bagi data skill menjadi dua baris ---
const skillsRow1 = skillsData.slice(0, 8); // Baris pertama berisi 7 skill
const skillsRow2 = skillsData.slice(8, 16); // Baris kedua berisi 7 skill berikutnya

const Hero: React.FC = () => {
  // animasi typing effect (tidak berubah)
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 70;
  const erasingSpeed = 50;
  const delayBetweenTexts = 1000;
  const textsToType = ["Hi, I'm Permana Adi", "Software Engineer", "Frontend Developer"];

  useEffect(() => {
    // ... (logika useEffect Anda tidak perlu diubah)
    const currentText = textsToType[textIndex];
    if (charIndex < currentText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimer);
    }
    const erasingTimer = setTimeout(
      () => {
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % textsToType.length);
        }
      },
      displayText.length === currentText.length ? delayBetweenTexts : erasingSpeed
    );
    return () => clearTimeout(erasingTimer);
  }, [charIndex, displayText, textIndex, textsToType, typingSpeed, erasingSpeed, delayBetweenTexts]);

  return (
    <section className="max-w-4xl">
      <h1 className="text-5xl font-bold tracking-tight h-14">
        {" "}
        {/* Memberi tinggi tetap agar layout stabil */}
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>

      <div className="mt-4 flex items-center gap-4 text-zinc-400 text-sm">
        <span>● Based in Denpasar, Bali, Indonesia</span>
        <VscCircleFilled size={6} className="text-zinc-600" />
        <span>● Onsite</span>
      </div>

      <p className="mt-6 text-base leading-relaxed text-zinc-300">
        Hi, I&apos;m Permana Adi! I&apos;m a developer who believes a web interface should be able to make you smile. Based in Denpasar, Bali, I absolutely love the process of magically turning designs into living, intuitive applications.
        For me, user satisfaction is number one, which is why I&apos;m so serious about UI/UX details. I balance my days with sessions at the gym and adventures in the gaming world. Both teach me a lot about persistence. Ready for a fun
        collaboration? I&apos;m looking forward to hearing from you!😊
      </p>

      <hr className="my-8 border-zinc-800" />

      <div>
        <div className="flex items-center gap-3">
          <PiCodeBold className="text-zinc-400" size={20} />
          <h2 className="text-xl font-semibold">Skills</h2>
        </div>
        <p className="mt-4 text-sm text-zinc-400">My professional skills.</p>

        <div className="mt-6 flex flex-col gap-3">
          {/* Baris 1: Berjalan ke Kanan */}
          <Marquee direction="right" speed={40} autoFill={true} pauseOnHover={true}>
            {skillsRow1.map((skill) => (
              <div key={skill.name} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-zinc-800 px-4 py-1.5 text-sm mx-1.5">
                <skill.icon style={{ color: skill.color }} />
                <span>{skill.name}</span>
              </div>
            ))}
          </Marquee>

          {/* Baris 2: Berjalan ke Kiri */}
          <Marquee direction="left" speed={40} autoFill={true} pauseOnHover={true}>
            {skillsRow2.map((skill) => (
              <div key={skill.name} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-zinc-800 px-4 py-1.5 text-sm mx-1.5">
                <skill.icon style={{ color: skill.color }} />
                <span>{skill.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <hr className="my-8 border-zinc-800" />
      <div>
        <div className="flex items-center gap-3">
          <TbTools className="text-zinc-400" size={20} />
          <h2 className="text-xl font-semibold">Service</h2>
        </div>
        <p className="mt-4 text-base leading-relaxed text-zinc-300">I work as a freelancer exceptional website for brand, companies, institutions, and startups focusing on stratrgic web solutions.</p>
      </div>

      <div className="mt-8 rounded-lg p-4 bg-zinc-800/50 transition-colors border border-zinc-800">
        <div className="flex items-start gap-4">
          <Sun className="text-primary w-6 h-6 flex-shrink-0 mt-1 animate-spin" style={{ animationDuration: "3s" }} />
          <div>
            <h3 className="text-lg font-semibold text-zinc-200">Let&apos;s work together!</h3>
            <p className="mt-1 text-sm text-zinc-400">I&apos;m open for freelance projects, feel free to email me to see how can we collaborate.</p>
            <Link href="/contact">
              <button className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium bg-zinc-800 text-zinc-50 h-10 px-4 py-2 hover:bg-zinc-700 cursor-pointer">Contact me</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
