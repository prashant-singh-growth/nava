import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Enforces canonical trailing-slash URLs on the client.
 * `/contact-us`  →  `/contact-us/`
 * Skips: `/` (already slash), files (anything with a `.` in the last segment),
 * and React Router relative segments. Uses `replace` so the no-slash URL is
 * not added to history (mirrors a server 301).
 *
 * Server-level 301s (Vercel/Cloudflare/Nginx) should still be configured —
 * see /mnt/documents/trailing-slash-redirect-server-config.md. This client
 * fallback covers Lovable hosting where server rewrites are not honored.
 */
const TrailingSlashRedirect = () => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/" || pathname.endsWith("/")) return;
    const last = pathname.split("/").pop() || "";
    if (last.includes(".")) return; // file-like path, leave alone
    navigate(`${pathname}/${search}${hash}`, { replace: true });
  }, [pathname, search, hash, navigate]);

  return null;
};

export default TrailingSlashRedirect;
