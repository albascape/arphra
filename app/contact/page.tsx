import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PhotoBackground } from "@/components/PhotoBackground";
import { SubscribeForm } from "@/components/SubscribeForm";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Editorial correspondence for ARFA — corrections, sources, republication requests — and the distribution list for published notes.",
};

const welcome = [
  "Corrections, counter-arguments and challenges to something published here.",
  "Sources, data or research worth reading on a theme already covered.",
  "Requests to quote or republish material, and press enquiries.",
];

export default function ContactPage() {
  return (
    <>
      {/* Dark photographic hero */}
      <section className="photo-host on-dark relative flex min-h-[58vh] items-end overflow-hidden pt-40 pb-16 text-paper">
        <PhotoBackground
          src={images.cta}
          overlay="linear-gradient(180deg, rgba(10,13,19,0.7) 0%, rgba(10,13,19,0.6) 45%, rgba(10,13,19,0.92) 100%)"
        />
        <Container>
          <Reveal>
            <Eyebrow className="mb-7 text-accent-bright text-shadow-hero">Contact</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display text-4xl text-paper text-shadow-hero sm:text-5xl lg:text-6xl">
              Editorial correspondence
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="lede mt-7 max-w-xl text-paper/90 text-shadow-hero">
              Write about something published here, or join the list to receive new notes
              as they appear.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Body */}
      <section className="bg-paper">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <Reveal className="space-y-5 text-base leading-relaxed text-ink-soft">
                <p className="text-ink">Correspondence is welcome on:</p>
                <ul className="space-y-3">
                  {welcome.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-accent/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={100} className="mt-10 border-t border-line pt-7">
                <p className="eyebrow mb-2 text-ink-faint">Direct</p>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline display text-xl text-ink"
                >
                  {site.email}
                </a>
              </Reveal>
              <Reveal delay={140} className="mt-10 border-t border-line pt-7">
                <p className="eyebrow mb-3 text-ink-faint">Please note</p>
                <p className="text-sm leading-relaxed text-ink-soft">
                  ARFA is a publication and holds no financial services authorisation.
                  Requests for investment advice, portfolio reviews, opinions on a
                  proposal you have received, or any view on your own holdings cannot be
                  answered and will not receive a substantive reply. Writing here creates
                  no client relationship.{" "}
                  <Link href="/legal" className="link-underline text-ink">
                    Full notice
                  </Link>
                  .
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <SubscribeForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
