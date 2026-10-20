// Path: src/app/not-found.tsx

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-start justify-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 text-base text-secondary-foreground">Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90">
        <FiArrowLeft className="transition-transform group-hover:-translate-x-0.5" /> Back to home
      </Link>
    </section>
  );
}
