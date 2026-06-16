"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line-soft bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="display text-2xl tracking-[0.18em] text-ink"
          aria-label="ARFA — home"
        >
          {site.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-sm tracking-wide transition-colors ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-accent-deep"
          >
            Request a Conversation
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line-soft bg-paper lg:hidden ${
          open ? "max-h-[80vh]" : "max-h-0 border-t-transparent"
        } transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6 sm:px-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="display border-b border-line-soft py-3 text-2xl text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-medium text-paper"
          >
            Request a Conversation →
          </Link>
        </nav>
      </div>
    </header>
  );
}
