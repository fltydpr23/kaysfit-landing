import Link from "next/link";
import Image from "next/image";

const BRAND_BLUE = "#1FA2D6";
const BRAND_YELLOW = "#FFD500";

const raceShowcase = [
  {
    name: "OOTYULTRA",
    logo: "/ootyultralogo.png",
    dateLabel: "March 22, 2026",
    distances: ["15K", "30K", "50K", "60K", "75K", "90K"],
    url: "https://ootyultra.com/",
  },
  {
    name: "Bison Ultra",
    logo: "/bisonultralogo.png",
    dateLabel: "June 7, 2026",
    distances: ["18K", "36K", "45K", "60K"],
    url: "https://bisonultra.com/",
  },
  {
    name: "Madurai Ultra",
    logo: null as string | null,
    dateLabel: "Date TBA",
    distances: ["TBA"],
    url: "https://maduraiultra.kfita.in/",
  },
];

const programs = [
  {
    title: "Foundation & Beginner",
    desc: "Build durability, consistency and disciplined training habits.",
  },
  {
    title: "5K / 10K Performance",
    desc: "Structured speed development and endurance progression.",
  },
  {
    title: "Marathon & Ultra",
    desc: "Long-distance coaching built for performance and longevity.",
  },
];

const credentials = [
  "M.Sc in Sports Performance",
  "High-Performance Endurance Coach",
  "Certified Personal Trainer",
  "UESCA Ultrarunning Coach",
  "Certified Project Manager",
  "Six Sigma Black Belt – Business Excellence",
];

function LogoInline({
  name,
  logo,
}: {
  name: string;
  logo: string | null;
}) {
  if (!logo) {
    return (
      <div
        className="inline-flex items-center rounded-2xl border px-4 py-2 text-sm font-semibold"
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
    <div className="relative h-10 w-full">
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

export default function HomePage() {
  return (
    <main className="bg-white text-zinc-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-28">
        {/* subtle brand glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[700px] bg-[#FFD500]/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 h-72 w-72 bg-[#1FA2D6]/10 blur-3xl rounded-full" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="text-sm uppercase tracking-[0.25em] text-[#1FA2D6] font-medium">
            KaysFIT Academy
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">
            Performance Coaching
            <span className="block text-zinc-600">Built for Consistency & Endurance</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
            Structured endurance training for runners from 5K to Ultra —
            combining sports science, durability work, and race-day execution.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/programs"
              className="rounded-xl bg-[#1FA2D6] px-7 py-3 text-sm font-medium text-white hover:bg-[#1FA2D6]/90 transition"
            >
              Explore Programs
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-[#FFD500] px-7 py-3 text-sm font-medium text-[#1FA2D6] hover:bg-[#FFD500]/20 transition"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CREDIBILITY ================= */}
      <section className="border-t border-b border-zinc-200 py-12">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-3xl font-semibold text-[#1FA2D6]">3</div>
            <div className="mt-2 text-sm text-zinc-600">Endurance Races Directed</div>
          </div>

          <div>
            <div className="text-3xl font-semibold text-[#1FA2D6]">2000+</div>
            <div className="mt-2 text-sm text-zinc-600">Annual Participants</div>
          </div>

          <div>
            <div className="text-3xl font-semibold text-[#1FA2D6]">Structured</div>
            <div className="mt-2 text-sm text-zinc-600">Coaching Methodology</div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-semibold">Coaching Programs</h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {programs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 p-10 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-[#1FA2D6]">{item.title}</h3>
                <p className="mt-5 text-zinc-600 text-sm">{item.desc}</p>
                <Link href="/programs" className="mt-6 inline-block text-sm font-medium text-[#1FA2D6]">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COACH MINI BIO + CREDENTIALS ================= */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            {/* Photo */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(31,162,214,0.25), rgba(255,213,0,0.25))",
                }}
              />
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg">
                <Image
                  src="/coach.jpg"
                  alt="Coach Kay - Founder of KaysFIT Academy"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <div className="text-sm uppercase tracking-[0.25em] font-medium text-[#1FA2D6]">
                Coach Kay
              </div>

              <h2 className="mt-5 text-4xl font-semibold leading-tight">
                High-performance coaching
                <span className="block text-zinc-600">built on systems, not hype.</span>
              </h2>

              <p className="mt-6 text-zinc-600 leading-relaxed">
                Coach Kay is the founder of KaysFIT Academy, a high-performance endurance coach,
                and the race director behind some of South India’s most respected endurance events.
                Coaching focuses on durable progression, structured training blocks, and disciplined execution.
              </p>

              {/* Credentials (Option B premium glow) */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Qualifications & Professional Background
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {credentials.map((q) => (
                    <div key={q} className="group relative h-full">
                      <div
                        className="absolute -inset-[1px] rounded-2xl opacity-0 blur-md transition group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(31,162,214,0.35), rgba(255,213,0,0.35))",
                        }}
                      />
                      <div className="relative flex h-full min-h-[86px] items-center rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition group-hover:-translate-y-[1px] group-hover:shadow-lg">
                        <span className="mr-3 h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_BLUE }} />
                        <div className="text-sm font-medium text-zinc-900 leading-snug">{q}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/about"
                    className="rounded-xl border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-white transition"
                  >
                    Read Full Bio
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-xl bg-[#1FA2D6] px-6 py-3 text-sm font-medium text-white hover:opacity-95 transition"
                  >
                    Train With Coach Kay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RACE EVENTS SHOWCASE ================= */}
      <section className="border-t border-zinc-200 bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] font-medium text-[#1FA2D6]">
                Race Director & Founder
              </div>
              <h2 className="mt-4 text-3xl font-semibold">
                Hosted Endurance Events
                <span className="block text-zinc-600">across Tamil Nadu</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-zinc-600 leading-relaxed">
                These events reflect the same philosophy used in coaching: terrain readiness,
                durability, pacing discipline, and execution under fatigue.
              </p>
            </div>

            <Link
              href="/races"
              className="rounded-xl border border-[#FFD500] px-6 py-3 text-sm font-medium text-[#1FA2D6] hover:bg-[#FFD500]/20 transition"
            >
              Explore all races
            </Link>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {raceShowcase.map((race) => {
              const shown = race.distances.slice(0, 5);
              const remaining = race.distances.length - shown.length;

              return (
                <div
                  key={race.name}
                  className="rounded-2xl border border-zinc-200 bg-white p-10 hover:shadow-xl transition flex flex-col min-h-[460px]"
                >
                  <LogoInline name={race.name} logo={race.logo} />

                  <div className="mt-6 space-y-3 min-h-[92px]">
                    <div className="inline-flex">
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                        style={{ backgroundColor: `${BRAND_YELLOW}33`, color: "#111827" }}
                      >
                        {race.dateLabel}
                      </span>
                    </div>

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

                  <div className="mt-6 text-sm text-zinc-600 leading-relaxed flex-grow">
                    Official race website and registration details are hosted separately.
                  </div>

                  <div className="mt-8 flex flex-col gap-3">
                    <a
                      href={race.url}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center border-t border-zinc-200">
        <h2 className="text-3xl font-semibold">Build Your Strongest Season Yet</h2>

        <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
          Get a structured plan recommendation based on your current training, goal race, and schedule.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-block rounded-xl bg-[#1FA2D6] px-8 py-4 text-white font-medium hover:bg-[#1FA2D6]/90 transition"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
