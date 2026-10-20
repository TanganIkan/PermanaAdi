// Path: src/app/sitemap.ts
// Menghasilkan /sitemap.xml agar Google menemukan semua halaman, termasuk studi kasus proyek.

import type { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/projects", "/contact"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projects = projectsData.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...projects];
}
