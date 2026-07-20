import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { docsCopy } from "@/content/copy/docs";

export const metadata: Metadata = {
  title: "Thesis — SANEX",
  description:
    "The case for on-chain accountability infrastructure: an independent layer that verifies actions, enforces mandates for humans and agents, and proves who was responsible.",
};

export default function DocsPage() {
  return (
    <main id="main-content">
      <Navbar />

      <article className="bg-bg-base px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-prose">
          <header id="thesis" className="scroll-mt-24">
            <SectionKicker>{docsCopy.eyebrow}</SectionKicker>
            <h1 className="mt-4 font-display text-h1 text-text-primary">
              {docsCopy.title}
            </h1>
            <p className="mt-6 text-pretty text-body text-text-secondary md:text-title">
              {docsCopy.intro}
            </p>
            <p className="mt-6 font-mono text-caption text-text-tertiary">
              {docsCopy.updated}
            </p>
          </header>

          <div className="mt-16 space-y-14">
            {docsCopy.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-t border-border-subtle pt-14"
              >
                <h2 className="font-display text-h3 text-text-primary">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-pretty text-body-sm text-text-secondary"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-border-subtle pt-10">
            <Button href="/access" variant="primary" size="md">
              Request access
            </Button>
            <Button href="/#faq" variant="ghost" size="md">
              Read the FAQ
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
