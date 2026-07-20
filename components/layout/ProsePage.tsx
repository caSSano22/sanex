import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionKicker } from "@/components/ui/SectionKicker";

export interface ProseSection {
  heading?: string;
  paragraphs: string[];
}

export interface ProsePageProps {
  eyebrow: string;
  title: string;
  intro?: string;
  updated?: string;
  sections: ProseSection[];
  /** Optional extra content rendered after the sections (e.g. contact links). */
  children?: ReactNode;
}

export function ProsePage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
  children,
}: ProsePageProps) {
  return (
    <main id="main-content">
      <Navbar />

      <article className="bg-bg-base px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-prose">
          <header>
            <SectionKicker>{eyebrow}</SectionKicker>
            <h1 className="mt-4 font-display text-h1 text-text-primary">{title}</h1>
            {intro && (
              <p className="mt-6 text-pretty text-body text-text-secondary md:text-title">
                {intro}
              </p>
            )}
            {updated && (
              <p className="mt-6 font-mono text-caption text-text-tertiary">{updated}</p>
            )}
          </header>

          {sections.length > 0 && (
            <div className="mt-16 space-y-14">
              {sections.map((section, index) => (
                <section
                  key={section.heading ?? index}
                  className="border-t border-border-subtle pt-14"
                >
                  {section.heading && (
                    <h2 className="font-display text-h3 text-text-primary">
                      {section.heading}
                    </h2>
                  )}
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-pretty text-body-sm text-text-secondary"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {children && <div className="mt-14">{children}</div>}
        </div>
      </article>

      <Footer />
    </main>
  );
}
