---
name: saas-landing-page-builder
description: >-
  Universal, industry-agnostic blueprint and design system to build high-converting, modern,
  interactive, and bilingual (Arabic & English with RTL/LTR or any language pair) landing pages
  for ANY SaaS, startup, agency, or business. Adapts to any client's brand identity, color palette,
  and industry while providing battle-tested animations (floatSlow, floatReverse, marquee, shine-effect),
  live interactive product mockups, animated number counters, bento features, social proof marquees,
  accessible in-flow comboboxes with custom idea inputs, and floating conversion buttons.
---

# Universal Landing Page Builder & Design System

A general-purpose, industry-agnostic blueprint and component library for building modern, high-converting, responsive landing pages for **ANY business, product, or SaaS client** (e.g., FinTech, E-Commerce, Healthcare, EdTech, Real Estate, Agency, AI Platform, Retail, or Logistics).

This skill teaches the AI agent how to calibrate the brand identity, adapt the content dynamically to any domain, and assemble a world-class landing page with rich animations and interactive UI.

---

## 1. Domain & Brand Calibration (Phase 1)

Before writing code, extract or ask for the client's domain parameters:

1. **Domain & Industry**:
   - What does the business sell? (B2B SaaS, mobile app, physical services, marketplace, agency, etc.)
   - Who is the ideal customer? (SMB owners, enterprise teams, individual consumers, students, patients, etc.)

2. **Visual Mood & Palette Selection**:
   Adapt the color tokens to the client's industry:
   - **FinTech / Enterprise / Security**: Deep navy (`#0A192F`), cyan/teal (`#0A6F7A`, `#2BB8B3`), emerald accents.
   - **AI / Modern Tech / SaaS**: Dark slate/black (`#090D16`), vibrant violet/indigo (`#6366F1`, `#A855F7`), neon cyan.
   - **Healthcare / Wellness**: Crisp white / soft teal (`#0D9488`), clean cyan, calming mint.
   - **E-Commerce / Food / Hospitality**: Warm dark or light background, warm amber/orange (`#F59E0B`, `#F43F5E`).
   - **Luxury / Professional Services**: Obsidian black (`#0B0B0B`), champagne gold (`#D4AF37`) or platinum silver.

3. **Typography**:
   - **Arabic**: `'Cairo', system-ui, sans-serif` or `'Alexandria', sans-serif` for clean modern geometry.
   - **English / Latin**: `'Inter', system-ui, sans-serif` or `'Plus Jakarta Sans', sans-serif`.

---

## 2. Universal Animation Suite

Add these reusable, performance-tuned keyframes into `src/index.css` for every project:

```css
/* Ambient Drifting Orbs: Adds subtle high-end depth to hero & dark sections */
@keyframes floatSlow {
  0% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(25px, -35px) scale(1.08); }
  100% { transform: translate(-20px, 25px) scale(0.95); }
}

@keyframes floatReverse {
  0% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(-30px, 30px) scale(1.12); }
  100% { transform: translate(25px, -20px) scale(0.92); }
}

.animate-float-slow {
  animation: floatSlow 18s ease-in-out infinite alternate;
}

.animate-float-reverse {
  animation: floatReverse 22s ease-in-out infinite alternate;
}

/* Continuous Logo Marquee for Social Proof (RTL & LTR compliant) */
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

@keyframes marqueeRTL {
  0% { transform: translateX(0%); }
  100% { transform: translateX(50%); }
}

.animate-marquee {
  display: flex;
  width: 200%;
  animation: marquee 25s linear infinite;
}

[dir="rtl"] .animate-marquee {
  animation: marqueeRTL 25s linear infinite;
}

/* Button Hover Shine Sweep */
.shine-effect {
  position: relative;
  overflow: hidden;
}

.shine-effect::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -60%;
  width: 20%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(25deg);
  transition: all 0.75s ease;
}

.shine-effect:hover::after {
  left: 140%;
}

/* Respect Accessibility: Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 3. The 8-Section High-Conversion Funnel

Construct every landing page following this sequential sales journey, customizing the content to the specific client:

### 1. Header & Navigation (`Navbar.tsx`)
- **Scroll Progress**: Top 2px gradient progress bar tied to `window.scrollY / totalScroll`.
- **Brand Identity**: Client logo badge + wordmark.
- **Section Spy**: Underlines/highlights current visible section using `IntersectionObserver`.
- **Locale Switcher**: Instant AR/EN or locale switch updating `dir="rtl"` / `dir="ltr"` and `document.title`.
- **Primary Action**: "Get Started" / "Sign In" button with shine hover effect.
- **Mobile Drawer**: Accessible menu that locks body scroll when open.

### 2. Hero Section (`Hero.tsx`)
- **Background**: Ambient drifting orbs (`animate-float-slow` & `animate-float-reverse`) using brand colors.
- **Eyebrow Badge**: Highlight pill with a subtle glowing dot pulse (`animate-ping`).
- **Main Hook**: Bold, benefits-driven headline with high-contrast gradient text.
- **Dual CTAs**:
  - Primary: Direct lead generation (e.g. "Start Free Trial", "Book a Demo", "Get Started").
  - Secondary: Interactive demo trigger (e.g. "Watch 60s Demo" opening video modal) or smooth anchor link.
- **Domain-Tailored Live Mockup (Crucial!)**:
  *Never show a static graphic.* Build an interactive, live-simulated UI that matches the client's product:
  - **FinTech / Banking**: Live balance counter, card slider, auto-updating transaction feed.
  - **SaaS / CRM**: Kanban task board, real-time sync notification, revenue sparkline.
  - **E-Commerce**: Product card with live stock count, recent purchase popup, instant checkout preview.
  - **Health / EdTech**: Live enrollment counter, student/patient cards, progress rings.
  - **POS / Operations**: Live cashier ticket speed, daily revenue count-up, scanner status.
- **Proof Strip**: 3 animated metric counters (`CountUp` component).

### 3. Audience / Solutions Matrix (`Solutions.tsx`)
- Address distinct customer segments (e.g. *"Solutions for Every [X]"*).
- Provide 4–6 tailored cards with:
  - Custom accent color per card (helps visual scanning).
  - Specific pain-points and feature bullets.
  - Keyboard-accessible click triggers opening the consultation modal with that category pre-selected.

### 4. Features Bento Grid (`Features.tsx`)
- Modern asymmetrical Bento Grid layout (1 large showcase card, 2 medium cards, 3 compact cards).
- Clean icons from `lucide-react` inside glowing rounded containers.
- Value badges on key features (e.g. "Instant Sync", "Bank-Grade Security", "Zero Setup").

### 5. How It Works / Customer Journey (`HowItWorks.tsx`)
- Simple 3-step visual journey (`01 Choose → 02 Setup → 03 Grow`).
- **Critical Fix**: Anchor the horizontal connecting line inside the badge container row so text wrapping never misaligns the connector.

### 6. Social Proof & Trust (`SocialProof.tsx`)
- **Client Logo Marquee**: Infinite auto-scrolling strip (`animate-marquee`).
- **Key Metrics Bar**: Hard proof numbers (e.g. +2,500 clients, +15M transactions, 99.99% uptime).
- **Verified Testimonials**: 3 realistic cards with customer photo/avatar, name, role, company, city, and 5-star rating.

### 7. Final Conversion CTA & Quick Chat (`CTASection.tsx` & `FloatingWhatsApp.tsx`)
- High-contrast glowing banner with dual action buttons.
- Direct instant messaging deep-link (WhatsApp `https://wa.me/...` or Live Chat) for the fastest lead conversion.
- Floating quick-chat action button in the bottom-corner appearing after 350px scroll.

