# Drift Wears — Website Architecture & Context Document

This document provides a comprehensive overview of the "Drift Wears" project. Feed this document to any AI assistant to instantly bring it up to speed on the project's tech stack, structure, design language, and unique implementation details.

---

## 1. Project Overview & Tech Stack

**Goal:** Build a premium, high-end streetwear e-commerce storefront with smooth scroll interactions, dynamic animations, and responsive layouts.

**Core Stack:**
*   **Framework:** Next.js 14+ (using the heavily-optimized `App Router` architecture)
*   **Language:** TypeScript (Strict Mode)
*   **Styling:** Tailwind CSS v4 (using the modern `@theme inline` configuration strategy)
*   **Animations:** Framer Motion (v12) for layout transitions, scroll parallax, and micro-interactions
*   **Additional UI Libs:**
    *   `lucide-react` (SVG icons)
    *   `@headlessui/react` (for complex, accessible unstyled components, though currently, pure functional components + Framer Motion are preferred)
    *   `swiper` (for upcoming product carousels)

---

## 2. Global Styling & Theming ([src/app/globals.css](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/app/globals.css))

The project uses a strict, predefined color palette managed through raw CSS variables mapped directly to Tailwind classes using the v4 `@theme inline` syntax.

**Brand Color Palette:**
*   `--color-black`: `#0a0a0a` (foreground text, dark backgrounds)
*   `--color-off-white`: `#f5f2ee` (default page background)
*   `--color-accent`: `#c8a96e` (luxurious gold/bronze for CTAs and highlights)
*   `--color-gray`: `#888888` (muted text, borders, placeholders)

**Theming Approach:**
Instead of arbitrary Tailwind colors (`text-[#c8a96e]`), *all* elements must use the semantic CSS variables (`bg-[var(--color-black)]`, `text-[var(--color-accent)]`). This ensures consistency and makes future theming adjustments trivial.

---

## 3. Directory Structure (`src/`)

A predictable, scalable component structure is enforced:

```text
src/
├── app/
│   ├── (routes)/          # Dedicated route groups (e.g., /men, /women, /sale)
│   ├── globals.css        # Theming, CSS Reset, Tailwind imports
│   ├── layout.tsx         # Global RootLayout (houses <AnnouncementBar /> and <Navbar />)
│   └── page.tsx           # Homepage (currently houses the <Hero /> component and spacer)
├── components/
│   ├── layout/            # Site-wide structural components
│   │   ├── Navbar.tsx     # The primary sticky navigation bar
│   │   └── AnnouncementBar.tsx # Top promotional banner
│   ├── sections/          # Large Page-level components (e.g., Homepage sections)
│   │   └── Hero.tsx       # Full-height parallax hero section
│   └── ui/                # Small, generic reusable atoms (buttons, inputs) - To Be Built
└── lib/
    └── mock-data.ts       # Central source of truth for mock products and categories
public/
└── images/                # Local static images (campaigns, product placeholders)
```

---

## 4. Key Architectural Patterns & Implementations

### A. Root Layout Injection ([src/app/layout.tsx](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/app/layout.tsx))
Both [AnnouncementBar](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/components/layout/AnnouncementBar.tsx#7-35) and [Navbar](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/components/layout/Navbar.tsx#234-496) are rendered directly inside [layout.tsx](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/app/layout.tsx) before `{children}`.
*   This ensures the navigation state is preserved across route changes.
*   The `pages` (like [page.tsx](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/app/page.tsx)) start underneath the navigation flow. The [Navbar](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/components/layout/Navbar.tsx#234-496) is `sticky`/`fixed`, and elements respect its height or sit behind it (like the [Hero](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/components/sections/Hero.tsx#28-121)).

### B. Navbar Component ([src/components/layout/Navbar.tsx](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/components/layout/Navbar.tsx))
A highly complex, 500-line responsive navigation component.
*   **Desktop:** Uses hover mechanics to render a massive "Mega Dropdown." The dropdown relies on `navItems` configuration objects that hold complex sub-links, notification counts, and dynamic campaign image URLs.
*   **Mobile:** Uses a Framer Motion `AnimatePresence` slide-in panel (`z-[60]`) with an animated dark backdrop overlay. Links are staggered incrementally using `staggerChildren`.
*   **Scroll State:** Detects `window.scrollY > 60` to transition from an absolutely positioned transparent background (over top of the Hero) to a solid `bg-[var(--color-black)]/98` with a blur filter.

### C. Hero Section ([src/components/sections/Hero.tsx](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/components/sections/Hero.tsx))
*   **Parallax Effect:** Uses Framer Motion's `useScroll` mapped to `useTransform` to move a background image natively at half the speed of the user's scroll (`["0%", "50%"]`).
*   **Entry Strategy:** Uses `staggerChildren` to fade text lines upward (`fadeUp` variant) sequentially upon initial load.

### D. Centralized Data ([src/lib/mock-data.ts](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/lib/mock-data.ts))
Currently, no external database or CMS is attached. Everything is powered by typed mock data. The application relies on [Product](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/lib/mock-data.ts#1-12) arrays defining `id, name, category, price, images, sizes, colors, isNew, isBestseller`. All UI components loop through data modeled after this structure.

---

## 5. ⚠️ Critical Known Quirks & TypeScript Rules

When modifying animations in this project, **Framer Motion v12 strict typings** MUST be respected inside React components, or the Next.js build WILL fail.

1.  **Easing Arrays:** When defining cubic bezier values for stagger or ease delays in variants:
    ```typescript
    // BAD (Build crashes: Type 'number[]' is not assignable to type 'Easing')
    ease: [0.25, 0.46, 0.45, 0.94]

    // GOOD (Must assert as exactly a 4-number tuple)
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    ```

2.  **String Easing Literals:** Named easing curves must use `as const`:
    ```typescript
    // BAD
    ease: "easeOut"

    // GOOD
    ease: "easeOut" as const
    ```

3.  **Transition Types:** Literal strings for transition types need similar assertions:
    ```typescript
    // BAD
    type: "tween"

    // GOOD
    type: "tween" as const
    ```

Remembering these strict variant typings will prevent lengthy debugging sessions on Vercel deployment logs.

---
*End of Protocol context.*
