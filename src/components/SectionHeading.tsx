// Path: src/components/SectionHeading.tsx

import type { IconType } from "react-icons";

type SectionHeadingProps = {
  icon: IconType;
  title: string;
  description?: string;
  action?: React.ReactNode;
};

// Judul section dengan ikon, dipakai di beranda dan halaman About
const SectionHeading: React.FC<SectionHeadingProps> = ({ icon: Icon, title, description, action }) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Icon className="text-muted-foreground" size={20} />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        {action}
      </div>
      {description && <p className="mt-4 text-sm text-muted-foreground">{description}</p>}
    </div>
  );
};

export default SectionHeading;
