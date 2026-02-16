export type Race = {
  slug: "ooty-ultra" | "bison-ultra" | "madurai-ultra";
  name: string;
  location: string;
  tagline: string;
  statusNote?: string; // e.g. "Date TBA"
  website: string;
  heroImage?: string; // optional if you add /public images later
};

export const races: Race[] = [
  {
    slug: "ooty-ultra",
    name: "OOTYULTRA",
    location: "Ooty / Nilgiris",
    tagline: "Mountain ultra experience in the Nilgiris.",
    website: "https://ootyultra.com/",
  },
  {
    slug: "bison-ultra",
    name: "Bison Ultra",
    location: "Yercaud / Shevaroy Hills",
    tagline: "Trail ultramarathon in the Shevaroy Hills.",
    website: "https://bisonultra.com/",
  },
  {
    slug: "madurai-ultra",
    name: "Madurai Ultra",
    location: "Madurai",
    tagline: "Trail & endurance experience around Madurai.",
    statusNote: "Date TBA / postponed notice on official site",
    website: "https://maduraiultra.com/",
  },
];

export function getRaceBySlug(slug: string) {
  return races.find((r) => r.slug === slug) ?? null;
}