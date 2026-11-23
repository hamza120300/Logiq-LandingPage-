---
name: saas-landing-page-builder
description: >-
  Build high-converting, modern, interactive, and bilingual (Arabic & English with RTL/LTR)
  SaaS and business landing pages. Includes animated drifting glow backgrounds (floatSlow, floatReverse),
  live interactive POS/dashboard mockups, requestAnimationFrame number counters, bento features,
  client logo marquees, accessible in-flow search comboboxes with custom idea inputs,
  and floating WhatsApp conversion buttons.
---

# SaaS Landing Page Builder & Design System

A battle-tested blueprint and component library for building modern, high-converting, responsive SaaS landing pages. This skill captures the proven UI/UX patterns, animations, bilingual architectures, and conversion elements developed for enterprise product launches.

---

## 1. Visual Identity & Design System

### Palette Standards (Dark Luxury / Tech SaaS)
- **Deep Background**: `#07151E` (page canvas) and `#0B1C2E` (card surfaces).
- **Primary Brand Accent**: `#0A6F7A` (solid teal) and `#2BB8B3` (dark UI cyan).
- **Signal / Highlight Accent**: `#34D6BA` (neon mint for badges, active states, and glows).
- **Typography & Neutral**: `#EEF5F6` / `#FFFFFF` for headings, `#94A3B8` / `#CBD5E1` for body copy.
- **Borders & Rings**: Subtle translucent borders (`border-[#0A6F7A]/30`) with glowing hover states (`hover:border-[#2BB8B3]`).

### Typography (Bilingual RTL / LTR)
- **Arabic**: `'Cairo', system-ui, -apple-system, sans-serif` (weights: 400, 600, 700, 800, 900).
- **English / Latin**: `'Inter', system-ui, -apple-system, sans-serif`.
- **Direction Switching**: Manage `dir="rtl"` / `dir="ltr"` on `<html>` and toggle fonts on `<body>`.

---

## 2. Animation & Motion Suite

Include these verified CSS keyframes in your main stylesheet (`src/index.css`):

```css
/* Ambient Drifting Orbs */
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

/* Continuous Logo Marquee */
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

/* Respect Reduced Motion */
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

## 3. High-Converting Section Blueprint

Every production landing page must implement these 8 core sections:

1. **Sticky Navbar (`Navbar.tsx`)**:
   - Thin top scroll-progress bar (2px gradient indicator).
   - Brand logo badge + Latin/Arabic wordmark.
   - Smooth-scrolling navigation links with active section indicator (`IntersectionObserver`).
   - One-click language switcher (`AR` / `EN`) with state persistence in `localStorage`.
   - Primary CTA with shine effect.
   - Accessible mobile drawer with body scroll lock.

2. **Hero Section (`Hero.tsx`)**:
   - Drifting background glow blobs (`animate-float-slow` & `animate-float-reverse`).
   - Subtle badge with glowing dot pulse (avoid blinking the whole pill).
   - High-impact headline with gradient highlight text.
   - Dual CTAs: Primary ("Start Free Trial") + Secondary ("Watch 60s Demo" with video modal).
   - **Live Interactive Dashboard Mockup**:
     - Animated revenue count-up (`CountUp` component).
     - Periodic sliding transaction feed (new transactions slide in every 4-5s).
     - Live status badge (`Online & Synced` with ping animation).
   - Bottom 3-metric strip using animated counters.

3. **Solutions / Industry Grid (`Solutions.tsx`)**:
   - "Solutions for Every Business" / "مهما كان نشاطك".
   - 6 commercial sector cards with unique accent colors (e.g. Pharmacy: Mint, Warehouse: Amber, Retail: Cyan, Café: Rose, Gaming: Purple, Center: Emerald).
   - Keyboard-accessible `<button>` cards triggering tailored consultation requests.
   - Pure CSS `group-hover` (avoids sticky states on touchscreens).

4. **Features Bento Grid (`Features.tsx`)**:
   - Asymmetric bento cards (focal cards span more prominence).
   - Unified icon set (`lucide-react`) inside glowing containers.
   - Feature category badges.

5. **How It Works (`HowItWorks.tsx`)**:
   - 3-step visual journey (01 Select → 02 Configure → 03 Go Live).
   - Connecting line anchored specifically to the badge row to prevent misalignment on text wrap.

6. **Why Choose Us (`WhyLogiq.tsx`)**:
   - 4 value pillars backed by proof metrics (e.g. 5 Mins Setup, 1.2s Checkout, 100% Precision, 24/7 SLA).
   - Enterprise architecture assurance badge.

7. **Social Proof & Client Marquee (`SocialProof.tsx`)**:
   - Auto-scrolling logo marquee (RTL and LTR compliant).
   - 3 verified customer testimonials with name, role, city, and star ratings.
   - Key platform metrics (+2,500 clients, +15M transactions, 99.99% uptime).

8. **High-Conversion CTA Banner & WhatsApp (`CTASection.tsx` & `FloatingWhatsApp.tsx`)**:
   - Glowing gradient banner with dual action buttons.
   - Direct WhatsApp deep-link button (`https://wa.me/PHONE?text=...`) for instant leads.
   - Floating WhatsApp button in the corner appearing after 350px scroll.

