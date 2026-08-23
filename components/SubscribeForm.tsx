"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const fieldClass =
  "w-full border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors";

export function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // No backend is configured: compose a pre-filled email as a graceful fallback.
    // Only an email address is collected — nothing about the reader's circumstances.
    const subject = "Subscribe — ARFA notes";
    const body = `Please add this address to the distribution list: ${data.get("email") || ""}`;

    if (typeof window !== "undefined") {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-paper-deep p-9 lg:p-11">
        <div className="rule-accent mb-6" />
        <h3 className="display text-2xl text-ink">Thank you</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
          Your address will be added to the distribution list. If your email client did
          not open, write to{" "}
          <a href={`mailto:${site.email}`} className="link-underline text-ink">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-paper-deep p-9 lg:p-11">
      <div className="rule-accent mb-6" />
      <h3 className="display text-2xl text-ink">Receive the notes</h3>
      <p className="mt-4 text-base leading-relaxed text-ink-soft">
        Published notes are sent out when they appear. No schedule, no promotions,
        nothing else — and unsubscribing is a one-line reply.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-7">
        <div>
          <label htmlFor="email" className="eyebrow mb-2 block text-ink-faint">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-accent-deep"
        >
          Join the list
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </form>
      <p className="mt-7 text-xs leading-relaxed text-ink-faint">
        Only an email address is collected, and it is used for nothing but sending the
        notes. The list is free. Subscribing creates no client relationship and is not a
        request for advice —{" "}
        <Link href="/legal" className="link-underline text-ink-soft">
          see the notice
        </Link>
        .
      </p>
    </div>
  );
}
