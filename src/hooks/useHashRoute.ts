import { useEffect, useState } from "react";

const validPages = new Set([
  "index",
  "phu-huynh",
  "lop-cha-me",
  "dao-tao",
  "chuyen-giao",
  "sach",
  "lien-he",
   // Admin
  "admin",
]);

const readHash = () => {
  const raw = (window.location.hash || "#index").slice(1);
  const [page, anchor] = raw.split("/");
  return {
    page: validPages.has(page) ? page : "index",
    anchor: anchor || "",
  };
};

export function useHashRoute() {
  const [route, setRoute] = useState(readHash);

  useEffect(() => {
    const onHashChange = () => setRoute(readHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (route.anchor) {
      window.setTimeout(() => {
        document.getElementById(route.anchor)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 30);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [route]);

  return route;
}
