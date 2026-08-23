import Link from "next/link";
import { Button, Container, Eyebrow, TwoToneHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ClosingBand } from "@/components/sections";
import { PhotoBackground } from "@/components/PhotoBackground";
import { SectionDots } from "@/components/SectionDots";
import { images } from "@/lib/site";

const dotSections = [
  { id: "top", label: "Home" },
  { id: "approach", label: "Approach" },
  { id: "themes", label: "Themes" },
  { id: "method", label: "Method" },
  { id: "insights", label: "Insights" },
  { id: "scope", label: "Scope" },
];

const themes = [
  {
    title: "What allocation frameworks quietly assume",
    body: "Every framework carries assumptions about correlation, horizon and regime. They are rarely stated, and they are usually where the framework breaks.",
  },
  {
    title: "What diversification does and does not buy",
    body: "Diversification is treated as a solved problem. Its limits — correlation drift, shared funding conditions, the same trade wearing four labels — are less examined.",
  },
  {
    title: "Why liquidity behaves as a design constraint",
    body: "When capital can actually be accessed, and what that access costs, decides more outcomes than the return assumption sitting above it.",
  },
  {
    title: "How concentration gets measured, and mismeasured",
    body: "Concentration accumulates quietly and the standard measures understate it. Why they do, and what a more honest measure would have to capture.",
  },
  {
    title: "Currency as a structural exposure",
    body: "Once capital sits across jurisdictions, currency stops being a side effect of the holdings and becomes one of the largest positions in the book.",
  },
  {
    title: "Reading regimes without over-fitting to them",
    body: "Rate, inflation and liquidity regimes are worth understanding and dangerous to extrapolate. The distinction is the whole discipline.",
  },
];

const method = [
  {
    title: "Framework before conclusion",
    body: "The reasoning is written out so it can be examined and disagreed with. A conclusion without a visible framework is an opinion, not analysis.",
  },
  {
    title: "Assumptions stated",
    body: "Every framework rests on assumptions about horizon, liquidity, correlation and regime. Those are named rather than buried.",
  },
  {
    title: "Independent by design",
    body: "No product shelf, no house-product pressure, no financial theatre. Nothing published here is written to move an inventory.",
  },
  {
    title: "General, never personal",
    body: "Everything here is general and educational. It is not tailored to anyone's circumstances and is not a recommendation to buy, sell or hold anything.",
  },
  {
    title: "Slow cadence",
    body: "Notes appear when there is something worth writing down, not on a publishing schedule built to fill a calendar.",
  },
  {
    title: "Open to correction",
    body: "Where a published view turns out to be wrong, the correction is more interesting than the original note. It gets written too.",
  },
];

