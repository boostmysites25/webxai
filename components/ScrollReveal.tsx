"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global scroll reveal engine.
 * Add data-reveal, data-reveal="left", data-reveal="right", or data-reveal="scale"
 * to any element you want to animate in on scroll.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay || "0";
            setTimeout(() => {
              el.classList.add("is-visible");
            }, parseInt(delay));
            observer.unobserve(el); // only reveal once
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]); // Re-run whenever route changes

  return null;
}
