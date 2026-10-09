# Ferrara Bookkeeping & Consulting — Website Build Outline

## Project brief

- **Business:** Ferrara Bookkeeping & Consulting, Las Vegas, Nevada
- **Primary offer:** QuickBooks Online bookkeeping, cleanup, training, and consulting
- **Delivery:** Local support in Las Vegas and remote service across the United States
- **Confirmed experience:** 20+ years
- **Confirmed hours:** Monday–Friday, 8:00 a.m.–5:00 p.m. Pacific
- **Languages:** English and Spanish
- **Consultation:** Free 30-minute consultation
- **Phone:** (725) 255-2535
- **Stack:** Next.js, Claude Code, VS Code, GitHub, Cloudflare Pages
- **Typeface direction:** Times New Roman
- **Palette:** `#0d1b2e`, `#fffff0`, `#fff8e7`, `#1a3050`, `#d4a373`, `#1a1a2e`

The source site describes 20+ years of experience and does not present tax preparation as a core service. Position bookkeeping as keeping client records organized for their CPA. Confirm any additional business facts before publishing them.

## Recommended site architecture

Build the requested core pages, eight service pages, focused audience pages, and a complete audience × service landing page matrix. Keep the full matrix out of the primary navigation; expose it through contextual links and hubs. Each matrix page needs distinct audience-specific information and a useful search intent. Do not publish thin permutations simply to reach a page count.

### Core pages

| Page | Suggested URL | Purpose |
|---|---|---|
| Home | `/` | Explain the offer, establish fit, route visitors to services/audiences, and convert to consultations |
| About | `/about/` | Ina's background, credentials, approach, and direct working relationship |
| Services | `/services/` | Overview and links to each service page |
| Industries | `/industries/` | Audience overview and links to audience pages |
| Service areas | `/service-areas/` | Las Vegas Valley and nationwide remote service explanation |
| Contact | `/contact/` | Contact details, consultation form, hours, language availability |
| Book consultation | `/book/` | Scheduling destination, if the booking workflow is retained |
| FAQ | `/faqs/` | Consolidated answers, with selected FAQs also embedded on relevant pages |
| Privacy policy | `/privacy-policy/` | Legal page; content to be reviewed and approved by the business/counsel |
| Terms of service | `/terms/` | Legal page; content to be reviewed and approved by the business/counsel |

### Service pages

| Service | Suggested URL |
|---|---|
| Monthly bookkeeping | `/services/monthly-bookkeeping/` |
| Bookkeeping cleanup and catch-up | `/services/bookkeeping-cleanup-catch-up/` |
| Account reconciliation | `/services/account-reconciliation/` |
| Payroll journal entries | `/services/payroll-journal-entries/` |
| QuickBooks Online setup | `/services/quickbooks-online-setup/` |
| QuickBooks training | `/services/quickbooks-training/` |
| 1099 filing | `/services/1099-filing/` |
| Business consulting | `/services/bookkeeping-business-consulting/` |

Keep service names and scope aligned with the source site. In particular, clarify that payroll processing is handled by the client or payroll provider; Ferrara posts payroll reports into QuickBooks. Do not imply tax preparation.

### Audience pages

The source site’s audience list can be grouped into focused landing pages. The proposed set below preserves the full coverage while avoiding dozens of near-duplicate top-level pages.

| Audience page | Suggested URL | Included audience types |
|---|---|---|
| Home services and trades | `/industries/home-services-trades/` | HVAC, plumbing, electricians, painters, flooring, drywall, handyman, garage doors, window cleaning, pool service, landscaping, pest control, solar, water treatment |
| Construction and skilled trades | `/industries/construction-skilled-trades/` | General contractors, roofing, concrete, tile and stone, remodeling, carpentry, welding and fabrication |
| Transportation and logistics | `/industries/transportation-logistics/` | Owner-operators, small trucking, hotshot trucking, courier/delivery, moving companies |
| Real estate and property services | `/industries/real-estate-property-services/` | Investors, rental owners, property managers, short-term rentals, home inspectors |
| Professional and personal services | `/industries/professional-personal-services/` | Wellness, consultants/coaches, tech startups, cleaning, mobile detailing, security, notaries/signing agents |
| Specialty service businesses | `/industries/specialty-service-businesses/` | Locksmiths, appliance repair, irrigation, fencing, A/V installation, small equipment repair |

