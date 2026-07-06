"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
    });

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute("href");

      if (!href || href === "#") return;

      const element = document.querySelector<HTMLElement>(href);
      if (!element) return;

      event.preventDefault();

      lenis.scrollTo(element, {
        duration: 6.0,
        offset: -20,
      });
    };

    document.addEventListener("click", handleAnchorClick);

    let frameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
