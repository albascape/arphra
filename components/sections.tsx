import { Button, Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PhotoBackground } from "@/components/PhotoBackground";
import { images } from "@/lib/site";

/* Interior page hero — full-bleed dark photographic panel -------------------- */
export function PageHero({
  eyebrow,
  title,
  intro,
  image = images.process,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="photo-host on-dark relative flex min-h-[70vh] items-end overflow-hidden pt-40 pb-16 text-paper sm:min-h-[76vh] lg:pb-20">
      <PhotoBackground
        src={image}
        overlay="linear-gradient(180deg, rgba(10,13,19,0.74) 0%, rgba(10,13,19,0.66) 45%, rgba(10,13,19,0.92) 100%)"
      />
      <Container>
        <Reveal>
          <Eyebrow className="mb-7 text-accent-bright text-shadow-hero">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display max-w-4xl text-[2.6rem] text-paper text-shadow-hero sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <p className="lede mt-8 max-w-2xl text-paper/90 text-shadow-hero">{intro}</p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

/* Closing editorial band ----------------------------------------------------- */
export function ClosingBand({
  eyebrow = "Read",
  title,
  body,
  buttonLabel = "Read Insights",
  buttonHref = "/insights",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="photo-host on-dark relative overflow-hidden text-paper">
      <PhotoBackground
        src={images.cta}
        overlay="linear-gradient(120deg, rgba(10,13,19,0.94) 0%, rgba(10,13,19,0.8) 55%, rgba(36,86,179,0.55) 100%)"
      />
      <Container className="py-24 sm:py-28 lg:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <Eyebrow className="mb-7 text-accent-bright text-shadow-hero">{eyebrow}</Eyebrow>
            <h2 className="display text-3xl text-paper text-shadow-hero sm:text-4xl lg:text-[3rem]">
              {title}
            </h2>
            {body && (
              <p className="mt-7 max-w-xl text-base leading-relaxed text-paper/85 text-shadow-hero">
                {body}
              </p>
            )}
          </Reveal>
          <Reveal delay={120} className="lg:justify-self-end">
            <Button href={buttonHref} variant="light">
              {buttonLabel}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
