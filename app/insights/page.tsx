import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Selected notes on markets, portfolio construction and private capital thinking — clarity over noise.",
};

const categories = [
  ["Market Notes", "Focused commentary on meaningful developments in markets and macro."],
  ["Portfolio Essays", "Longer-form reflections on allocation, diversification, risk and structure."],
  ["Strategic Views", "Founder-led thinking on issues that shape private capital decisions."],
  ["Thematic Deep Dives", "Selective deeper work on specific asset classes, regimes or structural shifts."],
];

const notes = [
  {
    category: "Portfolio Essays",
    title: "Liquidity as a design principle, not an afterthought",
    excerpt:
      "Most portfolios are built around return and risk. Far fewer are built around when capital can actually be accessed — and that omission tends to surface at the worst possible moment.",
    date: "Forthcoming",
  },
  {
    category: "Market Notes",
    title: "Reading a rate regime without overreacting to it",
    excerpt:
      "The question is rarely where rates go next quarter. It is how a portfolio behaves across several plausible regimes — and whether its structure can absorb being wrong.",
    date: "Forthcoming",
  },
  {
    category: "Strategic Views",
    title: "The quiet cost of concentrated wealth",
    excerpt:
      "Concentration builds fortunes and then threatens them. For founders especially, the hardest allocation decision is often the one about the asset they know best.",
    date: "Forthcoming",
  },
  {
    category: "Thematic Deep Dives",
    title: "Currencies as a structural exposure, not a side effect",
    excerpt:
      "For internationally mobile clients, currency is not a footnote to the portfolio. It is one of its largest and least examined positions.",
    date: "Forthcoming",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Clarity over noise"
        intro="Selected notes on markets, portfolio construction and private capital thinking — for readers who value substance over reaction."
      />

      {/* Intro + categories */}
      <section>
        <Container className="py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                ARFA publishes selective commentary for readers and clients who value
                clarity over noise.
              </p>
              <p>
                The purpose is not to react to every market movement, but to identify what
                matters, what is changing and what deserves deeper attention — across
                macro developments, market structure, fixed income, portfolio
                construction, liquidity and strategic reflections on private wealth.
              </p>
            </Reveal>
            <Reveal delay={120} className="space-y-4">
              {categories.map(([title, body]) => (
                <div key={title} className="border-b border-line pb-4">
                  <h3 className="display text-lg text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Notes */}
      <section className="border-t border-line-soft bg-paper-deep">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeading eyebrow="Selected" title="On the desk" className="max-w-2xl" />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {notes.map((note, i) => (
              <Reveal
                key={note.title}
                delay={(i % 2) * 80}
                className="group bg-paper p-9 transition-colors duration-500 hover:bg-paper-deep lg:p-11"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-accent">{note.category}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-ink-faint">
                    {note.date}
                  </span>
                </div>
                <h3 className="display mt-6 text-2xl leading-snug text-ink">
                  {note.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {note.excerpt}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-ink-faint">
              ARFA’s published notes are released selectively. To receive them as they
              appear, request to join the distribution list below.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Signup */}
      <section className="bg-night text-paper">
        <Container className="py-20 lg:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <Eyebrow className="mb-6 text-accent">Distribution</Eyebrow>
              <h2 className="display text-3xl text-paper sm:text-4xl">
                Receive occasional insights from ARFA
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:justify-self-end">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full border border-paper/25 px-7 py-3.5 text-sm font-medium text-paper transition-all duration-300 hover:border-paper/70 hover:bg-paper hover:text-ink"
              >
                Join the list
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABand
        title="Read the latest notes"
        body="Selective, founder-led commentary — written to clarify, not to fill a calendar."
        buttonLabel="Request a Conversation"
      />
    </>
  );
}
