import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/hooks";
import { cn } from "../../utils/cn";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Craft", href: "#craft" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];
const IDS = NAV.map((n) => n.href.slice(1));

function useBangkokClock() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Bangkok",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useActiveSection(IDS);
  const clock = useBangkokClock();

  useEffect(() => {
    let frame = 0;
    const compute = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      frame = 0;
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 14);
      if (frame) return;
      frame = requestAnimationFrame(compute);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open ? "border-b border-line bg-void/88 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      {/* reading progress — metallic hairline */}
      <div
        aria-hidden="true"
        className="metal-rule absolute inset-x-0 top-0 origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />

      <nav aria-label="Primary" className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="group flex items-baseline gap-2.5" aria-label={`${profile.name} — top`}>
          <span className="font-mono text-[13px] font-medium tracking-[0.08em] text-gold transition-colors group-hover:text-gold-bright">
            MKA
          </span>
          <span className="hidden font-mono text-[9.5px] uppercase tracking-[0.22em] text-faint sm:block">
            Android Engineering
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "link-draw font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                  active === item.href.slice(1) ? "text-gold" : "text-mist hover:text-ink"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 font-mono text-[10.5px] tabular-nums text-faint md:flex" aria-label={`Bangkok time ${clock}`}>
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            BKK {clock}
          </span>
          <a
            href="#contact"
            className="hidden rounded-sm border border-gold/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-gold transition-colors hover:border-gold hover:bg-gold/10 sm:block"
          >
            Availability
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-mist lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <nav aria-label="Mobile" className="border-t border-line bg-void/96 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto max-w-6xl">
            {NAV.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-line/70 py-4"
                >
                  <span className="font-display text-[20px] font-medium text-ink">{item.label}</span>
                  <span className="font-mono text-[10px] text-gold">{String(i + 1).padStart(2, "0")}</span>
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-sm border border-gold/50 px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-gold"
              >
                Start a conversation
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
