// Path: tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <--- PENTING: Harus "class"
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // ... (konfigurasi animasi Anda jika ada)
    },
  },
  plugins: [],
};
export default config;
