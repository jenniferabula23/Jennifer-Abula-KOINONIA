import { RevealWrapper } from '@/components/SectionHeading';
import { ACHIEVEMENTS } from '@/data/content';

/** Achievements: picture → event → short about (in that order) */
export function AchievementsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {ACHIEVEMENTS.map((item, i) => (
        <RevealWrapper key={item.id} delay={(i % 3) + 1}>
          <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-float">
            <div className="aspect-[3/2] overflow-hidden bg-paper-cool">
              <img
                src={item.image}
                alt={item.title}
                className={`h-full w-full object-cover ${item.imagePosition ?? 'object-center'} transition duration-700 group-hover:scale-105`}
                loading="lazy"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                {item.year} · {item.tag}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-mute">{item.detail}</p>
            </div>
          </article>
        </RevealWrapper>
      ))}
    </div>
  );
}
