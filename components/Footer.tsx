import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Notice", href: "/legal" },
];

export function Footer() {
  return (
    <footer className="bg-night text-paper">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="display text-3xl tracking-[0.18em] text-paper">
              {site.name}
            </Link>
            <p className="display mt-6 text-xl leading-snug text-paper/80">
              {site.tagline}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-paper/55">
              An independent publication of general research and commentary. No advisory,
              portfolio management or client services are offered.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="eyebrow text-paper/40">Navigate</p>
              <ul className="mt-5 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/70 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-paper/40">Editorial</p>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    Join the distribution list
                  </Link>
                </li>
                <li className="text-sm leading-relaxed text-paper/45">
                  Correspondence about published material only.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-night-line pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-paper/40">
            {site.name} is an independent research publication. Everything on this website
            is general information and commentary for educational purposes only. It is not
            investment, financial, tax or legal advice, not a personal recommendation, and
            not an offer or solicitation to buy or sell any financial instrument. {site.name}{" "}
            is not authorised or regulated by the Cyprus Securities and Exchange Commission
            or by any other financial regulator, and provides no investment services. Past
            performance is not a reliable indicator of future results, and the value of
            investments can fall as well as rise. Seek advice from an appropriately
            licensed professional before acting on anything you read here. See the full{" "}
            <Link href="/legal" className="text-paper/60 underline underline-offset-2">
              notice
            </Link>
            .
          </p>
          <p className="mt-6 text-xs text-paper/40">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
