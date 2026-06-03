import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Redirect legacy WordPress URL → new React route.
 * Preserves query string (e.g. ?job_id=...) so the Ceipal widget on
 * /corporate/careers/ can still open the right job detail.
 */
const LegacyRedirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();
  const { search, hash } = useLocation();

  useEffect(() => {
    navigate(`${to}${search}${hash}`, { replace: true });
  }, [to, search, hash, navigate]);

  return null;
};

export default LegacyRedirect;
