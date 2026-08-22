import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero, ClosingBand } from "@/components/sections";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "General research notes on markets, portfolio construction and the structure of long-term capital. Educational commentary only — not investment advice or a personal recommendation.",
};

const categories = [
  ["Market Notes", "Focused commentary on meaningful developments in markets and macro."],
  ["Portfolio Essays", "Longer-form reflections on allocation, diversification, risk and structure."],
  ["Methodology", "How the frameworks used here are built, tested and, where necessary, discarded."],
  ["Thematic Deep Dives", "Selective deeper work on asset classes, regimes or structural shifts."],
];

const notes = [
  {
    category: "Portfolio Essays",
    title: "Liquidity as a design principle, not an afterthought",
    excerpt:
      "Most portfolio frameworks are built around return and risk. Far fewer are built around when capital can actually be accessed — and that omission tends to surface at the worst possible moment.",
    date: "Forthcoming",
  },
  {
    category: "Market Notes",
    title: "Reading a rate regime without overreacting to it",
    excerpt:
      "The interesting question is rarely where rates go next quarter. It is how a portfolio structure behaves across several plausible regimes — and whether it can absorb being wrong.",
    date: "Forthcoming",
  },
  {
    category: "Methodology",
    title: "The quiet arithmetic of concentrated positions",
    excerpt:
      "Concentration builds wealth and then quietly threatens it. This note looks at how concentration is usually measured, and why the standard measures understate it.",
    date: "Forthcoming",
  },
  {
    category: "Thematic Deep Dives",
    title: "Currencies as a structural exposure, not a side effect",
    excerpt:
      "For capital held across borders, currency is not a footnote to the portfolio. Structurally, it is one of its largest and least examined positions.",
    date: "Forthcoming",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Clarity over noise"
        intro="General research notes on markets, portfolio construction and the structure of long-term capital — written for readers who value substance over reaction."
        image={images.insights}
      />

      {/* Intro + categories */}
      <section>
        <Container className="py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                ARFA publishes selective commentary for readers who value clarity over
                noise.
              </p>
              <p>
                The purpose is not to react to every market movement, but to identify what
                matters, what is changing and what deserves deeper attention — across
                macro developments, market structure, fixed income, portfolio
                construction, liquidity and the mechanics of long-term capital.
              </p>
              <p className="text-ink">
                All of it is general in nature. Nothing published here takes account of any
                individual reader&rsquo;s objectives, circumstances or holdings, and nothing
                here recommends buying, selling or holding any security or instrument.
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
              Notes are published irregularly, when there is something worth writing down.
              To receive them as they appear, join the distribution list below.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Reader notice */}
      <section className="bg-night text-paper">
        <Container className="py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal>
              <Eyebrow className="mb-6 text-accent">Reader notice</Eyebrow>
              <h2 className="display text-3xl text-paper sm:text-4xl">
                How to read these notes
              </h2>
            </Reveal>
            <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-paper/70">
              <p>
                Everything published here is general information and commentary for
                educational purposes. It is not investment advice, not a personal
                recommendation, and not an offer or solicitation of any kind.
              </p>
              <p>
                ARFA is not authorised or regulated by the Cyprus Securities and Exchange
                Commission or by any other financial regulator, and offers no advisory,
                portfolio management or client services.
              </p>
              <p className="text-paper">
                Any decision about your own capital should be taken with an appropriately
                licensed and regulated professional who knows your circumstances. Past
                performance is not a guide to future results.
              </p>
              <p className="text-sm text-paper/55">
                Editorial correspondence:{" "}
                <a href={`mailto:${site.email}`} className="link-underline text-paper/80">
                  {site.email}
                </a>
              </p>
              <div className="pt-2">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-paper/25 px-7 py-3.5 text-sm font-medium text-paper transition-all duration-300 hover:border-paper/70 hover:bg-paper hover:text-ink"
                >
                  Join the list
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ClosingBand
        eyebrow="Read"
        title="Written to clarify, not to persuade"
        body="Selective, general commentary on markets and portfolio structure — published when there is something worth saying."
        buttonLabel="Join the list"
        buttonHref="/contact"
      />
    </>
  );
}
