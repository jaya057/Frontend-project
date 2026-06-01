"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BentoCardProps = Omit<HTMLMotionProps<"article">, "children"> & {
  children: ReactNode;
  glow?: "teal" | "violet" | "amber";
};

const glowMap = {
  teal: "from-plasma/[0.18] via-white/[0.03] to-transparent",
  violet: "from-aurora/[0.18] via-white/[0.03] to-transparent",
  amber: "from-ember/[0.18] via-white/[0.03] to-transparent"
};

export function BentoCard({ className, glow = "teal", children, ...props }: BentoCardProps) {
  return (
    <motion.article
      className={cn(
        "grain group relative overflow-hidden rounded-[8px] border border-white/10 bg-ink-850/80 p-5 shadow-card backdrop-blur-xl",
        "before:rounded-[8px] after:absolute after:inset-px after:-z-10 after:rounded-[7px]",
        className
      )}
      whileHover={{ y: -4, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-70 transition-opacity duration-300 group-hover:opacity-100",
          glowMap[glow]
        )}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[8px] ring-1 ring-inset ring-white/5 group-hover:ring-plasma/30" />
      {children}
    </motion.article>
  );
}
