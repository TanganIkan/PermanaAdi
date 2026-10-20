// Path: src/app/opengraph-image.tsx
// Gambar pratinjau (1200x630) yang muncul saat link website dibagikan di LinkedIn, WhatsApp, X, dll.

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/profile.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 64, padding: 80, background: "#09090b", color: "#f4f4f5" }}>
        <img src={photoSrc} alt="" width={280} height={280} style={{ borderRadius: 9999, objectFit: "cover", border: "6px solid #27272a" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 32, color: "#a1a1aa" }}>Hi, I&apos;m</div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{siteConfig.name}</div>
          <div style={{ marginTop: 12, fontSize: 36, color: "#d4d4d8" }}>{siteConfig.role}</div>
          <div style={{ marginTop: 40, fontSize: 26, color: "#a1a1aa" }}>{`${siteConfig.location} · ${siteConfig.url.replace("https://", "")}`}</div>
        </div>
      </div>
    ),
    size,
  );
}