### 8. Comprehensive Footer (`Footer.tsx`)
- Company description, quick navigation links, sector shortcuts.
- Clickable contact links (`tel:` and `mailto:`).
- Social media icon links (Facebook, LinkedIn, Instagram, X/Twitter, WhatsApp).
- High-contrast copyright bar passing WCAG AA standards.

---

## 4. In-Flow Combobox with Live Search & Custom Idea Input

When gathering lead inquiries in a modal or form, customer requirements vary widely. Use this **In-Flow Combobox** pattern:

### Why In-Flow?
Traditional floating dropdowns (`position: absolute`) get clipped by modal scroll bounds (`max-h-[90vh] overflow-y-auto`). An in-flow dropdown (`relative mt-2.5`):
1. **Never Cuts Off**: Expands naturally inside the form, pushing lower fields down without colliding with modal boundaries.
2. **2-Column Layout**: On desktop (`sm:grid-cols-2`), 12+ categories fit neatly into ~150px height.
3. **Live Search Bar**: An inline search field lets users find their category in 1 second.
4. **Custom Text Input (The "Different Idea" Solution)**:
   - If the user selects "Other" OR types a search query that has no match:
   - The UI reveals a dedicated input: *"Describe your custom business or idea / اكتب تفاصيل نشاطك أو فكرتك بالتفصيل"*.
   - Allows 100% freedom for customers with unique ideas without breaking form structure.
5. **Auto-Scroll Assist**: On open, calls `element.scrollIntoView({ behavior: 'smooth', block: 'nearest' })` so mobile screens automatically show all options.

---

## 5. Bilingual & RTL Architecture Blueprint

All content must live inside a clean translation dictionary (`translations.ts`). Zero hard-coded text in components.

```typescript
// src/data/translations.ts
export interface LandingPageContent {
  meta: { title: string; description: string };
  nav: { ... };
  hero: { ... };
  solutions: { ... };
  features: { ... };
  howItWorks: { ... };
  whyUs: { ... };
  socialProof: { ... };
  cta: { ... };
  footer: { ... };
  modals: { ... };
}
```

Dynamic direction and SEO synchronizer in `LanguageContext.tsx`:
```typescript
useEffect(() => {
  document.documentElement.setAttribute('dir', dir); // 'rtl' or 'ltr'
  document.documentElement.setAttribute('lang', lang); // 'ar' or 'en'
  document.body.className = lang === 'ar' ? 'font-arabic' : 'font-sans';
  if (t?.meta) {
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }
}, [lang, dir, t]);
```

---

## 6. Project Setup & Build Checklist

When bootstrapping any new landing page:
1. **Build Tool**: Vite + React + TypeScript + Tailwind CSS.
2. **Vite Entrypoint**: Ensure `index.html` mounts via `<script type="module" src="/src/main.tsx"></script>`. Never run in-browser Babel or duplicate CDNs.
3. **Preconnect Fonts**: Place Google Fonts in `<head>` with `preconnect`. Do not use blocking `@import` in CSS.
4. **SEO & Metadata**: Include Open Graph (`og:title`, `og:image`, `og:locale`), Twitter card tags, canonical URL, and JSON-LD `SoftwareApplication` / `Organization` structured data.
5. **Accessibility**: All dialogs must have `role="dialog"`, `aria-modal="true"`, close on `Escape`, and lock body scroll. All inputs must have associated `<label htmlFor="...">`.
6. **Production Verification**: Run `npm run build` (`tsc && vite build`). Target: 0 errors, build time under 4 seconds, gzipped JS under 80 KB.