These pages should describe the audience and its bookkeeping considerations with concrete, qualified examples. Examples from the source include job costing for contractors, property-level tracking for real estate, IOLTA/client trust account recordkeeping for law firms, and fund accounting for nonprofits. Validate operational and compliance details before presenting them as capabilities.

### Full audience × service matrix

Generate one page for every pairing of the 48 audience types listed in the brief and the eight services: **384 audience-service pages**. This is a URL/content inventory, not a mandate to publish all 384 at launch. Use an explicit registry as the source of truth and add a page only when it answers a meaningful audience-specific question.

**URL pattern:**

`/industries/{audience-slug}/{service-slug}/`

Examples:

- `/industries/hvac-companies/monthly-bookkeeping/`
- `/industries/plumbers/bookkeeping-cleanup-catch-up/`
- `/industries/owner-operators/quickbooks-online-setup/`
- `/industries/short-term-rental-hosts/account-reconciliation/`

Keep every audience slug stable, human-readable, and unique. Use one canonical URL per page. Ensure matrix pages link to the corresponding audience page, service page, and contact/booking destination. Avoid listing all matrix URLs in the XML sitemap until their content is ready and indexable.

## Page content templates

### Home

1. Hero: bookkeeping relief, QuickBooks Online focus, audience fit, Las Vegas + remote reach, consultation CTA.
2. Trust proof: Ina's confirmed 20+ years, credentials only as verified, bilingual support.
3. Service overview cards linking to all eight service pages.
4. Owner pain points: overdue books, unclear cash position, reconciliation gaps, tax-season preparation stress.
5. Audience pathways linking to six audience group pages.
6. How it works: consultation → records/review → agreed scope and onboarding → ongoing bookkeeping/clarity.
7. Why work directly with Ina: accurate, dependable, confidential service, avoiding unsupported guarantees.
8. Local and remote service area explanation.
9. FAQs with concise answers and links to deeper service pages.
10. Contact/consultation form and final CTA.

### About

1. Ina introduction and verified background/credentials.
2. Approach and communication expectations.
3. What bookkeeping can take off an owner's plate, without claiming tax or legal advice.
4. Relevant client types and examples.
5. Las Vegas and nationwide remote service.
6. About-specific FAQs.
7. Consultation CTA.

### Service page

1. Service-specific hero and primary CTA.
2. Who needs this service and common triggers.
3. What the service includes and excludes.
4. Records/access needed to begin.
5. Process, deliverables, cadence, and client responsibilities.
6. Relevant QuickBooks Online workflow details.
7. Related services and audience links.
8. Service-specific FAQs.
9. Consultation CTA.

### Audience page

1. Audience-specific hero and CTA.
2. Typical bookkeeping challenges for that audience.
3. Relevant services and workflows.
4. Industry-specific tracking examples, clearly scoped and verified.
5. How engagement works and what records are needed.
6. Audience-specific FAQs.
7. Links to related audiences and relevant service pages.
8. Consultation CTA.

### Audience + service page

1. Specific audience/service H1 and short answer to the intended query.
2. Why that audience may need this service.
3. Audience-specific scope and examples (not generic swapped keywords).
4. Workflow, records required, and client responsibilities.
5. Boundaries and exclusions relevant to that service.
6. FAQs for the pairing.
7. Links to parent audience, service page, related pairings, and consultation.

## Audience inventory for matrix registry

1. HVAC and air conditioning/heating companies
2. Plumbing businesses
3. Electricians
4. Residential and commercial painters
5. Flooring installers
6. Drywall contractors
7. Handyman services
8. Garage door repair companies
9. Window cleaning companies
10. Pool service and maintenance companies
11. Landscaping and lawn care businesses
12. Pest control companies
13. Solar installation companies
14. Water treatment and softener companies
15. General contractors
16. Roofing companies
17. Concrete contractors
18. Tile and stone installers
19. Home remodeling companies
20. Carpentry and woodworking businesses
21. Welding and fabrication shops
22. Truck drivers / owner-operators
23. Small trucking companies
24. Hotshot trucking companies
25. Courier and delivery services
26. Moving companies
27. Real estate investors
28. Rental property owners
29. Property management companies
30. Short-term rental hosts
31. Home inspection companies
32. Wellness providers
33. Consultants and coaches
34. Small tech startups
35. Residential and commercial cleaning companies
36. Mobile car detailers
37. Security guard companies
38. Notaries and mobile signing agents
39. Locksmiths
40. Appliance repair technicians
41. Irrigation specialists
42. Fence installers
43. Audio/visual installers
44. Small equipment repair businesses

