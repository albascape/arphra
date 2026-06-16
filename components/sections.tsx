import { Button, Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

/* Interior page hero --------------------------------------------------------- */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line-soft pt-40 pb-20 sm:pt-44 lg:pt-48">
      <Container>
        <Reveal>
          <Eyebrow className="mb-7">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display max-w-4xl text-4xl text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <p className="lede mt-8 max-w-2xl">{intro}</p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

/* Closing call-to-action band ------------------------------------------------ */
export function CTABand({
  eyebrow = "Begin",
  title,
  body,
  buttonLabel = "Request a Conversation",
  buttonHref = "/contact",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="bg-night text-paper">
      <Container className="py-24 sm:py-28 lg:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <Eyebrow className="mb-7 text-accent">{eyebrow}</Eyebrow>
            <h2 className="display text-3xl text-paper sm:text-4xl lg:text-[3rem]">
              {title}
            </h2>
            {body && (
              <p className="mt-7 max-w-xl text-base leading-relaxed text-paper/60">
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
