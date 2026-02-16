"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BRAND_BLUE = "#1FA2D6";
const BRAND_YELLOW = "#FFD500";

const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/races", label: "Races" },
  { href: "/contact", label: "Contact" },
];

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "text-sm font-medium transition",
        active ? "text-zinc-900" : "text-zinc-700 hover:text-zinc-900",
      ].join(" ")}
    >
      <span className="relative">
        {label}
        {active ? (
          <span
            className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_YELLOW})` }}
          />
        ) : null}
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
              <Image
                src="/logo.png"
                alt="KaysFIT Academy"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-zinc-900">
                KaysFIT Academy
              </div>
              <div className="text-xs text-zinc-500">
                Coaching • Performance • Race Leadership
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((i) => (
              <NavLink
                key={i.href}
                href={i.href}
                label={i.label}
                active={pathname === i.href || (i.href !== "/" && pathname?.startsWith(i.href))}
              />
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition"
            >
              Enquire
            </Link>

            <Link
              href="/contact"
              className="inline-flex rounded-xl px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              Book a Call
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 hover:bg-zinc-50 transition"
              onClick={() => setOpen((v) => !v)}
            >
              <div className="grid gap-1.5">
                <span className="h-0.5 w-5 bg-zinc-900" />
                <span className="h-0.5 w-5 bg-zinc-900" />
                <span className="h-0.5 w-5 bg-zinc-900" />
              </div>
            </button>
          </div>
        </div>

        {/* Brand accent line */}
        <div
          className="h-[2px] w-full"
          style={{ background: `linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_YELLOW})` }}
        />

        {/* Mobile dropdown */}
        {open ? (
          <div className="md:hidden py-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="grid gap-3">
                {nav.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className={[
                      "rounded-xl px-3 py-2 text-sm font-medium transition",
                      pathname === i.href || pathname?.startsWith(i.href)
                        ? "bg-zinc-50 text-zinc-900"
                        : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900",
                    ].join(" ")}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>

              <div
                className="mt-4 rounded-xl border px-3 py-3 text-xs text-zinc-600"
                style={{ borderColor: `${BRAND_YELLOW}80`, backgroundColor: `${BRAND_YELLOW}22` }}
              >
                Fastest response via WhatsApp or a quick consultation call.
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
