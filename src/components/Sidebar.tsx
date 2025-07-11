// Path: src/components/Sidebar.tsx

"use client"; // WAJIB: Agar bisa menggunakan hooks untuk interaktivitas

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

// Menggunakan ikon yang lebih spesifik dari berbagai library di react-icons
import { GoHome, GoPerson, GoRepo, GoMail } from "react-icons/go";
import { MdVerified, MdOutlineDashboard } from "react-icons/md";
import { FiChevronDown, FiHeart, FiMoon, FiSun } from "react-icons/fi";

// Data untuk link navigasi agar lebih mudah dikelola
const navLinks = [
  { name: "Home", icon: GoHome, href: "/" },
  { name: "About", icon: GoPerson, href: "/about" },
  { name: "Projects", icon: GoRepo, href: "/projects" },
  { name: "Dashboard", icon: MdOutlineDashboard, href: "/dashboard" },
  { name: "Contact", icon: GoMail, href: "/contact" },
];

const Sidebar: React.FC = () => {
  // --- HOOKS UNTUK INTERAKTIVITAS ---
  const pathname = usePathname(); // Mendeteksi URL saat ini
  const { theme, setTheme } = useTheme(); // Hook untuk ganti tema
  const [mounted, setMounted] = useState(false);

  // Efek untuk mencegah hydration error pada tema
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fungsi untuk merender tombol ganti tema secara dinamis
  const renderThemeChanger = () => {
    if (!mounted) return null; // Jangan render tombol di server

    const isDarkMode = theme === "dark";

    return (
      <button className="rounded-lg border border-zinc-200 bg-zinc-100 p-2 hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700" onClick={() => setTheme(isDarkMode ? "light" : "dark")}>
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </button>
    );
  };

  return (
    <aside className="h-screen justify-center sticky top-0 flex w-80 flex-col bg-zinc-50 p-6 text-zinc-900 dark:bg-[#09090B] dark:text-zinc-50">
      {/* --- Bagian Profil --- */}
      <div>
        <div className="flex flex-col items-start gap-4">
          <Image src="/images/profile.jpg" alt="Foto Profil" width={100} height={100} className="rounded-full object-cover aspect-square" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">Permana Adi</h1>
              <MdVerified size={18} className="text-blue-500" />
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">@permanaadiiii_</p>
          </div>
        </div>

        {/* --- Tombol Interaktif --- */}
        <div className="mt-8 flex w-full items-center gap-2">
          <button className="flex flex-1 items-center justify-between rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-2 text-sm hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700">
            <span>US English</span>
            <FiChevronDown />
          </button>
          {renderThemeChanger()}
        </div>
      </div>

      {/* --- Menu Navigasi --- */}
      <nav className="mt-8">
        <ul className="space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium
                    ${
                      isActive
                        ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-white" // Style untuk link aktif
                        : "text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white" // Style untuk link non-aktif
                    }`}
                >
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* --- Footer Sidebar (didorong ke bawah dengan mt-auto) --- */}
      <div className="flex items-center gap-1.5 pt-6 px-3 text-xs text-zinc-400 dark:text-zinc-500">
        © {new Date().getFullYear()} with
        <FiHeart className="text-red-500" fill="red" />
        by permanaadi
      </div>
    </aside>
  );
};

export default Sidebar;
