// import { useEffect, useState } from "react";

// const validPages = new Set([
//   "index",
//   "phu-huynh",
//   "lop-cha-me",
//   "dao-tao",
//   "chuyen-giao",
//   "sach",
//   "khoa-hoc",
//   "lien-he",
//   "kien-thuc-khoa-hoc",
//    // Admin
//   "admin",
// ]);

// const readHash = () => {
//   const raw = (window.location.hash || "#index").slice(1);
//   const [page, anchor] = raw.split("/");
//   return {
//     page: validPages.has(page) ? page : "index",
//     anchor: anchor || "",
//   };
// };

// export function useHashRoute() {
//   const [route, setRoute] = useState(readHash);

//   useEffect(() => {
//     const onHashChange = () => setRoute(readHash());
//     window.addEventListener("hashchange", onHashChange);
//     return () => window.removeEventListener("hashchange", onHashChange);
//   }, []);

//   useEffect(() => {
//     if (route.anchor) {
//       window.setTimeout(() => {
//         document.getElementById(route.anchor)?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }, 30);
//     } else {
//       window.scrollTo({ top: 0 });
//     }
//   }, [route]);

//   return route;
// }

import {
  useEffect,
  useState,
} from "react";

const validPages = new Set([
  "index",

  "phu-huynh",

  "lop-cha-me",

  "dao-tao",

  "chuyen-giao",

  "sach",

  "khoa-hoc",

  "lien-he",

  "kien-thuc-khoa-hoc",

  // Admin
  "admin",
]);

const readHash = () => {
  /*
   * Ví dụ:
   *
   * #index
   *
   * #dao-tao/abc
   *
   * #/kien-thuc-khoa-hoc/
   * mat-dieu-khien-chu-y-loi-noi-o-tre-nho-la-gi
   */

  const raw = (
    window.location.hash ||
    "#index"
  )
    .replace(/^#\/?/, "")
    .replace(/\/+$/, "");

  const parts = raw
    .split("/")
    .filter(Boolean);

  const page =
    parts[0] || "index";

  /*
   * Knowledge detail:
   *
   * #/kien-thuc-khoa-hoc/:slug
   */
  if (
    page ===
      "kien-thuc-khoa-hoc" &&
    parts.length > 1
  ) {
    return {
      page:
        "kien-thuc-khoa-hoc",

      slug: decodeURIComponent(
        parts
          .slice(1)
          .join("/"),
      ),

      anchor: "",
    };
  }

  /*
   * Các page cũ vẫn giữ
   * logic anchor như trước.
   */
  const anchor =
    parts[1] || "";

  return {
    page: validPages.has(page)
      ? page
      : "index",

    slug: "",

    anchor,
  };
};

export function useHashRoute() {
  const [route, setRoute] =
    useState(readHash);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(readHash());
    };

    window.addEventListener(
      "hashchange",
      onHashChange,
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        onHashChange,
      );
    };
  }, []);

  /*
   * Scroll
   *
   * Chỉ xử lý anchor.
   * Slug không dùng để scroll.
   */
  useEffect(() => {
    if (route.anchor) {
      window.setTimeout(() => {
        document
          .getElementById(
            route.anchor,
          )
          ?.scrollIntoView({
            behavior: "smooth",

            block: "start",
          });
      }, 30);

      return;
    }

    window.scrollTo({
      top: 0,

      behavior: "auto",
    });
  }, [
    route.page,
    route.slug,
    route.anchor,
  ]);

  return route;
}