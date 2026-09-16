import { manifestoFacts } from "../../data/flagship";
import { certMarquee } from "../../data/flagship";
import { MaskLines, Reveal, Section } from "../ui";

export function Manifesto() {
  return (
    <>
      <Section id="about">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="kicker">01 · About</p>
            </Reveal>
            <h2 className="mt-8 font-display text-[clamp(1.9rem,1.2rem+3vw,3.2rem)] font-light leading-[1.12] tracking-[-0.015em] text-ink">
              <MaskLines
                lines={[
                  <>The phone is the</>,
                  <>
                    product. <em className="italic text-gold">Everything</em>
                  </>,
                  <>else is logistics.</>,
                ]}
              />
            </h2>
          </div>

          <div className="pt-2 lg:pt-14">
            <Reveal delay={150}>
              <p className="text-[15.5px] leading-[1.85] text-mist">
                I&apos;m Moe Kyaw Aung — a senior Android engineer who has spent six years making
                native apps behave like they were machined, not assembled. My record runs from a
                Bangkok agency shipping twelve client apps, through a retail chain&apos;s POS
                estate, to realtime transit systems ingesting millions of vehicle positions a day.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-6 text-[15.5px] leading-[1.85] text-mist">
                What I bring to a team is boring in the best sense: architectures that survive
                re-orgs, performance budgets enforced in CI, design tokens treated as contracts,
                and releases that don&apos;t need a war room. Eighty-two certifications across nine
                disciplines keep the edges sharp — but the work is judged on what ships.
              </p>
            </Reveal>

            <Reveal delay={350}>
              <dl className="mt-10 border-t border-line">
                {manifestoFacts.map((fact) => (
                  <div key={fact.label} className="grid grid-cols-[110px_1fr] items-baseline gap-4 border-b border-line py-3.5 sm:grid-cols-[140px_1fr]">
                    <dt className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-faint">{fact.label}</dt>
                    <dd className="text-[13.5px] text-mist">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* certification marquee */}
      <div aria-hidden="true" className="relative overflow-hidden border-y border-line bg-deep/60 py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />
        <div className="marquee-track flex w-max items-center gap-10">
          {[0, 1].map((pass) => (
            <div key={pass} className="flex items-center gap-10">
              {certMarquee.map((item) => (
                <span key={`${pass}-${item}`} className="flex shrink-0 items-center gap-10 font-mono text-[10.5px] uppercase tracking-[0.24em] text-faint">
                  {item}
                  <span className="h-1 w-1 rotate-45 bg-gold/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
