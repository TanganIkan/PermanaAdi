// Path: src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  /* ... */
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      {/* KELAS DI BODY INI SANGAT PENTING */}
      <body className={`${inter.className} bg-background text-foreground`}>
        <div className="max-w-7xl mx-auto flex">
          <Sidebar />
          <main className="flex flex-1 p-8 md:p-12 min-h-screen justify-center items-center">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
