"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";

/* ───────────────────────── NAV DATA ───────────────────────── */

interface SubLink {
  label: string;
  count?: number;
  href: string;
}

interface SubSection {
  title: string;
  links: SubLink[];
}

interface NavItem {
  label: string;
  href: string;
  highlight?: boolean; // e.g. SALE in red
  megaMenu: {
    sections: SubSection[];
    campaignImage: string;
    campaignLabel: string;
    campaignHref: string;
  } | null;
}

const navItems: NavItem[] = [
  {
    label: "MEN",
    href: "/men",
    megaMenu: {
      sections: [
        {
          title: "New Arrivals",
          links: [
            { label: "This Week", count: 48, href: "/men/new-arrivals" },
            { label: "Minimals Spring '26", count: 24, href: "/men/minimals" },
          ],
        },
        {
          title: "Clothing",
          links: [
            { label: "T-Shirts", count: 148, href: "/men/tshirts" },
            { label: "Hoodies", count: 62, href: "/men/hoodies" },
            { label: "Sweatshirts", count: 44, href: "/men/sweatshirts" },
            { label: "Shirts", count: 105, href: "/men/shirts" },
            { label: "Jackets", count: 38, href: "/men/jackets" },
            { label: "Joggers", count: 17, href: "/men/joggers" },
            { label: "Shorts", count: 20, href: "/men/shorts" },
            { label: "Co-ords", count: 108, href: "/men/coords" },
          ],
        },
        {
          title: "Accessories",
          links: [
            { label: "Caps / Hats", count: 23, href: "/men/caps" },
            { label: "Bags", count: 15, href: "/men/bags" },
            { label: "Wallets", count: 32, href: "/men/wallets" },
            { label: "Belts", count: 22, href: "/men/belts" },
            { label: "Sunglasses", count: 26, href: "/men/sunglasses" },
            { label: "Socks", count: 24, href: "/men/socks" },
          ],
        },
      ],
      campaignImage: "/images/products/tracksuits/Pic-1.0.png",
      campaignLabel: "Minimals Spring '26",
      campaignHref: "/men/minimals",
    },
  },
  {
    label: "NEW ARRIVALS",
    href: "/new-arrivals",
    megaMenu: {
      sections: [
        {
          title: "Men",
          links: [
            { label: "T-Shirts", count: 28, href: "/men/tshirts" },
            { label: "Shirts", count: 18, href: "/men/shirts" },
            { label: "Co-ords", count: 12, href: "/men/coords" },
          ],
        },
        {
          title: "Trending Now",
          links: [
            { label: "Staff Picks", count: 20, href: "/trending/staff-picks" },
            { label: "Most Popular", count: 30, href: "/trending/popular" },
            { label: "Pre-Order", href: "/coming-soon" },
          ],
        },
      ],
      campaignImage: "/images/products/shirts/Pic-1.0.png",
      campaignLabel: "Just Dropped",
      campaignHref: "/new-arrivals",
    },
  },
  {
    label: "SALE",
    href: "/sale",
    highlight: true,
    megaMenu: {
      sections: [
        {
          title: "By Discount",
          links: [
            { label: "Up to 30% off", href: "/sale/30" },
            { label: "Up to 50% off", href: "/sale/50" },
            { label: "Up to 70% off", href: "/sale/70" },
          ],
        },
        {
          title: "Shop by Category",
          links: [
            { label: "Tops & Tees", href: "/sale/tops" },
            { label: "Bottoms", href: "/sale/bottoms" },
            { label: "Outerwear", href: "/sale/outerwear" },
            { label: "Accessories", href: "/sale/accessories" },
          ],
        },
        {
          title: "Last Chance",
          links: [
            { label: "Final Sale", href: "/sale/final" },
            { label: "Clearance", href: "/sale/clearance" },
          ],
        },
      ],
      campaignImage: "/images/products/trousers/Pic-2.1.png",
      campaignLabel: "Up to 70% off",
      campaignHref: "/sale",
    },
  },
];

/* ─────────────────────── ANIMATIONS ─────────────────────── */

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "tween" as const, duration: 0.4, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
  },
  exit: {
    x: "100%",
    transition: { type: "tween" as const, duration: 0.3, ease: [0.5, 0, 0.75, 0] as [number, number, number, number] },
  },
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const linkVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween" as const, duration: 0.35, ease: "easeOut" as const },
  },
};

const megaDropdownVariants = {
  hidden: { opacity: 0, y: -4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.18, ease: "easeIn" as const },
  },
};

