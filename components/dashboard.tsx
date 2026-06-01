"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowUpRight, Flame, GraduationCap, Target, Zap } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { CourseCard } from "@/components/course-card";
import { Sidebar } from "@/components/sidebar";
import type { Course } from "@/lib/types";

type DashboardProps = {
  courses: Course[];
  error: string | null;
};

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

const tile = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 22 }
  }
};

export function Dashboard({ courses, error }: DashboardProps) {
  const averageProgress =
    courses.length > 0 ? Math.round(courses.reduce((total, course) => total + course.progress, 0) / courses.length) : 0;

  return (
    <div className="min-h-screen px-4 pb-24 pt-4 text-slate-100 sm:px-6 md:pb-8 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1440px] gap-5">
        <Sidebar />

        <main className="min-w-0 flex-1" aria-label="Student dashboard">
          <motion.section
            className="grid auto-rows-[minmax(170px,auto)] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <BentoCard
              variants={tile}
              glow="teal"
              className="min-h-[320px] md:col-span-2 xl:col-span-2 xl:row-span-2"
            >
              <section className="relative z-10 flex h-full flex-col justify-between gap-10">
                <header>
                  <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-plasma/20 bg-plasma/10 px-3 py-1 text-sm font-medium text-plasma">
                    <Zap className="h-4 w-4" aria-hidden="true" />
                    Adaptive learning active
                  </p>
                  <h1 className="max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    Welcome back, Jaya
                  </h1>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                    Your dashboard is tuned for today&apos;s focus blocks, course momentum, and streak consistency.
                  </p>
                </header>

                <div className="grid gap-3 sm:grid-cols-3">
                  <Metric icon={Flame} label="Daily streak" value="12 days" />
                  <Metric icon={Target} label="Average progress" value={`${averageProgress}%`} />
                  <Metric icon={GraduationCap} label="Active courses" value={`${courses.length || 0}`} />
                </div>
              </section>
            </BentoCard>

            <BentoCard variants={tile} glow="amber" className="min-h-[320px] md:col-span-2 xl:col-span-2">
              <section className="relative z-10 h-full">
                <header className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-ember">Activity pulse</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Learning consistency</h2>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-400" aria-hidden="true" />
                </header>
                <ActivityGraph />
              </section>
            </BentoCard>

            <BentoCard variants={tile} glow="violet" className="min-h-[190px]">
              <section className="relative z-10 flex h-full flex-col justify-between">
                <p className="text-sm font-medium text-slate-400">Next milestone</p>
                <div>
                  <h2 className="text-3xl font-semibold text-white">Project sprint</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Complete two lessons to unlock peer review.</p>
                </div>
              </section>
            </BentoCard>

            <BentoCard variants={tile} glow="teal" className="min-h-[190px]">
              <section className="relative z-10 flex h-full flex-col justify-between">
                <p className="text-sm font-medium text-slate-400">AI coach</p>
                <div>
                  <h2 className="text-3xl font-semibold text-white">18 min</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Suggested recap before your next quiz.</p>
                </div>
              </section>
            </BentoCard>

            {error ? (
              <BentoCard variants={tile} glow="amber" className="md:col-span-2 xl:col-span-4">
                <section className="relative z-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-ember/15 text-ember">
                    <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">Supabase connection needs attention</h2>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{error}</p>
                  </div>
                </section>
              </BentoCard>
            ) : null}

            {!error && courses.length === 0 ? (
              <BentoCard variants={tile} glow="violet" className="md:col-span-2 xl:col-span-4">
                <section className="relative z-10">
                  <h2 className="text-lg font-semibold text-white">No active courses yet</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Your active courses will appear here once enrollment begins.
                  </p>
                </section>
              </BentoCard>
            ) : null}

            {courses.map((course) => (
              <motion.div key={course.id} variants={tile} className="min-h-[190px]">
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.section>
        </main>
      </div>
    </div>
  );
}

function Metric({
  icon: Icon,
  label,
  value
}: {
  icon: typeof Flame;
  label: string;
  value: string;
}) {
  return (
    <article className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4">
      <Icon className="mb-5 h-5 w-5 text-plasma" aria-hidden="true" />
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
    </article>
  );
}

function ActivityGraph() {
  const values = [24, 54, 38, 76, 68, 92, 58, 82, 44, 64, 88, 72, 96, 52, 80, 70, 42, 62, 90, 78, 56];

  return (
    <div className="grid h-[190px] grid-cols-7 gap-2" aria-label="Mock learning activity graph">
      {values.map((value, index) => (
        <motion.span
          key={`${value}-${index}`}
          className="rounded-[6px] bg-gradient-to-t from-plasma/20 to-plasma/80"
          initial={{ scaleY: 0.2, opacity: 0.35 }}
          animate={{ scaleY: value / 100, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.12 + index * 0.018 }}
          style={{ transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
}
