import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/sections";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "The ARFA process is designed to be clear, selective and intellectually rigorous — from initial conversation through analytical review, strategic recommendations and ongoing relationship.",
};

const steps = [
  {
    n: "01",
    title: "Initial Conversation",
    body: "We begin with context — your objectives, current structure, existing arrangements, practical constraints and key questions. The purpose is not to rush toward conclusions, but to understand the decision environment properly.",
  },
  {
    n: "02",
    title: "Analytical Review",
    body: "ARFA develops an independent view of the situation. This may include a review of portfolios, proposals, capital structure, exposures, liquidity, concentration and broader strategic context. The goal is to replace vagueness with a clearer analytical picture.",
  },
  {
    n: "03",
    title: "Strategic Recommendations",
    body: "You receive a more structured perspective on the path ahead — a strategic memo, portfolio diagnostic, second opinion, allocation framework or a set of decision priorities. The emphasis is always on judgment, clarity and practicality.",
  },
  {
    n: "04",
    title: "Ongoing Relationship",
    body: "Some situations are best addressed in a one-off format. Others benefit from continuity. Where appropriate, ARFA continues to support clients through periodic review, discussion of new decisions and ongoing strategic thinking.",
  },
];

const principles = [
  "Confidentiality",
  "Independence",
  "Clarity",
  "Selectivity",
  "Intellectual discipline",
  "Long-term perspective",
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="Clear, selective, rigorous"
        intro="The ARFA process is designed to bring structure and judgment to capital decisions — without noise, pressure or unnecessary complexity."
      />

      {/* Steps */}
      <section>
        <Container className="py-20 lg:py-28">
          <div className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={(i % 2) * 70}>
                <div className="grid gap-6 bg-paper p-9 transition-colors duration-500 hover:bg-paper-deep sm:grid-cols-[auto_1fr] sm:gap-12 lg:p-12">
                  <span className="display text-5xl text-accent/35 sm:text-6xl">
                    {step.n}
                  </span>
                  <div className="max-w-2xl">
                    <h2 className="display text-2xl text-ink lg:text-3xl">{step.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-soft">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="border-y border-line-soft bg-paper-deep">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading eyebrow="Principles" title="Principles of engagement" />
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
                {principles.map((p, i) => (
                  <div
                    key={p}
                    className="flex items-baseline gap-4 border-b border-line pb-5"
                  >
                    <span className="display text-sm text-accent/50">
                      0{i + 1}
                    </span>
                    <span className="display text-xl text-ink">{p}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABand
        title="Begin with a conversation"
        body="Every engagement starts by understanding your situation properly. Tell us what you are hoping to improve, and we will take it from there."
      />
    </>
  );
}
