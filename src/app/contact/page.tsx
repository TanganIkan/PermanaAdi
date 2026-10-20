// Path: src/app/contact/page.tsx

import { FiArrowUpRight } from "react-icons/fi";
import { SiGithub, SiGmail, SiInstagram, SiTiktok } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Permana Adi for freelance projects, collaborations, or job opportunities.",
  path: "/contact",
});

const contactLinks = [
  {
    title: "Stay in Touch",
    description: "Reach out via email for any inquiries or collaborations.",
    buttonText: "Go to Gmail",
    link: `mailto:${siteConfig.email}`,
    icon: SiGmail,
    gradient: "bg-gradient-to-br from-red-500 to-orange-500",
    span: "full",
  },
  {
    title: "Follow My Journey",
    description: "Stay updated with my latest posts and stories on Instagram.",
    buttonText: "Go to Instagram",
    link: siteConfig.socials.instagram,
    icon: SiInstagram,
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    span: "half",
  },
  {
    title: "Let’s Connect",
    description: "Connect for collaboration or explore my professional experience.",
    buttonText: "Go to LinkedIn",
    link: siteConfig.socials.linkedin,
    icon: FaLinkedin,
    gradient: "bg-gradient-to-br from-blue-600 to-cyan-500",
    span: "half",
  },
  {
    title: "Join the Fun",
    description: "Follow me on TikTok for entertaining and engaging content.",
    buttonText: "Go to TikTok",
    link: siteConfig.socials.tiktok,
    icon: SiTiktok,
    gradient: "bg-gradient-to-br from-zinc-800 to-zinc-700",
    span: "half",
  },
  {
    title: "Explore the Code",
    description: "Explore the source code for all my projects on GitHub.",
    buttonText: "Go to GitHub",
    link: siteConfig.socials.github,
    icon: SiGithub,
    gradient: "bg-gradient-to-br from-neutral-800 to-slate-700",
    span: "half",
  },
];

export default function ContactPage() {
  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-2 text-muted-foreground">Let&apos;s get in touch.</p>
      </div>

      <hr className="my-8 border-border" />

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-secondary-foreground">Find me on social media</h2>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactLinks.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className={item.span === "full" ? "md:col-span-2" : ""}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className={`relative block h-full rounded-lg p-6 overflow-hidden transition-transform hover:-translate-y-1 ${item.gradient}`}>
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
            </Reveal>
          ))}
        </div>
      </div>

      <hr className="my-10 border-border" />

      <Reveal>
        <h2 className="text-lg font-semibold text-secondary-foreground">Or send me a message</h2>
        <ContactForm />
      </Reveal>
    </section>
  );
}
