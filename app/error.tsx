"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="w-full max-w-lg rounded-[8px] border border-white/10 bg-ink-850/85 p-6 shadow-card backdrop-blur-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-ember/15 text-ember">
          <AlertTriangle className="h-6 w-6" aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-2xl font-semibold text-white">Dashboard failed to render</h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-[8px] bg-plasma px-4 text-sm font-semibold text-ink-950"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Try again
        </button>
      </section>
    </main>
  );
}
