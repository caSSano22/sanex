import type { ActionRecord, MandateLimit } from "@/types/dashboard";

export interface DashboardCopy {
  eyebrow: string;
  headline: string;
  subhead: string;
  caption: string;
  cta: { label: string; href: string };
  tabs: { feed: string; mandates: string; record: string };
}

export const dashboardCopy: DashboardCopy = {
  eyebrow: "Product preview",
  headline: "Every action, accounted for.",
  subhead:
    "One clear surface shows what's happening, what was allowed, and what was stopped — simple enough to read at a glance, complete enough to defend to an auditor.",
  caption: "The same screen serves a first-time investor and a compliance team.",
  cta: { label: "Request access", href: "#cta" },
  tabs: {
    feed: "Feed",
    mandates: "Mandates",
    record: "Record",
  },
};

export const actionFeed: ActionRecord[] = [
  {
    id: "act-1",
    actor: "You",
    mandate: "Personal wallet",
    action: "Lending deposit",
    detail: "0x3f2a…9c4d",
    amount: "2.5 ETH",
    status: "safe",
    time: "2m ago",
  },
  {
    id: "act-2",
    actor: "Yield agent",
    mandate: "Agent mandate #1",
    action: "Swap request",
    detail: "0x9b41…12ee",
    amount: "480 USDC",
    status: "safe",
    time: "6m ago",
  },
  {
    id: "act-3",
    actor: "Yield agent",
    mandate: "Agent mandate #1",
    action: "Position increase",
    detail: "0x2d10…88b3",
    amount: "1,200 USDC",
    status: "caution",
    time: "14m ago",
  },
  {
    id: "act-4",
    actor: "Unknown contract",
    mandate: "—",
    action: "Unlimited approval request",
    detail: "0x77ac…44f1",
    amount: "—",
    status: "blocked",
    time: "19m ago",
  },
];

export const mandateLimits: MandateLimit[] = [
  { label: "Asset scope", value: "ETH, USDC, Stock Tokens" },
  { label: "Max size per action", value: "$5,000" },
  { label: "Allowed venues", value: "Verified lending and swap markets" },
  { label: "Rate limit", value: "10 actions per hour" },
  { label: "Agent authority", value: "Execute only — no withdrawal" },
];
