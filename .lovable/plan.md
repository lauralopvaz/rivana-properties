## Implementation Plan: "Ready Now" / "Entregas Inmediatas"

### 1. Data layer
Create `src/data/immediate-delivery.ts` with the 4 La Amada units (305L, 205M, 2BR, PH 07M) typed for bilingual use:
- id, slug, unitName, subtitle (ES/EN), location, area, beds/baths/parking
- price MXN, furnished status, moveInReady label (ES/EN)
- features list (ES/EN), badge label, detail URLs, image
- `moveInReady: boolean` flag for filtering (305L = false, others = true)

### 2. Home page section ("Ready Now" / "Listo Ahora")
Edit `src/pages/Index.tsx`. Insert a new `<section>` immediately after Featured Properties:
- Eyebrow + H2 + subtitle (bilingual)
- 4-column responsive grid (1 / 2 / 4 cols) of compact cards
- Each card: image, "✅ Listo Ahora" gold pill badge, unit name + subtitle, location, m² · beds · baths, MXN price, "Ver Detalles" link → unit page, "Agendar Tour" → WhatsApp with prefilled message
- CTA "Explorar todas las propiedades listas" → `/entregas-inmediatas`
- Reuse existing tokens (`bg-background`, `text-secondary`, `text-primary`, Cormorant + Jost), `rounded-sm`, gold accents — consistent with the rest of Home

### 3. Reusable card
New `src/components/ImmediateDeliveryCard.tsx` so Home, Listings filter results, and the dedicated page all render identically.

### 4. Listings filter rename
Edit `src/pages/Listings.tsx`:
- Rename the "Estatus" filter to "Disponibilidad" (ES) / "Availability" (EN)
- Options: Todos / Entrega Inmediata / Preventas (ES); All / Immediate Delivery / Pre-sale (EN)
- When "Entrega Inmediata" is selected, restrict results to properties flagged `moveInReady` (the 3 La Amada ready units injected into the listings data source) and render the ✅ badge on those cards
- Keep all other filters untouched

### 5. Dedicated page `/entregas-inmediatas` (ES) and `/en/immediate-delivery` (EN)
New `src/pages/ImmediateDelivery.tsx` with bilingual copy driven by `useLanguage()`. Sections in order:

1. **Hero** — La Amada aerial, headline, subhead, primary CTA "Explorar Propiedades" → scroll to grid
2. **Why Choose Ready Now** — 4 benefit cards (No Delays, Immediate Income, All Included, Zero Stress) with icons from `src/components/icons.tsx`
3. **Featured Grid** — 4 units via `ImmediateDeliveryCard`
4. **Ready Now vs Pre-Sale** — comparison table (6 rows: timeline, furnishing, income, customization, rental, pricing)
5. **Investment Benefits** — 3 cards (Rental Income, Tax Advantage, Flexibility)
6. **What's Included** — 2-column list (Furnished checklist / Unfurnished checklist)
7. **Process Timeline** — 4 steps (Consultation → Tour → Offer → Close 30–45 days)
8. **FAQ** — Accordion with the 5 Q&A from the brief
9. **Final CTA** — Schedule private showing (opens existing `SchedulingModal`) + WhatsApp +52 998 845 7224

`SEOHead` with bilingual title/description, self-canonical + hreflang via the existing pattern, `ItemList` JSON-LD of the 4 units.

### 6. Routing
Edit `src/App.tsx`: lazy-load `ImmediateDelivery` and add:
- `/entregas-inmediatas`
- `/en/immediate-delivery`

### 7. Sitemaps
Add the two URLs to `public/sitemap.xml` and `public/en/sitemap-en.xml` (priority 0.9, with hreflang alternates).

### Files
- new `src/data/immediate-delivery.ts`
- new `src/components/ImmediateDeliveryCard.tsx`
- new `src/pages/ImmediateDelivery.tsx`
- edit `src/pages/Index.tsx`
- edit `src/pages/Listings.tsx`
- edit `src/App.tsx`
- edit `public/sitemap.xml`, `public/en/sitemap-en.xml`

### Out of scope (confirm before adding)
- Brochure download, financing-info form, and "compare units" tool on the dedicated page — listed in the brief's CTA block but not yet present in the app; will render the buttons only if you confirm targets, otherwise omit.
- No changes to the existing La Amada landing or unit detail pages.
