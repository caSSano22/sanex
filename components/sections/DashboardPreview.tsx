import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { ActionFeed } from "@/components/product/ActionFeed";
import { MandatePanel } from "@/components/product/MandatePanel";
import { FadeInOnView } from "@/components/motion/FadeInOnView";
import { actionFeed, dashboardCopy, mandateLimits } from "@/content/copy/dashboard";

export function DashboardPreview() {
  return (
    <section id="dashboard" className="bg-bg-raised px-6 py-24 md:py-32">
      <div className="mx-auto max-w-app">
        <div className="max-w-prose">
          <SectionKicker>{dashboardCopy.eyebrow}</SectionKicker>
          <h2 className="mt-4 font-display text-h2 text-text-primary">
            {dashboardCopy.headline}
          </h2>
          <p className="mt-4 text-pretty text-body text-text-secondary">
            {dashboardCopy.subhead}
          </p>
        </div>

        <FadeInOnView delay={0.08} className="mt-14">
          <div className="overflow-hidden rounded-xl border border-border-subtle bg-bg-base shadow-3">
            <div className="flex items-center gap-1.5 border-b border-border-subtle px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border-strong" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-border-strong" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-border-strong" aria-hidden="true" />
            </div>

            <div className="p-6">
              <Tabs
                items={[
                  {
                    id: "feed",
                    label: dashboardCopy.tabs.feed,
                    content: <ActionFeed items={actionFeed} variant="feed" />,
                  },
                  {
                    id: "mandates",
                    label: dashboardCopy.tabs.mandates,
                    content: <MandatePanel limits={mandateLimits} />,
                  },
                  {
                    id: "record",
                    label: dashboardCopy.tabs.record,
                    content: <ActionFeed items={actionFeed} variant="record" />,
                  },
                ]}
              />
            </div>
          </div>
        </FadeInOnView>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-sm text-text-tertiary">{dashboardCopy.caption}</p>
          <Button href={dashboardCopy.cta.href} variant="primary" size="md">
            {dashboardCopy.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
