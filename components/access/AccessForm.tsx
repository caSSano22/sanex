"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { DURATION, EASE_ENTER } from "@/lib/motion/easings";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Role = "" | "investor" | "agent-operator" | "institution" | "builder";

const ROLE_OPTIONS: { value: Exclude<Role, "">; label: string }[] = [
  { value: "investor", label: "Investor" },
  { value: "agent-operator", label: "Agent operator" },
  { value: "institution", label: "Institution" },
  { value: "builder", label: "Builder / developer" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AccessForm() {
  const reducedMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }

    setError(null);
    // No backend is wired yet: hand off to the user's mail client so the
    // request actually reaches a person, and confirm in-place. Swap this
    // for a POST to your waitlist endpoint when the API exists.
    const subject = encodeURIComponent("SANEX — request access");
    const body = encodeURIComponent(
      [
        `Email: ${email.trim()}`,
        `Role: ${role || "unspecified"}`,
        notes.trim() ? `Notes: ${notes.trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.location.href = `mailto:access@sanexprotocol.space?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: reducedMotion ? 0 : DURATION.reveal, ease: EASE_ENTER }}
        className="rounded-xl border border-border-subtle bg-surface-1 p-8 text-center shadow-2"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-safe-quiet">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="text-safe"
          >
            <path d="M5 10.5l3.5 3.5L15 6.5" />
          </svg>
        </div>
        <h2 className="mt-5 text-h3 text-text-primary">Request received</h2>
        <p className="mt-2 text-pretty text-body-sm text-text-secondary">
          Your access request is on its way. We&rsquo;ll reach out to{" "}
          <span className="text-text-primary">{email.trim()}</span> when the next
          cohort opens.
        </p>
        <div className="mt-6">
          <Button href="/" variant="secondary" size="md">
            Back to home
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="email" className="text-caption text-text-secondary">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "email-error" : undefined}
          placeholder="you@example.com"
          className={cn(
            "mt-2 h-10 w-full rounded-md border bg-surface-2 px-3 text-body text-text-primary placeholder:text-text-tertiary",
            "transition-colors duration-120 focus-visible:border-accent",
            error ? "border-blocked" : "border-border-subtle"
          )}
        />
        {error && (
          <p id="email-error" className="mt-2 text-caption text-blocked">
            {error}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="role" className="text-caption text-text-secondary">
          I am a <span className="text-text-tertiary">(optional)</span>
        </label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(event) => setRole(event.target.value as Role)}
          className="mt-2 h-10 w-full rounded-md border border-border-subtle bg-surface-2 px-3 text-body text-text-primary transition-colors duration-120 focus-visible:border-accent"
        >
          <option value="">Select one</option>
          {ROLE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="text-caption text-text-secondary">
          Anything we should know? <span className="text-text-tertiary">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          rows={4}
          placeholder="How you'd use SANEX, what you'd want it to protect."
          className="mt-2 w-full resize-none rounded-md border border-border-subtle bg-surface-2 px-3 py-2.5 text-body text-text-primary placeholder:text-text-tertiary transition-colors duration-120 focus-visible:border-accent"
        />
      </div>

      <Button variant="primary" size="lg" className="w-full">
        Request access
      </Button>

      <p className="text-center text-caption text-text-tertiary">
        We&rsquo;ll only use your email to contact you about access. No spam.
      </p>
    </form>
  );
}
