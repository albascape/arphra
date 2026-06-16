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
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  // Light treatment while sitting over the dark photographic hero; dark once
  // scrolled onto the light page body.
  const solid = scrolled || open;
  const logoColor = solid ? "text-ink" : "text-paper";
  const lineColor = solid ? "bg-ink" : "bg-paper";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-line-soft bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="ARFA — home">
          <Logo className={solid ? "text-accent" : "text-paper"} />
          <span className={`display text-2xl tracking-[0.18em] transition-colors ${logoColor}`}>
            ARFA
          </span>
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
                  solid
                    ? active
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink"
                    : active
                      ? "text-paper"
                      : "text-paper/75 hover:text-paper"
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
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              solid
                ? "bg-ink text-paper hover:bg-accent-deep"
                : "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink"
            }`}
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
            className={`h-px w-6 transition-all duration-300 ${lineColor} ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${lineColor} ${
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

/* Minimal interlocking-rings monogram (original mark) ------------------------ */
function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className={`transition-colors ${className}`}
      aria-hidden
    >
      <circle cx="12" cy="15" r="8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="15" r="8" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
    </svg>
  );
}
