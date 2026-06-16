import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PhotoBackground } from "@/components/PhotoBackground";
import { ContactForm } from "@/components/ContactForm";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "If you are exploring a more thoughtful and independent approach to private capital, you are welcome to get in touch with ARFA.",
};

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
            <Eyebrow className="mb-7 text-accent-bright">Contact</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display text-4xl text-paper sm:text-5xl lg:text-6xl">
              Work with ARFA
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="lede mt-7 max-w-xl text-paper/75">
              If you are exploring a more thoughtful and independent approach to private
              capital, you are welcome to get in touch.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Form */}
      <section className="bg-paper">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <Reveal className="space-y-5 text-base leading-relaxed text-ink-soft">
                <p>
                  ARFA works selectively and is designed for clients who value
                  seriousness, discretion and strong strategic thinking.
                </p>
                <p>
                  Where relevant, prospective clients may be invited to an initial
                  conversation to explore whether there is a strong fit.
                </p>
              </Reveal>
              <Reveal delay={120} className="mt-10 border-t border-line pt-7">
                <p className="eyebrow mb-2 text-ink-faint">Direct</p>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline display text-xl text-ink"
                >
                  {site.email}
                </a>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
