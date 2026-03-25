CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  first_name TEXT,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  destination TEXT,
  budget TEXT,
  interest TEXT,
  contact_type TEXT,
  preferred_date TEXT,
  preferred_time TEXT,
  source_page TEXT,
  property_name TEXT,
  message TEXT,
  status TEXT DEFAULT 'new'
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.leads
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow authenticated inserts" ON public.leads
  FOR INSERT TO authenticated WITH CHECK (true);