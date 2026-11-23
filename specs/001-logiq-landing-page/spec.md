# Feature Specification: Logiq Bilingual SaaS Landing Page

**Feature ID**: `001-logiq-landing-page`  
**Status**: Approved  
**Target Platform**: Responsive Web (Desktop, Tablet, Mobile)  
**Primary Languages**: Arabic (العربية - RTL) & English (EN - LTR)  

---

## 1. Overview & Problem Context

### Background & Value Proposition
Logiq is a modern, unified software management and POS platform designed for commercial enterprises, retail shops, warehouses, pharmacies, cafés, gaming lounges, and educational centers. 

The objective of this feature is to deliver a world-class, production-ready, responsive SaaS landing page for Logiq. The design must rigorously uphold the verified brand identity from `Logiq-Brand-Presentation.png`, the `logiq-final-frame-dark.png` visual assets, and the video/screens ("مهما كان نشاطك").

### Core Goals
- Present Logiq as an enterprise-grade, modern, and reliable SaaS ecosystem.
- Provide a bilingual experience with seamless toggling between **Arabic (RTL)** and **English (LTR)**, complete with proper font selection (Cairo / Tajawal for Arabic, Inter for English).
- Feature the verified "Whatever Your Business" / "مهما كان نشاطك" commercial categories with bespoke interactive cards.
- Integrate a visually consistent, dark-themed **Login Modal / View** that preserves and anchors the core brand identity without breaking or conflicting with existing flows.
- Guarantee full responsiveness across all viewport sizes (desktop, laptop, tablet, mobile).

---

## 2. User Scenarios & Stories

### User Story 1: Language & Locale Switching (AR / EN)
As an Arabic or English-speaking business owner,  
I want to toggle between Arabic and English with one click,  
So that I can read and interact with the platform in my preferred native language and script direction (RTL/LTR).

#### Acceptance Criteria
- [ ] Language toggle is prominently accessible in the navbar on both desktop and mobile.
- [ ] Switching to Arabic updates `dir="rtl"`, swaps typography to Arabic fonts (Cairo/Tajawal), and reflects natural Arabic phrasing.
- [ ] Switching to English updates `dir="ltr"`, swaps typography to clean modern sans-serif (Inter/Geist), and aligns left.
- [ ] Selected language preference persists across page reloads via `localStorage`.

### User Story 2: Responsive Navigation & Brand Anchor
As a site visitor,  
I want a clean, floating or sticky navbar that gives immediate access to sections and primary actions,  
So that I can navigate the site easily on any device.

#### Acceptance Criteria
- [ ] Left side displays the official Logiq SVG logo (`#0A6F7A` teal rounded badge with white `q` and `#34D6BA` mint node, followed by "logiq" wordmark).
- [ ] Desktop displays smooth navigation links: Home, Solutions, Features, How It Works, Why Logiq, Contact.
- [ ] Desktop right side contains the Language Selector and the primary **"Get Started" / "ابدأ الآن"** CTA button.
- [ ] Mobile view collapses links into a smooth, animated slide-out or dropdown menu with full touch support.

### User Story 3: Hero Section & Immediate Hook
As a prospective client,  
I want an impactful, modern hero section with clear value messaging and subtle glowing aesthetics,  
So that I immediately understand what Logiq does and am compelled to explore further.

#### Acceptance Criteria
- [ ] Headline: "Smart Solutions for Every Business" / "حلول ذكية متكاملة لكل نشاط تجاري".
- [ ] Subtitle clearly communicating digital business management, speed, and real-time operations.
- [ ] Dual CTA buttons: Primary "Get Started" (`#2BB8B3` gradient with hover glow) and Secondary "Explore Solutions" / "استكشف الحلول" (subtle bordered glass).
- [ ] Background features deep dark navy (`#0B1C2E` / `#05131A`) with soft radial teal/cyan gradients (`#0A6F7A` / `#2BB8B3`), avoiding noisy stock images.
- [ ] A hero preview graphic or badge showcasing the sleek Logiq dashboard / POS interface preview.

### User Story 4: Business Sectors Showcase ("مهما كان نشاطك")
As a business operator in retail, food & beverage, pharmacy, or services,  
I want to see specific solutions tailored to my industry,  
So that I know Logiq is built specifically for my workflow.

#### Acceptance Criteria
- [ ] Displays the 6 core business sectors from the brand visual:
  1. **Retail / المحلات التجارية** (POS, fast barcode checkout, barcode printers).
  2. **Pharmacies / الصيدليات** (Batch expiry tracking, medicine directory, prescription history).
  3. **Warehouses / المخازن** (Stock movements, supplier orders, inventory audits).
  4. **Cafés & Restaurants / الكافيهات والمطاعم** (Table management, kitchen display, modifiers, shifts).
  5. **PlayStation & Gaming / البلايستيشن والترفيه** (Room/console timers, hourly billing, session management).
  6. **Centers & Academies / السناتر والخدمات** (Student attendance, scheduling, multi-session billing).
- [ ] Each sector card features a dedicated 3D-style or modern icon, sector title, benefit summary, and interactive hover glow.

### User Story 5: Core SaaS Features & Capabilities
As an operations manager,  
I want to understand the key technical and operational capabilities of Logiq,  
So that I can evaluate its enterprise readiness.

