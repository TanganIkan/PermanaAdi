// Path: src/data/about.ts
// Data halaman About. Tanggal ditulis "YYYY-MM"; rentang tanggal dan durasi dihitung otomatis.
// Kosongkan `end` untuk pengalaman yang masih berjalan (akan tampil sebagai "Present").

export type Career = {
  role: string;
  company: string;
  logo: string;
  start: string;
  end?: string;
  type: string;
  location: string;
  responsibilities: string[];
};

// Diurutkan dari yang terbaru (yang masih berjalan paling atas)
export const careerData: Career[] = [
  {
    role: "UI/UX Designer Mentorship",
    company: "Instiki Developer Club",
    logo: "/images/IDC.png",
    start: "2025-07",
    type: "Mentorship",
    location: "INSTIKI",
    responsibilities: ["Mentored students in UI/UX principles, guiding the creation of wireframes and interactive dashboards using Figma.", "Led hands-on training sessions to build functional and user-centered digital prototypes."],
  },
  {
    role: "Operations Administrator",
    company: "PT. Alam Terbuka Ventures",
    logo: "/images/oasis.png",
    start: "2025-08",
    end: "2026-06",
    type: "Full-time Remote",
    location: "Denpasar, Indonesia",
    responsibilities: [
      "Managed the daily operations of an outdoor and camping gear rental business, handling everything from order bookings to inventory management.",
      "Handled the company's financial administration, maintaining accurate transaction records and overseeing payroll.",
      "Analyzed business operations and provided strategic recommendations that successfully drove revenue growth.",
      "Maintained direct communication with customers to facilitate a seamless booking experience and ensure high satisfaction.",
    ],
  },
  {
    role: "Wordpress Developer",
    company: "PT. Benlaris Sahabat Dewata",
    logo: "/images/benlaris.jpg",
    start: "2024-06",
    end: "2024-08",
    type: "Contract",
    location: "Denpasar, Indonesia",
    responsibilities: [
      "Assisted a senior developer in managing and updating the company website.",
      "Responsible for arranging layouts and creating new visual sections within pages using WordPress page builders.",
      "Performed content updates and data entry for tour packages, services, and other site information.",
      "Collaborated to implement UI improvements based on project requirements.",
    ],
  },
  {
    role: "Web Designer Internship",
    company: "PT. Benlaris Sahabat Dewata",
    logo: "/images/benlaris.jpg",
    start: "2023-07",
    end: "2023-09",
    type: "Full-time",
    location: "Denpasar, Indonesia",
    responsibilities: [
      'Designed and developed a company profile website for "Bali Property Konstruksi" using WordPress and Elementor.',
      "Analyzed client needs and translated design concepts into a functional, responsive website.",
      "Managed plugins, templates, and content to build a multi-page website according to specifications.",
      "Gained hands-on experience in the digital marketing and web design industry.",
    ],
  },
  {
    role: "Frontend Developer Internship",
    company: "Taksu Technology",
    logo: "/images/taksutech.png",
    start: "2022-12",
    end: "2023-02",
    type: "Full-time",
    location: "Denpasar, Indonesia",
    responsibilities: [
      "Developed key components for the Pathlight School Management System using Angular and Laravel.",
      "Built a dynamic Last Updated By feature.",
      "Created a reusable Attachment Preview component in Angular.",
      "Designed and implemented an Admission Email Notification feature using Laravel Blade and CSS.",
      "Actively collaborated in a team environment using the Scrum methodology.",
      "Utilized Git and GitHub for version control and team collaboration.",
    ],
  },
];

export const educationData = [
  {
    institution: "Institut Bisnis dan Teknologi Indonesia (INSTIKI)",
    degree: "Informatics Engineering, (S.Kom)",
    logo: "/images/instiki.jpg",
    gpa: "4.00",
    transcriptUrl: "/transcripts/transcript.pdf",
    date: "2024 - Present",
    location: "Denpasar, Indonesia",
  },
  {
    institution: "SMK Negeri 1 Denpasar",
    degree: "Software Engineering",
    logo: "/images/smk1.png",
    date: "2021 - 2024",
    location: "Denpasar, Indonesia",
  },
];

// Diurutkan dari yang terbaru
export const certificateData = [
  {
    title: "Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "October 2024",
    imageSrc: "/images/dasar web.jpg",
  },
  {
    title: "Certificate of Competence: Junior Coder",
    issuer: "BNSP (Indonesian Professional Certification Authority)",
    date: "April 2024",
    imageSrc: "/images/ukk.jpg",
  },
  {
    title: "Complete of the internship program at PT. Benlaris Sahabat Dewata",
    issuer: "PT. Benlaris Sahabat Dewata",
    date: "September 2023",
    imageSrc: "/images/elementor.jpg",
  },
  {
    title: "Complete of the internship program at Taksu Technology",
    issuer: "Taksu Technology",
    date: "February 2023",
    imageSrc: "/images/taksu.jpg",
  },
];
