export interface CtaCopy {
  headline: string;
  body: string;
  button: { label: string; href: string };
}

export const ctaCopy: CtaCopy = {
  headline: "Trust every action you take on-chain.",
  body: "Access is opening. Bring your wallet, your agents, and your standards.",
  button: { label: "Request access", href: "/access" },
};
