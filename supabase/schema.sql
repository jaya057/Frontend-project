create extension if not exists "pgcrypto";

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone not null default now()
);

alter table public.courses enable row level security;

create policy "Courses are publicly readable"
on public.courses
for select
to anon
using (true);

insert into public.courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 76, 'Code2'),
  ('AI Product Thinking', 64, 'BrainCircuit'),
  ('Data Visualization Lab', 82, 'LineChart'),
  ('Design Systems Mastery', 58, 'Palette');
