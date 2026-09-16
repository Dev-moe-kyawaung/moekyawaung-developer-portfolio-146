import { timeline } from "../../data/flagship";
import { Reveal, Section, Tag } from "../ui";

export function Timeline() {
  return (
    <Section id="experience">
      <Reveal>
        <p className="kicker">04 · Experience</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-8 max-w-2xl font-display text-[clamp(1.9rem,1.2rem+3vw,3.2rem)] font-light leading-[1.1] tracking-[-0.015em] text-ink">
          Six years, four
          <em className="italic text-gold"> proving grounds.</em>
        </h2>
      </Reveal>

      <ol className="relative mt-16 border-l border-line pl-8 sm:pl-12">
        {timeline.map((entry, i) => (
          <Reveal key={entry.period} as="li" delay={i * 90} className="relative pb-14 last:pb-0">
            {/* node */}
            <span
              aria-hidden="true"
              className="absolute -left-8 top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:-left-12"
            >
              <span className="absolute h-3 w-3 rotate-45 border border-gold/70 bg-void" />
              <span className="h-1 w-1 rotate-45 bg-gold" />
            </span>

            <div className="group">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-gold">
                {entry.period}
              </p>
              <h3 className="mt-3 font-display text-[clamp(1.35rem,1rem+1.5vw,1.8rem)] font-light leading-tight text-ink transition-transform duration-300 group-hover:translate-x-1">
                {entry.role}
              </h3>
              <p className="mt-1.5 font-mono text-[11px] text-mist">
                {entry.org} <span className="text-faint">· {entry.place}</span>
              </p>
              <p className="mt-4 max-w-2xl text-[14px] leading-[1.8] text-mist">{entry.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
