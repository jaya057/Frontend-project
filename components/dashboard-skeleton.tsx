export function DashboardSkeleton() {
  return (
    <div className="min-h-screen px-4 pb-24 pt-4 sm:px-6 md:pb-8 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] gap-5">
        <aside className="sticky top-5 hidden h-[calc(100vh-2.5rem)] w-[84px] shrink-0 rounded-[8px] border border-white/10 bg-ink-900/70 p-3 md:block lg:w-64">
          <div className="h-11 w-11 animate-pulse rounded-[8px] bg-white/10" />
          <div className="mt-8 space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-12 animate-pulse rounded-[8px] bg-white/[0.08]" />
            ))}
          </div>
        </aside>
        <main className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <section
              key={index}
              className={[
                "min-h-[190px] animate-pulse rounded-[8px] border border-white/10 bg-white/[0.06]",
                index === 0 ? "min-h-[320px] md:col-span-2 xl:row-span-2" : "",
                index === 1 ? "min-h-[320px] md:col-span-2" : ""
              ].join(" ")}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
