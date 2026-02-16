import Link from "next/link";

const BRAND_BLUE = "#1FA2D6";
const BRAND_YELLOW = "#FFD500";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div
        className="h-[2px] w-full"
        style={{ background: `linear-gradient(90deg, ${BRAND_YELLOW}, ${BRAND_BLUE})` }}
      />

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-zinc-900">KaysFIT Academy</div>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
              Structured endurance coaching and performance training, built on real race leadership.
              Designed for consistency, durability, and long-term progression.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_BLUE }} />
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_YELLOW }} />
              <span>Coaching • Events • Community</span>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900">Navigation</div>
            <div className="mt-3 grid gap-2 text-sm text-zinc-600">
              <Link className="hover:text-zinc-900 transition" href="/about">About</Link>
              <Link className="hover:text-zinc-900 transition" href="/programs">Programs</Link>
              <Link className="hover:text-zinc-900 transition" href="/races">Races</Link>
              <Link className="hover:text-zinc-900 transition" href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-zinc-900">Contact</div>
            <div className="mt-3 grid gap-2 text-sm text-zinc-600">
              <div>WhatsApp: +91 78299 56329 </div>
              <div>Email: coachkay@kfita.in</div>
            </div>

            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-xl px-5 py-3 text-sm font-medium text-white transition hover:opacity-95"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} KaysFIT Academy</div>
          <div className="flex items-center gap-2">
            <span>Built for performance.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
