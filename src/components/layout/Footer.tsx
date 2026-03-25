import Link from "next/link";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.67a8.18 8.18 0 0 0 4.77 1.52V6.74a4.85 4.85 0 0 1-1-.05z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.23-5.22 1.23-5.22s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.87 3.51-.25 1.05.52 1.9 1.55 1.9 1.86 0 3.11-2.39 3.11-5.22 0-2.16-1.46-3.67-3.55-3.67-2.42 0-3.84 1.82-3.84 3.7 0 .73.28 1.51.63 1.94.07.08.08.16.06.24l-.24.96c-.04.15-.13.18-.3.11-1.1-.51-1.79-2.13-1.79-3.43 0-2.79 2.03-5.36 5.85-5.36 3.07 0 5.46 2.19 5.46 5.11 0 3.05-1.92 5.5-4.59 5.5-.9 0-1.74-.47-2.03-1.02l-.55 2.07c-.2.77-.74 1.73-1.1 2.32.83.26 1.7.4 2.61.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
  </svg>
);

const shopLinks = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Sale", href: "/sale" },
  { label: "Accessories", href: "/accessories" },
];

const helpLinks = [
  { label: "Size Guide", href: "/size-guide" },
  { label: "Shipping & Returns", href: "/shipping" },
  { label: "Track My Order", href: "/track" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

const companyLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socials = [
  { label: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
  { label: "Facebook", icon: FacebookIcon, href: "https://facebook.com" },
  { label: "TikTok", icon: TikTokIcon, href: "https://tiktok.com" },
  { label: "Pinterest", icon: PinterestIcon, href: "https://pinterest.com" },
];

const paymentMethods = ["Visa", "Mastercard", "EasyPaisa", "JazzCash"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-black)]">
      {/* Gold top border with subtle glow */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60" />

      {/* Main grid */}
      <div className="mx-auto max-w-[1440px] px-12 py-32 md:px-24 lg:px-40 lg:py-48">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-32">

          {/* ── Col 1: Brand Identity ── */}
          <div className="flex flex-col items-start pl-6 pt-6 pr-8">
            <Link
              href="/"
              className="flex flex-col items-start transition-opacity hover:opacity-75"
            >
              <span 
                className="text-2xl font-bold uppercase tracking-[0.45em] leading-none text-[var(--color-off-white)]"
                style={{ fontFamily: "'ITC Fenice Std Regular', Georgia, serif" }}
              >
                Drift&nbsp;Wears
              </span>
              <span className="mt-3 whitespace-nowrap text-[8.5px] font-medium uppercase tracking-[0.6em] text-[var(--color-accent)]">
                Let your style drift
              </span>
            </Link>
            
            <p className="mt-12 max-w-[320px] text-[15px] leading-[1.8] text-[var(--color-gray)]">
              Elevated streetwear essentials crafted for those who move different. 
              Designed for the street, refined for the soul.
            </p>

            {/* Social icons */}
            <div className="mt-16 flex items-center gap-8">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-[var(--color-gray)] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/5 hover:text-[var(--color-accent)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Shop ── */}
          <div className="lg:pl-12">
            <h4 className="mb-12 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Shop
            </h4>
            <ul className="space-y-6">
              {shopLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[15px] leading-relaxed text-[var(--color-gray)] transition-all duration-300 hover:translate-x-1.5 hover:text-[var(--color-off-white)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Help ── */}
          <div className="lg:pl-12">
            <h4 className="mb-12 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Support
            </h4>
            <ul className="space-y-6">
              {helpLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[15px] leading-relaxed text-[var(--color-gray)] transition-all duration-300 hover:translate-x-1.5 hover:text-[var(--color-off-white)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Company ── */}
          <div className="lg:pl-12">
            <h4 className="mb-12 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Brand
            </h4>
            <ul className="space-y-6">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[15px] leading-relaxed text-[var(--color-gray)] transition-all duration-300 hover:translate-x-1.5 hover:text-[var(--color-off-white)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-12 py-16 md:flex-row md:justify-between md:px-24 lg:px-40">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-gray)]/60">
            &copy; {year} Drift Wears. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-sm border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gray)]/80"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
