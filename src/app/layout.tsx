// Path: src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import CommandPalette from "@/components/CommandPalette";
import { siteConfig } from "@/data/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  keywords: ["Permana Adi", "I Putu Permana Adi Putra", "UI/UX", "Web Developer", "Next.js", "React", "Laravel", "Denpasar", "Bali"],
};

// Dijalankan sebelum halaman tampil agar tidak ada kedipan tema yang salah.
// Default: dark, kecuali pengunjung pernah memilih light.
const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.classList.remove("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-scroll-behavior="smooth": Next.js mematikan smooth scroll sementara saat pindah halaman,
    // agar halaman baru langsung tampil dari atas (smooth scroll tetap berlaku untuk link #anchor)
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        {/* Link "lompat ke konten" untuk pengguna keyboard; hanya terlihat saat difokus */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-300 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background">
          Skip to content
        </a>
        <Sidebar />
        <main id="main-content" className="min-h-screen px-4 pt-24 sm:p-8 md:p-12 md:pl-90">
          {children}
        </main>
        <CommandPalette />
        <Analytics />
      </body>
    </html>
  );
}
