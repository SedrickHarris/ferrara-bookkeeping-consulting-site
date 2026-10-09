# CLAUDE.md - Ferrara Bookkeeping & Consulting

Stack: Next.js (App Router) + TypeScript, VS Code, Claude Code, GitHub, Cloudflare Pages.
Project brief: `docs/ferrara-bookkeeping-site-build-outline.md`.

## Hard content rule

- Do not write, rewrite, expand, or invent website marketing copy.
- Use only owner-approved text. For missing content, leave clear `TODO` placeholders.
- Do not invent credentials, results, prices, testimonials, legal language, or business capabilities.
- Do not state or imply that Ferrara prepares taxes.
- No em dashes (the long dash character) in any customer-facing text: page content, metadata, alt text, structured data, form labels, error messages. Hard rule. Use commas, periods, colons, or parentheses instead.

## Confirmed business facts

- Experience: 20+ years
- Hours: Monday–Friday, 8 a.m.–5 p.m. Pacific
- Languages: English and Spanish
- Free 30-minute consultation
- Phone: (725) 255-2535
- Las Vegas local service and remote service nationwide

Anything else is unconfirmed until the owner approves it.

## Architecture rules

- Copy lives in `content/`. Route components (`app/`) and registry data (`data/`) hold no marketing copy.
- `data/` registries are the source of truth for services, audiences, and audience × service pairings.
- A registry entry is not approval to publish. All pairings start as `planned`; only `approved`/`published` entries are routed (see `releasablePairings`).
- Keep audience and service slugs stable, lowercase, hyphenated, and unique.
- Run `npm run verify:registry` after editing any registry (expects 44 audiences, 8 services, 352 pairings).

## Accessibility basics

- Semantic HTML, one `h1` per page, logical heading order.
- Keyboard-operable controls with visible focus; labeled form fields and clear error states.
- Descriptive alt text for meaningful images; sufficient color contrast.

## Security and dependencies

- No secrets in source control. Use `.env.local` (ignored); document variable names only in `.env.example`.
- Do not add dependencies without explicit owner approval. Keep to the stated stack.
- Do not deploy or publish without explicit instruction.
