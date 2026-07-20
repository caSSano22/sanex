import type { StatusVariant } from "@/types/status";

export interface ActionRecord {
  id: string;
  actor: string;
  mandate: string;
  action: string;
  detail: string;
  amount: string;
  status: StatusVariant;
  time: string;
}

export interface MandateLimit {
  label: string;
  value: string;
}

export type DashboardTabId = "feed" | "mandates" | "record";
