# Drift Wears - Next.js App

## Overview
A Next.js e-commerce/fashion web application migrated from Vercel to Replit.

## Tech Stack
- **Framework**: Next.js 16.2.1 (with Turbopack)
- **UI**: React 19, Tailwind CSS v4, Framer Motion, Headless UI, Swiper, Lucide React
- **Language**: TypeScript
- **Package Manager**: npm

## Project Structure
```
src/
  app/                    # Next.js App Router pages & layouts
    (routes)/             # Route groups
    globals.css
    layout.tsx            # Root layout: AnnouncementBar + Navbar + CartDrawer
    page.tsx
  components/
    layout/
      AnnouncementBar.tsx
      Navbar.tsx          # Sticky nav, mega dropdowns, reads cart count from Zustand
      CartDrawer.tsx      # Sliding cart drawer (Framer Motion, z-[80])
      Footer.tsx          # 4-col footer with social icons + payment badges
    sections/
      Hero.tsx            # Parallax hero
      MarqueeStrip.tsx    # Infinite CSS marquee
      FeaturedProducts.tsx # Product grid with AddToCartButton
      Editorial.tsx       # 2-col editorial section
      Newsletter.tsx      # Email signup with grain texture + success animation
    ui/
      AddToCartButton.tsx # Zustand addItem + openCart, animated state
  lib/
    store/
      cart.ts             # Zustand cart store (persisted to localStorage)
    mock-data.ts          # Product catalogue (12 items)
public/                   # Static assets
```

## Running the App
- **Dev**: `npm run dev` — starts on port 5000
- **Build**: `npm run build`
- **Start (prod)**: `npm run start` — starts on port 5000

## Replit Configuration
- Dev server runs on port 5000, bound to `0.0.0.0` for Replit preview compatibility
- Workflow: "Start application" runs `npm run dev`
- `next.config.ts`: `allowedDevOrigins` for Replit preview + image `remotePatterns` for picsum.photos/fastly.picsum.photos

## Key Design Decisions
- **Images**: `next/image` with `fill` + `priority` on Hero; `fill` + lazy on products/editorial. picsum.photos as placeholder CDN.
- **Animations**: `FadeInWhenVisible` reusable component for scroll-triggered fade-up; `whileTap={{ scale: 0.97 }}` on all interactive buttons/links.
- **Cart z-index layers**: Navbar z-50, overlay z-[70], CartDrawer z-[80].
- **Section spacing**: `py-16 md:py-24` across all sections for consistent rhythm.
- **Product cards**: `aspect-[3/4]` image ratio, `fill` strategy, `group-hover:scale-105` zoom.
- **AddToCartButton**: `Check` icon success state with AnimatePresence, 2s reset, opens cart on add.
- **CartDrawer thumbnails**: `w-20 h-24` per spec, trash-icon remove, quantity stepper (min 44px touch).
- **Footer bottom bar**: `py-4` compact, payment badges as inline spans.
- **MarqueeStrip**: `pause-on-hover`, `letter-spacing: 0.35em`, 32s scroll duration.
- **Newsletter grain**: SVG fractalNoise `::before` pseudo-element, dark `#0d0d0d` bg.
- **Body**: `overflow-x-hidden` to prevent horizontal scroll from parallax/animations.
- **SEO**: Full `metadata` export in both `layout.tsx` and `page.tsx` with OG/Twitter cards.
- **No `ssr: false` dynamic imports** in App Router Server Components — client sections import directly (they carry their own `"use client"` boundaries).
