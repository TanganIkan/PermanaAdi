// Path: src/components/IntroSplash.tsx
// Layar intro singkat saat website pertama kali dibuka.
// Selalu ada di HTML tapi tersembunyi; baru tampil jika <html> memiliki atribut data-intro
// (diatur oleh introScript di layout.tsx). Animasi & penyembunyiannya murni CSS (lihat globals.css),
// sehingga intro langsung tampil tanpa menunggu React siap dan tidak pernah menahan konten.

import Image from "next/image";

const IntroSplash: React.FC = () => {
  return (
    <div className="intro-splash fixed inset-0 z-400 flex-col items-center justify-center gap-6 bg-background" aria-hidden="true">
      {/* Logo memakai favicon website (src/app/favicon.ico, disajikan di /favicon.ico) */}
      <Image src="/favicon.ico" alt="" width={88} height={88} priority unoptimized className="intro-splash-logo rounded-2xl border border-border" />
      <div className="h-0.5 w-32 overflow-hidden rounded-full bg-muted">
        <div className="intro-splash-bar h-full rounded-full bg-foreground" />
      </div>
    </div>
  );
};

export default IntroSplash;
