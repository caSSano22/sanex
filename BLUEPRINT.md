# SANEX — Landing Page Blueprint

**On-Chain Accountability Infrastructure for Robinhood Chain**

*Section-by-section build specification. Voice follows BRAND.md: calm, direct, comfortable saying "no." Surfaces follow DESIGN_SYSTEM.md: deep neutral base, single accent reserved for the moment of consequence, motion only where it confirms cause and effect.*

---

## 01 — Navbar

**Purpose.** Orient without competing; keep the primary action one click away at all times. Signal institution, not startup.

**Headline.** Wordmark `SANEX` only, left-aligned. No tagline in the bar.

**Description.** Minimal links — Product, How It Works, Docs, Roadmap. A single primary action on the right. Everything else is secondary.

**CTA.** `Request Access` (primary). `Docs` as ghost link.

**Animation.** Transparent over the hero; on scroll past 64px, fades to `--bg-raised` with a 1px `--border-subtle` underline over 160ms. No slide, no bounce.

**Visual Direction.** 64px height, `--container-wide`, 24px side padding. `body-sm` links in `--text-secondary`, active in `--text-primary`. Glass permitted only when pinned.

**Interaction.** Links underline-reveal on hover (120ms). Mobile collapses to a full-height sheet using the glass spec, opaque fallback. Focus rings always visible.

---

## 02 — Hero

**Purpose.** State the category and the gap in one breath. Convert intent immediately.

**Headline.** *The accountability layer for on-chain finance.*

**Description.** *Robinhood Chain gave millions of investors self-custody and autonomous agents at once. SANEX is the independent layer that verifies every action, enforces the limits humans and agents are allowed to operate within, and proves who was responsible.*

**CTA.** `Request Access` (primary) · `Read the thesis` (ghost, links to OPPORTUNITY).

**Animation.** Headline and subhead fade + 4px rise, staggered 60ms, on load. A low-opacity (≤10%) `--accent` radial glow feathers behind the wordmark. One deliberate motion — the rest of the page earns its stillness from this restraint.

**Visual Direction.** `display` headline, 68ch measure cap, generous top space (96–128px). Dark `--bg-base`. To the side or below: a single, quiet product still (a verification verdict card), not a collage.

**Interaction.** Primary button: accent fill, 120ms hover to `--accent-hover`, press scale 0.99. No parallax. Reduced-motion: opacity only.

---

## 03 — Social Proof

**Purpose.** Borrow credibility from context, not hype. Establish that this sits inside a serious ecosystem.

**Headline.** *Built for the chain the market actually moved onto.*

**Description.** A restrained row referencing the environment SANEX serves — Robinhood Chain, tokenized equities, agentic accounts, day-one DeFi venues — framed as the landscape, not endorsements. A single verifiable metric may anchor it (e.g., scale of users moved on-chain), stated plainly with a source.

**CTA.** None. This section does not ask; it grounds.

**Animation.** Logos/labels fade in on scroll into view, 160ms, no stagger drama. Static thereafter.

**Visual Direction.** Muted monochrome marks at ~40% opacity on `--bg-base`, brightening to 70% on hover. `caption` label above: `Trusted context`. Hairline dividers `--border-subtle`.

**Interaction.** Marks lift opacity on hover only. No carousels, no auto-scroll.

---

## 04 — Features

**Purpose.** Make the three product functions concrete and scannable.

**Headline.** *Three functions. One accountable layer.*

**Description.** Three cards:
1. **Verification** — an independent, plain-language verdict on every counterparty, contract, and payload at signing time.
2. **Mandate enforcement** — limits on assets, size, venue, and rate of action, enforced outside the executing app or agent.
3. **Attribution & recourse** — a portable, verifiable record of which actor acted under which mandate, and what resulted.

**CTA.** `See how it works` (ghost) leading into section 05.

**Animation.** Cards rise + fade on scroll, 80ms stagger, once. No looping.

**Visual Direction.** 3-column on `lg`, stacked on `xs`. `--surface-1` cards, 12px radius, 24px padding, `--shadow-1`. Each led by one functional icon (uniform stroke) in `--text-secondary`, `--accent` only on the active/first.

**Interaction.** Interactive cards: border → `--border-strong`, translateY(-1px) on hover, 160ms. Keyboard-focusable with visible ring.

---

## 05 — How It Works

**Purpose.** Show the user journey end to end so the abstract becomes procedural.

**Headline.** *Connect. Define. Act. Trust.*

**Description.** A four-to-six step sequence mirroring PROJECT.md's journey: connect wallet and agent → define limits → SANEX verifies and enforces at every signature → safe actions proceed, unauthorized ones stop before settlement → every action stays attributable → the trust profile follows the user to the next app.

**CTA.** `Read the docs` (ghost).

**Animation.** A vertical progress line draws in as the user scrolls; each step activates (dot fills `--accent`, text brightens to `--text-primary`) as it enters the viewport. Scroll-linked, reduced-motion falls back to all-visible.

**Visual Direction.** Left-aligned stepped list against a `--surface-1` panel, monospace step numbers with tabular figures. State colors preview here: a `Blocked` badge on the "unauthorized action" step.

**Interaction.** Steps are anchors; clicking a step number deep-links. Hover reveals a one-line detail beneath each step.

---

## 06 — Dashboard Preview

**Purpose.** Prove the product is real and legible — show the surface where accountability is felt.

**Headline.** *Every action, accounted for.*

