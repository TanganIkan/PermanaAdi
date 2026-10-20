import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Cache persisten Turbopack tidak mendeteksi perubahan pada globals.css (Tailwind/PostCSS),
    // sehingga CSS lama terus dipakai walau server di-restart. Dimatikan agar perubahan CSS selalu terbaca.
    // Konsekuensi: start dev server dan build sedikit lebih lambat.
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
