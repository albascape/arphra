import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "If you are exploring a more thoughtful and independent approach to private capital, you are welcome to get in touch with ARFA.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-44 lg:pt-48 lg:pb-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left: copy */}
          <div>
            <Reveal>
              <Eyebrow className="mb-7">Contact</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display text-4xl text-ink sm:text-5xl lg:text-[3.6rem]">
                Work with ARFA
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="lede mt-8 max-w-md">
                If you are exploring a more thoughtful and independent approach to private
                capital, you are welcome to get in touch.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-10 max-w-md space-y-5 text-base leading-relaxed text-ink-soft">
              <p>
                ARFA works selectively and is designed for clients who value seriousness,
                discretion and strong strategic thinking.
              </p>
              <p>
                Where relevant, prospective clients may be invited to an initial
                conversation to explore whether there is a strong fit.
              </p>
            </Reveal>
            <Reveal delay={280} className="mt-10 border-t border-line pt-7">
              <p className="eyebrow mb-2 text-ink-faint">Direct</p>
              <a
                href={`mailto:${site.email}`}
                className="link-underline display text-xl text-ink"
              >
                {site.email}
              </a>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={120} className="lg:pt-2">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
