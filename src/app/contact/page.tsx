// Path: src/app/contact/page.tsx
"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGmail, SiInstagram, SiLinkedin, SiTiktok, SiGithub } from "react-icons/si";

// Data disederhanakan
const contactLinks = [
  {
    title: "Stay in Touch",
    description: "Reach out via email for any inquiries or collaborations.",
    buttonText: "Go to Gmail",
    link: "mailto:iputupermanaadiputra@gmail.com",
    icon: SiGmail,
    gradient: "gmail", // Menggunakan kata kunci
    span: "full",
  },
  {
    title: "Follow My Journey",
    description: "Stay updated with my latest posts and stories on Instagram.",
    buttonText: "Go to Instagram",
    link: "https://www.instagram.com/permanaadiiii_",
    icon: SiInstagram,
    gradient: "instagram",
    span: "half",
  },
  {
    title: "Let’s Connect",
    description: "Connect for collaboration or explore my professional experience.",
    buttonText: "Go to LinkedIn",
    link: "https://www.linkedin.com/in/usernameanda",
    icon: SiLinkedin,
    gradient: "linkedin",
    span: "half",
  },
  {
    title: "Join the Fun",
    description: "Follow me on TikTok for entertaining and engaging content.",
    buttonText: "Go to TikTok",
    link: "https://www.tiktok.com/@tanganikan",
    icon: SiTiktok,
    gradient: "tiktok",
    span: "half",
  },
  {
    title: "Explore the Code",
    description: "Explore the source code for all my projects on GitHub.",
    buttonText: "Go to GitHub",
    link: "https://github.com/TanganIkan",
    icon: SiGithub,
    gradient: "github",
    span: "half",
  },
];

// "Peta" yang menghubungkan kata kunci ke kelas Tailwind yang lengkap
const gradientClasses: { [key: string]: string } = {
  gmail: "bg-gradient-to-br from-red-500 to-orange-500",
  instagram: "bg-gradient-to-br from-purple-500 to-pink-500",
  linkedin: "bg-gradient-to-br from-blue-600 to-cyan-500",
  tiktok: "bg-gradient-to-br from-zinc-800 to-zinc-700",
  github: "bg-gradient-to-br from-neutral-800 to-slate-700",
};

const ContactPage: React.FC = () => {
  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-2 text-zinc-400">Let&apos;s get in touch.</p>
      </div>

      <hr className="my-8 border-zinc-800" />

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-zinc-300">Find me on social media</h2>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactLinks.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              // Kelas gradien sekarang dipilih dari "peta"
              className={`relative block rounded-lg p-6 overflow-hidden transition-transform hover:-translate-y-1 ${
                gradientClasses[item.gradient] // <-- PERUBAHAN DI SINI
              } ${item.span === "full" ? "md:col-span-2" : ""}`}
            >
              <item.icon className="absolute -right-4 -bottom-4 text-white/10 text-9xl rotate-12" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-white/80">{item.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  {item.buttonText}
                  <FiArrowUpRight />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