**Count note:** The supplied bullet list contains 44 distinct audience types (not 48). The full matrix is therefore **44 × 8 = 352 pairings**. Treat the count as 352 unless additional audience types are added.

## Recommended navigation

- Home
- Services (dropdown or hub)
- Industries (dropdown or hub)
- About
- Service Areas
- Contact
- **Book a Free Consultation** (visually prominent button)

Keep legal pages in the footer. The FAQ hub can remain in footer/contextual links unless analytics support a primary-nav placement.

## SEO, structured data, and technical requirements

- Unique title and meta description for every published URL; one descriptive H1 per page.
- Canonicals, Open Graph/Twitter metadata, descriptive image alt text, breadcrumbs on nested pages.
- XML sitemap includes only canonical, useful, indexable pages; robots rules and redirects checked before launch.
- Structured data where factually supported: `ProfessionalService`/`AccountingService` or suitable `LocalBusiness` subtype, `Person` for Ina, `Service`, `BreadcrumbList`, and `FAQPage` only when visible FAQs qualify. Avoid unsupported review/rating markup.
- Clearly distinguish Las Vegas local service from nationwide remote service; do not imply a physical office beyond verified business details.
- Fast, accessible, responsive pages; keyboard-operable forms, labels, error states, and visible focus.
- Track consultation form submissions and booking clicks with privacy-conscious analytics.
- Cloudflare Pages deployment should use a supported Next.js adapter/build configuration. Confirm the chosen Cloudflare Next.js deployment path and runtime constraints before implementation; do not assume a static export if the site requires dynamic form or booking behavior.
- Forms and booking must connect to confirmed destinations before launch. Do not publish placeholder endpoints.

## Content and fact controls

- Use **20+ years** consistently; remove conflicting 28+ years and 20 years variants.
- Use **Monday–Friday, 8 a.m.–5 p.m. Pacific** consistently.
- Preserve the source site's stated free 30-minute consultation unless the business changes it.
- Confirm credentials and exact credential wording before publication.
- Do not state that Ferrara prepares taxes. Explain that organized bookkeeping can support the client's CPA/tax preparer.
- For 1099 filing, confirm coverage, deadlines, required client information, and exact filing responsibilities.
- For legal, medical, nonprofit, payroll, trust-account, and compliance-related topics, describe bookkeeping workflow carefully and avoid implying legal, tax, payroll-processing, or regulatory advice.
- Validate the privacy policy and terms; the source review confirmed the pages exist but did not establish their content.
- Keep contact details, hours, language availability, local coverage, and nationwide eligibility consistent across templates and structured data.

## Implementation sequence

1. Confirm business facts, credentials, lead routing, booking URL, form destination, and legal copy.
2. Build design tokens and shared header, footer, CTA, FAQ, card, form, and breadcrumb components.
3. Implement core pages and shared content registries.
4. Implement the eight service pages from a service data model.
5. Implement six audience pages from an audience data model.
6. Implement matrix routing from an explicit 44-audience × 8-service registry; author useful content and release in quality-controlled batches.
7. Add metadata, schema, sitemap/robots behavior, and analytics events.
8. Verify responsive rendering, accessibility, links, forms, booking, redirects, and Cloudflare deployment preview.
9. Publish only the reviewed page set; expand indexation as matrix content is approved.

## Claude Code content boundary

Use Claude Code for implementation, components, routing, data structures, styling, metadata wiring, and layout. Keep business claims and final marketing copy owner-approved; do not have Claude Code invent or independently author website content. Store approved text in explicit content files/registries and implement it verbatim unless the owner requests editorial changes.
