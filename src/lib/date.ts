// Path: src/lib/date.ts
// Helper tanggal untuk data pengalaman (format input "YYYY-MM").

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const parseYearMonth = (value: string) => {
  const [year, month] = value.split("-").map(Number);
  return { year, month };
};

// "2025-07" -> "Jul 2025"
export const formatMonth = (value: string) => {
  const { year, month } = parseYearMonth(value);
  return `${MONTHS[month - 1]} ${year}`;
};

// ("2025-07", undefined) -> "Jul 2025 - Present"
export const formatDateRange = (start: string, end?: string) => `${formatMonth(start)} - ${end ? formatMonth(end) : "Present"}`;

// Durasi dihitung inklusif (bulan mulai & bulan selesai ikut dihitung), sama seperti LinkedIn.
// ("2022-12", "2023-02") -> "3 Months"; ("2025-07", undefined) -> durasi sampai bulan ini
export const formatDuration = (start: string, end?: string, now = new Date()) => {
  const from = parseYearMonth(start);
  const to = end ? parseYearMonth(end) : { year: now.getFullYear(), month: now.getMonth() + 1 };
  const totalMonths = (to.year - from.year) * 12 + (to.month - from.month) + 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} ${years > 1 ? "Years" : "Year"}`);
  if (months > 0) parts.push(`${months} ${months > 1 ? "Months" : "Month"}`);
  return parts.join(" ");
};
