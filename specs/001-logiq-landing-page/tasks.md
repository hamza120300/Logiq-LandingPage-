# Tasks: Logiq Bilingual SaaS Landing Page

**Feature**: `001-logiq-landing-page`  
**Prerequisites**: Approved `spec.md` and `plan.md`

## Format Conventions
- `- [x] Txxx`: Completed task identifier
- `[P]`: Parallelizable task
- `[Tag]`: Component / functional area

---

## Phase 1: Setup & Asset Scaffolding
- [x] `T001` [Setup] Set up project directories (`src/`, `src/components/`, `src/context/`, `src/assets/`, `src/data/`).
- [x] `T002` [P] [Setup] Copy Logiq SVG logos and brand assets into `landing page/src/assets/` and `landing page/public/`.
- [x] `T003` [Setup] Configure `package.json`, `tsconfig.json`, and `vite.config.ts` for modern React + TypeScript tooling.

## Phase 2: Internationalization & Brand Data
- [x] `T004` [Data] Create comprehensive bilingual translation dictionary (`translations.ts`) for all sections in Arabic and English.
- [x] `T005` [Context] Create `LanguageContext.tsx` with locale switching (`ar` / `en`), `dir` state management, and `localStorage` persistence.

## Phase 3: Core UI Components
- [x] `T006` [Navbar] Implement responsive navigation bar with SVG brand logo, smooth scroll links, AR/EN toggle, and mobile drawer.
- [x] `T007` [Hero] Implement hero section with "Smart Solutions for Every Business", dual CTAs, stats row, and glowing ambient background.
- [x] `T008` [Solutions] Implement "مهما كان نشاطك" / "Solutions for Every Business" section with the 6 verified business sector cards.
- [x] `T009` [Features] Implement 6-card SaaS Features section with modern icons and glowing hover states.
- [x] `T010` [HowItWorks] Implement 3-step visual journey with connecting lines and numbered mint badges.
- [x] `T011` [WhyLogiq] Implement 4 value proposition cards with proof metric badges.
- [x] `T012` [CTA] Implement high-conversion bottom call-to-action banner with glowing gradient background.
- [x] `T013` [Footer] Implement dark footer with Logiq brand mark, navigation links, and copyright.
- [x] `T014` [Login] Implement brand-aligned Logiq Login modal with form validation and bilingual copy.

## Phase 4: Integration & Assembly
- [x] `T015` [Integration] Assemble all components into `App.tsx` wrapped in `LanguageProvider`.
- [x] `T016` [Build] Produce the portable, self-contained `index.html` with Tailwind, Google Fonts, and full React application logic for instant browser preview.

## Phase 5: Verification & Delivery
- [x] `T017` [Verify] Test responsive layout across desktop, tablet, and mobile breakpoints.
- [x] `T018` [Verify] Test language toggle (Arabic RTL vs English LTR) across all sections and modals.
- [x] `T019` [Git] Commit all source files and Spec Kit artifacts to Git.
- [x] `T020` [Git] Push commit to GitHub repository `origin/main`.
