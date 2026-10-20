// Path: src/app/template.tsx
"use client";

import { motion, MotionConfig } from "framer-motion";

// template.tsx dibuat ulang setiap pindah halaman, sehingga animasi masuk ini selalu diputar.
// reducedMotion="user": animasi gerak dimatikan untuk pengguna yang memilih "reduce motion".
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
        {children}
      </motion.div>
    </MotionConfig>
  );
}
