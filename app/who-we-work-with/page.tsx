import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTABand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Who We Work With",
  description:
    "ARFA works best with clients who value independence, clarity and a more structured approach to capital — entrepreneurs, private investors, international professionals and families.",
};

const clients = [
  {
    title: "Entrepreneurs",
    body: "Business owners often have strong operating judgment but less time, distance or structure around personal capital decisions. ARFA brings order, perspective and strategic discipline to wealth that may otherwise remain fragmented, concentrated or overly reactive.",
  },
  {
    title: "Private Investors",
    body: "Some investors have experience, assets and access, but still lack a coherent portfolio framework. ARFA is built for those who want to move from a collection of positions to a clearer architecture of capital.",
  },
  {
    title: "International Professionals",
    body: "Professionals living and working across borders often face added complexity: multiple currencies, changing jurisdictions, evolving goals and less standard financial situations. ARFA helps create a more stable decision framework around those realities.",
  },
  {
    title: "Families & Capital Decision-Makers",
    body: "Families and long-term capital holders often need discretion, perspective and a thoughtful external mind they can trust. ARFA is designed to support that kind of relationship: measured, selective and serious.",
  },
];

const notFor = [
  "Those looking for fast-moving speculative commentary as a primary service",
  "Those primarily interested in financial entertainment",
  "Those seeking aggressive promises or performance slogans",
  "Those who want immediate answers without structure",
];

export default function WhoWeWorkWithPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Work With"
        title="Built for clients who value independence"
        intro="ARFA works best with clients who value clarity, discretion and a more structured approach to capital."
      />

      <section>
        <Container className="py-20 lg:py-28">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {clients.map((c, i) => (
              <Reveal
                key={c.title}
                delay={(i % 2) * 90}
                className="bg-paper p-9 lg:p-11"
              >
                <span className="display text-2xl text-accent/40">0{i + 1}</span>
                <h2 className="display mt-5 text-2xl text-ink">{c.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Not for everyone */}
      <section className="bg-night text-paper">
        <Container className="py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <span className="eyebrow text-accent">Honesty</span>
              <h2 className="display mt-6 text-3xl text-paper sm:text-4xl">
                ARFA may not be for everyone
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/60">
                ARFA is built for thoughtful capital decisions. It is probably not the
                right fit for:
              </p>
            </Reveal>
            <Reveal delay={120} className="space-y-px self-center">
              {notFor.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-night-line py-5 text-lg leading-relaxed text-paper/80"
                >
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <CTABand
        title="A selective, high-quality relationship"
        body="If you value independent thinking and a stronger structure around capital, we would welcome a conversation to explore whether there is a strong fit."
      />
    </>
  );
}
