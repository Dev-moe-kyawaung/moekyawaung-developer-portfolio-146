import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import { profile } from "../../data/portfolio";
import { GithubIcon, LinkedinIcon } from "../icons";
import { MaskLines, Reveal, Section } from "../ui";

const inputCls =
  "w-full border-b border-line-strong bg-transparent pb-3 pt-1 text-[15px] text-ink placeholder:text-faint/60 outline-none transition-colors focus:border-gold";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending || sent) return;
    setSending(true);
    // Demo mode — wire this to your email service or backend endpoint.
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  };

  return (
    <Section id="contact">
      <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* statement + channels */}
        <div>
          <Reveal>
            <p className="kicker">06 · Contact</p>
          </Reveal>
          <h2 className="mt-8 font-display text-[clamp(2.2rem,1.4rem+4vw,4rem)] font-light leading-[1.08] tracking-[-0.02em] text-ink">
            <MaskLines
              lines={[
                <>Let&apos;s build the</>,
                <>
                  next <em className="italic text-gold">flagship.</em>
                </>,
              ]}
            />
          </h2>

          <Reveal delay={200}>
            <p className="mt-8 max-w-md text-[15px] leading-[1.8] text-mist">
              Selecting engagements for Q3 2026 — flagship Android builds, architecture rescues,
              and technical advisory for teams that ship. If your roadmap has a hard mobile
              problem on it, I&apos;d like to hear about it.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 font-mono text-[13px] text-mist transition-colors hover:text-gold"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-line transition-colors group-hover:border-gold/60">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="link-draw">{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 font-mono text-[13px] text-mist transition-colors hover:text-gold"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-line transition-colors group-hover:border-gold/60">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="link-draw">
                  {profile.phone} <span className="text-faint">/ {profile.backupPhone}</span>
                </span>
              </a>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-faint transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-faint transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <span className="ml-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  Replies within 24h · UTC+6:30
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* form */}
        <Reveal delay={180}>
          <form onSubmit={onSubmit} className="relative border border-line bg-panel/60 p-7 sm:p-9" aria-label="Project inquiry form">
            <span aria-hidden="true" className="absolute -left-px -top-px h-4 w-4 border-l border-t border-gold/70" />
            <span aria-hidden="true" className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-gold/70" />

            {sent ? (
              <div role="status" className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <Check className="h-6 w-6" />
                </span>
                <p className="mt-6 font-display text-[24px] font-light text-ink">Message received.</p>
                <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-mist">
                  In production this lands in {profile.email} — expect a reply within one working
                  day.
                </p>
              </div>
            ) : (
              <>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold">Project inquiry</p>
                <div className="mt-8 space-y-7">
                  <div>
                    <label htmlFor="c-name" className="mb-1 block font-mono text-[9.5px] uppercase tracking-[0.2em] text-faint">
                      Name
                    </label>
                    <input id="c-name" name="name" required placeholder="Jane Doe" className={inputCls} autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-1 block font-mono text-[9.5px] uppercase tracking-[0.2em] text-faint">
                      Email
                    </label>
                    <input id="c-email" name="email" type="email" required placeholder="jane@company.com" className={inputCls} autoComplete="email" />
                  </div>
                  <div>
                    <label htmlFor="c-message" className="mb-1 block font-mono text-[9.5px] uppercase tracking-[0.2em] text-faint">
                      The problem
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="What are you building, and where does it hurt?"
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-gold group mt-9 inline-flex w-full items-center justify-center gap-2.5 rounded-sm px-6 py-4 font-mono text-[12px] font-medium uppercase tracking-[0.16em] disabled:opacity-70"
                >
                  {sending ? "Sending…" : "Send inquiry"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                <p className="mt-4 text-center font-mono text-[9.5px] text-faint">
                  Demo mode — no data leaves this page until a backend is wired.
                </p>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
