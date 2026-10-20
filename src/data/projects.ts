// Path: src/data/projects.ts
// Data proyek untuk halaman Projects, studi kasus (/projects/[slug]), dan proyek unggulan di beranda.
//
// Field opsional untuk memperkuat studi kasus (bagian akan otomatis tampil jika diisi):
// - role:       peran kamu di proyek, mis. "Full-stack Developer (solo project)"
// - challenges: tantangan yang dihadapi dan cara menyelesaikannya
// - results:    hasil/dampak, sebaiknya dengan angka, mis. "Dipakai oleh 3 cabang toko"

export type Project = {
  slug: string;
  title: string;
  category: "Web Application" | "Website" | "UI/UX Design";
  summary: string;
  overview: string;
  features: string[];
  tech: string[];
  image: string;
  links: { demo?: string; github?: string; figma?: string };
  featured?: boolean;
  role?: string;
  challenges?: string[];
  results?: string[];
};

export const projectsData: Project[] = [
  {
    slug: "pos-system",
    title: "POS System",
    category: "Web Application",
    summary: "A point-of-sale system for retail businesses, covering inventory management, sales tracking, and customer relationship management.",
    overview:
      "POS System is a web-based point-of-sale application built for retail businesses. It brings day-to-day store operations, from managing stock and recording sales to keeping track of customers, into a single dashboard. The application is live at multibrand.id.",
    features: ["Inventory management to keep product stock up to date", "Sales tracking and transaction records", "Customer relationship management"],
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    image: "/images/POS.jpg",
    links: { demo: "https://multibrand.id/" },
    featured: true,
  },
  {
    slug: "booking-villa",
    title: "Booking Villa",
    category: "Web Application",
    summary: "A villa booking platform where owners manage their properties and customers can easily find and book their desired villa.",
    overview:
      "Booking Villa is a web application that connects villa owners with guests. Owners get a dashboard to manage their properties, while customers get a user-friendly flow to find a villa and book their stay.",
    features: ["Property management for villa owners", "Villa listings for customers", "Online booking flow"],
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    image: "/images/villa.jpg",
    links: { github: "https://github.com/TanganIkan/Booking-Villa" },
  },
  {
    slug: "fit-med-medical",
    title: "Fit Med Medical",
    category: "Website",
    summary: "A medical clinic website with a CMS-powered backend and detailed information about integrated home care services.",
    overview:
      "Fit Med Medical is the website of a medical clinic offering integrated home care services. Besides presenting the clinic's services to patients, it includes a backend CMS so the website content can be managed without touching the code.",
    features: ["Detailed information about integrated home care services", "Backend CMS for managing website content"],
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/fitmed.jpg",
    links: { demo: "https://fitmedmedical.com" },
    featured: true,
  },
  {
    slug: "atlania",
    title: "Atlania",
    category: "Web Application",
    summary: "A personal article and blogging platform built for clean readability and dynamic content publishing.",
    overview: "Atlania is a blogging platform for writing and publishing articles. It focuses on a clean reading experience and a layout that adapts to dynamically published content.",
    features: ["Article writing and publishing", "Readability-focused article layout", "Dynamic content publishing layout"],
    tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    image: "/images/atlania.jpg",
    links: { github: "https://github.com/TanganIkan/Atlania" },
  },
  {
    slug: "library-management-system",
    title: "Library Management System",
    category: "UI/UX Design",
    summary: "An intuitive interface design for a library management system covering book inventory, borrowing tracking, and member administration.",
    overview: "A UI/UX design for a library management system, created in Figma. The interface covers the core workflows of a library: managing the book inventory, tracking borrowing, and administering members.",
    features: ["Book inventory management", "Borrowing tracking", "Member administration"],
    tech: ["Figma"],
    image: "/images/library.jpg",
    links: { figma: "https://www.figma.com/design/wrUCQ8aTiLEWhAFHXU8Xy2/UI-SISTEM-MANAJEMEN-PERPUSTAKAAN-OOAD?node-id=0-1&t=d6KA36jrTEGK7Aic-1" },
  },
  {
    slug: "maintenance-application-ui",
    title: "Maintenance Application UI",
    category: "UI/UX Design",
    summary: "A modern, minimalist dashboard design for equipment maintenance tracking, facility management, and real-time analytics.",
    overview:
      "A dashboard UI/UX design for an equipment maintenance application, created in Figma. It covers maintenance tracking, facility management, and real-time analytics, all built on a comprehensive component-based design system.",
    features: ["Equipment maintenance tracking", "Facility management", "Real-time analytics dashboard", "Component-based design system"],
    tech: ["Figma"],
    image: "/images/maintenance.jpg",
    links: { figma: "https://www.figma.com/design/dBINLYMdax6acLcmNZeySE/Aplikasi-Maintenance?node-id=0-1&t=ZJ98yE6ui1Qr0kyO-1" },
    featured: true,
  },
];

export const getProjectBySlug = (slug: string) => projectsData.find((project) => project.slug === slug);
