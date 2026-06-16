import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "A focused set of services for private investors, entrepreneurs, internationally mobile professionals and families — strategic review, portfolio diagnostics, second opinions, capital architecture, ongoing advisory and tailored research.",
};

const services = [
  {
    n: "01",
    title: "Strategic Review",
    summary: "A deep, one-off review of your broader capital picture.",
    description:
      "For clients who want to step back from day-to-day decisions and gain a clearer strategic view of their assets, structure, priorities and vulnerabilities.",
    suitable:
      "Entrepreneurs, senior professionals, international investors and families whose capital has grown faster than its organising logic.",
    includes: [
      "Review of current capital structure",
      "Clarification of objectives and priorities",
      "Assessment of allocation logic",
      "Review of liquidity needs and capital buckets",
      "Identification of inconsistencies and blind spots",
      "High-level recommendations and strategic memo",
    ],
    outcome:
      "A clearer map of your capital, better-defined priorities and a more mature framework for future decisions.",
  },
  {
    n: "02",
    title: "Portfolio Diagnostic",
    summary: "An independent analytical review of an existing portfolio.",
    description:
      "For clients who already hold portfolios with banks, brokers or multiple providers, but want an objective and strategic assessment of what they actually own.",
    suitable:
      "Clients with existing portfolios, long-accumulated holdings or fragmented investment arrangements.",
    includes: [
      "Review of asset allocation",
      "Concentration and diversification analysis",
      "Currency composition assessment",
      "Liquidity review",
      "Sensitivity to rates, equities, credit and macro",
      "Identification of overlapping risks and inefficiencies",
    ],
    outcome:
      "A sharper understanding of what the portfolio is really doing — where it is coherent and where it is accidental.",
  },
  {
    n: "03",
    title: "Independent Second Opinion",
    summary: "A thoughtful external review of proposals and ideas.",
    description:
      "Particularly valuable when clients receive recommendations from banks, brokers or wealth platforms and want an independent lens before acting.",
    suitable:
      "Clients considering portfolio proposals, investment products, provider mandates or strategic changes.",
    includes: [
      "Review of a proposed portfolio or solution",
      "Assessment of structure, incentives and trade-offs",
      "Analysis of fit relative to your situation",
      "Independent feedback without product push",
    ],
    outcome: "A more informed decision, grounded in logic rather than sales framing.",
  },
  {
    n: "04",
    title: "Capital Architecture",
    summary: "How wealth is organised across accounts and institutions.",
    description:
      "For clients whose wealth is spread across banks, brokers, currencies, liquidity pools or evolving family and business structures.",
    suitable:
      "International clients, entrepreneurs, families and those with growing complexity around capital.",
    includes: [
      "Review of assets across institutions",
      "Liquidity planning and reserve structure",
      "Capital bucket design by horizon and purpose",
      "Concentration and structural risk review",
      "Coordination logic for external specialists",
    ],
    outcome: "Greater clarity, control and structural coherence around capital.",
  },
  {
    n: "05",
    title: "Ongoing Advisory",
    summary: "A longer-term external strategic partner.",
    description:
      "For those who value continuity, periodic review and access to thoughtful support as decisions evolve over time.",
    suitable:
      "Clients with meaningful assets, recurring decisions or complex capital structures.",
    includes: [
      "Periodic strategic reviews",
      "Discussion of allocation changes and new decisions",
      "Ongoing portfolio thinking",
      "External perspective on relevant market developments",
      "Independent support around capital structure",
    ],
    outcome:
      "An ongoing source of clarity, discipline and independent thought around private capital decisions.",
  },
  {
    n: "06",
    title: "Tailored Research",
    summary: "Targeted analytical work for a specific question.",
    description:
      "Some situations require a deeper, more bespoke analytical layer before a decision can be made. This service is designed for those cases.",
    suitable:
      "Clients facing a specific, non-standard question where generic advice is not enough.",
    includes: [
      "Cash and liquidity allocation",
      "Fixed income strategy",
      "Multi-currency portfolio structure",
      "Equity exposure architecture",
      "Country and macro risk review",
      "Concentrated wealth questions",
    ],
    outcome:
      "A clearer analytical base for decision-making where generic advice falls short.",
  },
];

const formats = [
  ["Project-Based Work", "For clearly defined reviews, diagnostics and one-off strategic work."],
  ["Retained Advisory", "For clients who prefer continuity and a longer-term relationship."],
  ["Tailored Engagements", "For situations requiring a more bespoke analytical and advisory setup."],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A focused set of services"
        intro="For private investors, entrepreneurs, internationally mobile professionals and families seeking better structure, stronger judgment and more coherent capital decisions."
      />

      {/* Services list */}
      <section>
        <Container className="py-20 lg:py-28">
          <div className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 60}>
                <article className="bg-paper p-9 transition-colors duration-500 hover:bg-paper-deep lg:p-12">
                  <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div>
                      <span className="display text-3xl text-accent/40">{s.n}</span>
                      <h2 className="display mt-5 text-3xl text-ink lg:text-4xl">
                        {s.title}
                      </h2>
                      <p className="mt-5 text-lg leading-relaxed text-ink">{s.summary}</p>
                      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                        {s.description}
                      </p>
                      <div className="mt-7">
                        <p className="eyebrow mb-2 text-ink-faint">Suitable for</p>
                        <p className="text-sm leading-relaxed text-ink-soft">
                          {s.suitable}
                        </p>
                      </div>
                    </div>

                    <div className="lg:pt-16">
                      <p className="eyebrow mb-5 text-ink-faint">What it may include</p>
                      <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {s.includes.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 border-t border-line pt-6">
                        <p className="eyebrow mb-2 text-accent">Outcome</p>
                        <p className="text-base leading-relaxed text-ink">{s.outcome}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Engagement formats */}
      <section className="border-y border-line-soft bg-paper-deep">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Engagement"
              title="Three principal formats"
              className="max-w-2xl"
            />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {formats.map(([title, body], i) => (
              <Reveal key={title} delay={i * 90} className="bg-paper p-9">
                <span className="display text-2xl text-accent/40">0{i + 1}</span>
                <h3 className="display mt-5 text-xl text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Fees */}
      <section>
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <Eyebrow className="mb-6">Fees</Eyebrow>
              <h2 className="display text-3xl text-ink sm:text-4xl">
                Selective, and scoped to context
              </h2>
            </Reveal>
            <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                ARFA works selectively, and fees depend on the scope, complexity and
                format of engagement.
              </p>
              <p>
                Defined projects may be offered on a fixed-fee basis. Ongoing advisory is
                typically structured as a retainer. Tailored engagements are discussed
                based on context.
              </p>
              <p className="display text-2xl text-ink">Fees available on request.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABand
        title="Discuss your situation"
        body="Tell us a little about your circumstances and what you are hoping to improve. Where there is a strong fit, we will propose the most suitable way to work together."
        buttonLabel="Request a Conversation"
      />
    </>
  );
}
