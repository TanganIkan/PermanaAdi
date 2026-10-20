// Path: src/app/robots.ts
// Menghasilkan /robots.txt: izinkan semua mesin pencari dan tunjukkan lokasi sitemap.

import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
