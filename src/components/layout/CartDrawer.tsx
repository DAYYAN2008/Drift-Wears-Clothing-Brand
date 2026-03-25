"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.22 } },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "tween" as const, duration: 0.38, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
  },
  exit: {
    x: "100%",
    transition: { type: "tween" as const, duration: 0.3, ease: [0.5, 0, 0.75, 0] as [number, number, number, number] },
  },
};

export default function CartDrawer() {
  const { isOpen, items, closeCart, removeItem, updateQuantity, totalItems, totalPrice } =
    useCartStore();

  const itemCount = totalItems();
  const subtotal = totalPrice();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Dark Overlay ── */}
          <motion.div
            key="cart-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-[2px]"
            onClick={closeCart}
          />

          {/* ── Drawer Panel ── */}
          <motion.aside
            key="cart-drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-[80] flex w-full max-w-[420px] flex-col bg-[var(--color-black)] shadow-2xl"
            aria-label="Shopping cart"
          >
            {/* ─ Header ─ */}
            <div className="flex h-16 items-center justify-between border-b border-white/[0.07] px-6">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} strokeWidth={1.5} className="text-[var(--color-accent)]" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--color-off-white)]">
                  Your Bag
                  <span className="ml-2 font-normal text-[var(--color-gray)]">
                    ({itemCount} {itemCount === 1 ? "item" : "items"})
                  </span>
                </span>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={closeCart}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center text-[var(--color-gray)] transition-colors hover:text-[var(--color-off-white)]"
              >
                <X size={20} strokeWidth={1.5} />
              </motion.button>
            </div>

            {/* ─ Items ─ */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                  <ShoppingBag size={48} strokeWidth={1} className="text-white/10" />
                  <p className="text-sm leading-relaxed text-[var(--color-gray)]">Your bag is empty.</p>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={closeCart}
                    className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] hover:underline"
                  >
                    Continue Shopping
                  </motion.button>
                </div>
              ) : (
                <ul className="divide-y divide-white/[0.06]">
                  {items.map((item) => (
                    <li
                      key={`${item.id}__${item.size}__${item.color}`}
                      className="flex gap-4 px-6 py-4"
                    >
                      {/* Thumbnail — w-20 h-24 per spec */}
                      <div className="h-24 w-20 shrink-0 overflow-hidden rounded-sm bg-white/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image || `https://picsum.photos/seed/${item.id}/150/200?grayscale`}
                          alt={item.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-[13px] font-medium leading-snug text-[var(--color-off-white)]">
                              {item.name}
                            </p>
                            <p className="mt-1 text-[11px] leading-relaxed text-[var(--color-gray)]">
                              {item.size} · {item.color}
                            </p>
                          </div>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeItem(item.id, item.size, item.color)}
                            aria-label="Remove item"
                            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-white/20 transition-colors hover:text-red-400"
                          >
                            <Trash2 size={14} strokeWidth={1.5} />
                          </motion.button>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity stepper — min 44x44 touch target */}
                          <div className="flex items-center border border-white/[0.12]">
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() =>
                                updateQuantity(item.id, item.size, item.color, item.quantity - 1)
                              }
                              aria-label="Decrease quantity"
                              className="flex h-8 w-8 items-center justify-center text-[var(--color-gray)] transition-colors hover:text-[var(--color-off-white)]"
                            >
                              <Minus size={12} strokeWidth={2} />
                            </motion.button>
                            <span className="flex h-8 w-8 items-center justify-center text-[12px] font-medium text-[var(--color-off-white)]">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() =>
                                updateQuantity(item.id, item.size, item.color, item.quantity + 1)
                              }
                              aria-label="Increase quantity"
                              className="flex h-8 w-8 items-center justify-center text-[var(--color-gray)] transition-colors hover:text-[var(--color-off-white)]"
                            >
                              <Plus size={12} strokeWidth={2} />
                            </motion.button>
                          </div>

                          {/* Line price */}
                          <span className="text-[13px] font-semibold text-[var(--color-off-white)]">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* ─ Footer ─ */}
            {items.length > 0 && (
              <div className="border-t border-white/[0.07] p-6">
                <div className="space-y-3">
                  {/* Subtotal */}
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-gray)]">
                      Subtotal
                    </span>
                    <span className="text-lg font-semibold text-[var(--color-off-white)]">
                      ₹{subtotal.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[var(--color-gray)]">
                    Taxes and shipping calculated at checkout.
                  </p>
                </div>

                {/* Checkout button */}
                <motion.div whileTap={{ scale: 0.98 }} className="mt-5">
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="flex h-12 w-full items-center justify-center bg-[var(--color-accent)] text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-black)] transition-opacity hover:opacity-85"
                  >
                    Checkout
                  </Link>
                </motion.div>

                {/* Continue shopping */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={closeCart}
                  className="mt-4 w-full text-center text-[11px] font-medium uppercase tracking-widest text-[var(--color-gray)] transition-colors hover:text-[var(--color-off-white)]"
                >
                  Continue Shopping
                </motion.button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
