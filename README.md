# Next-Gen Learning Dashboard

A high-fidelity student dashboard prototype built for the Frontend Intern Challenge. It uses Next.js App Router, Supabase, Tailwind CSS, Framer Motion, TypeScript, and Lucide React.

## Tech Stack

- Next.js App Router with Server Components
- Supabase PostgreSQL for live course data
- Tailwind CSS for styling
- Framer Motion for staggered entrance animations, spring hover states, and navigation layout animations
- Lucide React for icons
- TypeScript for typed Supabase payloads

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Add your Supabase project values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Run the app:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Supabase Setup

1. Create a free Supabase project.
2. Open the SQL editor.
3. Run the SQL in `supabase/schema.sql`.
4. Copy your project URL and anon key into `.env.local`.

The `courses` table uses:

- `id` uuid primary key
- `title` text
- `progress` integer
- `icon_name` text
- `created_at` timestamp

## Architecture Notes

Course data is fetched in `app/page.tsx`, which is a Server Component. The Supabase client lives in `lib/supabase/server.ts`, and `lib/courses.ts` handles the server-side query with `noStore()` so dashboard data stays fresh.

The interactive pieces are isolated in client components:

- `components/dashboard.tsx` owns Framer Motion page/card animations.
- `components/sidebar.tsx` owns navigation state and `layoutId` highlight animations.
- `components/course-card.tsx` renders dynamic Lucide icons and animated progress bars.

This split keeps database access on the server while preserving rich client-side motion where it is actually needed.

## Performance Choices

Animations use `transform` and `opacity` so hover and entrance states avoid layout shifts. Cards keep stable dimensions through grid tracks, minimum heights, and fixed icon/progress areas. Loading uses `app/loading.tsx` with skeleton cards while the Server Component route resolves.

## Deployment

Deploy on Vercel and add these environment variables in the Vercel dashboard:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Do not commit `.env.local`.
