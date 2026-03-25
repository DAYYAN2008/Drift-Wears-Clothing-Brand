"use client";

import { motion } from "framer-motion";
import AddToCartButton from "@/components/ui/AddToCartButton";
import { products } from "@/lib/mock-data";

const featured = products.slice(0, 4);

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function FeaturedProducts() {
  return (
    <section className="bg-[var(--color-off-white)] py-20 md:py-28 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Curated for you
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-[0.06em] text-[var(--color-black)]">
              Featured Pieces
            </h2>
          </div>
          <a
            href="/new-arrivals"
            className="hidden sm:block text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gray)] underline-offset-4 hover:text-[var(--color-black)] hover:underline"
          >
            View All →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#e8e4df]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${product.id}/480/600?grayscale`}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
                {/* Badges */}
                <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                  {product.isNew && (
                    <span className="bg-[var(--color-black)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                      New
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-[var(--color-accent)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[var(--color-black)]">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col pt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gray)]">
                  {product.category}
                </p>
                <h3 className="mt-1 text-[14px] font-medium text-[var(--color-black)]">
                  {product.name}
                </h3>
                <p className="mt-1 text-[13px] font-semibold text-[var(--color-black)]">
                  ₹{product.price.toLocaleString()}
                </p>

                {/* Sizes */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.sizes.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="border border-[var(--color-black)]/20 px-2 py-0.5 text-[9px] uppercase tracking-wider text-[var(--color-gray)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <AddToCartButton
                  product={product}
                  className="mt-4 w-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
