import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { caseStudies, type CaseStudy } from "../../data/flagship";
import { Tag } from "../ui";

interface Props {
  study: CaseStudy;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

/** Full-screen case-study record. Focus-trapped dialog with keyboard support. */
export function CaseStudyOverlay({ study, onClose, onNavigate }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const idx = caseStudies.findIndex((s) => s.id === study.id);
  const prev = caseStudies[(idx - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(idx + 1) % caseStudies.length];

  // Focus management + scroll lock + Escape
  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && rootRef.current) {
        const focusables = rootRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Re-run entrance animation when switching studies
  useEffect(() => {
    rootRef.current?.scrollTo({ top: 0 });
  }, [study.id]);

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`case-title-${study.id}`}
      className="fixed inset-0 z-[90] overflow-y-auto bg-void/[0.985] backdrop-blur-sm"
    >
      <div className="grid-texture pointer-events-none fixed inset-0" aria-hidden="true" />

      {/* top bar */}
      <div className="sticky top-0 z-10 border-b border-line bg-void/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">
            Case record {study.index} / {String(caseStudies.length).padStart(2, "0")}
          </p>
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-faint sm:block">
              esc to close
            </span>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close case study"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-mist transition-colors hover:border-gold/60 hover:text-gold"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div key={study.id} className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        {/* header */}
        <header className="rise">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-gold">
            {study.sector} · {study.year}
          </p>
          <h2
            id={`case-title-${study.id}`}
            className="mt-5 font-display text-[clamp(2.2rem,1.3rem+4.2vw,4.2rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink"
          >
            {study.title}
          </h2>
          <div className="metal-rule mt-8 w-32" aria-hidden="true" />
          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["Client", study.client],
              ["Role", study.role],
              ["Period", study.year],
              ["Sector", study.sector],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-faint">{label}</dt>
                <dd className="mt-1.5 text-[13px] leading-snug text-mist">{value}</dd>
              </div>
            ))}
          </dl>
        </header>

        {/* brief + challenge */}
        <section className="rise mt-16 grid gap-10 lg:grid-cols-2" style={{ animationDelay: "90ms" }} aria-label="Brief and challenge">
          <div>
            <h3 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-gold">The brief</h3>
            <p className="mt-4 text-[15px] leading-[1.85] text-mist">{study.brief}</p>
          </div>
          <div>
            <h3 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-gold">The hard part</h3>
            <p className="mt-4 text-[15px] leading-[1.85] text-mist">{study.challenge}</p>
          </div>
        </section>

        {/* architecture layers */}
        <section className="rise mt-20" style={{ animationDelay: "160ms" }} aria-label="Architecture">
          <h3 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-gold">Architecture, layer by layer</h3>
          <ol className="mt-8 border-t border-line">
            {study.architecture.map((layer, i) => (
              <li key={layer.layer} className="grid grid-cols-[44px_1fr] gap-4 border-b border-line py-6 sm:grid-cols-[72px_200px_1fr] sm:gap-6">
                <span className="font-mono text-[11px] pt-1 text-faint">L{i + 1}</span>
                <span className="font-display text-[18px] font-light text-ink">{layer.layer}</span>
                <span className="col-span-2 text-[14px] leading-relaxed text-mist sm:col-span-1">{layer.body}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* performance */}
        <section className="rise mt-20" style={{ animationDelay: "230ms" }} aria-label="Performance">
          <h3 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-gold">Performance ledger</h3>
          <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
            {study.performance.map((metric) => (
              <div key={metric.label} className="bg-panel px-6 py-7">
                <p className="font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.1rem)] font-light leading-none text-gold-bright">
                  {metric.value}
                </p>
                <p className="mt-3 text-[12.5px] font-medium text-ink">{metric.label}</p>
                <p className="mt-1 font-mono text-[9.5px] leading-relaxed text-faint">{metric.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* outcomes */}
        <section className="rise mt-20" style={{ animationDelay: "300ms" }} aria-label="Outcomes">
          <h3 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-gold">What it returned</h3>
          <div className="mt-8 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
            {study.outcomes.map((outcome) => (
              <div key={outcome.label}>
                <p className="font-display text-[clamp(2.4rem,1.6rem+3vw,3.6rem)] font-light leading-none text-ink">
                  {outcome.value}
                </p>
                <p className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-faint">{outcome.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* stack + quote */}
        <section className="rise mt-20 grid gap-10 lg:grid-cols-[1fr_1fr]" style={{ animationDelay: "370ms" }} aria-label="Stack and testimonial">
          <div>
            <h3 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-gold">Shipped with</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            <a
              href={study.repo}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-mist transition-colors hover:text-gold"
            >
              <span className="link-draw">Inspect the repository</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
            </a>
          </div>
          <blockquote className="border-l border-gold/50 pl-6">
            <p className="font-display text-[19px] font-light italic leading-relaxed text-mist">
              “{study.quote.text}”
            </p>
            <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              — {study.quote.by}
            </footer>
          </blockquote>
        </section>

        {/* prev / next */}
        <nav
          className="rise mt-24 flex items-center justify-between gap-4 border-t border-line pt-8"
          style={{ animationDelay: "440ms" }}
          aria-label="Other case studies"
        >
          <button
            onClick={() => onNavigate(prev.id)}
            className="group flex items-center gap-3 text-left"
          >
            <ArrowLeft className="h-4 w-4 text-gold transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block font-mono text-[9.5px] uppercase tracking-[0.18em] text-faint">Previous</span>
              <span className="font-display text-[16px] text-mist transition-colors group-hover:text-ink">
                {prev.title}
              </span>
            </span>
          </button>
          <button
            onClick={() => onNavigate(next.id)}
            className="group flex items-center gap-3 text-right"
          >
            <span>
              <span className="block font-mono text-[9.5px] uppercase tracking-[0.18em] text-faint">Next</span>
              <span className="font-display text-[16px] text-mist transition-colors group-hover:text-ink">
                {next.title}
              </span>
            </span>
            <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
          </button>
        </nav>
      </div>
    </div>
  );
}
