import Link from "next/link";
import { Button, Container, Eyebrow, TwoToneHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/sections";
import { PhotoBackground } from "@/components/PhotoBackground";
import { SectionDots } from "@/components/SectionDots";
import { images } from "@/lib/site";

const dotSections = [
  { id: "top", label: "Home" },
  { id: "approach", label: "Approach" },
  { id: "capabilities", label: "Capabilities" },
  { id: "clients", label: "Clients" },
  { id: "why", label: "Why ARFA" },
  { id: "process", label: "Process" },
  { id: "engagements", label: "Engagements" },
  { id: "insights", label: "Insights" },
];

const helps = [
  {
    title: "Portfolio Architecture",
    body: "Clearer portfolio logic, more coherent asset allocation and a stronger balance between growth, liquidity, resilience and long-term compounding.",
  },
  {
    title: "Strategic Asset Allocation",
    body: "A more deliberate framework for how capital should be distributed across asset classes, currencies, risks and market regimes.",
  },
  {
    title: "Independent Second Opinion",
    body: "Thoughtful external review of existing portfolios, bank proposals, wealth structures, investment ideas and strategic decisions.",
  },
  {
    title: "Capital Structure & Liquidity",
    body: "A more intelligent framework for organising capital across goals, horizons, liquidity layers and financial complexity.",
  },
  {
    title: "Ongoing Advisory",
    body: "High-trust, ongoing support for clients who value direct access to an external strategic thinking partner around private capital.",
  },
];

const builtFor = [
  {
    title: "Entrepreneurs & business owners",
    body: "A more structured approach to personal capital, liquidity, concentrated wealth and long-term allocation.",
  },
  {
    title: "Private investors",
    body: "A more mature, independent and institutional framework behind decisions you already make.",
  },
  {
    title: "International professionals",
    body: "Greater order for those living across borders and managing assets in multiple currencies.",
  },
  {
    title: "Families & capital decision-makers",
    body: "Discretion, thoughtful support and a disciplined approach to preserving and compounding capital.",
  },
];

const why = [
  {
    title: "Founder-led decision making",
    body: "Direct accountability, senior judgment and genuine strategic involvement — not a generic advisory machine.",
  },
  {
    title: "Institutional quality, boutique attention",
    body: "Rigorous portfolio thinking with a more personal, selective and less bureaucratic client experience.",
  },
  {
    title: "Independent by design",
    body: "No product shelf, no house-product pressure, no financial theatre.",
  },
  {
    title: "Global markets perspective",
    body: "A cross-asset view of capital, sensitive to liquidity, currencies, fixed income, equities and macro conditions.",
  },
  {
    title: "High-touch, low-bureaucracy",
    body: "The value of a boutique is not scale. It is attention, flexibility, directness and tailored thinking.",
  },
  {
    title: "Thoughtful and discreet",
    body: "No noise, no aggressive promises, no performance slogans. Just clear thinking and intellectual honesty.",
  },
];

const steps = [
  {
    n: "01",
    title: "Understand",
    body: "We begin with context: objectives, current structure, constraints, liquidity, currencies, existing arrangements and key concerns.",
  },
  {
    n: "02",
    title: "Diagnose",
    body: "We develop an independent view of what is working, what is exposed, what is inconsistent and what deserves to be rethought.",
  },
  {
    n: "03",
    title: "Architect",
    body: "We shape a clearer strategic framework: allocation logic, capital structure, priorities, decision principles and next steps.",
  },
  {
    n: "04",
    title: "Support",
    body: "Where relevant, the relationship continues through ongoing advisory, periodic review and high-quality analytical support.",
  },
];

const ways = [
  ["Strategic Review", "A deep, one-off review of your capital structure, positioning and key strategic decisions."],
  ["Portfolio Diagnostic", "An independent assessment of an existing portfolio — structure, risks, logic and areas for improvement."],
  ["Independent Second Opinion", "A professional external view on proposals from banks, brokers, wealth managers or specific ideas."],
  ["Capital Architecture", "A broader review of how wealth is organised across accounts, institutions, liquidity layers and priorities."],
  ["Ongoing Advisory", "An ongoing relationship for clients who want a trusted strategic partner around private capital."],
  ["Tailored Research", "Targeted analytical work built around a specific client question, where generic advice is not enough."],
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
              Founder-led boutique · Private capital
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display max-w-5xl text-[2.9rem] leading-[1.05] text-paper text-shadow-hero sm:text-6xl lg:text-[5.2rem]">
              Independent thinking for private capital
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="lede mt-9 max-w-2xl text-paper/90 text-shadow-hero">
              ARFA is a founder-led boutique platform focused on private capital
              strategy, portfolio architecture and independent analytical support — for
              those who want greater clarity, stronger structure and a more disciplined
              approach to capital decisions.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/services" variant="primary">
                Explore Services
              </Button>
              <Button href="/contact" variant="light">
                Request a Conversation
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
              <Eyebrow className="mb-7">The case for ARFA</Eyebrow>
              <TwoToneHeading
                size="xl"
                lead="Private capital deserves"
                strong="better thinking."
              />
            </Reveal>
            <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-ink-soft lg:pt-3">
              <p>
                Private capital often sits between two unsatisfactory worlds: public
                market noise on one side, and product-led financial advice on the other.
                ARFA was created as an alternative.
              </p>
              <p>
                Rather than treating wealth as a collection of disconnected products, we
                look at it as a system — shaped by objectives, liquidity, time horizon,
                currencies, risk and changing market conditions.
              </p>
              <p className="text-ink">
                The aim is not to sell financial inventory. It is to help clients
                structure, preserve and compound capital with greater discipline.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------- What ARFA helps with */}
      <section id="capabilities" className="bg-paper scroll-mt-24">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <Eyebrow className="mb-7">Capabilities</Eyebrow>
            <TwoToneHeading lead="What ARFA" strong="helps with." className="max-w-2xl" />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {helps.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 3) * 80}
                className="group bg-paper p-9 transition-colors duration-500 hover:bg-paper-deep"
              >
                <span className="display text-2xl text-accent/45">0{i + 1}</span>
                <h3 className="display mt-5 text-xl text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </Reveal>
            ))}
            <Reveal
              delay={160}
              className="flex flex-col justify-between bg-accent p-9 text-paper"
            >
              <p className="display text-xl leading-snug text-paper">
                A focused set of services, shaped around your situation.
              </p>
              <Link
                href="/services"
                className="link-underline mt-8 inline-flex w-fit items-center gap-2 text-sm text-paper"
              >
                View all services <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------- Who it's built for */}
      <section id="clients" className="border-y border-line-soft bg-paper-deep scroll-mt-24">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <Eyebrow className="mb-7">Clients</Eyebrow>
              <TwoToneHeading lead="Who ARFA is" strong="built for." />
              <p className="mt-7 max-w-sm text-base leading-relaxed text-ink-soft">
                We work with a small number of clients who value independence, clarity and
                a more structured approach to capital.
              </p>
            </Reveal>
            <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {builtFor.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 90}>
                  <div className="rule-accent mb-5" />
                  <h3 className="display text-lg text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ Why ARFA */}
      <section id="why" className="bg-paper scroll-mt-24">
        <Container className="py-24 lg:py-32">
          <Reveal>
            <Eyebrow className="mb-7">Why ARFA</Eyebrow>
            <TwoToneHeading
              lead="The advantages of"
              strong="a boutique."
              className="max-w-2xl"
            />
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="rule-accent mb-5" />
                <h3 className="display text-lg text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------------- How ARFA works */}
      <section
        id="process"
        className="photo-host on-dark relative overflow-hidden text-paper scroll-mt-0"
      >
        <PhotoBackground
          src={images.process}
          overlay="linear-gradient(180deg, rgba(10,13,19,0.92) 0%, rgba(10,13,19,0.86) 50%, rgba(10,13,19,0.94) 100%)"
          position="center top"
        />
        <Container className="py-24 lg:py-32">
          <Reveal>
            <Eyebrow className="mb-7 text-accent-bright">Process</Eyebrow>
            <TwoToneHeading lead="How ARFA" strong="works." className="max-w-2xl" />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-night-line bg-night-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 90} className="bg-night-soft/80 p-8 backdrop-blur-sm lg:p-9">
                <span className="display text-4xl text-accent-bright">{step.n}</span>
                <h3 className="display mt-6 text-xl text-paper">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/60">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------- Ways to work with ARFA */}
      <section id="engagements" className="border-b border-line-soft bg-paper scroll-mt-24">
        <Container className="py-24 lg:py-32">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <Reveal>
              <Eyebrow className="mb-7">Engagements</Eyebrow>
              <TwoToneHeading lead="Ways to work" strong="with ARFA." />
            </Reveal>
            <Reveal delay={100}>
              <Button href="/services" variant="ghost">
                View Services
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 divide-y divide-line-soft border-t border-line-soft">
            {ways.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 2) * 70}>
                <Link
                  href="/services"
                  className="group grid gap-3 py-7 sm:grid-cols-[0.5fr_1fr_auto] sm:items-center sm:gap-8"
                >
                  <span className="display text-sm text-accent/60">0{i + 1}</span>
                  <div className="sm:flex sm:items-baseline sm:gap-8">
                    <h3 className="display text-xl text-ink transition-colors group-hover:text-accent sm:w-64 sm:shrink-0">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:mt-0">
                      {body}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="hidden text-ink-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent sm:block"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------- Selected insights */}
      <section id="insights" className="bg-paper-deep scroll-mt-24">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <Reveal>
              <Eyebrow className="mb-7">Insights</Eyebrow>
              <TwoToneHeading lead="Clarity over" strong="noise." />
              <div className="mt-7 max-w-lg space-y-5 text-base leading-relaxed text-ink-soft">
                <p>
                  ARFA publishes selective commentary on markets, portfolio construction,
                  macro developments and private capital thinking.
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
              {["Market Notes", "Portfolio Essays", "Strategic Views", "Thematic Deep Dives"].map(
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

      {/* --------------------------------------------------------------- Final CTA */}
      <CTABand
        title="Serious capital benefits from clear thinking"
        body="If you are looking for a more thoughtful, independent and better-structured approach to private capital, ARFA may be the right place to begin."
      />
    </>
  );
}
