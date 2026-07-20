import { FadeInOnView } from "@/components/motion/FadeInOnView";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { socialProofCopy } from "@/content/copy/socialProof";

export function SocialProof() {
  return (
    <section
      id="social-proof"
      className="border-y border-border-subtle bg-bg-raised px-6 py-16"
    >
      <div className="mx-auto max-w-app">
        <FadeInOnView>
          <SectionKicker>{socialProofCopy.eyebrow}</SectionKicker>
          <p className="mt-4 max-w-prose text-pretty text-title text-text-primary">
            {socialProofCopy.headline}
          </p>
          <p className="mt-3 max-w-prose text-pretty text-body-sm text-text-secondary">
            {socialProofCopy.supportingLine}
          </p>
        </FadeInOnView>

        <FadeInOnView delay={0.08}>
          <ul className="mt-8 flex flex-wrap gap-3">
            {socialProofCopy.contextTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border-subtle bg-surface-1 px-3 py-1.5 text-caption text-text-secondary transition-colors duration-160 hover:text-text-primary"
              >
                {tag}
              </li>
            ))}
          </ul>
        </FadeInOnView>
      </div>
    </section>
  );
}
