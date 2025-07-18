// Path: src/app/contact/page.tsx
"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
    gradient: "gmail",
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
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Ganti dengan Service ID, Template ID, dan Public Key Anda dari EmailJS
    const serviceID = "service_yt8kno9";
    const templateID = "template_pftvmhh";
    const publicKey = "R-KMqSQCo1buyR5oB";

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          form.current?.reset(); // Mengosongkan form setelah berhasil
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
    }
  };

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

      <hr className="my-10 border-zinc-800" />

      <div>
        <h2 className="text-lg font-semibold text-zinc-300">Or send me a message</h2>
        <form ref={form} onSubmit={sendEmail} className="mt-4 space-y-4">
          {/* Baris untuk Nama dan Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                Name
              </label>
              <input id="name" type="text" name="name" placeholder="Your name" required className="w-full rounded-lg border border-zinc-700 bg-transparent px-3 py-2 text-zinc-50 focus:border-zinc-500 focus:ring-zinc-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                Email
              </label>
              <input id="email" type="email" name="email" placeholder="Your email address" required className="w-full rounded-lg border border-zinc-700 bg-transparent px-3 py-2 text-zinc-50 focus:border-zinc-500 focus:ring-zinc-500" />
            </div>
          </div>
          {/* Baris untuk Pesan */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
              Message
            </label>
            <textarea id="message" name="message" placeholder="Your message..." required className="w-full min-h-[120px] rounded-lg border border-zinc-700 bg-transparent px-3 py-2 text-zinc-50 focus:border-zinc-500 focus:ring-zinc-500" />
          </div>
          {/* Tombol Kirim */}
          <button type="submit" disabled={status === "loading"} className="w-full rounded-lg bg-zinc-700 py-3 font-semibold text-zinc-50 transition-colors hover:bg-zinc-600 disabled:bg-zinc-800 disabled:cursor-not-allowed">
            {status === "loading" ? "Sending..." : "Send Email"}
          </button>
          {/* Pesan Status */}
          {status === "success" && <p className="text-sm text-green-400">Message sent successfully!</p>}
          {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