#### Acceptance Criteria
- [ ] Covers: **Easy to Use**, **Powerful Management**, **Real-Time Insights & Reports**, **Secure & Reliable**, **Scalable Architecture**, **Modern Cloud/Offline Technology**.
- [ ] Cards formatted with crisp typography, subtle borders (`rgba(43, 184, 179, 0.15)`), and clean SVG icons.

### User Story 6: "How It Works" 3-Step Journey
As an onboarding customer,  
I want a simple 3-step walkthrough of getting started with Logiq,  
So that I understand the implementation timeline.

#### Acceptance Criteria
- [ ] Step 1: **01 — Choose Your Solution / اختر نشاطك**
- [ ] Step 2: **02 — Configure & Setup / ضبط النظام**
- [ ] Step 3: **03 — Grow & Manage / انطلق ونَمِّ أعمالك**
- [ ] Visually connected with progress lines or numbered accent pills in Signal Mint (`#34D6BA`).

### User Story 7: Why Choose Logiq (Value Drivers)
As a decision-maker,  
I want proof points detailing Logiq's competitive edge,  
So that I have confidence in choosing Logiq over legacy POS/ERP software.

#### Acceptance Criteria
- [ ] Highlights 4 key pillars: **Simplicity (بساطة الاستخدام)**, **Operational Efficiency (كفاءة التشغيل)**, **High Reliability (استقرار وأمان)**, **Continuous Scalability (قابلية التوسع)**.
- [ ] Interactive metric badges (e.g. 99.9% uptime, zero data loss, instant billing).

### User Story 8: Brand-Aligned Login Modal / Experience
As a registered customer or administrator,  
I want to click "Login / تسجيل الدخول" from the navbar to open an authentic Logiq login interface,  
So that I can log into the platform without leaving or breaking the visual experience.

#### Acceptance Criteria
- [ ] Login modal can be opened from the navbar or hero CTA.
- [ ] Visual style strictly aligns with the Logiq brand: dark navy canvas (`#0B1C2E`), branded input fields with subtle teal focus rings, Logiq logo badge at the top, primary login button in vibrant teal, remember me, and forgot password link.
- [ ] Fully functional with form validation and bilingual translation.

### User Story 9: High-Impact Call to Action & Footer
As a visitor reaching the end of the page,  
I want a clear, compelling contact/signup CTA and a structured footer,  
So that I can get in touch with sales or register immediately.

#### Acceptance Criteria
- [ ] Bold CTA card with glowing background: "Ready to simplify your business?" / "جاهز لتطوير أعمالك اليوم؟".
- [ ] Comprehensive dark footer with Logiq brand mark, brief description, quick links, social media icons, and copyright notice.

---

## 3. Requirements

### Functional Requirements
- **FR-001**: Single-page application architecture built in modern React with clean component modularity.
- **FR-002**: Real-time language switching context supporting Arabic (`ar`) and English (`en`) with automatic document `dir` attribute switching (`rtl` vs `ltr`).
- **FR-003**: Navigation bar supporting desktop menu and animated mobile drawer.
- **FR-004**: Hero section with dual CTAs, glowing dark ambiance, and product badge.
- **FR-005**: 6-card "Whatever Your Business" (`مهما كان نشاطك`) grid with rich sector icons and descriptions.
- **FR-006**: 6-card Features showcase with modern icons and hover micro-interactions.
- **FR-007**: 3-step "How It Works" visual timeline.
- **FR-008**: "Why Logiq" value proposition grid with metric badges.
- **FR-009**: High-conversion bottom Call-to-Action section.
- **FR-010**: Comprehensive dark-themed footer with copyright and navigation links.
- **FR-011**: Integrated Login view / modal that respects the Logiq brand identity.
- **FR-012**: Quick contact / lead capture action triggerable directly from the page.

### Non-Functional & Design Requirements
- **NFR-001 (Brand Color Palette)**:
  - Deep Navy background: `#0B1C2E` / `#05131A`
  - Logiq Primary Teal: `#0A6F7A`
  - Signal Mint / Neon Cyan accent: `#34D6BA`
  - Vibrant Teal (Dark UI): `#2BB8B3`
  - Ice White / Body text: `#EEF5F6` / `#94A3B8`
  - Pure White: `#FFFFFF`
- **NFR-002 (Typography)**:
  - Arabic: Cairo / Tajawal Google Web Font for natural Arabic reading.
  - English: Inter / system sans-serif for sleek SaaS typography.
- **NFR-003 (Responsiveness)**: Seamless viewing from 320px (mobile) to 4K (desktop).
- **NFR-004 (Performance)**: Fast load time with zero layout shift; SVGs used for crisp icon rendering.
- **NFR-005 (Execution & Portability)**: Operates seamlessly in standard modern browsers and provides npm/vite tooling for developer workflows.

---

## 4. Success Criteria & Definition of Done
- [ ] All 9 User Stories fulfilled with full bilingual (Arabic & English) coverage.
- [ ] Visual fidelity matches `Logiq-Brand-Presentation.png` and the provided screenshots.
- [ ] Zero build/runtime errors when running or viewing.
- [ ] Clean code committed and pushed to `https://github.com/hamza120300/Logiq-LandingPage-.git`.
