import { SectionKicker } from "@/components/ui/SectionKicker";
import { FadeInOnView } from "@/components/motion/FadeInOnView";
import { premiseCopy } from "@/content/copy/premise";

export function Premise() {
  return (
    <section
      id="premise"
      className="border-t border-border-subtle bg-bg-base px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-app">
        <FadeInOnView>
          <SectionKicker>{premiseCopy.eyebrow}</SectionKicker>
        </FadeInOnView>

        <FadeInOnView delay={0.06}>
          <p className="mt-6 max-w-4xl text-pretty font-display text-h3 leading-snug text-text-tertiary md:text-h2">
            {premiseCopy.tokens.map((token, index) => (
              <span key={index} className={token.strong ? "text-text-primary" : undefined}>
                {token.text}
              </span>
            ))}
          </p>
        </FadeInOnView>

        <FadeInOnView delay={0.12}>
          <p className="mt-8 font-mono text-caption uppercase tracking-wide text-text-tertiary">
            {premiseCopy.footnote}
          </p>
        </FadeInOnView>
      </div>
    </section>
  );
}
