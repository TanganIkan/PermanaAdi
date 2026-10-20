// Path: src/components/Sidebar.tsx

"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { GoHome, GoPerson, GoRepo, GoMail } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { FiHeart, FiMenu, FiSearch, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { openCommandPalette } from "./CommandPalette";
import { siteConfig } from "@/data/site";

const navLinks = [
  { name: "Home", icon: GoHome, href: "/" },
  { name: "About", icon: GoPerson, href: "/about" },
  { name: "Projects", icon: GoRepo, href: "/projects" },
  { name: "Contact", icon: GoMail, href: "/contact" },
];

// Tampilkan "⌘K" di Mac dan "Ctrl K" di sistem lain
const subscribeNoop = () => () => {};
const getIsMac = () => /Mac|iPhone|iPad/.test(navigator.userAgent);
const getIsMacServer = () => true;

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isMac = useSyncExternalStore(subscribeNoop, getIsMac, getIsMacServer);

  // Tutup menu mobile dengan tombol Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSearchClick = () => {
    setIsOpen(false);
    openCommandPalette();
  };

  return (
    <>
      {/* Header (Mobile) */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-18 bg-background/80 backdrop-blur-md border-b border-border flex items-center justify-between px-4 z-50">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-lg">{siteConfig.name}</span>
          <MdVerified size={16} className="text-blue-500" />
        </Link>
        <div className="flex items-center gap-1">
          <button onClick={handleSearchClick} className="p-2 cursor-pointer" aria-label="Open command palette">
            <FiSearch size={22} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 cursor-pointer" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="sidebar">
            {/* Ikon hamburger berputar menjadi X saat menu terbuka */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={isOpen ? "close" : "menu"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} className="flex">
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Overlay (Mobile) */}
      <AnimatePresence>
        {isOpen && <motion.div onClick={() => setIsOpen(false)} className="md:hidden fixed inset-0 bg-black/60 z-98" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} />}
      </AnimatePresence>

      {/* Kontainer Sidebar */}
      <aside
        id="sidebar"
        className={`
          fixed top-0 left-0 h-screen bg-background border-r border-border
          flex flex-col w-72 p-6 md:p-12 z-99 overflow-y-auto
          transition-transform duration-300 ease-in-out
          md:w-80 md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Konten Sidebar */}
        <div>
          <div className="flex flex-col items-start gap-4">
            <Image src="/images/profile.jpg" alt={siteConfig.name} width={96} height={96} priority className="w-24 h-24 rounded-full object-cover aspect-square" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">{siteConfig.name}</p>
                <MdVerified size={18} className="text-blue-500" />
              </div>
              <p className="text-sm text-muted-foreground">{siteConfig.handle}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-input bg-transparent py-2 px-4 text-sm font-medium text-foreground transition-colors hover:bg-input"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Hire me</span>
            </a>
            <ThemeToggle />
          </div>
        </div>

        <hr className="my-6 border-border" />

        {/* Tombol pencarian cepat (membuka command palette) */}
        <button
          onClick={handleSearchClick}
          className="mb-3 flex w-full items-center gap-3 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-input hover:text-foreground cursor-pointer"
        >
          <FiSearch size={16} />
          <span className="flex-1 text-left">Quick search...</span>
          <kbd className="rounded border border-input px-1.5 py-0.5 text-[10px] font-medium">{isMac ? "⌘K" : "Ctrl K"}</kbd>
        </button>

        <nav aria-label="Main navigation">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              // Menu tetap aktif di sub-halaman, mis. /projects/pos-system mengaktifkan "Projects"
              const isActive = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"}`}
                  >
                    {/* Latar menu aktif bergeser halus ke menu yang dipilih */}
                    {isActive && <motion.span layoutId="active-nav" className="absolute inset-0 rounded-md bg-muted" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                    <link.icon size={20} className="relative" />
                    <span className="relative">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <hr className="my-8 border-border" />

        <div className="flex gap-1.5 px-3 text-xs text-muted-foreground">
          © {new Date().getFullYear()} with
          <FiHeart className="text-red-500" fill="red" />
          by permanaadi
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
