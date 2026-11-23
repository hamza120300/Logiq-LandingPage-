# Technical Implementation Plan: Logiq Bilingual SaaS Landing Page

**Feature ID**: `001-logiq-landing-page`  
**Date**: 2026-11-23  
**Status**: Approved  
**Author**: Antigravity  

---

## 1. Summary
This plan specifies the technical architecture, design tokens, component hierarchy, and implementation strategy for the Logiq bilingual (Arabic/English) SaaS landing page. It ensures 100% adherence to the official brand guidelines (`Logiq-Brand-Presentation.png`, `logiq-final-frame-dark.png`) and the commercial sector visuals ("مهما كان نشاطك").

---

## 2. Technical Context & Stack

- **Core Framework**: React 18 / 19 with TypeScript.
- **Styling**: Tailwind CSS utility framework with extended brand palette, CSS variables, and bespoke glowing animations.
- **Iconography**: Embedded SVG vector icons matching the brand and Lucide icon set.
- **Typography & Localization**:
  - Arabic font: Cairo (`https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap`).
  - English font: Inter (`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap`).
  - Client-side i18n context with `dir="rtl"` and `dir="ltr"` switching.
- **Portability & Distribution**:
  - Standalone zero-dependency distribution (`index.html`) ready to open in any web browser without server setup.
  - Standard development toolchain (`package.json`, `vite.config.ts`, `src/`) for future continuous integration and local node builds.

---

## 3. Brand Design System & Color Tokens

```css
:root {
  --color-bg-navy: #07151E;       /* Deepest background */
  --color-bg-surface: #0B1C2E;    /* Brand Deep Navy surface */
  --color-bg-card: #0E2436;       /* Card background */
  --color-teal-primary: #0A6F7A;  /* Logiq Teal (Icon background) */
  --color-teal-ui: #2BB8B3;       /* Teal - Dark UI (Highlights, buttons) */
  --color-signal-mint: #34D6BA;   /* Signal Mint (Glowing accent node) */
  --color-text-white: #FFFFFF;    /* Clean white headers */
  --color-text-ice: #EEF5F6;      /* Off-white text */
  --color-text-muted: #94A3B8;    /* Muted secondary copy */
  --color-border: rgba(43, 184, 179, 0.2); /* Subtle teal card border */
}
```

---

## 4. Component Architecture & Hierarchy

```text
src/
├── assets/
│   ├── logiq-logo.svg            # Official vector logo
│   ├── logiq-icon.svg            # Official app icon
│   └── logiq-final-frame-dark.png
├── context/
│   └── LanguageContext.tsx       # AR/EN state, dir toggle, translation provider
├── data/
│   └── translations.ts           # Complete bilingual dictionary
├── components/
│   ├── Navbar.tsx                # Brand logo, nav links, lang toggle, Login CTA
│   ├── Hero.tsx                  # Headline, dual CTAs, glowing backdrop, stats
│   ├── Solutions.tsx             # "مهما كان نشاطك" 6 commercial sector cards
│   ├── Features.tsx              # 6 Core SaaS enterprise features
│   ├── HowItWorks.tsx            # 3-step numbered journey
│   ├── WhyLogiq.tsx              # 4 Value pillars with proof metrics
│   ├── CTASection.tsx            # High-conversion glowing banner
│   ├── Footer.tsx                # Branded footer with links and social icons
│   └── LoginModal.tsx            # Branded Logiq login interface
├── App.tsx                       # Root orchestrator
├── main.tsx                      # Entry point
└── index.html                    # HTML shell with Google Fonts & responsive meta
```

---

## 5. Interface Contracts & Data Schemas

### `LanguageContextType`
```typescript
type Language = 'ar' | 'en';

interface LanguageContextType {
  lang: Language;
  dir: 'rtl' | 'ltr';
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}
```

### Business Sector Schema (`Solutions.tsx`)
```typescript
interface SolutionItem {
  id: string;
  iconName: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  badgeColor?: string;
}
```

The 6 sectors from the official graphic:
1. `pharmacy`: صيدلية / Pharmacy (Medicine inventory, expiry alerts, prescription records)
2. `warehouse`: مخزن / Warehouse (Multi-stock tracking, transfers, supplier ledger)
3. `retail`: محل / Retail & Stores (Fast POS, barcodes, sales reports, cash drawer)
4. `cafe`: كافيه ومطعم / Café & Restaurant (Table management, kitchen display, order modifiers)
5. `gaming`: بلايستيشن وترفيه / PlayStation & Gaming (Room timers, console hourly rates, snack billing)
6. `center`: سنتر وخدمات / Centers & Services (Student scheduling, memberships, service bills)

---

## 6. Constitution Alignment & Verification

- [x] **Spec-First**: Implementation derived strictly from `spec.md`.
- [x] **Brand Integrity**: Exact HEX codes, SVG graphics, and typography preserved.
- [x] **No Breaking Changes**: Clean isolated folder in `landing page/`.
- [x] **Verification**: Visual inspection across desktop and mobile, full language toggle verification.