---

## 4. Solving Modal & Dropdown UX Challenges

### The Dropdown Clipping Problem in Modals
When a custom dropdown (`position: absolute`) is placed inside a scrollable modal (`max-h-[90vh] overflow-y-auto`), the bottom of the list gets clipped by the modal's boundary.

### The Solution: In-Flow Combobox with Live Search & Custom Activity
Implement the dropdown as an **in-flow component** (`relative mt-2.5`):
1. **Never Clipped**: Expanding in-flow pushes the form downward naturally without colliding with overflow bounds.
2. **2-Column Grid**: Display categories in 2 columns on desktop so 10+ options fit in ~150px vertical height.
3. **Live Search Filter**: Include an inline search bar at the top of the dropdown. Typing instantly filters all options.
4. **Custom Text Input**: If the user selects "Other" or types a custom search query with no direct match, show an input field: `"Describe your custom business or idea"`.
5. **Smooth Auto-Scroll**: Call `scrollIntoView({ behavior: 'smooth', block: 'nearest' })` when the dropdown opens so smaller screens automatically center the options.

---

## 5. Bilingual & RTL Architecture

```typescript
// LanguageContext.tsx
export type Language = 'ar' | 'en';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      return (localStorage.getItem('app_lang') as Language) || 'ar';
    } catch {
      return 'ar';
    }
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
    document.body.className = lang === 'ar' ? 'font-arabic' : 'font-sans';
  }, [lang, dir]);

  // Provide t (translations), lang, dir, toggleLang
  ...
};
```

---

## 6. How to Use & Where to Store This Skill

### In Google Antigravity:
- **Global (Available in ALL Projects on this machine)**:
  `C:\Users\<USER>\.gemini\config\skills\saas-landing-page-builder\SKILL.md`
- **Workspace (Committed to Git for this project)**:
  `.agents/skills/saas-landing-page-builder\SKILL.md`

### In Other AI Coding Assistants (Claude Code, Cursor, Copilot CLI):
This `SKILL.md` is based on standard Markdown and YAML frontmatter. You can:
- **Cursor**: Copy to `.cursor/rules/landing-page.mdc` or include in Project Rules.
- **Claude Code**: Place inside `.claude/skills/` or reference via `CLAUDE.md`.
- **Copilot / Gemini CLI**: Place in `.github/copilot-instructions.md` or `.agents/skills/`.

---

## 7. Verification Checklist for Any Landing Page
- [ ] No in-browser Babel or duplicate CDNs in `index.html` (mount via `/src/main.tsx`).
- [ ] Preconnect Google fonts; zero render-blocking `@import` statements.
- [ ] Valid `/favicon.svg` path in `<head>`.
- [ ] Bilingual dictionary complete with zero hard-coded strings.
- [ ] Open Graph, Twitter cards, canonical tag, and JSON-LD structured data present.
- [ ] All modals support `Escape` key, click-outside, and lock body scroll.
- [ ] Form inputs have associated `<label htmlFor="id">`.
- [ ] `npm run build` generates optimized production bundle in under 5 seconds.
