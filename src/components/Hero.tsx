// Path: src/components/Hero.tsx
"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowRight, FiBriefcase, FiDownload, FiMapPin } from "react-icons/fi";
import { siteConfig } from "@/data/site";

// --- DIPINDAHKAN KE LUAR KOMPONEN UNTUK MENGHILANGKAN WARNING ESLINT ---
const typingSpeed = 70;
const erasingSpeed = 50;
const delayBetweenTexts = 1000;
const textsToType = ["QA Engineer", "UI/UX Enthusiast", "Web Developer"];

const Hero: React.FC = () => {
  // animasi typing effect
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
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
      displayText.length === currentText.length ? delayBetweenTexts : erasingSpeed,
    );
    return () => clearTimeout(erasingTimer);
  }, [charIndex, displayText, textIndex]);

  return (
    <section>
      <p className="text-base text-muted-foreground">Hi, I&apos;m</p>
      <h1 className="mt-1 text-4xl sm:text-5xl font-bold tracking-tight">{siteConfig.name}</h1>

      <p className="mt-3 text-2xl sm:text-3xl font-semibold text-secondary-foreground min-h-9 sm:min-h-10">
        <span className="sr-only">{textsToType.join(", ")}</span>
        <span aria-hidden="true">
          {displayText}
          <span className="animate-pulse">|</span>
        </span>
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-xs sm:text-sm">
        <span className="inline-flex items-center gap-1.5">
          <FiMapPin /> Based in {siteConfig.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FiBriefcase /> Onsite
        </span>
      </div>

      <p className="mt-6 text-base leading-relaxed text-secondary-foreground">
        I&apos;m a Denpasar-based developer passionate about turning creative designs into intuitive, user-friendly web applications. With a strong eye for UI/UX details, I build digital experiences designed to leave users smiling. Off the
        clock, I stay persistent and energized by hitting the gym. Got a cool project in mind? Let&apos;s make it happen! 🚀
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/contact" className="group inline-flex items-center gap-2 rounded-lg border border-input px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
          Contact me <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