export default function HomePage() {
  return (
    <>
      <SectionDots sections={dotSections} />

      {/* ---------------------------------------------------------------- Hero */}
      <section
        id="top"
        className="photo-host on-dark relative flex min-h-screen items-center overflow-hidden pt-32 text-paper"
      >
        <PhotoBackground
          src={images.hero}
          overlay="linear-gradient(180deg, rgba(10,13,19,0.78) 0%, rgba(10,13,19,0.64) 45%, rgba(10,13,19,0.88) 100%)"
        />
        <Container className="pb-28">
          <Reveal>
            <Eyebrow className="mb-8 text-accent-bright text-shadow-hero">
              Independent research · Markets &amp; portfolio thinking
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display max-w-5xl text-[2.9rem] leading-[1.05] text-paper text-shadow-hero sm:text-6xl lg:text-[5.2rem]">
              Independent thinking, written down
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="lede mt-9 max-w-2xl text-paper/90 text-shadow-hero">
              ARFA is an independent research and writing project on markets, portfolio
              construction and the structure of long-term capital. It publishes analysis
              and methodology — nothing more. It does not provide investment advice,
              manage assets or take on clients.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/insights" variant="primary">
                Read Insights
              </Button>
              <Button href="/about" variant="light">
                About ARFA
              </Button>
            </div>
          </Reveal>
        </Container>

        {/* Scroll-down affordance */}
        <a
          href="#approach"
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-paper shadow-float transition-colors duration-300 hover:bg-accent-deep"
        >
          <svg
            className="animate-bob"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
          >
            <path
              d="M8 3v10M8 13l4.5-4.5M8 13L3.5 8.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      {/* ------------------------------------------- Better thinking (manifesto) */}
      <section id="approach" className="border-b border-line-soft bg-paper scroll-mt-24">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <Eyebrow className="mb-7">Why this exists</Eyebrow>
              <TwoToneHeading
                size="xl"
                lead="Private capital deserves"
                strong="better thinking."
              />
            </Reveal>
            <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                Writing on private capital tends to sit between two unsatisfactory worlds:
                public market noise on one side, and product-led financial commentary on
                the other. ARFA was started as an alternative to both.
              </p>
              <p>
                Rather than treating capital as a collection of disconnected products, the
                writing here looks at it as a system — shaped by objectives, liquidity,
                time horizon, currencies, risk and changing market conditions.
              </p>
              <p className="text-ink">
                The aim is not to tell anyone what to buy. It is to make the underlying
                reasoning visible, so a reader can weigh it, argue with it, and take it to
                their own regulated adviser.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------- Themes */}
      <section id="themes" className="bg-paper scroll-mt-24">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <Eyebrow className="mb-7">Themes</Eyebrow>
            <TwoToneHeading lead="Questions worth" strong="writing about." className="max-w-2xl" />
          </Reveal>
          <div className="mt-16 grid gap-x-14 gap-y-12 sm:grid-cols-2">
            {themes.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 90}>
                <div className="rule-accent mb-5" />
                <h3 className="display text-xl leading-snug text-ink">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-ink-faint">
              These are subjects the writing returns to — not services. Nothing here is
              offered as a personal service, and no individual portfolio, instrument or
              transaction is reviewed, assessed or recommended on this site.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* -------------------------------------------------------------- Method */}
      <section
        id="method"
        className="photo-host on-dark relative overflow-hidden text-paper scroll-mt-0"
      >
        <PhotoBackground
          src={images.process}
          overlay="linear-gradient(180deg, rgba(10,13,19,0.92) 0%, rgba(10,13,19,0.86) 50%, rgba(10,13,19,0.94) 100%)"
          position="center top"
        />
        <Container className="py-24 lg:py-32">
          <Reveal>
            <Eyebrow className="mb-7 text-accent-bright">Method</Eyebrow>
            <TwoToneHeading lead="How the work" strong="is framed." className="max-w-2xl" />
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {method.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="rule-accent mb-5" />
                <h3 className="display text-lg text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/60">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------- Selected insights */}
      <section id="insights" className="border-y border-line-soft bg-paper-deep scroll-mt-24">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <Reveal>
              <Eyebrow className="mb-7">Insights</Eyebrow>
              <TwoToneHeading lead="Clarity over" strong="noise." />
              <div className="mt-7 max-w-lg space-y-5 text-base leading-relaxed text-ink-soft">
                <p>
                  ARFA publishes selective commentary on markets, portfolio construction,
                  macro developments and the structure of long-term capital.
                </p>
                <p>
                  The goal is not to react to every market move, but to focus on what
                  matters, what is changing and what deserves deeper attention.
                </p>
              </div>
              <div className="mt-9">
                <Button href="/insights" variant="outline">
                  Read Insights
                </Button>
              </div>
            </Reveal>
            <Reveal delay={140} className="space-y-4">
              {["Market Notes", "Portfolio Essays", "Methodology", "Thematic Deep Dives"].map(
                (cat) => (
                  <div
                    key={cat}
                    className="flex items-center justify-between border-b border-line pb-4"
                  >
                    <span className="display text-lg text-ink">{cat}</span>
                    <span className="text-xs uppercase tracking-[0.18em] text-ink-faint">
                      Series
                    </span>
                  </div>
                ),
              )}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ Scope */}
      <section id="scope" className="bg-paper scroll-mt-24">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <Eyebrow className="mb-7">Scope</Eyebrow>
              <TwoToneHeading lead="What this site" strong="is not." />
            </Reveal>
            <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                ARFA is a publication. It is not an investment firm, and it is not
                authorised or regulated by the Cyprus Securities and Exchange Commission
                or by any other financial regulator.
              </p>
              <p>
                Nothing published here is investment advice, a personal recommendation, an
                offer, or an invitation to engage in any transaction. No advisory,
                portfolio management, second-opinion or client service of any kind is
                offered through this site.
              </p>
              <p className="text-ink">
                Readers who need advice on their own circumstances should speak to an
                appropriately licensed and regulated professional.
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
        title="Clear thinking, published slowly"
        body="Notes on markets, portfolio construction and the structure of long-term capital — general in nature, and written to clarify rather than to persuade."
      />
    </>
  );
}
