import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../../data/portfolio";
import { heroMetrics, specMeters, specRows } from "../../data/flagship";
import { CountUp, MaskLines, Reveal } from "../ui";

/** The engineer presented as a product spec — the opening statement. */
function SpecPanel() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* rotating metallic bezel */}
      <div
        aria-hidden="true"
        className="bezel absolute -inset-3 rounded-sm opacity-40 [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-px"
      />

      <div className="relative border border-line bg-panel/80 backdrop-blur-sm">
        {/* corner ticks */}
        <span aria-hidden="true" className="absolute -left-px -top-px h-4 w-4 border-l border-t border-gold/70" />
        <span aria-hidden="true" className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-gold/70" />

        <header className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">Spec · MKA-03</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Stable</p>
        </header>

        <div className="flex items-center gap-4 border-b border-line px-5 py-5">
          <div className="relative h-16 w-16 shrink-0">
            <div className="bezel absolute -inset-1 rounded-full opacity-70 [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-px" aria-hidden="true" />
            <img
              src={profile.portraitUrl}
              alt={`${profile.name}, senior Android engineer`}
              className="h-16 w-16 rounded-full border border-line object-cover"
              loading="eager"
              width={64}
              height={64}
            />
          </div>
          <div className="min-w-0">
            <p className="font-display text-[19px] font-medium leading-tight text-ink">{profile.name}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
              Senior Android Engineer
            </p>
            <p className="mt-0.5 font-mono text-[9.5px] text-faint">Yangon ↔ Bangkok · UTC+6:30</p>
          </div>
        </div>

        <dl className="divide-y divide-line/70 px-5">
          {specRows.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
              <dt className="shrink-0 font-mono text-[9.5px] uppercase tracking-[0.2em] text-faint">{row.label}</dt>
              <dd className="text-right font-mono text-[11px] text-mist">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="border-t border-line px-5 py-4">
          {specMeters.map((meter) => (
            <div key={meter.label} className="mb-3 last:mb-0">
              <div className="flex items-baseline justify-between">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-faint">{meter.label}</p>
                <p className="font-mono text-[9.5px] text-gold">{meter.note}</p>
              </div>
              <div className="mt-1.5 h-px w-full bg-line">
                <div
                  className="meter-fill h-px bg-gradient-to-r from-gold-deep via-gold to-gold-bright"
                  style={{ width: `${meter.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="grid-texture absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-8%] h-[440px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(201,169,106,0.1), transparent 72%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[1.08fr_0.92fr]">
          {/* statement */}
          <div className="pt-2">
            <Reveal>
              <p className="kicker">MKA · Senior Android Engineer — Est. 2019</p>
            </Reveal>

            <h1
              id="hero-title"
              className="mt-8 font-display text-[clamp(2.7rem,1.6rem+5.4vw,5rem)] font-light leading-[1.04] tracking-[-0.02em] text-ink"
            >
              <MaskLines
                lines={[
                  <>Android systems,</>,
                  <>
                    engineered to
                  </>,
                  <>
                    <em className="font-normal italic text-gold">flagship</em> standard.
                  </>,
                ]}
              />
            </h1>

            <Reveal delay={350}>
              <p className="mt-8 max-w-[46ch] text-[15.5px] leading-[1.75] text-mist">
                I lead the native Android layer of products people depend on — transit boards that
                tell the truth, payment rails that never lose a transaction, store floors that keep
                selling through outages. Architecture, performance, and design systems treated as
                one discipline.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="btn-gold inline-flex items-center gap-2.5 rounded-sm px-6 py-3.5 font-mono text-[12px] font-medium uppercase tracking-[0.14em]"
                >
                  Selected work
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-mist transition-colors hover:text-ink"
                >
                  <span className="link-draw">github.com/{profile.githubShort}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={550}>
              <p className="mt-10 flex items-center gap-3 font-mono text-[10.5px] text-faint">
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                Scroll for the engineering record
                <ArrowDown className="h-3 w-3 text-gold" />
              </p>
            </Reveal>
          </div>

          {/* spec panel */}
          <Reveal delay={300}>
            <SpecPanel />
          </Reveal>
        </div>

        {/* impact metrics */}
        <Reveal delay={200}>
          <dl className="mt-24 grid grid-cols-2 border-t border-line lg:grid-cols-4">
            {heroMetrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`py-8 pr-6 ${i > 0 ? "border-l border-line pl-6" : ""} ${i === 2 ? "max-lg:border-l-0 max-lg:pl-0" : ""}`}
              >
                <dd className="font-display text-[clamp(2rem,1.4rem+2.4vw,3rem)] font-light leading-none text-ink">
                  <CountUp to={metric.value} suffix={metric.suffix} decimals={metric.decimals ?? 0} />
                </dd>
                <dt className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-faint">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
