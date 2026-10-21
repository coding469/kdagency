create policy "Allow authenticated delete" on public.quote_requests
  for delete
  to authenticated
  using (true);
