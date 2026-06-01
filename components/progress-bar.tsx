"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10" aria-label={`${safeValue}% complete`}>
      <motion.div
        className="h-full origin-left rounded-full bg-gradient-to-r from-plasma via-sky-300 to-aurora"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: safeValue / 100 }}
        transition={{ type: "spring", stiffness: 120, damping: 22, delay: 0.3 }}
      />
    </div>
  );
}
