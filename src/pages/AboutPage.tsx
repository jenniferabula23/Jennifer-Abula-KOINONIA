import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Leaf, Users, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { OffsetPortrait } from '@/components/Decor';
import { RevealWrapper } from '@/components/SectionHeading';
import { AchievementsGrid } from '@/components/AchievementsGrid';
import { HOME_STATS, JOURNEY } from '@/lib/constants';

const highlights = [
  {
    icon: Leaf,
    label: 'Agribusiness · KNUST CANR',
  },
  {
    icon: Code2,
    label: 'Developer · Designer · Builder',
  },
  {
    icon: Users,
    label: 'Enactus KNUST',
  },
  {
    icon: Sparkles,
    label: 'UN Millennium Fellow 2026',
  },
];

export function AboutPage() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Who is Jennifer?"
        title="About Jennifer"
        subtitle="Agribusiness student. Entrepreneur. Builder. A KNUST leader shaped by technology, community, and the courage to start."
      />
      <section className="relative bg-campaign-light py-16 text-ink sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <RevealWrapper variant="left" className="lg:col-span-5 lg:sticky lg:top-28">
            <OffsetPortrait src="/images/jennifer-studio-02.jpg" alt="Jennifer Abula studio portrait" />
            <div className="mt-6 grid grid-cols-2 gap-2">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-2 rounded-2xl border border-brand-100 bg-white px-3 py-3 shadow-glass"
                >
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <p className="text-xs font-semibold leading-snug text-ink">{item.label}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <div className="lg:col-span-7">
            <RevealWrapper>
              <p className="section-eyebrow">Her Story</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
                THE HEART OF
                <br />
                <span className="text-gradient">KOINONIA</span>
              </h2>
            </RevealWrapper>

            <RevealWrapper delay={1} className="mt-6 space-y-5 text-base leading-relaxed text-ink-mute sm:text-lg">
              <p>
                <strong className="text-ink">Jennifer Abula</strong> is an Agribusiness Management
                student at Kwame Nkrumah University of Science and Technology — College of
                Agriculture and Natural Resources. Her path to KNUST was not rushed. After six years
                beyond senior high school, every step, delay, and preparation led her here — and she
                completed her first year with pride and purpose.
              </p>
              <p>
                Long before campus, Jennifer was already building. She is Co-Founder and Managing
                Director of <strong className="text-ink">AgriVest Africa</strong>, a crowdfunding
                platform that connects farmers, investors, and commodity traders. Inspired by what
                she saw in rural communities, she used her software development background to turn
                concern into a lasting agricultural enterprise — work later strengthened through the{' '}
                <strong className="text-ink">UNICEF Startup Lab</strong>.
              </p>
              <p>
                She brings a rare mix of skills to student leadership: software development, UI/UX
                design, entrepreneurship, and a belief that the most meaningful solutions are
                human-centered — built <em>with</em> people, not just for them. That same conviction
                led her to <strong className="text-ink">Enactus KNUST</strong>, where impact and
                enterprise meet.
              </p>
              <p>
                On campus, she has already started opening doors. Through the{' '}
                <strong className="text-ink">Campus Design Revolution</strong>, she convened free
                digital-skills bootcamps so students can learn to design, create, and monetize real
                abilities — not theory, not vibes. Selected as a{' '}
                <strong className="text-ink">2026 Millennium Fellow</strong> by the United Nations
                Academic Impact and MCN, she continues to treat leadership as responsibility:
                identify the challenge, gather people, and build something bigger than yourself.
              </p>
              <p>
                That is who Jennifer is — and that is why{' '}
                <strong className="text-ink">KOINONIA</strong> exists: fellowship, skill, and
                opportunity for every KNUST student.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={2} className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">
                The Journey
              </p>
              <div className="mt-4 space-y-3">
                {JOURNEY.map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-brand-100 bg-white px-5 py-4"
                  >
                    <p className="font-display text-sm font-bold text-brand-500">
                      0{i + 1} · {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-mute">{item.text}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>

            <RevealWrapper delay={3} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {HOME_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-brand-100 bg-white px-3 py-4 text-center shadow-glass"
                >
                  <p className="font-display text-xl font-bold text-brand-600 sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] leading-snug text-ink-mute sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </RevealWrapper>

            <RevealWrapper className="mt-8 flex flex-wrap gap-3">
              <Link to="/skills" className="btn-primary">
                Skills I can lead
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/koinonia" className="btn-outline">
                Discover KOINONIA
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </section>

      <section className="relative border-t border-brand-100 bg-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <RevealWrapper>
            <p className="section-eyebrow">Highlights</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              ACHIEVEMENTS
              <br />
              <span className="text-gradient">&amp; MILESTONES</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-ink-mute sm:text-lg">
              Moments from the journey — each one a picture, an event, and a little about what it
              meant.
            </p>
          </RevealWrapper>

          <div className="mt-12">
            <AchievementsGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
