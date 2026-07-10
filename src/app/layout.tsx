// Path: src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import PageTransition from "../components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Permana Adi's Portfolio",
  description: "Portfolio website created with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Sidebar />
        <main className="min-h-screen px-4 pt-24 sm:p-8 md:p-12 md:pl-90">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
