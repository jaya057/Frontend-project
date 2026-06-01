"use client";

import {
  Atom,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  FlaskConical,
  LineChart,
  LucideIcon,
  Palette,
  PlayCircle,
  Sigma
} from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { ProgressBar } from "@/components/progress-bar";
import type { Course } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  Atom,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  FlaskConical,
  LineChart,
  Palette,
  PlayCircle,
  Sigma
};

export function CourseCard({ course }: { course: Course }) {
  const Icon = iconMap[course.icon_name] ?? BookOpen;

  return (
    <BentoCard glow="violet" className="min-h-[190px]">
      <div className="relative z-10 flex h-full flex-col justify-between gap-7">
        <header className="flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.08]">
            <Icon className="h-5 w-5 text-plasma" aria-hidden="true" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            Active
          </span>
        </header>

        <section aria-label={`${course.title} progress`}>
          <h3 className="text-balance text-lg font-semibold leading-snug text-white">{course.title}</h3>
          <div className="mt-5 flex items-center gap-3">
            <ProgressBar value={course.progress} />
            <span className="w-10 text-right text-sm font-semibold text-slate-200">{course.progress}%</span>
          </div>
        </section>
      </div>
    </BentoCard>
  );
}
