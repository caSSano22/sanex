import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionKicker } from "@/components/ui/SectionKicker";

export const metadata: Metadata = {
  title: "Contact — SANEX",
  description: "Get in touch with the SANEX team.",
};

const CHANNELS = [
  {
    label: "General",
    email: "hello@sanexprotocol.space",
    description: "Questions, partnerships, or anything else.",
  },
  {
    label: "Access",
    email: "access@sanexprotocol.space",
    description: "Requesting access or asking about cohorts.",
  },
  {
    label: "Security",
    email: "security@sanexprotocol.space",
    description: "Report a vulnerability or a safety concern.",
  },
  {
    label: "Careers",
    email: "careers@sanexprotocol.space",
    description: "Introduce yourself and what you've built.",
  },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <Navbar />

      <section className="bg-bg-base px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-prose">
          <SectionKicker>Company</SectionKicker>
          <h1 className="mt-4 font-display text-h1 text-text-primary">Contact</h1>
          <p className="mt-6 text-pretty text-body text-text-secondary md:text-title">
            Reach the right part of the team directly. We read everything and reply to
            what we can.
          </p>

          <div className="mt-14 divide-y divide-border-subtle border-t border-border-subtle">
            {CHANNELS.map((channel) => (
              <div
                key={channel.email}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="text-micro font-medium uppercase tracking-wide text-text-tertiary">
                    {channel.label}
                  </p>
                  <p className="mt-1 text-body-sm text-text-secondary">
                    {channel.description}
                  </p>
                </div>
                <a
                  href={`mailto:${channel.email}`}
                  className="group relative shrink-0 self-start font-mono text-body-sm text-text-primary sm:self-auto"
                >
                  {channel.email}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-160 ease-enter group-hover:scale-x-100"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
