# SANEX — Design System

**On-Chain Accountability Infrastructure**

*Reference standard for interface and product surfaces. Restraint is the default. Every value below exists to communicate, never to decorate. The intended feel is Apple's spatial calm, OpenAI's neutral clarity, Stripe's precision, Linear's density, and Vercel's contrast discipline.*

---

## Design Principles

- **Neutral by default, signal by exception.** The interface is quiet; color and motion appear only at the moment of consequence.
- **Structure is visible.** Alignment is strict, spacing is systematic, nothing is arbitrary.
- **Legible under pressure.** The system is judged at a signing prompt, not a marketing page.
- **Depth is subtle.** Elevation and glass suggest hierarchy without spectacle.

---

## Color Palette

A deep neutral foundation with a single disciplined accent. Dark surface is primary; a light theme mirrors it.

### Neutrals (core)

| Token | Hex | Use |
|---|---|---|
| `--bg-base` | `#0A0B0D` | App background (dark) |
| `--bg-raised` | `#111317` | Panels, sheets |
| `--surface-1` | `#16181D` | Cards |
| `--surface-2` | `#1D2026` | Nested surfaces, inputs |
| `--border-subtle` | `#23262E` | Hairlines, dividers |
| `--border-strong` | `#2E323C` | Focus containers, active edges |
| `--text-primary` | `#F5F6F7` | Headlines, primary text |
| `--text-secondary` | `#A0A5AE` | Body, labels |
| `--text-tertiary` | `#6B7180` | Meta, captions, disabled |

### Accent (signal only)

| Token | Hex | Use |
|---|---|---|
| `--accent` | `#3B6EF6` | Verification moment, primary action |
| `--accent-hover` | `#2F5FE0` | Hover/pressed |
| `--accent-quiet` | `rgba(59,110,246,0.12)` | Accent tints, selected rows |

### State (unambiguous, non-decorative)

| Token | Hex | Meaning |
|---|---|---|
| `--safe` | `#2FB574` | Safe / authorized |
| `--caution` | `#E0A32E` | Caution / review required |
| `--blocked` | `#E5484D` | Blocked / unauthorized |
| each state | `+ ...-quiet` at 12% alpha | Background tints for the above |

### Light theme (mirror)

`--bg-base #FBFBFC` · `--surface-1 #FFFFFF` · `--border-subtle #ECEDEF` · `--text-primary #0A0B0D` · `--text-secondary #4A4F58`. Accent and state hues hold; tints shift to 8–10% alpha.

**Rule:** never place two competing accents on one screen. State colors override the accent when both apply — consequence outranks action.

---

## Typography

### Families

- **Interface / product:** `Inter` (fallback: `-apple-system, "SF Pro Text", Segoe UI, sans-serif`) — high legibility at small sizes.
- **Headline / standard-setting:** a tighter grotesque; `Inter Display` or `SF Pro Display` at large sizes, tracking reduced.
- **Numeric / hashes / addresses:** `"SF Mono", "JetBrains Mono", ui-monospace` — tabular figures on for all numbers.

### Scale (1.200 minor-third, base 16px)

| Token | Size / Line | Weight | Tracking | Use |
|---|---|---|---|---|
| `display` | 48 / 52 | 600 | -0.02em | Hero |
| `h1` | 36 / 42 | 600 | -0.02em | Page title |
| `h2` | 28 / 34 | 600 | -0.015em | Section |
| `h3` | 22 / 28 | 600 | -0.01em | Card title |
| `title` | 18 / 26 | 550 | -0.005em | Subsection |
| `body` | 16 / 26 | 400 | 0 | Default |
| `body-sm` | 14 / 22 | 400 | 0 | Secondary |
| `caption` | 13 / 18 | 450 | 0.01em | Meta |
| `micro` | 11 / 14 | 500 | 0.04em, uppercase | Labels, badges |
| `mono` | 13 / 20 | 450 | 0 | Addresses, values |

**Rules:** headlines never exceed weight 600. Body never below 400. Measure capped at 68ch. No italics for emphasis — use weight or color.

---

## Spacing

4px base unit. Use only tokens; no arbitrary values.

`2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`

- **Intra-component:** 8–16
- **Component padding:** 16–24
- **Between components:** 24–32
- **Section rhythm:** 64–96
- **Page top/bottom:** 96–128

Vertical rhythm is a multiple of 4 everywhere. Generous negative space is a feature, not waste.

---

## Grid

- **Columns:** 12
- **Gutter:** 24px (desktop), 16px (tablet), 16px (mobile)
- **Margins:** fluid, min 24px
- **Baseline:** 4px
- Content aligns to the grid without exception; asymmetry is intentional, never accidental.

---

## Container Width

| Token | Max width | Use |
|---|---|---|
| `--container-prose` | 680px | Reading, docs |
| `--container-app` | 1120px | Product surfaces |
| `--container-wide` | 1280px | Marketing, dashboards |
| `--container-full` | 1440px | Hard ceiling; center beyond |

Content never runs edge-to-edge on large screens.

---

## Cards

- **Radius:** 12px (default), 16px (feature)
- **Background:** `--surface-1`
- **Border:** 1px `--border-subtle`
- **Padding:** 24px
- **Elevation:** `--shadow-1` at rest; borders do the work, not heavy shadow
- **Hover (interactive only):** border → `--border-strong`, translateY(-1px), 160ms ease
- Nested content uses `--surface-2`. No card-in-card borders stacking; step surface tone instead.

---

## Buttons

Height 40px default (32 small, 48 large). Radius 10px. Weight 550. No uppercase except `micro` labels.

