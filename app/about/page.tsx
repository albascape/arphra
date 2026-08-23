import Link from "next/link";
import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero, ClosingBand } from "@/components/sections";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "ARFA is an independent research publication on markets, portfolio construction and the structure of long-term capital. What it is for, what it believes, and how it is written.",
};

const philosophy = [
  ["Clarity over noise", "Important questions should not be answered by market chatter or financial theatre."],
  ["Structure over improvisation", "A sound portfolio is designed. Most are assembled at random, one decision at a time."],
  ["Independence over product bias", "Reasoning should begin with the problem, not with whatever happens to be available for sale."],
  ["Discipline over reaction", "Capital compounds best where decisions are made with perspective, process and restraint."],
];

const standards = [
  {
    title: "Nothing here is commissioned",
    body: "No sponsorship, no advertising, no affiliate links, no paid placements. Nothing published here is written to move an inventory or to please a counterparty.",
  },
  {
    title: "General, never personal",
    body: "Content is written for a general readership. It is not tailored to any individual's circumstances, and it does not recommend buying, selling or holding any specific security or instrument.",
  },
  {
    title: "Sources are named",
    body: "Where an argument depends on data, the data and its source are stated so a reader can check the work rather than take it on trust.",
  },
  {
    title: "Assumptions are visible",
    body: "Every framework rests on assumptions about horizon, liquidity, correlation and regime. Those are written out rather than buried in a conclusion.",
  },
  {
    title: "Corrections are published",
    body: "Errors are corrected openly and dated, not quietly edited away. Where a published view turns out to be wrong, the correction is usually the more interesting note.",
  },
  {
    title: "Interests are disclosed",
    body: "Where a note touches an area in which the author has a personal interest, that is disclosed within the note itself.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A publication, and nothing beyond one"
        intro="ARFA is an independent research project on markets, portfolio construction and the structure of long-term capital. This page sets out what it is for, what it believes and how it is written."
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
                Anyone reading seriously about capital runs into the same problem: too
                much noise, too little structure, and not enough genuinely independent
                thinking.
              </p>
              <p>
                Financial institutions tend to frame questions through product shelves,
                internal incentives or standardised models. Public market commentary,
                meanwhile, is frequently reactive, shallow or transactional. ARFA was
                started as an alternative to both.
              </p>
              <p className="text-ink">
                It exists to write frameworks down properly — how capital is structured,
                how allocation decisions are reasoned about, where risk actually sits and
                what liquidity really costs — for readers who would rather see the
                reasoning than be handed a conclusion.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="border-y border-line-soft bg-paper-deep">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <SectionHeading eyebrow="Philosophy" title="What this publication believes" className="max-w-2xl" />
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

      {/* Editorial standards */}
      <section className="bg-night text-paper">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <span className="eyebrow text-accent">Standards</span>
            <h2 className="display mt-6 max-w-2xl text-3xl text-paper sm:text-4xl">
              How the writing is made
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="rule-accent mb-5" />
                <h3 className="display text-lg text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What it is not */}
      <section className="bg-paper">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading eyebrow="Scope" title="What ARFA is not" />
            </Reveal>
            <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                ARFA is not an investment firm. It is not authorised or regulated by the
                Cyprus Securities and Exchange Commission or by any other financial
                regulator, and it does not act as a tied agent of any regulated firm.
              </p>
              <p>
                It provides no investment advice, no personal recommendations, no
                portfolio management and no client services of any kind. Reading this
                site, or corresponding with it, creates no client relationship.
              </p>
              <p className="text-ink">
                Decisions about your own capital belong with an appropriately licensed and
                regulated professional who knows your circumstances.
              </p>
              <p>
                <Link href="/legal" className="link-underline text-ink">
                  Read the full notice
                </Link>
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <ClosingBand
        eyebrow="Read"
        title="The reasoning, written out"
        body="Selective, general commentary on markets, portfolio construction and the structure of long-term capital."
      />
    </>
  );
}
