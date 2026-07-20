import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { AccessForm } from "@/components/access/AccessForm";

export const metadata: Metadata = {
  title: "Request access — SANEX",
  description:
    "Request access to SANEX, the independent accountability layer for on-chain finance.",
};

const ASSURANCES = [
  "A clear verdict before you sign.",
  "Limits that hold — for you and your agents.",
  "A record you can stand behind.",
];

export default function AccessPage() {
  return (
    <main id="main-content">
      <Navbar />

      <section className="relative overflow-hidden bg-bg-base px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/4 bg-[radial-gradient(closest-side,rgba(59,110,246,0.12),transparent)]"
        />

        <div className="relative mx-auto grid max-w-app gap-12 lg:grid-cols-[1fr_minmax(360px,440px)] lg:gap-16">
          <div className="lg:pt-6">
            <SectionKicker>Request access</SectionKicker>
            <h1 className="mt-4 max-w-[16ch] text-balance font-display text-h1 text-text-primary">
              Trust every action you take on-chain.
            </h1>
            <p className="mt-6 max-w-prose text-pretty text-body text-text-secondary md:text-title">
              Access is opening in cohorts. Tell us who you are and what you want
              protected, and we&rsquo;ll reach out when the next one opens.
            </p>

            <ul className="mt-10 space-y-3">
              {ASSURANCES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-quiet"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <span className="text-body-sm text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-surface-1 p-6 shadow-3 md:p-8">
            <AccessForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
