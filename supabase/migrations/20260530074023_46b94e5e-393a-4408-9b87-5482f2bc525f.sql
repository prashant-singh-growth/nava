CREATE TABLE public.landing_page_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  use_case text NOT NULL,
  landing_page text NOT NULL CHECK (landing_page IN ('industrial-safety', 'dock-operations')),
  referrer text,
  user_agent text
);

GRANT INSERT ON public.landing_page_leads TO anon;
GRANT INSERT ON public.landing_page_leads TO authenticated;
GRANT ALL ON public.landing_page_leads TO service_role;

ALTER TABLE public.landing_page_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a landing page lead"
  ON public.landing_page_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX landing_page_leads_created_at_idx ON public.landing_page_leads (created_at DESC);
CREATE INDEX landing_page_leads_landing_page_idx ON public.landing_page_leads (landing_page);