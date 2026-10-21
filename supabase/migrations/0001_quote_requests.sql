create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  message text not null
);

alter table public.quote_requests enable row level security;

create policy "Allow public insert" on public.quote_requests
  for insert
  to anon
  with check (true);

create policy "Allow authenticated read" on public.quote_requests
  for select
  to authenticated
  using (true);
