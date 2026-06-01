"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, BookOpenCheck, Home, Menu, Settings, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview", icon: Home },
  { label: "Courses", icon: BookOpenCheck },
  { label: "Insights", icon: BarChart3 },
  { label: "AI Coach", icon: Sparkles },
  { label: "Settings", icon: Settings }
];

export function Sidebar() {
  const [active, setActive] = useState("Overview");
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <nav
        className={cn(
          "sticky top-5 hidden h-[calc(100vh-2.5rem)] shrink-0 rounded-[8px] border border-white/10 bg-ink-900/78 p-3 shadow-card backdrop-blur-xl md:block",
          expanded ? "w-64" : "w-[84px]",
          "transition-[width] duration-300 ease-out lg:w-64"
        )}
        aria-label="Primary navigation"
      >
        <div className="flex h-full flex-col">
          <header className="mb-7 flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-plasma text-ink-950">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="hidden truncate text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 lg:block">
                NovaLearn
              </span>
              {expanded ? (
                <span className="truncate text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 lg:hidden">
                  NovaLearn
                </span>
              ) : null}
            </div>
            <button
              type="button"
              className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white md:flex lg:hidden"
              onClick={() => setExpanded((value) => !value)}
              aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.label;

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setActive(item.label)}
                    className={cn(
                      "relative flex h-12 w-full items-center gap-3 overflow-hidden rounded-[8px] px-3 text-sm font-medium text-slate-400 transition-colors hover:text-white",
                      isActive && "text-white"
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="sidebar-active"
                        className="absolute inset-0 rounded-[8px] border border-plasma/20 bg-plasma/[0.12]"
                        transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      />
                    ) : null}
                    <Icon className="relative h-5 w-5 shrink-0" aria-hidden="true" />
                    <span className={cn("relative hidden truncate lg:block", expanded && "md:block")}>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <nav
        className="fixed inset-x-3 bottom-3 z-30 rounded-[8px] border border-white/10 bg-ink-900/90 p-2 shadow-card backdrop-blur-xl md:hidden"
        aria-label="Mobile navigation"
      >
        <ul className="grid grid-cols-5 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;

            return (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => setActive(item.label)}
                  className="relative flex h-12 w-full items-center justify-center rounded-[8px] text-slate-400"
                  aria-label={item.label}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="mobile-active"
                      className="absolute inset-0 rounded-[8px] bg-plasma/[0.14]"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    />
                  ) : null}
                  <Icon className={cn("relative h-5 w-5", isActive && "text-plasma")} aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
