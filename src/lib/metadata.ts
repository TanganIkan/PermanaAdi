// Path: src/lib/metadata.ts

import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path: string;
  image?: string;
};

// Metadata lengkap per halaman (title, canonical URL, Open Graph, Twitter).
// Open Graph dibuat utuh di sini karena Next.js tidak menggabungkan openGraph dari layout dan halaman.
// Default gambar: /opengraph-image (dibuat oleh src/app/opengraph-image.tsx), karena openGraph per halaman
// menimpa gambar otomatis tersebut.
export const pageMetadata = ({ title, description = siteConfig.description, path, image = "/opengraph-image" }: PageMetadataOptions): Metadata => {
  const fullTitle = title ? `${title} — ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.role}`;
  const images = [{ url: image }];

  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
};
