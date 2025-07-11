// Path: src/components/ThemeProvider.tsx

"use client"; // PASTIKAN INI ADA DI BARIS PALING ATAS

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Bagian {...props} ini penting untuk meneruskan `attribute="class"`
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
