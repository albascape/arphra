import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Who We Work With", href: "/who-we-work-with" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
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
              Selective strategic support for entrepreneurs, private investors,
              internationally mobile professionals and families.
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
              <p className="eyebrow text-paper/40">Enquiries</p>
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
                    Request a Conversation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-night-line pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-paper/40">
            The information on this website is provided for general informational
            purposes only and does not constitute an offer, solicitation or personalised
            investment advice. Any engagement with {site.name} is subject to separate
            discussion and scope.
          </p>
          <p className="mt-6 text-xs text-paper/40">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
