# Drift Wears — Website Architecture & Context Document

This document provides a comprehensive overview of the "Drift Wears" project. Feed this document to any AI assistant to instantly bring it up to speed on the project's tech stack, structure, design language, and unique implementation details.

---

## 1. Project Overview & Tech Stack

**Goal:** Build a premium, high-end streetwear e-commerce storefront with smooth scroll interactions, dynamic animations, and responsive layouts.

**Core Stack:**
*   **Framework:** Next.js 16+ (using the heavily-optimized `App Router` architecture)
*   **Language:** TypeScript (Strict Mode)
*   **Styling:** Tailwind CSS v4 (using the modern `@theme inline` configuration strategy)
*   **Animations:** Framer Motion (v12) for layout transitions, scroll parallax, and micro-interactions
*   **State Management:** Zustand (for client-side store like Shopping Cart)
*   **Additional UI Libs:**
    *   `lucide-react` (SVG icons)
    *   `@headlessui/react` (for complex, accessible unstyled components)
    *   `swiper` (for product carousels)

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
│   ├── layout.tsx         # Global RootLayout (houses <AnnouncementBar />, <Navbar />, <CartDrawer />)
│   └── page.tsx           # Homepage (houses Hero, Featured Products, Promo Video, etc.)
├── components/
│   ├── layout/            # Site-wide structural components
│   │   ├── Navbar.tsx     # The primary sticky navigation bar
│   │   ├── AnnouncementBar.tsx # Top promotional banner
│   │   ├── CartDrawer.tsx # Slide-out shopping cart
│   │   └── Footer.tsx     # Site-wide footer
│   ├── sections/          # Large Page-level components
│   │   ├── Hero.tsx       # Full-height parallax hero section
│   │   ├── FeaturedProducts.tsx # Product grid with filters
│   │   ├── PromoVideo.tsx # Cinematic video section
│   │   ├── MarqueeStrip.tsx # Scrolling text banner
│   │   └── Editorial.tsx  # Brand storytelling section
│   └── ui/                # Small, generic reusable atoms (buttons, inputs)
└── lib/
    ├── mock-data.ts       # Central source of truth for mock products and categories
    └── store/
        └── cart.ts        # Zustand store for shopping cart state
public/
└── images/                # Local static images (campaigns, products)
```

---

## 4. Key Architectural Patterns & Implementations

### A. Root Layout Injection ([src/app/layout.tsx](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/app/layout.tsx))
Global UI elements are injected at the root level:
*   [AnnouncementBar](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/components/layout/AnnouncementBar.tsx), [Navbar](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/components/layout/Navbar.tsx), and [CartDrawer](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/components/layout/CartDrawer.tsx) are present on every page.
*   State management (Zustand) allows the [Navbar](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/components/layout/Navbar.tsx) to reflect the cart count in real-time.

### B. Navbar Component ([src/components/layout/Navbar.tsx](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/components/layout/Navbar.tsx))
*   **Desktop Mega Menu:** Uses hover triggers to display full-width dropdowns with category columns and campaign images.
*   **Scroll Logic:** Dynamically transitions from transparent to a solid backdrop-blur style once the user scrolls past 60px.
*   **Strict Alignment:** Dropdowns use `top-full` to perfectly align with the bottom of the sticky navbar.

### C. Homepage Sectioning ([src/app/page.tsx](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/app/page.tsx))
The homepage is a composition of several high-impact sections:
1.  **Hero:** Parallax background with staggered text entry.
2.  **MarqueeStrip:** Infinite horizontal scroll banner.
3.  **PromoVideo:** Full-width cinematic video integration.
4.  **FeaturedProducts:** Dynamic grid displaying trending items.
5.  **Editorial:** Large-scale image and text layout for brand identity.

### D. State Management & Data
*   **Zustand ([src/lib/store/cart.ts](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/lib/store/cart.ts)):** Manages the global cart state, item quantities, and drawer visibility.
*   **Mock Data ([src/lib/mock-data.ts](file:///c:/Users/yaaas/Desktop/Drift%20Wears/src/lib/mock-data.ts)):** Defines the `Product` schema and exports the main product catalog used across the site.

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
