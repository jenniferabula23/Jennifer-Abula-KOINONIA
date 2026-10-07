import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RevealWrapper } from '@/components/SectionHeading';
import { HOME_ACHIEVEMENT_HIGHLIGHTS } from '@/data/content';

export function HomeHighlights() {
  return (
    <section className="relative border-b border-line bg-campaign-dark py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <RevealWrapper variant="scale" className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Highlights &amp; Achievements</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
            A GLIMPSE OF
            <br />
            <span className="text-gradient">WHO JENNIFER IS</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-mute sm:text-lg">
            KNUST student, agri-tech co-founder, and builder of skills for others — from UNICEF-backed
            impact to campus fellowship.
          </p>
        </RevealWrapper>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {HOME_ACHIEVEMENT_HIGHLIGHTS.map((item, i) => (
            <RevealWrapper key={item.id} delay={(i % 3) + 1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-float">
                <div className="aspect-[3/2] overflow-hidden bg-paper-cool">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`h-full w-full object-cover ${item.imagePosition ?? 'object-center'} transition duration-700 group-hover:scale-105`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                    {item.year} · {item.tag}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-mute line-clamp-4">
                    {item.detail}
                  </p>
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={2} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link to="/about" className="btn-primary">
            Read more about Jennifer
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/about" className="link-u text-sm font-semibold text-ink">
            See all achievements →
          </Link>
        </RevealWrapper>
      </div>
    </section>
  );
}