| Variant | Fill | Text | Border | Notes |
|---|---|---|---|---|
| Primary | `--accent` | `#FFFFFF` | none | One per view; reserved for the decisive action |
| Secondary | `--surface-2` | `--text-primary` | 1px `--border-strong` | Default choice |
| Ghost | transparent | `--text-secondary` | none | Tertiary |
| Destructive | `--blocked` | `#FFFFFF` | none | Only for irreversible/block actions |

- **Hover:** background shifts one step (`--accent-hover`), 120ms.
- **Pressed:** scale 0.99, no bounce.
- **Focus:** 2px ring `--accent` at 60% alpha, 2px offset.
- **Disabled:** `--text-tertiary` on `--surface-2`, no shadow, cursor not-allowed.

---

## Inputs

- **Height:** 40px · **Radius:** 10px · **Padding:** 12px horizontal
- **Background:** `--surface-2` · **Border:** 1px `--border-subtle`
- **Text:** `body`, `--text-primary`; placeholder `--text-tertiary`
- **Focus:** border `--accent`, ring 2px `--accent-quiet`, 120ms
- **Error:** border `--blocked`, helper text in `--blocked`, single concise message
- **Label:** `caption`, `--text-secondary`, above field, 8px gap
- Monospace inputs (addresses, amounts) use tabular figures and truncate with a visible copy affordance.

---

## Badges

- **Height:** 22px · **Radius:** 6px (or full pill for status) · **Text:** `micro`
- **Padding:** 4px / 8px
- **Neutral:** `--surface-2` bg, `--text-secondary`
- **Status:** state color at 12% alpha bg, state color text — `Safe` / `Review` / `Blocked`
- A leading 6px dot in the state color precedes status text for accessibility beyond color.

---

## Glassmorphism

Used sparingly, only on floating layers over content — command menus, verification sheets, toasts. Never on static page structure.

- **Background:** `rgba(16,18,22,0.72)`
- **Backdrop:** `blur(20px) saturate(120%)`
- **Border:** 1px `rgba(255,255,255,0.06)`
- **Shadow:** `--shadow-3`
- Always provide an opaque fallback (`--bg-raised`) where backdrop-filter is unsupported. Contrast of text over glass must still meet AA.

---

## Gradient Rules

Gradients signal, they do not decorate.

- **Permitted:** the verification/hero accent — a single-hue directional gradient `linear-gradient(180deg, --accent → --accent-hover)`; and subtle neutral surface gradients (≤4% luminance shift) for depth on large panels.
- **Forbidden:** multi-hue rainbow gradients, animated hue cycling, gradients on body text, gradients as background filler.
- Radial "glow" behind the mark or a hero verdict is allowed at very low opacity (≤10%) using `--accent`, feathered to transparent.

---

## Shadow System

Low, tight, cool — depth by suggestion. Never soft billowing drop shadows.

| Token | Value |
|---|---|
| `--shadow-1` | `0 1px 2px rgba(0,0,0,0.24)` |
| `--shadow-2` | `0 4px 12px rgba(0,0,0,0.28)` |
| `--shadow-3` | `0 12px 32px rgba(0,0,0,0.36)` |
| `--shadow-focus` | `0 0 0 2px rgba(59,110,246,0.6)` |

Elevation order: page < card (`1`) < popover (`2`) < modal/glass (`3`). One shadow per element; never stack.

---

## Animation Rules

Motion confirms cause and effect. It is quick, eased, and never ornamental.

- **Durations:** micro 120ms · standard 160–200ms · overlay 240ms · never above 320ms.
- **Easing:** `cubic-bezier(0.2, 0, 0, 1)` for enter/standard; `cubic-bezier(0.4, 0, 1, 1)` for exit.
- **Transforms only** for hover/press (translate, opacity, scale); avoid animating layout.
- **Verification moment** may use one deliberate reveal (fade + 4px rise) to draw the eye to the verdict — the single place motion is allowed to be expressive.
- **No** bounce, spring overshoot, parallax, auto-playing loops, or attention-seeking motion.
- Respect `prefers-reduced-motion`: reduce to opacity-only or none.

---

## Responsive Rules

| Breakpoint | Range | Behavior |
|---|---|---|
| `xs` | <640 | Single column, 16px margins, stacked nav |
| `sm` | 640–767 | Single column, wider padding |
| `md` | 768–1023 | 8-col logic, sidebars collapse |
| `lg` | 1024–1279 | 12-col, `--container-app` |
| `xl` | ≥1280 | 12-col, `--container-wide`, capped at `--container-full` |

- Mobile-first; scale up, never down.
- Touch targets ≥44px on `xs`/`sm`.
- Type scale steps down one level below `md` for `display`/`h1`.
- Verification and signing surfaces are designed at mobile width first — they must be flawless at the smallest size.

---

## Accessibility Rules

- **Contrast:** text meets WCAG AA (≥4.5:1 body, ≥3:1 large). Primary text on `--bg-base` and state colors on their tints are all AA-verified.
- **Never color alone:** every state pairs color with an icon, dot, or label — critical for safe/caution/blocked.
- **Focus is always visible:** 2px accent ring, never removed; logical tab order.
- **Motion:** honor `prefers-reduced-motion`; no essential meaning conveyed only through animation.
- **Targets:** ≥44×44px interactive minimum on touch.
- **Semantics:** proper roles/labels; verification verdicts announced to assistive tech; addresses and amounts readable, copyable, and screen-reader-friendly.
- **Language:** plain, literal, non-expert-legible — accessibility of *meaning*, not only of markup.

---

*Everything here serves one goal: an interface that feels inevitable and trustworthy at the moment a decision is made. When in doubt, remove.*
