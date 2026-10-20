// Path: src/components/Reveal.tsx
"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// Konten muncul perlahan (fade + geser ke atas) saat pertama kali masuk ke layar
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};

export default Reveal;
