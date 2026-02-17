import Link from "next/link";
import Image from "next/image";

const BRAND_BLUE = "#1FA2D6";
const BRAND_YELLOW = "#FFD500";

type Race = {
  name: string;
  location: string;
  description: string;
  website: string;
  logo: string | null;
  dateLabel: string;
  distances: string[];
  itra: boolean;
};

const races: Race[] = [
  {
    name: "OOTYULTRA",
    location: "Nilgiris, Tamil Nadu",
    description:
      "A mountain ultramarathon experience in the Nilgiris, built for endurance athletes seeking elevation, resilience, and structured race execution.",
    website: "https://ootyultra.com/",
    logo: "/ootyultralogo.png",
    dateLabel: "March 22, 2026",
    distances: ["15K", "30K", "50K", "60K", "75K", "90K"],
    itra : true,
  },
  {
    name: "Bison Ultra",
    location: "Yercaud, Tamil Nadu",
    description:
      "A demanding trail ultra designed around terrain variation and progressive endurance challenges.",
    website: "https://bisonultra.com/",
    logo: "/bisonultralogo.png",
    dateLabel: "June 7, 2026",
    distances: ["18K", "36K", "45K", "60K"],
    itra : true,
  },
  {
    name: "Madurai Ultra",
    location: "Madurai, Tamil Nadu",
    description:
      "An endurance event rooted in structure, operational discipline, and athlete-focused execution.",
    website: "https://maduraiultra.com",
    logo: "/maduraiultralogo.png",
    dateLabel: "Date TBA",
    distances: ["18K", "36K", "45K", "60K"],
    itra : true,
  },
];

function LogoBlock({ name, logo }: { name: string; logo: string | null }) {
  if (!logo) {
    return (
      <div
        className="inline-flex items-center rounded-2xl border px-4 py-3 text-sm font-semibold"
        style={{
          borderColor: `${BRAND_YELLOW}99`,
          backgroundColor: `${BRAND_YELLOW}22`,
          color: BRAND_BLUE,
        }}
      >
        {name}
      </div>
    );
  }

  return (
    <div className="relative h-12 w-full">
      <Image
        src={logo}
        alt={`${name} logo`}
        fill
        className="object-contain object-left"
        priority={name === "OOTYULTRA"}
      />
    </div>
  );
}

function MetaBlock({ race }: { race: Race }) {
  const shown = race.distances.slice(0, 5);
  const remaining = race.distances.length - shown.length;

  return (
    <div className="mt-4 space-y-3 min-h-[92px]">
      {/* Date */}
      <div className="inline-flex">
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: `${BRAND_YELLOW}33`, color: "#111827" }}
        >
          {race.dateLabel}
        </span>
      </div>

      {/* Distances */}
      <div className="flex flex-wrap gap-2">
        {shown.map((d) => (
          <span
            key={d}
            className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
          >
            {d}
          </span>
        ))}

        {remaining > 0 ? (
          <span
            className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
            style={{
              borderColor: `${BRAND_BLUE}33`,
              backgroundColor: `${BRAND_BLUE}12`,
              color: BRAND_BLUE,
            }}
          >
            +{remaining} more
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default function RacesPage() {
  return (
    <main className="bg-white text-zinc-900">
      {/* HERO */}
      <section className="relative py-24 border-b border-zinc-200 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[700px] rounded-full blur-3xl bg-[#FFD500]/20" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full blur-3xl bg-[#1FA2D6]/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="text-sm uppercase tracking-[0.25em] font-medium text-[#1FA2D6]">
            Race Leadership
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">
            Endurance Events
            <span className="block text-zinc-600">Designed & Directed with Precision</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
            KaysFIT Academy leads and operates endurance races with strong athlete-first philosophy
            and operational discipline.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-3">
          {races.map((race) => (
            <div
              key={race.name}
              className="rounded-2xl border border-zinc-200 bg-white p-10 hover:shadow-xl transition flex flex-col min-h-[520px]"
            >
              {/* LOGO */}
              <div className="flex items-start justify-between gap-4">
  <div className="flex-1">
    <LogoBlock name={race.name} logo={race.logo} />
  </div>

  {race.itra && (
    <div className="relative h-8 w-16 shrink-0">
      <Image
        src="/itra-logo.png"
        alt="ITRA Certified Race"
        fill
        className="object-contain"
      />
    </div>
  )}
</div>

              <div className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-500">
                {race.location}
              </div>
              

              <h2 className="mt-4 text-2xl font-semibold text-[#1FA2D6]">
                {race.name}
              </h2>

              {/* Date + distances */}
              <MetaBlock race={race} />

              <p className="mt-6 text-sm text-zinc-600 leading-relaxed flex-grow">
                {race.description}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={race.website}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl px-6 py-3 text-sm font-medium text-white text-center transition hover:opacity-95"
                  style={{ backgroundColor: BRAND_BLUE }}
                >
                  Visit official website
                </a>

                <Link
                  href="/contact"
                  className="rounded-xl border px-6 py-3 text-sm font-medium text-center transition hover:bg-zinc-50"
                  style={{ borderColor: BRAND_YELLOW, color: BRAND_BLUE }}
                >
                  Train for this race
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY TRAIN */}
      <section className="bg-zinc-50 py-24 border-t border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-semibold">Why Train with Coach Kay?</h2>

          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Insider Understanding",
                desc: "Course design knowledge, terrain expectations, and operational insight.",
              },
              {
                title: "Structured Build",
                desc: "Progressive training blocks tailored to race demands.",
              },
              {
                title: "Execution Strategy",
                desc: "Pacing plans, fueling guidance, and race-day preparation.",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8 hover:shadow-md transition"
              >
                <div className="text-lg font-semibold" style={{ color: BRAND_BLUE }}>
                  {x.title}
                </div>
                <p className="mt-4 text-sm text-zinc-600 leading-relaxed">{x.desc}</p>
                <div className="mt-6 h-[3px] w-12 rounded-full" style={{ backgroundColor: BRAND_YELLOW }} />
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-14 inline-flex rounded-xl px-8 py-4 text-white font-medium transition hover:opacity-95"
            style={{ backgroundColor: BRAND_BLUE }}
          >
            Build a Race-Specific Plan
          </Link>
        </div>
      </section>
    </main>
  );
}
