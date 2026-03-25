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
    sections/
      Hero.tsx            # Parallax hero
      MarqueeStrip.tsx    # Infinite CSS marquee
      FeaturedProducts.tsx # Product grid with AddToCartButton
      Editorial.tsx       # 2-col editorial section
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
