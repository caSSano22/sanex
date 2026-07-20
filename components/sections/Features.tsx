import { Card } from "@/components/ui/Card";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { FEATURE_ICONS } from "@/components/icons";
import { FadeInOnView } from "@/components/motion/FadeInOnView";
import { featuresCopy } from "@/content/copy/features";

export function Features() {
  return (
    <section id="features" className="bg-bg-base px-6 py-24 md:py-32">
      <div className="mx-auto max-w-app">
        <div className="max-w-prose">
          <SectionKicker>{featuresCopy.eyebrow}</SectionKicker>
          <h2 className="mt-4 font-display text-h2 text-text-primary">
            {featuresCopy.headline}
          </h2>
          <p className="mt-4 text-pretty text-body text-text-secondary">
            {featuresCopy.subhead}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {featuresCopy.items.map((item, index) => {
            const Icon = FEATURE_ICONS[item.icon];
            return (
              <FadeInOnView key={item.title} delay={index * 0.08}>
                <Card interactive className="h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-2 text-text-secondary">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-h3 text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-pretty text-body-sm text-text-secondary">
                    {item.body}
                  </p>
                </Card>
              </FadeInOnView>
            );
          })}
        </div>

        <p className="mt-12 text-body-sm text-text-tertiary">{featuresCopy.closingLine}</p>
      </div>
    </section>
  );
}
