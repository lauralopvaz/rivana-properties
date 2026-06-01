## Plan: Edificio Salvia · Zona Hotelera

Goal: Add the Salvia Building (3 turn-key oceanfront penthouses in Chac Mool / Forum Beach, Hotel Zone) as a new "Immediate Delivery / Turn-Key Operating Business" pillar of the site, fully bilingual ES/EN, consistent with the existing editorial luxury system (Cormorant + Jost, gold #CFAE60 / black #1C1C1C, border-radius 0).

### 1. Data layer

Create `src/data/salvia-units.ts` — the canonical bilingual source for the 3 units. Each unit includes: id, slug, code, asking price (USD + MXN derived), area (sq ft + m²), layout, capacity, beds/baths, views, balcony type, hurricane shutters flag, Airbnb rating / reviews / track-record years, average annual revenue (USD), 2025 net income, 2025 expenses, average nightly rate, average occupancy, peak occupancy, monthly maintenance, beach tax, property tax, gross ROI, net ROI, full 5-year (or 3-year) performance history table, amenities/upgrades lists (ES/EN), images, WhatsApp prefilled message (ES/EN), SEO meta (ES/EN).

Also export:
- `salviaBuilding` — bilingual building metadata (description, value props, amenities, location, distances, transport, staff/services/facilities, comparison table headers).
- `salviaUnits` — array of 3 units (3B, 2A, 604AB).
- Helpers: `salviaUnitPath(slug, isEnglish)`, `salviaLandingPath(isEnglish)`, `formatUSD(n)`, `whatsappUrl(msg)`.

### 2. Images

Use existing `src/assets/la-amada.jpg` as a placeholder hero only if no Salvia photo is available — but the prompt lists 9 unit images (e.g. `salvia-3b-bedroom.jpg`). Since no binaries were attached, generate three editorial placeholder hero images per unit + one building hero via `imagegen` (ocean penthouse interiors, wrap-around balcony, building exterior with pool), upload them via `lovable-assets`, and reference the `.asset.json` URLs. When the user later sends real photos we'll swap the asset JSON.

### 3. Reusable card

New `src/components/SalviaUnitCard.tsx` — editorial card showing image, gold "Turn-Key · Immediate Delivery" pill, unit code + name, beds · baths · sq ft, rating ★ + reviews, asking price USD, ROI badge (gold for highest), "Ver Detalles" → unit page + "WhatsApp" → prefilled message. Used on Home, Immediate Delivery page, and Listings.

### 4. Dedicated landing page

New `src/pages/SalviaBuilding.tsx` mounted at `/zona-hotelera/edificio-salvia` (ES) and `/en/hotel-zone/salvia-building` (EN). Sections:

1. Hero — full-width building image, eyebrow "Edificio Salvia · Zona Hotelera", H1 bilingual headline, sub "Three oceanfront penthouses · verified returns up to 11.45%", primary CTA "Explore Penthouses" (scroll), WhatsApp secondary.
2. Operating-business explainer — short paragraph about the authorized STR permit (1 of only 2–3 in the Hotel Zone) and the "buy a business, not just a condo" thesis.
3. "Why invest in Salvia" — 5 value-prop cards (Unique Permit, Turn-Key Business, Proven ROI up to 11.45%, 5-star Location, Hotel Services Included).
4. Stats strip — $60K+ avg annual income · 54% avg occupancy · 4.80★ avg rating · 30+ restaurants 1 min · 24h security · 11.45% highest gross ROI.
5. The 3 penthouses — `SalviaUnitCard` grid (3 cols desktop, 1 mobile), 604AB highlighted with "Guest Favorite" gold ribbon.
6. Comparison table — full 18-row spec/financial table, horizontally scrollable on mobile, sticky first column.
7. Performance history — small per-unit table (year / gross revenue / nights / occupancy) inside a tabbed component.
8. Location & amenities — two-column block: left = walking-distance highlights (1 min / 5 min / transport); right = building staff / services / facilities lists.
9. Financial transparency note — short paragraph + "All figures verifiable on Airbnb" reassurance (no ROI legal disclaimer per project constraint).
10. Final CTA — "Schedule a private showing" opens existing global `SchedulingModal` + WhatsApp button.

`SEOHead` with bilingual title/description, self-canonical + hreflang, ItemList JSON-LD wrapping 3 `RealEstateListing` items (USD price, address, bedrooms, bathrooms, floor size, aggregateRating from Airbnb stats, `datePosted` in YYYY-MM-DD).

### 5. Individual unit pages

New `src/pages/SalviaUnit.tsx` (one component, slug-driven) mounted at:
- `/zona-hotelera/edificio-salvia/penthouse-3b`
- `/zona-hotelera/edificio-salvia/penthouse-2a`
- `/zona-hotelera/edificio-salvia/penthouse-604ab`
- `/en/hotel-zone/salvia-building/penthouse-3b`
- `/en/hotel-zone/salvia-building/penthouse-2a`
- `/en/hotel-zone/salvia-building/penthouse-604ab`

Sections: hero image + price/ROI/rating chips · spec grid · amenities/upgrades · 5-year performance table · financial breakdown card (avg revenue, 2025 net, expenses, nightly rate, occupancy, maintenance, taxes) · building info recap · location · WhatsApp CTA. SEO uses the per-unit meta from the brief plus `RealEstateListing` JSON-LD.

### 6. Home page integration

Edit `src/pages/Index.tsx` — add an "Edificio Salvia · Zona Hotelera" section directly below the existing Featured Properties block: eyebrow + H2, 1-sentence intro, 3-column `SalviaUnitCard` grid, CTA "Ver todas las unidades Salvia" → Salvia landing. Mirrors the look of the existing Immediate Delivery teaser.

### 7. Listings filter

Edit `src/pages/Listings.tsx` — extend the existing "Disponibilidad / Availability" filter so "Entrega Inmediata / Immediate Delivery" returns both the La Amada ready units AND the 3 Salvia penthouses. Add Salvia entries to whatever feeds the listings grid (likely via a thin adapter that maps `SalviaUnit` → the existing listing card shape) so cards render in the same grid; gold "Turn-Key" badge on each.

### 8. Routing

Edit `src/App.tsx` — lazy-load `SalviaBuilding` and `SalviaUnit`, add the 8 routes (2 landing + 6 unit).

### 9. Sitemaps

Add the 8 URLs to `public/sitemap.xml` and `public/en/sitemap-en.xml` with hreflang alternates (priority 0.9 for landing, 0.8 for units).

### Technical notes

- Bilingual via existing `useLanguage()` + `LanguageContext` pattern.
- Self-canonical with hreflang on every new page, per the SEO memory rules.
- Strict H1 → H2 → H3 hierarchy, WCAG-AA contrast, all images get descriptive `alt` + `loading="lazy"`.
- USD prices kept clean integers for JSON-LD; `datePosted` formatted YYYY-MM-DD.
- No ROI legal disclaimers anywhere (project constraint).
- WhatsApp uses existing `+52 998 845 7224` with per-unit prefilled messages.
- No backend/Supabase changes needed — data lives in `src/data/salvia-units.ts` (matches how `immediate-delivery.ts` and `properties.ts` already work).

### Files

New:
- `src/data/salvia-units.ts`
- `src/components/SalviaUnitCard.tsx`
- `src/pages/SalviaBuilding.tsx`
- `src/pages/SalviaUnit.tsx`
- `src/assets/salvia-building.jpg.asset.json` (+ 3 unit hero asset JSONs)

Edited:
- `src/pages/Index.tsx` (Salvia section)
- `src/pages/Listings.tsx` (filter + adapter)
- `src/App.tsx` (8 new routes)
- `public/sitemap.xml`, `public/en/sitemap-en.xml`

### Confirm before building

1. Real Salvia photography — none was attached. Approve generating editorial placeholders now (swap later when you send the 9 listed JPGs), or hold off until you upload them?
2. Slugs above (`/zona-hotelera/edificio-salvia/…` and `/en/hotel-zone/salvia-building/…`) — keep, or use `/preventa`-style flat slugs like `/edificio-salvia` and `/en/salvia-building`?
3. The brief's metadata says the Immediate Delivery page should live at `/en/immediate-delivery` (which already exists for La Amada). Should Salvia (a) get its own standalone landing as planned above and ALSO appear inside the existing `/entregas-inmediatas` page, or (b) replace the dedicated Salvia landing with a new "Salvia Building" section appended to the existing Immediate Delivery page?
