# Funda Smoke Tests (Playwright + TypeScript)

A lean smoke-test pack for the Funda website. It validates critical user journeys:

1. Homepage loads and core UI is visible
2. Search results for a major city are shown
3. Opening a listing details page works
4. Applying a price filter constrains visible prices
5. Top-level navigation Buy ↔ Rent works

---

## Tech choices

- **Playwright Test (TypeScript)**
- **Page Object Model** with typed fixtures and reusable steps
- **Setup project** to handle cookie consent and persist session state
- **Playwright HTML report** with screenshots, traces, and videos on failure
- **GitLab CI/CD pipeline**
- **Sensitive values** (e.g. `BASE_URL`, `FUNDA_UA`) stored as GitLab Secrets

---

## Project structure

```
funda-smoke/
├─ playwright.config.ts
├─ tsconfig.json
├─ src/
│ ├─ fixtures/
│ │ └─ ui.fixtures.ts
│ ├─ pages/
│ │ ├─ HomePage.ts
│ │ ├─ ListingPage.ts
│ │ ├─ SearchPage.ts
│ │ └─ FilterPage.ts
│ ├─ steps/
│ │ ├─ home.steps.ts
│ │ ├─ search.steps.ts
│ │ ├─ listing.steps.ts
│ │ ├─ filters.steps.ts
│ │ └─ navigation.steps.ts
├─ tests/
│ └─ smoke/
│ ├─ global.setup.ts
│ ├─ home.spec.ts
│ ├─ search-results.spec.ts
│ ├─ listing-details.spec.ts
│ ├─ nav.rent.spec.ts
│ └─ price-filter.spec.ts
├─ utils/
│ └─ (helpers like money.ts if needed)
├─ test-results/
├─ .env.example
├─ .gitignore
└─ package.json
```

---

## Setup

1. **Install deps**

   ```bash
   npm i
   npx playwright install
   ```

2. **Create `.env` (local only; never commit secrets)**

   ```bash
   cp .env.example .env
   # Put the provided UA into FUNDA_UA in .env
   # Optionally override BASE_URL if needed
   ```

3. **Run**
   ```bash
   npm test          # headless
   npm run test:ui   # Playwright UI
   ```
