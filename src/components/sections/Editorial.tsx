"use client";

import Image from "next/image";
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
    <section className="bg-[var(--color-off-white)] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col items-stretch md:flex-row">

          {/* ── Left: Image (60%) ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative min-h-[320px] w-full overflow-hidden md:min-h-[560px] md:w-[60%]"
          >
            <Image
              src="https://picsum.photos/seed/editorial-main/900/700?grayscale"
              alt="Editorial – Born from the streets"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </motion.div>

          {/* ── Right: Text content (40%) ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex w-full items-center md:w-[40%]"
          >
            <div className="relative py-10 pl-8 md:py-12 md:pl-16">
              {/* Gold vertical accent line */}
              <span
                className="absolute left-0 bottom-10 top-10 w-[2px] md:bottom-12 md:top-12"
                style={{ backgroundColor: "#c8a96e" }}
                aria-hidden="true"
              />

              {/* Eyebrow */}
              <p className="mb-4 text-[11px] font-medium uppercase tracking-widest text-[var(--color-accent)]">
                Our Identity
              </p>

              {/* Heading */}
              <h2
                className="mb-6 text-2xl leading-[1.1] text-[var(--color-black)] md:text-4xl lg:text-5xl"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Born from the streets.{" "}
                <span className="italic">Worn by the bold.</span>
              </h2>

              {/* Body copy */}
              <div className="mb-10 space-y-4">
                <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-gray)] md:text-base">
                  Drift Wears was built on a simple belief — that style isn&apos;t
                  reserved for runways. It lives in the alley, the corner store,
                  the rooftop at midnight.
                </p>
                <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-gray)] md:text-base">
                  Every piece we design carries that tension between raw and refined.
                  Cut for movement. Made to outlast the moment.
                </p>
                <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-gray)] md:text-base">
                  This isn&apos;t fast fashion. This is a statement — worn quietly,
                  felt everywhere.
                </p>
              </div>

              {/* CTA */}
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border-b border-[var(--color-accent)] pb-1 text-[12px] font-bold uppercase tracking-[0.22em] text-[var(--color-black)] transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  Our Story →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
