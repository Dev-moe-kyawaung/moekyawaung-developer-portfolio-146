import { ArrowUpRight } from "lucide-react";
import { writing } from "../../data/flagship";
import { Reveal, Section } from "../ui";

export function Writing() {
  return (
    <Section id="writing" tight>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="kicker">05 · Writing</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 font-display text-[clamp(1.9rem,1.2rem+3vw,3.2rem)] font-light leading-[1.1] tracking-[-0.015em] text-ink">
              Field notes,
              <br />
              <em className="italic text-gold">published.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-mist">
              Long-form engineering writing and conference talks — the things I wish someone had
              written before I learned them the expensive way.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-line">
          {writing.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 70}>
              <a
                href="#writing"
                onClick={(e) => e.preventDefault()}
                className="group grid grid-cols-[86px_1fr_28px] items-baseline gap-4 border-b border-line py-6 transition-colors hover:bg-gold/[0.03] sm:grid-cols-[110px_1fr_28px]"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  {entry.date}
                </span>
                <span>
                  <span className="block font-display text-[clamp(1.15rem,0.95rem+1vw,1.5rem)] font-light leading-snug text-mist transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-ink">
                    {entry.title}
                  </span>
                  <span className="mt-1.5 block font-mono text-[9.5px] uppercase tracking-[0.18em] text-faint">
                    {entry.outlet} · {entry.read}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 justify-self-end text-faint transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}
          <Reveal delay={240}>
            <p className="mt-6 font-mono text-[10.5px] text-faint">
              <span className="text-gold">//</span> full archive at mka.engineering — links enabled
              on the production domain.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
