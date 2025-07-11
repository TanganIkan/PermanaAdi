// Path: src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio Permana Adi",
  description: "Portofolio pribadi dibuat dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#111111]`}>
        {/* Pastikan komponen ThemeProvider memiliki properti attribute="class" */}
        <ThemeProvider
          attribute="class" // <--- INI BAGIAN PALING PENTING
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-8 md:p-12 mt-20 text-zinc-900 dark:text-zinc-50">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
