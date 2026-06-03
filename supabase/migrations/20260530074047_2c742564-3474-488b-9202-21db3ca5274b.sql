DROP POLICY IF EXISTS "Anyone can submit a landing page lead" ON public.landing_page_leads;
REVOKE INSERT ON public.landing_page_leads FROM anon;
REVOKE INSERT ON public.landing_page_leads FROM authenticated;