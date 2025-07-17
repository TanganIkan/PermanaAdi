// Path: src/components/PageTransition.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Kunci animasi agar tahu kapan halaman berubah
        initial={false} // Posisi awal: transparan & sedikit di bawah
        animate={{ opacity: 1, y: 0 }} // Posisi akhir: terlihat & di posisi normal
        exit={{ opacity: 0, y: -20 }} // Posisi keluar: transparan & sedikit ke atas
        transition={{ duration: 0.3 }} // Durasi animasi
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
