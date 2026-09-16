import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../../data/flagship";
import { Reveal, Section } from "../ui";

/** Full-width editorial project rows — each opens the case-study overlay. */
export function Projects({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <Section id="work">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <p className="kicker">03 · Selected work</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 font-display text-[clamp(1.9rem,1.2rem+3vw,3.2rem)] font-light leading-[1.1] tracking-[-0.015em] text-ink">
              Three systems,
              <br />
              three <em className="italic text-gold">hard problems.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="max-w-sm text-[14px] leading-relaxed text-mist md:text-right">
            Transit data at city scale, payments that survive dead zones, and retail floors that
            never stop selling. Open any record for the full engineering story.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 border-t border-line">
        {caseStudies.map((study, i) => (
          <Reveal key={study.id} delay={i * 70}>
            <button
              onClick={() => onOpen(study.id)}
              aria-haspopup="dialog"
              className="group relative grid w-full grid-cols-[44px_1fr] items-start gap-4 border-b border-line py-9 text-left transition-colors sm:grid-cols-[72px_1fr_auto] sm:gap-6"
            >
              {/* hover wash */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -inset-x-4 bg-gradient-to-r from-gold/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <span className="relative font-mono text-[11px] pt-2 text-faint transition-colors group-hover:text-gold">
                {study.index}
              </span>

              <span className="relative">
                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display text-[clamp(1.6rem,1.1rem+2.4vw,2.6rem)] font-light leading-tight tracking-[-0.015em] text-ink transition-transform duration-500 group-hover:translate-x-2">
                    {study.title}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                    {study.sector}
                  </span>
                </span>
                <span className="mt-2 block max-w-xl text-[13.5px] leading-relaxed text-mist">
                  {study.brief}
                </span>
                <span className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5">
                  {study.outcomes.map((outcome) => (
                    <span key={outcome.label} className="flex items-baseline gap-2">
                      <span className="font-display text-[17px] text-gold-bright">{outcome.value}</span>
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-faint">
                        {outcome.label}
                      </span>
                    </span>
                  ))}
                </span>
              </span>

              <span className="relative hidden items-center gap-2 pt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-faint transition-colors group-hover:text-gold sm:flex">
                Open record
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-8 font-mono text-[10.5px] leading-relaxed text-faint">
          <span className="text-gold">//</span> Client names anonymized under agreement · full
          repositories and references available on request.
        </p>
      </Reveal>
    </Section>
  );
}
