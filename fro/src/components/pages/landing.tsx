import { useState } from "react";

const features = [
  ["▤", "Centralized Repository", "Institution-wise FDR records."],
  ["▧", "Digital Documents", "Secure document uploads and retrieval."],
  ["◇", "Verification", "Review records and flag discrepancies."],
  ["▦", "Maturity Tracking", "Monitor validity and deadlines."],
  ["↻", "Renewals", "Track replacements and renewal history."],
  ["₹", "Release & Refund", "Track requests and approvals."],
  ["♧", "Automated Alerts", "Identify overdue actions."],
  ["▥", "Reports & Dashboard", "Review FDR status and pending cases."],
  ["✓", "Audit Trail", "Track authorized changes and actions."],
  ["🔗", "Integration & Security", "Protect data and support integrations."],
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const primaryBtn =
    "inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

  const eyebrow =
    "text-xs font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-sm";

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-14 flex-col items-center justify-center rounded-md bg-blue-900 text-white">
              <span className="text-sm font-extrabold">AICTE</span>
              <small className="text-xs">भारत</small>
            </div>

            <div className="flex flex-col">
              <strong className="text-lg font-extrabold text-blue-950 sm:text-xl">
                AICTE
              </strong>
              <span className="max-w-64 text-xs text-slate-600 sm:text-sm">
                Security Deposit / FDR Management Portal
              </span>
            </div>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="rounded-lg border border-slate-300 px-3 py-2 text-xl text-slate-700 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 right-0 top-full flex-col gap-2 border-b border-slate-200 bg-white p-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Features", "#features"],
              ["Login", "/login"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-800"
              >
                {label}
              </a>
            ))}

            <a
              href="/login"
              onClick={closeMenu}
              className={primaryBtn}
            >
              Get Started →
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <span className={eyebrow}>
                All India Council for Technical Education
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                Security Deposit / FDR
                <span className="mt-2 block text-blue-700">
                  Management Portal
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                A centralized and secure platform for managing security
                deposits and Fixed Deposit Receipts (FDRs) related to AICTE
                approval and compliance processes.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="/login" className={primaryBtn}>
                  Get Started →
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-700 px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
                >
                  Learn More
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
                <span>✓ Secure Records</span>
                <span>✓ Easy Verification</span>
                <span>✓ Transparent Tracking</span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="mx-auto w-full max-w-md">
              <div className="rounded-2xl border border-blue-100 bg-white p-7 shadow-xl shadow-blue-950/10 sm:p-9">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-4xl">
                  🏛️
                </div>

                <h2 className="mt-5 text-3xl font-extrabold text-blue-950">
                  AICTE
                </h2>

                <p className="mt-2 text-slate-500">
                  Security Deposit Management
                </p>

                <div className="my-6 border-t border-slate-200" />

                {[
                  "Secure Records",
                  "Maturity Monitoring",
                  "Audit Trail",
                ].map((item) => (
                  <div
                    key={item}
                    className="mb-3 flex items-center justify-between rounded-lg bg-slate-50 px-4 py-4"
                  >
                    <span className="font-medium text-slate-700">
                      {item}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                      ✓
                    </span>
                  </div>
                ))}

                <div className="mt-5 rounded-lg bg-blue-50 p-4 text-sm leading-6 text-blue-900">
                  A single platform for organized deposit records and
                  compliance workflows.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 px-4 py-16 text-center sm:px-6 sm:py-20"
        >
          <span className={eyebrow}>About the Portal</span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            One Platform. Complete Deposit Visibility.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Manage the complete lifecycle of security deposits and FDRs
            with centralized records, structured verification and timely
            follow-up.
          </p>
        </section>

        {/* Features */}
        <section
          id="features"
          className="scroll-mt-24 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className={eyebrow}>Key Features</span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
                Simplifying Deposit & FDR Management
              </h2>

              <p className="mt-4 text-slate-600">
                Everything needed for an organized administrative workflow.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {features.map(([icon, title, description]) => (
                <article
                  key={title}
                  className="group rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl font-bold text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    {icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-blue-950">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-950 to-blue-800 px-4 py-16 text-center text-white sm:px-6 sm:py-20">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Manage every deposit with greater clarity.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Access the portal to manage records and monitor pending actions.
          </p>

          <a
            href="/login"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-bold text-blue-900 shadow-lg transition hover:bg-blue-50"
          >
            Access Portal →
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center">
        <strong className="text-xl font-extrabold text-blue-950">
          AICTE
        </strong>

        <p className="mt-2 text-sm text-slate-600">
          Security Deposit / FDR Management Portal
        </p>

        <small className="mt-3 block text-slate-500">
          Transparent · Efficient · Compliant
        </small>

        <p className="mt-5 text-xs text-slate-400">
          © {new Date().getFullYear()} AICTE. All rights reserved.
        </p>
      </footer>
    </div>
  );
}