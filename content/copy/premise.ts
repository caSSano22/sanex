export interface PremiseToken {
  text: string;
  strong?: boolean;
}

export interface PremiseCopy {
  eyebrow: string;
  tokens: PremiseToken[];
  footnote: string;
}

// Rendered as one large statement. `strong` tokens are shown in the primary
// text color; everything else recedes to a quieter tone, so the eye lands on
// the claim rather than the connective tissue.
export const premiseCopy: PremiseCopy = {
  eyebrow: "Why SANEX",
  tokens: [
    { text: "Robinhood Chain moved millions of everyday investors on-chain — and handed them " },
    { text: "self-custody", strong: true },
    { text: " and " },
    { text: "autonomous agents", strong: true },
    { text: " at the same time. One wrong signature is irreversible. An agent can act faster than any person can watch. " },
    {
      text: "SANEX is the independent layer that checks every action before it settles, holds every actor to the limits it was given, and keeps a record of who was responsible.",
      strong: true,
    },
  ],
  footnote: "Infrastructure for the chain — not another token.",
};
