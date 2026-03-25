"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import FadeInWhenVisible from "@/components/ui/FadeInWhenVisible";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="newsletter-section relative overflow-hidden bg-[#0d0d0d] py-24">
      {/* Grain texture overlay via ::before in CSS below */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <FadeInWhenVisible className="relative z-10 mx-auto max-w-xl text-center">
          {/* Eyebrow */}
          <p className="mb-4 text-[11px] font-medium uppercase tracking-widest text-[var(--color-accent)]">
            Newsletter
          </p>

          {/* Heading */}
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.06em] text-[var(--color-off-white)] md:text-4xl">
            Stay in the Loop
          </h2>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-[var(--color-gray)]">
            New drops, exclusive offers, and style edits — straight to your inbox.
          </p>

          {/* Form / Success */}
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]"
                >
                  <Check size={24} strokeWidth={2.5} className="text-[var(--color-black)]" />
                </motion.div>
                <p className="text-sm font-medium text-[var(--color-off-white)]">
                  You&apos;re on the list. Welcome to Drift.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row sm:gap-0"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-12 flex-1 border border-white/[0.12] bg-white/[0.04] px-5 text-sm text-[var(--color-off-white)] placeholder:text-[var(--color-gray)] outline-none transition-colors focus:border-[var(--color-accent)] sm:border-r-0"
                />
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="h-12 shrink-0 bg-[var(--color-accent)] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-black)] transition-opacity hover:opacity-85 disabled:opacity-60"
                >
                  {loading ? "..." : "Subscribe"}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Privacy note */}
          {!submitted && (
            <p className="mt-4 text-[10px] text-[var(--color-gray)]/60">
              No spam. Unsubscribe anytime.
            </p>
          )}
        </FadeInWhenVisible>
      </div>

      <style>{`
        .newsletter-section::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.45;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-repeat: repeat;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
    </section>
  );
}
