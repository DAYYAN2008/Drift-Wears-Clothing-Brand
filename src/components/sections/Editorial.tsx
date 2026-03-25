"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Editorial() {
  return (
    <section className="bg-[var(--color-off-white)] py-20 md:py-28 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-stretch gap-0">

        {/* ── Left: Image (60%) ── */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full md:w-[60%] overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://picsum.photos/900/700?grayscale&random=2"
            alt="Editorial – Born from the streets"
            className="h-full w-full object-cover min-h-[320px] md:min-h-[560px]"
          />
        </motion.div>

        {/* ── Right: Text content (40%) ── */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full md:w-[40%] flex items-center"
        >
          <div className="relative pl-8 md:pl-12 py-10 md:py-0">
            {/* Gold vertical accent line */}
            <span
              className="absolute left-0 top-10 md:top-0 bottom-10 md:bottom-0 w-[2px]"
              style={{ backgroundColor: "#c8a96e" }}
              aria-hidden="true"
            />

            {/* Eyebrow */}
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Our Identity
            </p>

            {/* Heading */}
            <h2
              className="mb-6 text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-[var(--color-black)]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Born from the streets.{" "}
              <span className="italic">Worn by the bold.</span>
            </h2>

            {/* Body copy */}
            <p className="mb-4 text-sm md:text-base leading-relaxed text-[var(--color-gray)]">
              Drift Wears was built on a simple belief — that style isn&apos;t
              reserved for runways. It lives in the alley, the corner store,
              the rooftop at midnight.
            </p>
            <p className="mb-4 text-sm md:text-base leading-relaxed text-[var(--color-gray)]">
              Every piece we design carries that tension between raw and refined.
              Cut for movement. Made to outlast the moment.
            </p>
            <p className="mb-10 text-sm md:text-base leading-relaxed text-[var(--color-gray)]">
              This isn&apos;t fast fashion. This is a statement — worn quietly,
              felt everywhere.
            </p>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--color-black)] border-b border-[var(--color-accent)] pb-1 transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              Our Story →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
