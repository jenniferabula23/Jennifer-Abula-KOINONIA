import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { RevealWrapper } from '@/components/SectionHeading';
import { GALLERY_ITEMS } from '@/data/gallery';

export function MediaPage() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Gallery"
        title="Moments"
        subtitle="From global stages and UNICEF pitches to campus design bootcamps and farmer empowerment — a visual journey through Jennifer’s work."
      />
      <section className="relative bg-campaign-light py-16 text-ink sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_ITEMS.map((item, i) => (
              <RevealWrapper key={item.id} delay={(i % 3) + 1}>
                <figure className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-brand-100 bg-white shadow-glass transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper-cool">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      loading={i < 3 ? 'eager' : 'lazy'}
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
                      Pic {item.id}
                    </span>
                  </div>
                  <figcaption className="flex flex-1 flex-col p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-500">
                      {item.tag}
                    </p>
                    <p className="mt-2 font-display text-lg font-bold leading-snug text-ink sm:text-xl">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper className="mt-12 flex flex-wrap gap-3">
            <Link to="/about" className="btn-primary">
              Read her story
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Connect
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
}
