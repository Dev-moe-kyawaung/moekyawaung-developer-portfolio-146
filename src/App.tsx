import { useCallback, useRef, useState } from "react";
import { Header } from "./components/lux/Header";
import { Hero } from "./components/lux/Hero";
import { Manifesto } from "./components/lux/Manifesto";
import { Disciplines } from "./components/lux/Disciplines";
import { Projects } from "./components/lux/Projects";
import { CaseStudyOverlay } from "./components/lux/CaseStudyOverlay";
import { Timeline } from "./components/lux/Timeline";
import { Writing } from "./components/lux/Writing";
import { Contact } from "./components/lux/Contact";
import { caseStudies } from "./data/flagship";
import { profile } from "./data/portfolio";
import { GithubIcon, LinkedinIcon } from "./components/icons";

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-[12px] tracking-[0.1em] text-gold">MKA</p>
            <p className="mt-1.5 font-display text-[15px] font-medium text-ink">{profile.name}</p>
            <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.2em] text-faint">
              Senior Android Engineer · Yangon ↔ Bangkok
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2">
            {[
              ["About", "#about"],
              ["Craft", "#craft"],
              ["Work", "#work"],
              ["Experience", "#experience"],
              ["Writing", "#writing"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="link-draw font-mono text-[10.5px] uppercase tracking-[0.16em] text-mist transition-colors hover:text-ink"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-faint transition-colors hover:border-gold/60 hover:text-gold"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-faint transition-colors hover:border-gold/60 hover:text-gold"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="metal-rule mt-10 opacity-50" aria-hidden="true" />

        <p className="mt-6 flex flex-col items-start justify-between gap-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-faint/70 sm:flex-row">
          <span>© {new Date().getFullYear()} Moe Kyaw Aung — engineered, not assembled</span>
          <span>Kotlin · Compose · GTFS-RT · 99.9% crash-free</span>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeCase, setActiveCase] = useState<string | null>(null);
  // Remember which project row opened the overlay so focus can return.
  const openerRef = useRef<HTMLElement | null>(null);

  const openCase = useCallback((id: string) => {
    openerRef.current = document.activeElement as HTMLElement;
    setActiveCase(id);
  }, []);

  const closeCase = useCallback(() => {
    setActiveCase(null);
    openerRef.current?.focus();
  }, []);

  const study = caseStudies.find((s) => s.id === activeCase) ?? null;

  return (
    <div className="grain min-h-screen bg-void text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-medium focus:text-void"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Manifesto />
        <Disciplines />
        <Projects onOpen={openCase} />
        <Timeline />
        <Writing />
        <Contact />
      </main>

      <Footer />

      {study && <CaseStudyOverlay study={study} onClose={closeCase} onNavigate={setActiveCase} />}
    </div>
  );
}
