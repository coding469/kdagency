create extension if not exists pg_net with schema extensions;

create or replace function public.notify_quote_request()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  perform net.http_post(
    url := 'https://zntbfjidtmizaqyysuyd.supabase.co/functions/v1/notify-quote-request',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'apikey', 'sb_publishable_xSyWPX5ixLXwsiJhLrkV9g_flZs8BIT'
    ),
    body := jsonb_build_object('record', to_jsonb(new))
  );
  return new;
end;
$$;

drop trigger if exists on_quote_request_created on public.quote_requests;
create trigger on_quote_request_created
  after insert on public.quote_requests
  for each row execute function public.notify_quote_request();
