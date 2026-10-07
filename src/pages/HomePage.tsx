import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import {
  FOCUS_PREVIEWS,
  KOINONIA_SHIFTS,
  MARQUEE_BOTTOM,
  MARQUEE_TOP,
  MEDIA_PREVIEWS,
  WHATSAPP_URL,
} from '@/lib/constants';
import { Marquee } from '@/components/Marquee';
import { RevealWrapper } from '@/components/SectionHeading';
import { HeroCinematic } from '@/components/HeroCinematic';
import { HomeHighlights } from '@/components/HomeHighlights';

export function HomePage() {
  return (
    <div className="page-shell bg-white">
      <HeroCinematic />

      <HomeHighlights />

      <Marquee items={MARQUEE_TOP} />

      <Marquee items={MARQUEE_BOTTOM} reverse className="border-t-0" />

      {/* FOCUS PREVIEW */}
      <section className="relative bg-campaign-light py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <RevealWrapper>
            <p className="eyebrow">Her Agenda</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              THE KOINONIA
              <br />
              <span className="text-gradient">FOCUS</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-ink-mute sm:text-lg">
              A student-first agenda with two major pillars — skill building and entrepreneurship —
              designed to open doors across campus.
            </p>
          </RevealWrapper>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {FOCUS_PREVIEWS.map((item, i) => (
              <RevealWrapper key={item.title} delay={(i % 4) + 1}>
                <Link
                  to={item.to}
                  className="group block h-full rounded-[1.75rem] border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-float sm:p-7"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-sm font-bold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{item.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink transition group-hover:gap-2">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper className="mt-10 flex flex-wrap gap-3">
            <Link to="/skills" className="btn-primary">
              Skill Building
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/koinonia" className="btn-outline">
              Policies
            </Link>
          </RevealWrapper>
        </div>
      </section>

      {/* WHAT IS KOINONIA */}
      <section className="relative overflow-hidden border-y border-line bg-campaign-dark py-20 sm:py-24">
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <RevealWrapper variant="left">
              <p className="eyebrow">The Agenda</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
                WHAT IS
                <br />
                <span className="text-gradient">KOINONIA?</span>
              </h2>
            </RevealWrapper>
            <RevealWrapper delay={1} className="mt-6 space-y-4 text-base leading-relaxed text-ink-mute sm:text-lg">
              <p>
                KOINONIA is Jennifer’s bold fellowship agenda for KNUST’s SRC — a response to
                student leadership that can feel distant, inactive, or out of touch.
              </p>
              <p>
                It is not just a campaign word. It is a blueprint for a{' '}
                <strong className="text-ink">modern, present, student-first</strong> culture of
                growth and connection.
              </p>
            </RevealWrapper>
            <RevealWrapper delay={2} className="mt-8">
              <Link to="/koinonia" className="btn-primary">
                Explore KOINONIA
                <ArrowRight className="h-4 w-4" />
              </Link>
            </RevealWrapper>
          </div>

          <RevealWrapper delay={1} variant="right" className="lg:col-span-6">
            <div className="rounded-[2rem] border border-line bg-white p-6 shadow-soft sm:p-8">
              <p className="font-display text-lg font-bold text-ink">The Fellowship Agenda</p>
              <ul className="mt-6 space-y-4">
                {KOINONIA_SHIFTS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-line pb-4 text-sm text-ink-mute last:border-0 last:pb-0 sm:text-base"
                  >
                    <span className="mt-1 text-ink">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* MEDIA PREVIEW */}
      <section className="relative bg-campaign-light py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <RevealWrapper className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
                MOMENTS &
                <br />
                <span className="text-gradient">MILESTONES</span>
              </h2>
            </div>
            <Link to="/media" className="btn-outline self-start sm:self-auto">
              View full gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </RevealWrapper>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {MEDIA_PREVIEWS.map((item, i) => (
              <RevealWrapper key={item.title} delay={i + 1}>
                <Link to="/media" className="group block overflow-hidden rounded-[1.5rem] bg-paper-cool">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
                        {item.tag}
                      </p>
                      <p className="font-display text-lg font-bold text-white">{item.title}</p>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-white">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-line bg-campaign-dark py-20 sm:py-28">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <RevealWrapper>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              BE PART OF
              <br />
              <span className="text-gradient">KOINONIA</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-ink-mute sm:text-lg">
              Join KNUST students standing with Jennifer Abula for SRC President — fellowship,
              skill, and opportunity.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                ✦ Join the Movement Now
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
}
