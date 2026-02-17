import Link from "next/link";

const BRAND_BLUE = "#1FA2D6";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Brand */}
          <div>
            <div className="text-sm font-semibold text-zinc-900">
              KaysFIT Academy
            </div>
            <div className="mt-2 text-xs text-zinc-500">
              High-performance endurance coaching built on structured progression.
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/kaysfitacademy"
              target="_blank"
              className="flex items-center gap-2 text-sm text-zinc-600 hover:text-[#1FA2D6] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.75 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
              </svg>
              <span>Instagram</span>
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/kaysfitacademy/"
              target="_blank"
              className="flex items-center gap-2 text-sm text-zinc-600 hover:text-[#1FA2D6] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M13.5 9H16V6h-2.5C11.567 6 10 7.567 10 9.5V11H8v3h2v7h3v-7h2.11l.39-3H13v-1.5c0-.276.224-.5.5-.5z"/>
              </svg>
              <span>Facebook</span>
            </Link>

          </div>
        </div>

        <div className="mt-8 text-xs text-zinc-400">
          © {new Date().getFullYear()} KaysFIT Academy. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
