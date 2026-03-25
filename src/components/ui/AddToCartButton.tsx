"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import type { Product } from "@/lib/mock-data";

interface AddToCartButtonProps {
  product: Product;
  selectedSize?: string;
  selectedColor?: string;
  className?: string;
}

export default function AddToCartButton({
  product,
  selectedSize,
  selectedColor,
  className = "",
}: AddToCartButtonProps) {
  const { addItem, openCart } = useCartStore();
  const [added, setAdded] = useState(false);

  const size = selectedSize ?? product.sizes[0];
  const color = selectedColor ?? product.colors[0];

  const handleAdd = () => {
    if (added) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size,
      color,
      image: `https://picsum.photos/seed/${product.id}/150/200?grayscale`,
    });
    openCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      aria-label="Add to bag"
      className={`relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden bg-[var(--color-accent)] px-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-black)] transition-opacity hover:opacity-85 disabled:cursor-not-allowed ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {added ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <Check size={14} strokeWidth={2.5} />
            Added
          </motion.span>
        ) : (
          <motion.span
            key="add"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <ShoppingBag size={14} strokeWidth={2} />
            Add to Bag
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
