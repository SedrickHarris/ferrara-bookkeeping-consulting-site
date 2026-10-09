# Project Structure

```
app/            Routes (App Router). Placeholders only; no copy.
  industries/[audience]/            6 audience group pages
  industries/[audience]/[service]/  Matrix pairings; routed only when approved/published
  services/[service]/               8 service pages
components/     forms, layout, sections, seo, ui (PlaceholderPage)
content/        Owner-approved copy only: core, services, audiences, audience-services, legal
data/           Registries: site, services, audiences (44 + 6 groups), audienceServicePages (generated, 44 × 8 = 352)
lib/            seo, utils
public/         fonts, icons, images
scripts/        verify-registry.ts
styles/         tokens.css (brand palette, typeface)
tests/
docs/           Project brief / build outline
```

## Routing notes

- `/industries/{group}/` - six group pages from `audienceGroups`.
- `/industries/{audience}/{service}/` - 352 planned pairings generated from the registries. All are `planned`, so none are built yet.
- Trailing slashes are enabled to match the outline's URLs.
- Matrix content path convention: `content/audience-services/{audience}/{service}.md`.
