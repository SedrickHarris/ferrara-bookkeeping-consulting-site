# Claude Code Project Rules

Read `docs/README.md` and all applicable project docs before making project changes. `docs/00-project-source-of-truth.md` is the central record; focused docs govern their respective areas. Latest explicit owner decisions supersede older documentation. Update affected documentation when a new owner decision changes an established rule.

## Project

Build the Ferrara Bookkeeping & Consulting website with Next.js App Router, TypeScript, GitHub, and Cloudflare Pages.

## Hard content boundary

- Do not invent, rewrite, expand, or independently author business website copy.
- Use only text supplied or approved by the owner, verbatim.
- If copy is missing, add a clearly marked TODO/placeholder and continue with structure or styling.
- Do not invent business claims, credentials, client results, prices, testimonials, legal language, or capabilities.
- The owner controls business copy. Never draft or editorially improve website content, headings, metadata, FAQs, card descriptions, or claim-bearing alt text. Request approved copy or leave TODOs.

## Implementation rules

- Keep routes thin; put reusable UI in `components/` and structured page data in `content/` and `data/`.
- Use semantic HTML, accessible form labels, keyboard focus styles, responsive layouts, and descriptive image alt text supplied with assets.
- Keep design tokens in `styles/tokens.css`; requested brand colors are in `data/site.ts`.
- Avoid adding dependencies without explicit project approval.
- Use stable canonical routes and avoid publishing matrix routes with placeholder copy.
- Follow the hub-and-spoke architecture; hub spokes render as cards with a 4:3 image, title, brief description, and link or button.
- Every published page must have unique, owner-approved, page-specific meta title and meta description. Never use universal metadata as final copy.
- Follow the page lifecycle and launch gate in `docs/01-content-governance.md` and `docs/11-qa-launch-indexation-checklist.md`; registry presence does not authorize publication/indexation.
- Implement structured data only as specified in `docs/09-seo-schema-technical-requirements.md`, matching visible approved content.
- Keep credentials, forms, scheduling, analytics, and deployment configuration in environment variables or approved config; never commit secrets.

## Verified facts

- Experience: 20+ years.
- Hours: Monday–Friday, 8 a.m.–5 p.m. Pacific.
- Languages: English and Spanish.
- Consultation: free, 30 minutes.
- Phone: (725) 255-2535.
- Service: Las Vegas local and remote nationwide.

Do not change these facts without owner direction. Confirm any other claims before publication.

## Documentation index

See `docs/README.md` for the project documentation map, source-of-truth precedence, registries, approvals, SEO, schema, design, conversion, and launch requirements.
