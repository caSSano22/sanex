export type FeatureIconName = "checkpoint" | "boundary" | "record";

export interface FeatureItem {
  icon: FeatureIconName;
  title: string;
  body: string;
}

export interface FeaturesCopy {
  eyebrow: string;
  headline: string;
  subhead: string;
  items: FeatureItem[];
  closingLine: string;
}

export const featuresCopy: FeaturesCopy = {
  eyebrow: "What SANEX does",
  headline: "Three functions. One accountable layer.",
  subhead:
    "Everything SANEX does answers a single question at the moment it matters: is this action safe and authorized, and who owns it?",
  items: [
    {
      icon: "checkpoint",
      title: "Know before you sign.",
      body: "An independent, plain-language verdict on every counterparty, contract, and request — delivered the moment you're asked to approve it, in words anyone can act on.",
    },
    {
      icon: "boundary",
      title: "Limits that actually hold.",
      body: "Set what you and your agents are allowed to do — which assets, how much, where, how often. SANEX enforces those limits from the outside, so nothing can exceed the authority it was given.",
    },
    {
      icon: "record",
      title: "A record you can stand behind.",
      body: "Every action is attributable to an actor and a mandate, and every decision is written to a clear, portable record — for your own review, and for anyone who has to answer for it later.",
    },
  ],
  closingLine: "No new asset. No leverage. Just accountability, applied where decisions are made.",
};
