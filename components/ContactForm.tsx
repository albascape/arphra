"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const enquiryTypes = [
  "Strategic Review",
  "Portfolio Diagnostic",
  "Independent Second Opinion",
  "Capital Architecture",
  "Ongoing Advisory",
  "Tailored Research",
  "General enquiry",
];

const fieldClass =
  "w-full border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors";
const labelClass = "eyebrow mb-2 block text-ink-faint";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // No backend is configured: compose a pre-filled email as a graceful fallback,
    // and confirm receipt to the visitor.
    const subject = `Enquiry — ${data.get("type") || "General"}`;
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Location: ${data.get("location") || ""}`,
      `Type of enquiry: ${data.get("type") || ""}`,
      "",
      `${data.get("message") || ""}`,
    ].join("\n");

    if (typeof window !== "undefined") {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-paper-deep p-10 lg:p-12">
        <div className="rule-accent mb-6" />
        <h3 className="display text-2xl text-ink">Thank you for your message</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
          ARFA will review your enquiry and respond if there appears to be a strong fit.
          If your email client did not open, you can reach us directly at{" "}
          <a href={`mailto:${site.email}`} className="link-underline text-ink">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-9">
      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
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
        <div>
          <label htmlFor="location" className={labelClass}>
            Location
          </label>
          <input
            id="location"
            name="location"
            className={fieldClass}
            placeholder="City, country"
          />
        </div>
        <div>
          <label htmlFor="type" className={labelClass}>
            Type of enquiry
          </label>
          <select id="type" name="type" defaultValue="" className={`${fieldClass} cursor-pointer`}>
            <option value="" disabled>
              Select…
            </option>
            {enquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Brief description of your situation
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="A few lines on your circumstances and what you are hoping to improve."
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-accent-deep"
      >
        Submit Enquiry
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>

      <p className="text-xs leading-relaxed text-ink-faint">
        ARFA is selective by design and may not be the right fit for every enquiry.
      </p>
    </form>
  );
}
