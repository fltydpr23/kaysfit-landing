"use client";

import Link from "next/link";
import { useState } from "react";

const BRAND_BLUE = "#1FA2D6";
const BRAND_YELLOW = "#FFD500";

const WHATSAPP_NUMBER = "917829956329";
const WHATSAPP_MESSAGE =
  "Hi KaysFIT Academy! I’m interested in coaching. My goal race is ____. My current weekly running is ____ km. Can we discuss the right plan?";

function waLink() {
  const text = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xwvnbrzz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
            Contact
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">
            Book a Consultation,
            <span className="block text-zinc-600">Get a structured plan recommendation</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
            Share your goal, current training, and injury history. We’ll suggest the right track.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-7 py-3 text-sm font-medium text-white transition"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              WhatsApp Us (Fastest)
            </a>

            <Link
              href="/programs"
              className="rounded-xl border px-7 py-3 text-sm font-medium transition hover:bg-zinc-50"
              style={{ borderColor: BRAND_YELLOW, color: BRAND_BLUE }}
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-2xl font-semibold">Reach us</h2>
            <p className="mt-3 text-zinc-600">
              WhatsApp is the quickest way to get started. If you prefer email, use the enquiry form.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-zinc-200 p-6 hover:shadow-md transition bg-white">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">WhatsApp</div>
                <div className="mt-2 text-lg font-semibold" style={{ color: BRAND_BLUE }}>
                  +91 7829956329
                </div>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-xl px-5 py-3 text-sm font-medium text-white transition"
                  style={{ backgroundColor: BRAND_BLUE }}
                >
                  Message on WhatsApp
                </a>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-6 bg-white">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Email</div>
                <div className="mt-2 text-lg font-semibold text-zinc-900">
                  coachkay@kfita.in
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-6 bg-white">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Location</div>
                <div className="mt-2 text-lg font-semibold text-zinc-900">
                  Bangalore, India
                </div>
                <div className="mt-2 text-sm text-zinc-600">
                  Coaching available remotely and on-ground depending on schedule.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — FORM */}
          <div className="rounded-3xl border border-zinc-200 p-8 bg-white shadow-sm">
            <h2 className="text-2xl font-semibold">Enquiry Form</h2>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-4">

              <input
                name="name"
                required
                className="rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                placeholder="Full name"
              />

              <input
                name="phone"
                required
                className="rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                placeholder="Phone / WhatsApp"
              />

              <input
                name="goal"
                className="rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                placeholder="Goal (e.g., first 10K / sub-2 half / 50K)"
              />

              <textarea
                name="message"
                required
                className="min-h-32 rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                placeholder="Current weekly running, schedule, injuries, race date (if any)"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-xl px-6 py-3 text-sm font-medium text-white transition disabled:opacity-60"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                {status === "sending" ? "Sending..." : "Send Enquiry"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-700">
                  Enquiry sent successfully. We’ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again or message us on WhatsApp.
                </p>
              )}

              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium underline"
                style={{ color: BRAND_BLUE }}
              >
                Prefer WhatsApp? Message us →
              </a>

            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 border-t border-zinc-200 text-center">
        <h2 className="text-3xl font-semibold">
          Training for OOTYULTRA / Bison Ultra / Madurai Ultra?
        </h2>

        <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
          We can build a race-specific plan covering long runs, durability, pacing strategy, and recovery.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/races"
            className="rounded-xl border px-8 py-4 text-sm font-medium transition hover:bg-zinc-50"
            style={{ borderColor: BRAND_YELLOW, color: BRAND_BLUE }}
          >
            Explore Races
          </Link>

          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl px-8 py-4 text-sm font-medium text-white transition"
            style={{ backgroundColor: BRAND_BLUE }}
          >
            WhatsApp Now
          </a>
        </div>
      </section>
    </main>
  );
}
