import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Notice",
  description:
    "Scope, disclaimer and terms of use for ARFA — an independent research publication. No investment advice, no personal recommendations, no regulated services.",
};

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "1. What this site is",
    paragraphs: [
      `${site.name} is an independent research and writing project. It publishes general commentary, essays and methodology on markets, portfolio construction and the structure of long-term capital.`,
      "That is the entire purpose of this site. It exists to publish written analysis, and to do nothing else.",
    ],
  },
  {
    heading: "2. No investment advice",
    paragraphs: [
      "Nothing on this site constitutes investment advice, financial advice, tax advice, legal advice or a personal recommendation of any kind.",
      "All content is general in nature. It does not take account of the objectives, financial situation, knowledge, experience, tax position or particular needs of any reader, and it must not be relied upon as if it did.",
      "No content here is a recommendation, invitation or inducement to buy, sell, subscribe for or hold any security, financial instrument, fund, structure or strategy.",
      "Where a note discusses an asset class, market or instrument type, it is general commentary and is not intended as an investment recommendation within the meaning of Regulation (EU) No 596/2014 on market abuse.",
    ],
  },
  {
    heading: "3. No regulated services",
    paragraphs: [
      `${site.name} is not an investment firm. It is not authorised or regulated by the Cyprus Securities and Exchange Commission (CySEC) or by any other financial services regulator, and it does not act as a tied agent of any regulated firm.`,
      "It does not provide investment advice, portfolio management, reception and transmission of orders, placement, custody or any other investment or ancillary service within the meaning of the Investment Services and Activities and Regulated Markets Law of 2017 (L.87(I)/2017) or Directive 2014/65/EU (MiFID II).",
      "It does not review individual portfolios, assess third-party proposals, provide second opinions on specific investments, or accept clients, mandates, retainers or fees for any such work.",
    ],
  },
  {
    heading: "4. No offer or solicitation",
    paragraphs: [
      "This site is not an offer, solicitation or marketing communication in respect of any financial instrument or service, and it is not directed at any person in any jurisdiction where such publication would be contrary to local law or regulation.",
      "Nothing on this site is sold. There is no fee, subscription charge, retainer or commission of any kind, and no advertising, sponsorship or paid placement.",
      "No client relationship is created by reading this site, by joining the distribution list, or by corresponding with the address below. The distribution list is free, carries only published notes, and an address on it is used for nothing else.",
    ],
  },
  {
    heading: "5. Accuracy, opinions and forward-looking statements",
    paragraphs: [
      "Content is published in good faith and reflects views held at the time of writing. Those views may change without notice, and no undertaking is given to update anything already published.",
      "Information may be drawn from sources believed to be reliable, but no representation or warranty, express or implied, is given as to its accuracy or completeness.",
      "Statements about the future are estimates and opinions, not forecasts of fact. Past performance is not a reliable indicator of future results, and the value of investments can fall as well as rise.",
    ],
  },
  {
    heading: "6. Get your own advice",
    paragraphs: [
      "Any decision about your own capital should be taken with an appropriately licensed and regulated professional who knows your circumstances, and after your own independent assessment.",
      `To the maximum extent permitted by law, ${site.name} accepts no liability for any loss arising from reliance on anything published here.`,
    ],
  },
  {
    heading: "7. Intellectual property and external links",
    paragraphs: [
      `All original text and design on this site belong to ${site.name}. Short quotations with attribution and a link are welcome; wholesale reproduction is not.`,
      "Where content links to third-party sites or references third-party material, that material is not endorsed and no responsibility is taken for it.",
    ],
  },
  {
    heading: "8. Correspondence",
    paragraphs: [
      "Editorial correspondence — comments, corrections, references and questions about published material — is welcome.",
      "Enquiries seeking investment advice, portfolio reviews or any other regulated service cannot be answered and will not receive a substantive reply.",
    ],
  },
];

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Notice"
        title="Scope, disclaimer and terms of use"
        intro="A publication, and nothing beyond one. This page states plainly what this site is, what it is not, and how its content should be read."
      />

      <section className="bg-paper">
        <Container className="py-24 lg:py-32">
          <div className="max-w-3xl space-y-14">
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={(i % 3) * 60}>
                <div className="rule-accent mb-6" />
                <h2 className="display text-2xl text-ink sm:text-[1.75rem]">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal>
              <div className="rounded-2xl border border-line bg-paper-deep p-9 lg:p-11">
                <p className="eyebrow mb-3 text-ink-faint">Editorial correspondence</p>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline display text-xl text-ink"
                >
                  {site.email}
                </a>
                <p className="mt-6 text-sm leading-relaxed text-ink-faint">
                  Last updated: August 2026. This notice may be revised; the version
                  published here is the one that applies.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
