// Path: src/components/Sidebar.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GoHome, GoPerson, GoRepo, GoMail } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { FiHeart, FiMenu } from "react-icons/fi";

const navLinks = [
  { name: "Home", icon: GoHome, href: "/" },
  { name: "About", icon: GoPerson, href: "/about" },
  { name: "Projects", icon: GoRepo, href: "/projects" },
  { name: "Contact", icon: GoMail, href: "/contact" },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Tombol Hamburger (Mobile) */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-18 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 flex items-center justify-between px-4 z-50">
        <Link href="/" className="flex items-center gap-2">
          <h2 className="font-bold text-lg">Permana Adi</h2>
          <MdVerified size={16} className="text-blue-500" />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Toggle Menu">
          <FiMenu size={24} />
        </button>
      </header>

      {/* Overlay (Mobile) */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="md:hidden fixed inset-0 bg-black/60 z-[98]"></div>}

      {/* Kontainer Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-zinc-950 border-r border-zinc-800
          flex flex-col w-72 p-6 md:p-12 z-[99] 
          transition-transform duration-300 ease-in-out
          md:w-80 md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Konten Sidebar */}
        <div>
          <div className="flex flex-col items-start gap-4">
            <Image src="/images/profile.jpg" alt="Foto Profil" width={100} height={100} className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover aspect-square" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold">Permana Adi</h1>
                <MdVerified size={18} className="text-blue-500" />
              </div>
              <p className="text-sm text-zinc-500">@permanaadiiii_</p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <a
              href="mailto:iputupermanaadiputra@gmail"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-transparent py-2 px-4 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Hire me</span>
            </a>
          </div>
        </div>

        <hr className="my-6 border-zinc-800" />

        <nav>
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-colors ${isActive ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"}`}
                  >
                    <link.icon size={20} />
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <hr className="my-8 border-zinc-800" />

        <div className="flex gap-1.5 px-3 text-xs text-zinc-400">
          © {new Date().getFullYear()} with
          <FiHeart className="text-red-500" fill="red" />
          by permanaadi
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
