"use client";

import { useEffect, useState } from "react";

export type DotSection = { id: string; label: string };

export function SectionDots({ sections }: { sections: DotSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            aria-current={isActive ? "true" : undefined}
            className="group relative flex items-center"
          >
            <span
              className={`block rounded-full border transition-all duration-300 ${
                isActive
                  ? "h-3.5 w-3.5 border-accent"
                  : "h-2 w-2 border-ink-faint/60 group-hover:border-accent"
              }`}
            >
              <span
                className={`absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-300 ${
                  isActive ? "bg-accent" : "bg-transparent group-hover:bg-accent"
                }`}
              />
            </span>
            <span className="pointer-events-none absolute right-7 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
