"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative w-full overflow-hidden bg-[var(--color-accent)] text-[var(--color-black)]"
        >
          <div className="flex items-center justify-center py-2.5 px-10 text-center text-[11px] font-semibold uppercase tracking-[0.2em]">
            Free delivery on orders over Rs.&nbsp;3,000
          </div>

          <button
            aria-label="Close announcement"
            onClick={() => setVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors hover:bg-black/10"
          >
            <X size={14} strokeWidth={2} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
