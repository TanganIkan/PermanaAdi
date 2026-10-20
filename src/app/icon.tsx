// Path: src/app/icon.tsx
// Favicon "PA" yang dibuat otomatis oleh Next.js (menggantikan favicon bawaan Next.js)

import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 14, background: "#09090b", color: "#f4f4f5", fontSize: 30, fontWeight: 700, letterSpacing: -1 }}>
        PA
      </div>
    ),
    size,
  );
}
