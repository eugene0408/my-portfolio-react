import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const getMatches = () => window.matchMedia(query).matches;

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }

    // Safari < 14 fallback (eslint-safe)
    media.onchange = listener;
    return () => {
      media.onchange = null;
    };
  }, [query]);

  return matches;
}
