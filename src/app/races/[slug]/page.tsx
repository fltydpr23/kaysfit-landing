import Link from "next/link";
import { notFound } from "next/navigation";

const BRAND_BLUE = "#1FA2D6";
const BRAND_YELLOW = "#FFD500";

type RaceData = {
  name: string;
  location: string;
  tagline: string;
  overview: string;
  highlights: string[];
  website: string;
};

const raceMap: Record<string, RaceData> = {
  "ooty-ultra": {
    name: "OOTYULTRA",
    location: "Nilgiris, Tamil Nadu",
    tagline: "Mountain Endurance at Elevation",
    overview:
      "OOTYULTRA is a premier mountain ultramarathon set in the Nilgiris. Designed for endurance athletes seeking elevation gain, structured course execution, and disciplined preparation.",
    highlights: [
      "Mountain terrain & elevation profile",
      "Multiple ultra-distance categories",
      "Operationally disciplined race structure",
      "High-altitude endurance challenge",
    ],
    website: "https://ootyultra.com/",
  },

  "bison-ultra": {
    name: "Bison Ultra",
    location: "Yercaud, Tamil Nadu",
    tagline: "Trail Strength & Progressive Challenge",
    overview:
      "Bison Ultra is a structured trail endurance event built around varied terrain and controlled progression. It demands durability, pacing intelligence, and race-day composure.",
    highlights: [
      "Trail-based endurance format",
      "Rolling elevation terrain",
      "Progressive challenge distances",
      "Athlete-first operational model",
    ],
    website: "https://bisonultra.com/",
  },

  "madurai-ultra": {
    name: "Madurai Ultra",
    location: "Madurai, Tamil Nadu",
    tagline: "Structured Endurance. Disciplined Execution.",
    overview:
      "Madurai Ultra emphasizes structure, race discipline, and consistent pacing strategy. Built for athletes who value preparation, execution clarity, and endurance growth.",
    highlights: [
      "Flat-to-moderate endurance terrain",
      "Structured category segmentation",
      "Strong operational leadership",
      "Race execution focus",
    ],
    website: "https://maduraiultra.com",
  },
};

export default function RaceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const race = raceMap[params.slug];

  if (!race) return notFound();

  return (
    <main className="bg-white text-zinc-900">

      {/* ================= HERO ================= */}
      <section className="relative py-24 border-b border-zinc-200 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[700px] blur-3xl rounded-full bg-[#FFD500]/20" />
          <div className="absolute bottom-0 right-0 h-64 w-64 blur-3xl rounded-full bg-[#1FA2D6]/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">

          <div className="text-sm uppercase tracking-[0.25em] font-medium text-[#1FA2D6]">
            {race.location}
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">
            {race.name}
            <span className="block text-zinc-600 mt-2 text-3xl">
              {race.tagline}
            </span>
          </h1>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={race.website}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-7 py-3 text-sm font-medium text-white transition"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              Visit Official Website
            </a>

            <Link
              href="/contact"
              className="rounded-xl border px-7 py-3 text-sm font-medium transition hover:bg-zinc-50"
              style={{ borderColor: BRAND_YELLOW, color: BRAND_BLUE }}
            >
              Train for This Race
            </Link>
          </div>

        </div>
      </section>



      {/* ================= OVERVIEW ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-semibold">
            Race Overview
          </h2>

          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            {race.overview}
          </p>

        </div>
      </section>



      {/* ================= HIGHLIGHTS ================= */}
      <section className="bg-zinc-50 py-20 border-t border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-3xl font-semibold text-center">
            Race Highlights
          </h2>

          <div className="mt-14 grid md:grid-cols-4 gap-8">

            {race.highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200 bg-white p-8 hover:shadow-md transition text-center"
              >
                <div className="text-sm font-semibold text-[#1FA2D6]">
                  {item}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>



      {/* ================= TRAINING CTA ================= */}
      <section className="py-24 text-center">

        <h2 className="text-3xl font-semibold">
          Preparing for {race.name}?
        </h2>

        <p className="mt-6 text-zinc-600 max-w-2xl mx-auto">
          Train under structured guidance from the race director’s coaching system.
          Build durability, pacing discipline, and race-day clarity.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-xl px-8 py-4 text-white font-medium transition"
          style={{ backgroundColor: BRAND_BLUE }}
        >
          Build a Race-Specific Plan
        </Link>

      </section>

    </main>
  );
}
