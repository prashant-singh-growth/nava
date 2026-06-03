/**
 * Pick a viewport "look-ahead" distance (rootMargin for IntersectionObserver)
 * based on the user's connection. Faster networks get a bigger head start so
 * skeletons effectively never appear; slow / data-saver users stay conservative.
 */

type NetworkInfo = {
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
  saveData?: boolean;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInfo;
  mozConnection?: NetworkInfo;
  webkitConnection?: NetworkInfo;
};

export function getNetworkAwareRootMargin(): string {
  if (typeof navigator === "undefined") return "1000px 0px";

  const nav = navigator as NavigatorWithConnection;
  const conn = nav.connection || nav.mozConnection || nav.webkitConnection;

  if (!conn) return "1000px 0px"; // unknown → generous default

  if (conn.saveData) return "300px 0px";

  switch (conn.effectiveType) {
    case "slow-2g":
    case "2g":
      return "200px 0px";
    case "3g":
      return "500px 0px";
    case "4g":
      return "1500px 0px";
    default:
      return "1000px 0px";
  }
}
