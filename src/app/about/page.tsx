import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-zinc-900">

      {/* ================= HERO ================= */}
      <section className="relative py-28 border-b border-zinc-200">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[600px] bg-[#FFD500]/20 blur-3xl rounded-full" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <div className="text-sm uppercase tracking-[0.25em] text-[#1FA2D6] font-medium">
            About the Founder
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight">
            Leadership in Endurance
            <span className="block text-zinc-600">
              Coaching Built on Experience
            </span>
          </h1>

        </div>
      </section>



      {/* ================= PROFILE ================= */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="relative">
  {/* subtle accent frame */}
  <div
    className="absolute -inset-4 rounded-3xl blur-xl"
    style={{ background: "linear-gradient(135deg, rgba(31,162,214,0.25), rgba(255,213,0,0.25))" }}
  />

  <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg">
    <Image
      src="/coach.jpg"
      alt="Coach Kay - Founder of KaysFIT Academy"
      width={600}
      height={800}
      className="object-cover w-full h-full"
      priority
    />
  </div>
</div>


          <div>
            <h2 className="text-3xl font-semibold text-[#1FA2D6]">
              Founder & Race Director
            </h2>

            <p className="mt-6 text-zinc-600 leading-relaxed">
              Leading OOTYULTRA, Bison Ultra, and Madurai Ultra,
              the founder of KaysFIT Academy integrates race execution,
              operational leadership, and athlete development into one system.
            </p>

            <p className="mt-6 text-zinc-600 leading-relaxed">
              The methodology focuses on structured progression,
              durability training, and sustainable performance development.
            </p>

      <div className="mt-10">
  <h3 className="text-xl font-semibold text-zinc-900">
    Qualifications & Professional Background
  </h3>

  <div className="mt-6 grid gap-4 sm:grid-cols-2">
    {[
      "M.Sc in Sports Performance",
      "High-Performance Endurance Coach",
      "Certified Personal Trainer",
      "UESCA Ultrarunning Coach",
      "Certified Project Manager",
      "Six Sigma Black Belt – Business Excellence",
    ].map((q) => (
      <div key={q} className="group relative h-full">
        {/* glow */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 blur-md transition group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(31,162,214,0.35), rgba(255,213,0,0.35))",
          }}
        />

        {/* uniform height card */}
        <div className="relative flex h-full min-h-[86px] items-center rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition group-hover:-translate-y-[1px] group-hover:shadow-lg">
          <span className="mr-3 h-2 w-2 rounded-full" style={{ backgroundColor: "#1FA2D6" }} />
          <div className="text-sm font-medium text-zinc-900 leading-snug">{q}</div>
        </div>
      </div>
    ))}
  </div>

  <p className="mt-4 text-xs text-zinc-500">
    Credentials are presented for clarity — coaching remains personalized and outcome-driven.
  </p>
</div>
</div>

          </div>    
      </section>



      {/* ================= PHILOSOPHY ================= */}
      <section className="relative py-28 border-t border-b border-zinc-200 bg-zinc-50 overflow-hidden">

  {/* subtle glow background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[700px] blur-3xl rounded-full bg-[#FFD500]/20" />
  </div>

  <div className="relative mx-auto max-w-5xl px-6 text-center">

    <div className="text-sm uppercase tracking-[0.25em] text-[#1FA2D6] font-medium">
      Coaching Philosophy
    </div>

    <h2 className="mt-6 text-4xl font-semibold leading-tight">
      Structure Over Hype.
      <span className="block text-zinc-600">
        Longevity Over Ego.
      </span>
    </h2>

    <p className="mt-6 max-w-2xl mx-auto text-zinc-600">
      Performance is not built in spikes. It is built through disciplined
      systems, progressive overload, and intelligent recovery.
    </p>

   <div className="mt-16 grid gap-8 md:grid-cols-3">

  {[
    {
      title: "Structure",
      desc: "Every athlete follows a clearly defined weekly system. No random workouts. No guesswork.",
    },
    {
      title: "Durability",
      desc: "Strength, mobility, and fatigue management are integrated into every performance block.",
    },
    {
      title: "Longevity",
      desc: "Sustainable progression replaces short-term spikes. Consistency builds real endurance.",
    },
  ].map((item) => (
    <div key={item.title} className="group relative h-full">

      {/* glow */}
      <div
        className="absolute -inset-[1px] rounded-3xl opacity-0 blur-md transition group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(31,162,214,0.35), rgba(255,213,0,0.35))",
        }}
      />

      <div className="relative flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm transition group-hover:-translate-y-[2px] group-hover:shadow-xl">

        <div className="text-3xl font-semibold text-[#1FA2D6]">
          {item.title}
        </div>

        <div className="mt-6 h-[3px] w-12 rounded-full bg-[#FFD500]" />

        {/* This makes descriptions align */}
        <p className="mt-6 text-sm text-zinc-600 leading-relaxed flex-grow">
          {item.desc}
        </p>

      </div>
    </div>
  ))}

</div>

  </div>
</section>  



      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-semibold">
          Train With Structure
        </h2>

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
