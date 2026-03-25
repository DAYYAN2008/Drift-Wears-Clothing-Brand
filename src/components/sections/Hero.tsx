"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ─────────────────── ANIMATION VARIANTS ─────────────────── */

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

/* ────────────────────── HERO COMPONENT ────────────────────── */

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Parallax: image scrolls at 0.5× speed */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* ── Background Image with parallax ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* ── Dark overlay gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />

      {/* ── Text content ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        {/* Eyebrow */}
        <motion.span
          variants={fadeUp}
          className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-[var(--color-accent)] md:text-xs"
        >
          Spring / Summer 2025
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold uppercase leading-[1.05] tracking-[0.06em] text-[var(--color-off-white)] sm:text-5xl md:text-7xl"
        >
          Dress the Moment
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-4 text-sm tracking-[0.18em] text-[var(--color-gray)] md:text-base"
        >
          New collection — live now
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <Link
            href="/men"
            className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-none bg-[var(--color-accent)] px-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-black)] transition-all duration-300 hover:bg-[var(--color-accent)]/85"
          >
            Shop Men
          </Link>

          <Link
            href="/women"
            className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-none border border-white/40 bg-transparent px-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-off-white)] transition-all duration-300 hover:border-white hover:bg-white/5"
          >
            Shop Women
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[var(--color-off-white)]/60"
      >
        <ChevronDown size={28} strokeWidth={1.2} />
      </motion.div>
    </section>
  );
}
