# Permana Adi — Portfolio

Personal portfolio of **I Putu Permana Adi Putra**, a Denpasar-based frontend developer and UI/UX enthusiast.

Live: [permana-adi.vercel.app](https://permana-adi.vercel.app)

## Features

- **Home** — introduction, featured projects, skills, and services
- **About** — background story, work experience, education, and certificates
- **Projects** — project overview plus a case study page for every project (`/projects/[slug]`)
- **Contact** — social media links and a contact form (powered by EmailJS)
- **Light/dark mode** with an animated circular transition
- **Command palette** — press `⌘K` / `Ctrl K` to navigate, switch theme, download the CV, and more
- **SEO** — per-page metadata, generated Open Graph image, sitemap, robots.txt, and JSON-LD
- Scroll-reveal and page transition animations that respect the "reduce motion" setting

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [Framer Motion](https://motion.dev) for animations
- [React Icons](https://react-icons.github.io/react-icons/) and [Lucide](https://lucide.dev)
- [EmailJS](https://www.emailjs.com) for the contact form
- [Vercel Analytics](https://vercel.com/docs/analytics)

## Getting Started

```bash
npm install
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
npm run lint    # run ESLint
```

## Updating Content

Most content lives in `src/data/`, so updating the site rarely requires touching components:

| File                   | Content                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `src/data/site.ts`     | Name, role, contact email, social links, CV path, site URL                          |
| `src/data/projects.ts` | Projects and their case studies (`featured: true` shows a project on the home page) |
| `src/data/about.ts`    | Work experience, education, and certificates                                        |

Experience dates use the `YYYY-MM` format. The date range and duration are calculated automatically; leave `end` empty for an ongoing role.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout: sidebar, theme script, metadata, command palette
│   ├── template.tsx          # Page transition animation
│   ├── globals.css           # Theme color tokens (light & dark)
│   ├── page.tsx              # Home
│   ├── about/                # About page
│   ├── projects/             # Projects page and [slug] case studies
│   ├── contact/              # Contact page
│   ├── opengraph-image.tsx   # Generated social preview image
│   ├── icon.tsx              # Generated favicon
│   ├── sitemap.ts, robots.ts
│   └── not-found.tsx         # Custom 404 page
├── components/               # UI components (Sidebar, Hero, ProjectCard, CommandPalette, ...)
├── data/                     # Site content (see "Updating Content")
└── lib/                      # Helpers: theme switching, dates, metadata
```

## Contact

- Email: [iputupermanaadiputra@gmail.com](mailto:iputupermanaadiputra@gmail.com)
- LinkedIn: [permana-adi](https://www.linkedin.com/in/permana-adi-98480a255/)
- GitHub: [TanganIkan](https://github.com/TanganIkan)
