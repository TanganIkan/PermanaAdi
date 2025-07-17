// Path: src/components/Sidebar.tsx

"use client"; // WAJIB: Agar bisa menggunakan hooks untuk interaktivitas

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menggunakan ikon yang lebih spesifik dari berbagai library di react-icons
import { GoHome, GoPerson, GoRepo, GoMail } from "react-icons/go";
import { MdVerified } from "react-icons/md";
import { FiHeart } from "react-icons/fi";

// Data untuk link navigasi agar lebih mudah dikelola
const navLinks = [
  { name: "Home", icon: GoHome, href: "/" },
  { name: "About", icon: GoPerson, href: "/about" },
  { name: "Projects", icon: GoRepo, href: "/projects" },
  { name: "Contact", icon: GoMail, href: "/contact" },
];

const Sidebar: React.FC = () => {
  // --- HOOKS UNTUK INTERAKTIVITAS ---
  const pathname = usePathname(); // Mendeteksi URL saat ini

  return (
    <aside className="h-screen justify-center sticky top-0 flex w-80 flex-col">
      {/* --- Bagian Profil --- */}
      <div>
        <div className="flex flex-col items-start gap-4">
          <Image src="/images/profile.jpg" alt="Foto Profil" width={100} height={100} className="rounded-full object-cover aspect-square" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">Permana Adi</h1>
              <MdVerified size={18} className="text-blue-500" />
            </div>
            <p className="text-sm text-zinc-500">@permanaadiiii_</p>
          </div>
        </div>

        {/* --- Tombol Interaktif --- */}
        <div className="mt-8 flex items-center gap-2">
          <a href="mailto:iputupermanaadiputra@gmail" className="flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-trans py-2 px-4 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>Hire me</span>
          </a>
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