/* ──────────────────── NAVBAR COMPONENT ──────────────────── */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { totalItems, openCart } = useCartStore();
  const cartCount = totalItems();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Small delay on mouse-leave prevents accidental close when
  // the cursor moves from the nav link into the dropdown panel
  const handleMouseEnter = (label: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-[var(--color-black)]/98 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,.06)]"
            : "bg-[var(--color-black)]"
          }`}
      >
        <nav className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-10 lg:px-20">

          {/* ─── Logo ─── */}
          <Link
            href="/"
            className="flex flex-col items-center text-center transition-opacity hover:opacity-75"
          >
            <span
              className="text-lg font-bold uppercase tracking-[0.45em] leading-none text-[var(--color-off-white)]"
              style={{ fontFamily: "'ITC Fenice Std Regular', Georgia, serif" }}
            >
              Drift&nbsp;Wears
            </span>
            <span className="mt-1 text-[7px] font-medium uppercase tracking-[0.5em] text-[var(--color-accent)]">
              Let your style drift
            </span>
          </Link>

          {/* ─── Desktop Nav Links ─── */}
          <ul className="hidden lg:flex items-center gap-8 h-full">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`group relative flex items-center h-full text-[12.5px] font-medium uppercase tracking-[0.12em] transition-colors ${item.highlight
                      ? "text-[var(--color-accent)]"
                      : activeMenu === item.label
                        ? "text-[var(--color-off-white)]"
                        : "text-[var(--color-gray)] hover:text-[var(--color-off-white)]"
                    }`}
                >
                  {item.label}
                  {/* Active/hover underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-accent)] transition-all duration-300 ease-out ${activeMenu === item.label ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* ─── Right Icons ─── */}
          <div className="flex items-center gap-5">
            <button aria-label="Search" className="text-[var(--color-gray)] transition-colors hover:text-[var(--color-off-white)]">
              <Search size={19} strokeWidth={1.5} />
            </button>
            <button aria-label="Wishlist" className="hidden sm:block text-[var(--color-gray)] transition-colors hover:text-[var(--color-off-white)]">
              <Heart size={19} strokeWidth={1.5} />
            </button>
            <button aria-label="Cart" onClick={openCart} className="relative text-[var(--color-gray)] transition-colors hover:text-[var(--color-off-white)]">
              <ShoppingBag size={19} strokeWidth={1.5} />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-2 -top-2 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[var(--color-accent)] px-1 text-[9px] font-bold leading-none text-[var(--color-black)]"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
            <button
              aria-label="Open menu"
              className="relative z-10 lg:hidden text-[var(--color-gray)] transition-colors hover:text-[var(--color-off-white)]"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>

        {/* ─── Full-Width Mega Dropdown ─── */}
        {/* This sits INSIDE <header> so it's naturally below the nav bar
            and inherits the sticky context — no positioning hacks needed. */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              key={activeMenu}
              variants={megaDropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 w-full bg-[var(--color-black)] border-t border-[#1a1a1a] shadow-2xl"
              onMouseEnter={() => {
                if (leaveTimer.current) clearTimeout(leaveTimer.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-[1440px] mx-auto px-10 lg:px-20 py-12">
                <div className="grid grid-cols-[1.5fr_1.5fr_1.5fr_auto] gap-x-12">
                  {/* Category Columns */}
                  {navItems
                    .find((n) => n.label === activeMenu)
                    ?.megaMenu?.sections.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-sm font-semibold tracking-widest text-[var(--color-accent)] mb-2 uppercase">
                          {section.title}
                        </h4>
                        <div className="flex flex-col gap-y-4">
                          {section.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="text-[var(--color-gray)] hover:text-[var(--color-accent)] transition-colors duration-200 flex justify-between items-center"
                            >
                              <span>{link.label}</span>
                              {link.count !== undefined && (
                                <span className="text-xs opacity-50 font-mono">
                                  {link.count}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                  {/* Campaign Image */}
                  {(() => {
                    const campaign = navItems.find((n) => n.label === activeMenu)?.megaMenu;
                    if (!campaign) return null;
                    return (
                      <Link
                        href={campaign.campaignHref}
                        className="col-start-4 justify-self-end group block relative w-[320px] aspect-[3/4] rounded-lg overflow-hidden"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={campaign.campaignImage}
                          alt={campaign.campaignLabel}
                          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <span className="absolute bottom-4 left-4 right-4 text-[12px] font-semibold uppercase tracking-widest text-white">
                          {campaign.campaignLabel}
                        </span>
                      </Link>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── Mobile Overlay ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
            />

            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col bg-[var(--color-black)] lg:hidden"
            >
              {/* Header */}
              <div className="flex h-[68px] items-center justify-between border-b border-white/[0.06] px-6">
                <div className="flex flex-col items-center">
                  <span
                    className="text-base font-bold uppercase tracking-[0.4em] leading-none text-[var(--color-off-white)]"
                    style={{ fontFamily: "'ITC Fenice Std Regular', Georgia, serif" }}
                  >
                    Drift&nbsp;Wears
                  </span>
                  <span className="mt-0.5 text-[6px] font-medium uppercase tracking-[0.4em] text-[var(--color-accent)]">
                    Let your style drift
                  </span>
                </div>
                <button aria-label="Close menu" onClick={closeMobile} className="text-[var(--color-gray)] transition-colors hover:text-[var(--color-off-white)]">
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              {/* Links */}
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-1 flex-col justify-center gap-1 px-8"
              >
                {navItems.map((item) => (
                  <motion.li key={item.label} variants={linkVariant}>
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className={`block py-3.5 text-xl font-semibold uppercase tracking-[0.15em] transition-colors hover:text-[var(--color-accent)] ${item.highlight ? "text-[var(--color-accent)]" : "text-[var(--color-off-white)]"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}

                <motion.li variants={linkVariant} className="mt-8 border-t border-white/[0.08] pt-6 space-y-1">
                  <Link href="#" onClick={closeMobile} className="flex items-center gap-3 py-2 text-sm text-[var(--color-gray)] transition-colors hover:text-[var(--color-off-white)]">
                    <Heart size={16} strokeWidth={1.5} /> Wishlist
                  </Link>
                  <Link href="#" onClick={closeMobile} className="flex items-center gap-3 py-2 text-sm text-[var(--color-gray)] transition-colors hover:text-[var(--color-off-white)]">
                    <Search size={16} strokeWidth={1.5} /> Search
                  </Link>
                </motion.li>
              </motion.ul>

              <div className="h-[2px] bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent)]/30 to-transparent" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}