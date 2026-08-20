import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToHash() {
  const { hash, key, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    const target = document.getElementById(targetId);

    target?.scrollIntoView();
  }, [hash, key, pathname]);

  return null;
}
