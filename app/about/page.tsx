import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/sections";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "ARFA was created to offer a more thoughtful and independent approach to private capital decisions — a founder-led boutique focused on strategy, structure and discretion.",
};

const philosophy = [
  ["Clarity over noise", "Important decisions should not be driven by market chatter or financial theatre."],
  ["Structure over improvisation", "A sound portfolio is designed, not assembled at random over time."],
  ["Independence over product bias", "Judgment should begin with the client’s situation, not with what happens to be available for sale."],
  ["Discipline over reaction", "Capital compounds best when decisions are made with perspective, process and restraint."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A more thoughtful approach to private capital"
        intro="ARFA was created to offer a more independent way of thinking about capital decisions — for clients who value clarity, discipline and discretion."
        image={images.about}
      />

      {/* The idea */}
      <section>
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading eyebrow="The idea" title="The idea behind ARFA" />
            </Reveal>
            <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                Many private investors and affluent professionals face the same problem:
                too much noise, too little structure, and not enough genuinely independent
                thinking.
              </p>
              <p>
                Traditional financial institutions often frame decisions through product
                shelves, internal incentives or standardised models. Public market
                commentary, meanwhile, is frequently reactive, shallow or overly
                transactional. ARFA was built as an alternative to both.
              </p>
              <p className="text-ink">
                It is a founder-led boutique platform focused on strategic portfolio
                thinking, capital architecture and analytical support — helping clients
                make better decisions, calmly and with a stronger understanding of risk,
                liquidity, opportunity and long-term direction.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="border-y border-line-soft bg-paper-deep">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeading eyebrow="Philosophy" title="What we believe" className="max-w-2xl" />
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {philosophy.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 2) * 90}>
                <div className="rule-accent mb-5" />
                <h3 className="display text-xl text-ink">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How ARFA thinks */}
      <section>
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <Reveal className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                ARFA approaches private capital through a broad strategic lens. We believe
                in portfolio architecture before product selection, risk awareness before
                opportunity chasing, and liquidity as a core design principle rather than
                an afterthought.
              </p>
              <p>
                A good portfolio is not a collection of isolated ideas. It is an
                integrated system shaped by objectives, time horizon, liquidity needs,
                currencies, risk tolerance and the broader macro environment.
              </p>
              <p className="text-ink">
                The role of ARFA is to help bring structure, judgment and coherence to
                that system.
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:order-first">
              <SectionHeading eyebrow="Method" title="How ARFA thinks" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Founder-led */}
      <section className="bg-night text-paper">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <span className="eyebrow text-accent">By design</span>
              <h2 className="display mt-6 text-3xl text-paper sm:text-4xl">
                Founder-led by design
              </h2>
            </Reveal>
            <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-paper/70">
              <p>
                ARFA is intentionally founder-led. Clients are not passed through a
                generic advisory machine or hidden behind layers of process. The work is
                guided by direct strategic involvement, intellectual accountability and a
                high standard of analytical care.
              </p>
              <p className="text-paper">
                The platform combines broad market perspective, portfolio experience and
                modern analytical capability to support clients who expect seriousness,
                responsiveness and discretion.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Begin"
        title="A trusted long-term thinking partner"
        body="ARFA is designed for clients who value independent thinking, want a stronger structure around capital, and prefer substance over financial theatre."
      />
    </>
  );
}
