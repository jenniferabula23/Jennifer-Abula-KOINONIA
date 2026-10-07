import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
  Users,
  Sparkles,
  Ear,
  Lightbulb,
  Network,
  Rocket,
  Handshake,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { OffsetPortrait } from '@/components/Decor';
import { RevealWrapper } from '@/components/SectionHeading';
import { KOINONIA_SHIFTS } from '@/lib/constants';

const ideas = [
  {
    icon: Users,
    title: 'One community',
    text: 'One campus. One student body. A union where every faculty and hall belongs — and no one is left on the outside.',
  },
  {
    icon: Heart,
    title: 'One fellowship',
    text: 'Not politics for a season — relationship for a culture. Students who show up for each other, learn together, and grow together.',
  },
  {
    icon: Ear,
    title: 'Leadership through listening',
    text: 'Real change starts with understanding. Your concerns shape the direction.',
  },
  {
    icon: Sparkles,
    title: 'Collective growth',
    text: 'When one student thrives, the whole campus moves forward.',
  },
];

const enterprisePillars = [
  {
    icon: Rocket,
    title: 'Student businesses',
    text: 'Space and support for ideas that can become real ventures.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'Creative problem-solving that responds to campus and community needs.',
  },
  {
    icon: Handshake,
    title: 'Mentorship',
    text: 'Connecting aspiring founders with people who can guide the next step.',
  },
  {
    icon: Network,
    title: 'Networking',
    text: 'Relationships that open doors — peers, partners, professionals.',
  },
  {
    icon: Sparkles,
    title: 'Opportunities',
    text: 'Visibility and pathways that help student enterprise take root.',
  },
];

export function KoinoniaPage() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Policies · Vision for Students"
        title="One community. One fellowship."
        subtitle="That is KOINONIA — Jennifer’s vision for KNUST students: a present, student-first SRC built on belonging, shared voice, and real opportunity."
      />

      <section className="relative overflow-hidden bg-campaign-light py-16 sm:py-24">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <RevealWrapper>
                <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  It is KOINONIA —
                  <span className="text-gradient"> the vision for students.</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-mute sm:text-lg">
                  One community. One fellowship. KOINONIA is not just a campaign word — it is the
                  policy heart of this agenda: leadership that is present, skills that are open, and
                  a campus culture where students are seen, heard, and supported every day.
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-mute sm:text-lg">
                  This is the vision for students — a structured response to distant leadership,
                  with fellowship, skill access, and enterprise support that works beyond election
                  season.
                </p>
              </RevealWrapper>

              <RevealWrapper delay={1} className="mt-8 rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
                <p className="font-display text-lg font-bold text-ink">The Fellowship Agenda</p>
                <ul className="mt-5 space-y-3">
                  {KOINONIA_SHIFTS.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-ink-mute sm:text-base">
                      <span className="text-ink">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealWrapper>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
              {ideas.map((item, i) => (
                <RevealWrapper key={item.title} delay={(i % 4) + 1}>
                  <article className="h-full rounded-[1.75rem] border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-float">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-mute">{item.text}</p>
                  </article>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneurship focus — merged into Policies */}
      <section className="relative overflow-hidden border-t border-line bg-campaign-dark py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <RevealWrapper>
              <p className="eyebrow">Major Focus</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                Entrepreneurship
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-mute sm:text-lg">
                Ideas deserve room to grow — student businesses, innovation, mentorship, and real
                opportunity across campus.
              </p>
              <div className="mt-8">
                <OffsetPortrait
                  src="/images/jennifer-studio-05.jpg"
                  alt="Jennifer Abula editorial portrait"
                />
              </div>
            </RevealWrapper>
          </div>

          <div className="space-y-3 lg:col-span-7">
            {enterprisePillars.map((item, i) => (
              <RevealWrapper key={item.title} delay={(i % 4) + 1}>
                <div className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition hover:shadow-float">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-mute">{item.text}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}

            <RevealWrapper className="flex flex-wrap gap-3 pt-4">
              <Link to="/skills" className="btn-primary">
                Skill Building
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/support" className="btn-secondary">
                Get involved
              </Link>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
