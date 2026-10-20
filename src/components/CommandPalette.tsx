// Path: src/components/CommandPalette.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FiCopy, FiDownload, FiFolder, FiMail, FiSearch } from "react-icons/fi";
import { GoHome, GoPerson, GoRepo, GoMail } from "react-icons/go";
import { MdOutlineDarkMode } from "react-icons/md";
import { SiGithub, SiInstagram, SiTiktok } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { projectsData } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { toggleTheme } from "@/lib/theme";

// Event untuk membuka palette dari tombol lain (mis. tombol "Search" di sidebar)
export const OPEN_COMMAND_PALETTE_EVENT = "open-command-palette";
export const openCommandPalette = () => window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE_EVENT));

type Command = {
  id: string;
  group: string;
  label: string;
  icon: IconType;
  keywords?: string;
  run: () => void;
};

const CommandPalette: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const commands = useMemo<Command[]>(() => {
    const openLink = (url: string) => window.open(url, "_blank", "noopener,noreferrer");
    return [
      { id: "home", group: "Pages", label: "Home", icon: GoHome, run: () => router.push("/") },
      { id: "about", group: "Pages", label: "About", icon: GoPerson, keywords: "experience education certificates", run: () => router.push("/about") },
      { id: "projects", group: "Pages", label: "Projects", icon: GoRepo, keywords: "portfolio work", run: () => router.push("/projects") },
      { id: "contact", group: "Pages", label: "Contact", icon: GoMail, keywords: "hire message", run: () => router.push("/contact") },
      ...projectsData.map((project) => ({
        id: `project-${project.slug}`,
        group: "Projects",
        label: project.title,
        icon: FiFolder,
        keywords: `${project.category} ${project.tech.join(" ")}`,
        run: () => router.push(`/projects/${project.slug}`),
      })),
      { id: "theme", group: "Actions", label: "Toggle light/dark mode", icon: MdOutlineDarkMode, keywords: "theme", run: () => toggleTheme() },
      {
        id: "cv",
        group: "Actions",
        label: "Download CV",
        icon: FiDownload,
        keywords: "resume",
        run: () => {
          const link = document.createElement("a");
          link.href = siteConfig.cv.href;
          link.download = siteConfig.cv.fileName;
          link.click();
        },
      },
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy email address",
        icon: FiCopy,
        keywords: siteConfig.email,
        run: () => {
          navigator.clipboard?.writeText(siteConfig.email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          });
        },
      },
      { id: "send-email", group: "Actions", label: "Send an email", icon: FiMail, keywords: siteConfig.email, run: () => (window.location.href = `mailto:${siteConfig.email}`) },
      { id: "github", group: "Social", label: "GitHub", icon: SiGithub, run: () => openLink(siteConfig.socials.github) },
      { id: "linkedin", group: "Social", label: "LinkedIn", icon: FaLinkedin, run: () => openLink(siteConfig.socials.linkedin) },
      { id: "instagram", group: "Social", label: "Instagram", icon: SiInstagram, run: () => openLink(siteConfig.socials.instagram) },
      { id: "tiktok", group: "Social", label: "TikTok", icon: SiTiktok, run: () => openLink(siteConfig.socials.tiktok) },
    ];
  }, [router]);

  const filteredCommands = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return commands;
    return commands.filter((command) => `${command.label} ${command.group} ${command.keywords ?? ""}`.toLowerCase().includes(search));
  }, [commands, query]);

  const open = () => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    setQuery("");
    setActiveIndex(0);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    previousFocus.current?.focus(); // Kembalikan fokus ke elemen sebelum palette dibuka
  };

  const runCommand = (command: Command) => {
    close();
    command.run();
  };

  // Shortcut global: Cmd+K (Mac) / Ctrl+K (Windows/Linux)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (isOpen) close();
        else open();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener(OPEN_COMMAND_PALETTE_EVENT, open);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(OPEN_COMMAND_PALETTE_EVENT, open);
    };
  });

  // Pastikan item aktif selalu terlihat saat berpindah dengan tombol panah
  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${activeIndex}"]`)?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (filteredCommands.length ? (index + 1) % filteredCommands.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (filteredCommands.length ? (index - 1 + filteredCommands.length) % filteredCommands.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const command = filteredCommands[activeIndex];
      if (command) runCommand(command);
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 z-200 flex items-start justify-center bg-black/50 px-4 pt-[15vh] backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} onClick={close}>
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-background shadow-2xl"
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.15 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <FiSearch className="shrink-0 text-muted-foreground" />
                <input
                  ref={inputRef}
                  autoFocus
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setActiveIndex(0);
                  }}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Type a command or search..."
                  role="combobox"
                  aria-expanded="true"
                  aria-controls="command-list"
                  aria-activedescendant={filteredCommands[activeIndex] ? `command-${filteredCommands[activeIndex].id}` : undefined}
                  className="h-12 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
                <kbd className="hidden sm:inline rounded border border-input px-1.5 py-0.5 text-[10px] text-muted-foreground">ESC</kbd>
              </div>

              <ul id="command-list" ref={listRef} role="listbox" className="max-h-80 overflow-y-auto p-2">
                {filteredCommands.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted-foreground">No results found.</li>}
                {filteredCommands.map((command, index) => {
                  const showGroup = index === 0 || filteredCommands[index - 1].group !== command.group;
                  const isActive = index === activeIndex;
                  return (
                    <li key={command.id} role="presentation">
                      {showGroup && <p className="px-3 pb-1 pt-3 text-xs font-medium text-muted-foreground first:pt-1">{command.group}</p>}
                      <div
                        id={`command-${command.id}`}
                        role="option"
                        aria-selected={isActive}
                        data-index={index}
                        onMouseMove={() => setActiveIndex(index)}
                        onClick={() => runCommand(command)}
                        className={`flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${isActive ? "bg-muted text-foreground" : "text-secondary-foreground"}`}
                      >
                        <command.icon className="shrink-0 text-muted-foreground" size={16} />
                        <span>{command.label}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center gap-4 border-t border-border px-4 py-2 text-[11px] text-muted-foreground">
                <span>↑↓ to navigate</span>
                <span>↵ to select</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifikasi kecil setelah email disalin */}
      <AnimatePresence>
        {copied && (
          <motion.div
            role="status"
            className="fixed bottom-6 left-1/2 z-200 -translate-x-1/2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground shadow-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
          >
            Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
