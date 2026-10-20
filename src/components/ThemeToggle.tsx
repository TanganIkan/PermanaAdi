// Path: src/components/ThemeToggle.tsx
"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { isDarkTheme, toggleTheme } from "@/lib/theme";

// Pantau perubahan class "dark" pada <html> agar ikon selalu sesuai tema aktif
const subscribe = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
};
const getServerSnapshot = () => true;

const ThemeToggle: React.FC = () => {
  const isDark = useSyncExternalStore(subscribe, isDarkTheme, getServerSnapshot);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Animasi lingkaran dimulai dari tengah tombol
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    toggleTheme({ x: left + width / 2, y: top + height / 2 });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-input p-2.5 text-foreground transition-colors hover:bg-input cursor-pointer"
    >
      {/* Ikon berputar saat berganti antara matahari dan bulan */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={isDark ? "sun" : "moon"} initial={{ rotate: -90, opacity: 0, scale: 0.6 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.6 }} transition={{ duration: 0.2 }} className="flex">
          {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