**Description.** A framed product view: a live feed of actions with `Safe` / `Review` / `Blocked` status badges, a mandate panel showing enforced limits, and a signing sheet with a plain-language verdict. Copy emphasizes clarity for a non-expert and auditability for a compliance team — the same screen for both.

**CTA.** `Request Access` (primary).

**Animation.** On scroll into view, the frame settles (fade + 4px rise); one row transitions from `Review` to `Blocked` as a single deliberate demonstration of consequence, then rests.

**Visual Direction.** Device/browser frame on `--bg-raised`, glass verification sheet floating with `--shadow-3` and backdrop blur. Tabular monospace for amounts and addresses. Accent used only on the primary verdict.

**Interaction.** Optional tabs (Feed / Mandates / Record) switch with a 160ms crossfade. Static image acceptable as fallback; no autoplay video.

---

## 07 — AI Intelligence

**Purpose.** Address the sharpest, most current risk — autonomous agents — and position SANEX as the independent brake and record around them.

**Headline.** *Delegate to agents without surrendering control.*

**Description.** *Agentic accounts let an AI model act at machine speed. SANEX enforces each agent's mandate from the outside, so it cannot exceed authority it was never granted — and it records every action for review. Autonomy with accountability, not autonomy on trust.*

**CTA.** `See agent controls` (ghost).

**Animation.** A restrained diagram animates the boundary: an agent issues actions; those inside the mandate pass to `--safe`, one outside is caught at the boundary and marked `--blocked`. Plays once on view; loop only if subtle and pausable.

**Visual Direction.** Diagrammatic per BRAND.md illustration style — precise line work, actor → mandate → outcome. Cool palette, accent and state colors only at decision points. No characters, no mascots.

**Interaction.** Hovering the boundary node reveals the enforced limits in a tooltip. Reduced-motion shows the final diagram state.

---

## 08 — Roadmap

**Purpose.** Signal permanence and sequence — a decade layer, not a launch. Set expectations honestly.

**Headline.** *An accountability standard, built in stages.*

**Description.** Three horizons from OPPORTUNITY.md, stated plainly:
- **Now** — verification and mandate enforcement for Robinhood Chain users and their agents.
- **Next (3–5 yrs)** — the mandate and accountability standard for autonomous financial action, integrated as a baseline expectation.
- **Horizon (5–10 yrs)** — portable trust infrastructure across venues and chains.

**CTA.** None, or `Follow progress` (ghost).

**Animation.** Horizontal timeline; the connecting line draws left-to-right on scroll, nodes fill as reached. Once, scroll-linked.

**Visual Direction.** Three columns on `lg`, stacked on mobile. `micro` uppercase phase labels, `title` phase names. Present phase carries the accent; future phases stay neutral — no over-promising through color.

**Interaction.** Each node expands to a short detail on click. No dates promised beyond the ranges shown.

---

## 09 — FAQ

**Purpose.** Remove objections with direct answers; reinforce independence and the "not another token" stance.

**Headline.** *Questions, answered plainly.*

**Description.** Concise Q&A covering: Is SANEX a token? (Infrastructure first; any token only meters and governs the layer.) Why must it be independent? (Trust is only credible when unowned by the party being trusted.) Does it slow me down? (Only before a dangerous or unauthorized action.) Does it work with agents? (Yes — enforced externally.) What about my privacy and custody? (Non-custodial; records are the user's.) Each answer is short, literal, and free of hype.

**CTA.** `Read the docs` (ghost) for depth.

**Animation.** Accordion rows expand with a 160ms height + opacity ease. Chevron rotates 180°. Reduced-motion: instant.

**Visual Direction.** Single `--container-prose` column, hairline `--border-subtle` between rows, `title` questions, `body` answers in `--text-secondary`. No decorative imagery.

**Interaction.** One row open at a time (optional). Fully keyboard-operable, `aria-expanded` on triggers, focus rings visible.

---

## 10 — CTA

**Purpose.** Convert with a single, confident ask. No manufactured urgency.

**Headline.** *Trust every action on-chain.*

**Description.** One line: *The accountability layer for on-chain finance is opening access. Bring your wallet, your agents, and your standards.*

**CTA.** `Request Access` (primary, single). No competing secondary.

**Animation.** Section fades in; the primary button carries a low-opacity accent glow (≤10%) that steadies on view. No pulsing, no countdowns.

**Visual Direction.** Centered, `--container-app`, wide vertical breathing room (96–128px). Deep `--bg-base` with a single feathered accent glow behind the button. `h1` headline.

**Interaction.** Button hover 120ms to `--accent-hover`, press scale 0.99, focus ring always visible. One decisive action per the button rule.

---

## 11 — Footer

**Purpose.** Close with the institution's signature — quiet, complete, dependable.

**Headline.** Wordmark `SANEX` with the one-line pitch beneath in `--text-tertiary`.

**Description.** Structured link columns — Product, Resources (Docs, Thesis, Roadmap), Company, Legal. A restrained note on network (Robinhood Chain) and the independence stance. Minimal, no newsletter theatrics.

**CTA.** `Request Access` repeated once as a ghost link; `Docs` alongside.

**Animation.** None beyond hover states. The footer is still by design.

**Visual Direction.** `--bg-raised` with a top hairline `--border-subtle`. `caption` links in `--text-tertiary`, brightening to `--text-secondary` on hover. Generous 64px vertical padding. Copyright and network line in `micro`.

**Interaction.** Standard link underline-reveal on hover (120ms). All targets ≥44px on touch. Focus order logical and visible.

---

*Build order top to bottom. When a section tempts embellishment, remove it — the page should feel inevitable, and the only expressive moment belongs to the verification verdict.*
