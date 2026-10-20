// Path: src/lib/theme.ts
// Logika pergantian tema light/dark, dipakai oleh ThemeToggle dan CommandPalette.

export const isDarkTheme = () => document.documentElement.classList.contains("dark");

const applyTheme = (dark: boolean) => {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    // localStorage bisa diblokir (mis. mode private); tema tetap berganti untuk sesi ini
  }
};

// Ganti tema dengan animasi lingkaran yang membesar dari titik `origin` (default: tengah layar)
export const toggleTheme = async (origin?: { x: number; y: number }) => {
  const nextIsDark = !isDarkTheme();

  // Tanpa animasi jika browser belum mendukung View Transitions atau pengguna memilih "reduce motion"
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || prefersReducedMotion) {
    applyTheme(nextIsDark);
    return;
  }

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? window.innerHeight / 2;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  const transition = document.startViewTransition(() => applyTheme(nextIsDark));
  try {
    await transition.ready;
  } catch {
    return; // Transisi dibatalkan (mis. tombol diklik berulang dengan cepat)
  }
  document.documentElement.animate(
    { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
    { duration: 500, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" },
  );
};
