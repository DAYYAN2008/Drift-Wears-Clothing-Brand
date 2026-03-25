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
  app/           # Next.js App Router pages & layouts
    (routes)/    # Route groups
    layoutsections/
    globals.css
    layout.tsx
    page.tsx
    mock-data.ts
  components/    # Shared UI components
    ui/
  lib/           # Utility/helper modules
public/          # Static assets
```

## Running the App
- **Dev**: `npm run dev` — starts on port 5000
- **Build**: `npm run build`
- **Start (prod)**: `npm run start` — starts on port 5000

## Replit Configuration
- Dev server runs on port 5000, bound to `0.0.0.0` for Replit preview compatibility
- Workflow: "Start application" runs `npm run dev`
