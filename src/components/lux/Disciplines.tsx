import { useState } from "react";
import { Plus } from "lucide-react";
import { disciplines } from "../../data/flagship";
import { Reveal, Section } from "../ui";
import { cn } from "../../utils/cn";

/** Editorial index of practice areas — expandable, keyboard-native. */
export function Disciplines() {
  const [openId, setOpenId] = useState<string | null>(disciplines[0].id);

  return (
    <Section id="craft">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <p className="kicker">02 · Craft</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 font-display text-[clamp(1.9rem,1.2rem+3vw,3.2rem)] font-light leading-[1.1] tracking-[-0.015em] text-ink">
              Five disciplines,
              <br />
              one <em className="italic text-gold">standard.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <p className="max-w-sm text-[14px] leading-relaxed text-mist md:text-right">
            Select a discipline to inspect what it actually means in practice — capabilities, depth,
            and the principle behind it.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 border-t border-line">
        {disciplines.map((discipline, i) => {
          const open = openId === discipline.id;
          return (
            <Reveal key={discipline.id} delay={i * 60}>
              <div className="border-b border-line">
                <button
                  onClick={() => setOpenId(open ? null : discipline.id)}
                  aria-expanded={open}
                  aria-controls={`discipline-${discipline.id}`}
                  className="group grid w-full grid-cols-[44px_1fr_32px] items-baseline gap-4 py-7 text-left transition-colors sm:grid-cols-[72px_1fr_32px] sm:gap-6"
                >
                  <span className={cn("font-mono text-[11px] transition-colors", open ? "text-gold" : "text-faint group-hover:text-gold")}>
                    {discipline.index}
                  </span>
                  <span>
                    <span
                      className={cn(
                        "block font-display text-[clamp(1.35rem,1rem+1.6vw,1.9rem)] font-light leading-tight tracking-[-0.01em] transition-all duration-300",
                        open ? "text-ink" : "text-mist group-hover:translate-x-1.5 group-hover:text-ink"
                      )}
                    >
                      {discipline.title}
                    </span>
                    <span className="mt-1.5 block text-[13px] text-faint">{discipline.tagline}</span>
                  </span>
                  <Plus
                    className={cn(
                      "h-4 w-4 justify-self-end text-gold transition-transform duration-300",
                      open && "rotate-45"
                    )}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`discipline-${discipline.id}`}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="grid gap-8 pb-9 pl-0 sm:pl-[72px] sm:pr-10 lg:grid-cols-[1.15fr_0.85fr]">
                      <ul className="space-y-2.5">
                        {discipline.capabilities.map((capability) => (
                          <li key={capability} className="flex gap-3 text-[14px] leading-relaxed text-mist">
                            <span aria-hidden className="mt-[11px] h-px w-4 shrink-0 bg-gold/70" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-5">
                        <div>
                          <div className="flex items-baseline justify-between">
                            <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-faint">
                              {discipline.meter.label}
                            </p>
                            <p className="font-mono text-[10.5px] text-gold">{discipline.meter.pct}</p>
                          </div>
                          <div className="mt-2 h-px w-full bg-line">
                            <div
                              className="h-px bg-gradient-to-r from-gold-deep via-gold to-gold-bright transition-[width] duration-700"
                              style={{ width: open ? `${discipline.meter.pct}%` : "0%" }}
                            />
                          </div>
                        </div>
                        <blockquote className="border-l border-gold/40 pl-4 font-display text-[15px] font-light italic leading-relaxed text-mist">
                          “{discipline.note}”
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
