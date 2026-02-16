import Link from "next/link";

const BRAND_BLUE = "#1FA2D6";
const BRAND_YELLOW = "#FFD500";

type Tier = {
  name: string;
  priceNote: string;
  bestFor: string;
  includes: string[];
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Foundation",
    priceNote: "Best for beginners & return-to-running",
    bestFor: "Build consistency, form, and durability with a simple weekly structure.",
    includes: [
      "Weekly plan structure (easy + long run + technique)",
      "Pace / effort guidance (RPE-based)",
      "Mobility & injury-prevention routine",
      "Habit system for consistency",
      "Simple progress check-ins",
    ],
    cta: "Start Foundation",
  },
  {
    name: "Performance",
    priceNote: "Best for 5K / 10K / Half Marathon",
    bestFor: "Improve speed and endurance with structured workouts and better recovery.",
    includes: [
      "Speed + tempo programming (intervals/threshold)",
      "Strength integration for runners",
      "Weekly load progression (smart volume)",
      "Race pacing guidance",
      "Feedback loop + adjustments",
    ],
    cta: "Train for Performance",
    featured: true,
  },
  {
    name: "Marathon / Ultra",
    priceNote: "Best for marathoners & ultra athletes",
    bestFor: "Periodized long-distance coaching designed for durability and race readiness.",
    includes: [
      "Training blocks (base → build → peak → taper)",
      "Long-run structure + fueling practice",
      "Fatigue management + recovery planning",
      "Race-specific prep (terrain, pacing, strategy)",
      "Pre-race checklist + execution plan",
    ],
    cta: "Build for Marathon/Ultra",
  },
];

const programTracks = [
  {
    title: "Beginner / Foundation",
    desc: "Start from scratch or return after a break — build consistency safely.",
    bullets: ["Run-walk progression", "Injury prevention", "Weekly structure"],
  },
  {
    title: "5K / 10K Speed",
    desc: "Improve pace sustainably with the right mix of intensity and recovery.",
    bullets: ["Intervals & tempo", "Running economy", "Strength support"],
  },
  {
    title: "Half Marathon",
    desc: "Endurance progression with pacing, fueling, and long-run structure.",
    bullets: ["Progressive long runs", "Threshold work", "Fueling basics"],
  },
  {
    title: "Marathon",
    desc: "A complete build with periodization, taper strategy, and race execution.",
    bullets: ["Block training", "Taper plan", "Race strategy"],
  },
  {
    title: "Ultra / Trail",
    desc: "Long-distance durability for trails, elevation, and time-on-feet demands.",
    bullets: ["Time-on-feet builds", "Climbing strength", "Trail-specific prep"],
  },
  {
    title: "Group / Corporate",
    desc: "Structured programs for teams and communities with measurable outcomes.",
    bullets: ["Beginner-friendly", "Habit building", "Progress tracking"],
  },
];

const faqs = [
  {
    q: "Is this online coaching or in-person?",
    a: "Both can work depending on your location and schedule. Many athletes follow a remote plan with structured check-ins.",
  },
  {
    q: "How do plans get customized?",
    a: "We tailor volume, intensity, and progression around your weekly availability, history, and any injury constraints.",
  },
  {
    q: "What do you need from me to start?",
    a: "Your goal race (if any), current weekly training, recent times (optional), and injury history.",
  },
  {
    q: "Do you help with race strategy and pacing?",
    a: "Yes — pacing, execution, and pre-race preparation are included for performance and long-distance tracks.",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
      {children}
    </span>
  );
}

export default function ProgramsPage() {
  return (
    <main className="bg-white text-zinc-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-20 border-b border-zinc-200">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[640px] rounded-full blur-3xl bg-[#FFD500]/20" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full blur-3xl bg-[#1FA2D6]/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Structured coaching</Badge>
            <Badge>Durability-first</Badge>
            <Badge>Race execution</Badge>
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">
            Programs Built for{" "}
            <span className="text-zinc-600">Consistency & Performance</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-600">
            Choose a track aligned to your goal, current fitness, and lifestyle.
            Every program is designed to help you improve without breaking down.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl px-6 py-3 text-sm font-medium text-white transition"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              Book a Consultation
            </Link>

            <Link
              href="/races"
              className="rounded-xl border px-6 py-3 text-sm font-medium transition hover:bg-zinc-50"
              style={{ borderColor: BRAND_YELLOW, color: BRAND_BLUE }}
            >
              Training for a race?
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TIERS ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold">Coaching Tiers</h2>
              <p className="mt-3 max-w-2xl text-zinc-600">
                Simple options that map to where you are today and where you want to go.
              </p>
            </div>

            <div className="text-sm text-zinc-500">
              Pricing can be added later — keep the pitch focused on quality + structure.
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={[
                  "rounded-2xl border p-8 transition",
                  t.featured
                    ? "border-zinc-900 shadow-xl"
                    : "border-zinc-200 hover:shadow-lg",
                ].join(" ")}
              >
                {t.featured ? (
                  <div className="mb-5 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-zinc-900"
                    style={{ backgroundColor: `${BRAND_YELLOW}33` }}
                  >
                    Most chosen
                  </div>
                ) : null}

                <div className="text-sm font-medium" style={{ color: BRAND_BLUE }}>
                  {t.name}
                </div>

                <div className="mt-2 text-sm text-zinc-600">{t.priceNote}</div>

                <p className="mt-4 text-sm text-zinc-600 leading-relaxed">{t.bestFor}</p>

                <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                  {t.includes.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-full justify-center rounded-xl px-5 py-3 text-sm font-medium text-white transition"
                  style={{ backgroundColor: BRAND_BLUE }}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRACKS ================= */}
      <section className="py-20 bg-zinc-50 border-t border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-center">Training Tracks</h2>
          <p className="mt-4 text-center text-zinc-600 max-w-2xl mx-auto">
            A clean set of tracks that map to the most common goals athletes come in with.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {programTracks.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8 hover:shadow-lg transition"
              >
                <div className="text-lg font-semibold" style={{ color: BRAND_BLUE }}>
                  {p.title}
                </div>
                <p className="mt-3 text-sm text-zinc-600">{p.desc}</p>

                <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: BRAND_YELLOW }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-xl px-7 py-3 text-sm font-medium text-white transition"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              Get a Program Recommendation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold">FAQ</h2>
              <p className="mt-3 max-w-2xl text-zinc-600">
                Clear answers to the usual questions before athletes start.
              </p>
            </div>

            <Link
              href="/contact"
              className="rounded-xl border px-5 py-3 text-sm font-medium transition hover:bg-zinc-50"
              style={{ borderColor: BRAND_YELLOW, color: BRAND_BLUE }}
            >
              Ask a question
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl border border-zinc-200 p-8 hover:shadow-md transition"
              >
                <div className="text-sm font-semibold text-zinc-900">{f.q}</div>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 border-t border-zinc-200">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold">Ready to train with structure?</h2>
          <p className="mt-4 text-zinc-600">
            Share your goal, weekly availability, and current fitness level — we’ll recommend the best track.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl px-8 py-4 text-sm font-medium text-white transition"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              Book a Consultation
            </Link>

            <Link
              href="/races"
              className="rounded-xl border px-8 py-4 text-sm font-medium transition hover:bg-zinc-50"
              style={{ borderColor: BRAND_YELLOW, color: BRAND_BLUE }}
            >
              Train for a Hosted Race
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
