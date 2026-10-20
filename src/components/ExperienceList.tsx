// Path: src/components/ExperienceList.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { VscChevronDown } from "react-icons/vsc";

export type ExperienceItem = {
  role: string;
  company: string;
  logo: string;
  dateRange: string;
  duration: string;
  type: string;
  location: string;
  responsibilities: string[];
};

const ExperienceList: React.FC<{ items: ExperienceItem[] }> = ({ items }) => {
  // Pengalaman teratas langsung terbuka saat halaman dibuka
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mt-4 space-y-4">
      {items.map((job, index) => {
        const isExpanded = expandedIndex === index;
        const panelId = `experience-panel-${index}`;
        return (
          <div key={`${job.company}-${job.role}`} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border hover:border-input">
            <div className="flex gap-4">
              <div className="w-15 h-18 shrink-0 flex items-center justify-center">
                <Image src={job.logo} alt={job.company} width={60} height={60} className="object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{job.role}</h3>
                <p className="mt-1 text-sm text-secondary-foreground">{job.company}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {job.dateRange} ・ {job.duration} ・ {job.type} ・ {job.location}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <button onClick={() => handleToggle(index)} aria-expanded={isExpanded} aria-controls={panelId} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground cursor-pointer">
                <VscChevronDown className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                <span>{isExpanded ? "Hide responsibilities" : "Show responsibilities"}</span>
              </button>
              {/* Daftar tanggung jawab membuka/menutup dengan animasi tinggi */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={panelId}
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="pt-3 list-disc list-inside space-y-2 pl-2 text-sm text-secondary-foreground">
                      {job.responsibilities.map((resp) => (
                        <li key={resp}>{resp}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceList;
