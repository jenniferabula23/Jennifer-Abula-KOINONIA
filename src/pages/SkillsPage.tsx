import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle2, MessageCircle, Users } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { RevealWrapper } from '@/components/SectionHeading';
import { CERTIFICATIONS, SKILL_GROUPS } from '@/data/content';
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/constants';

export function SkillsPage() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Skill Building · KOINONIA"
        title="Skills"
        subtitle="These are my skill sets — and I’m ready to lead students who want to learn, create, and grow with me."
      />
      <section className="relative bg-campaign-light py-16 text-ink sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <RevealWrapper>
            <p className="section-eyebrow">My Skill Sets</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
              WHAT I KNOW —
              <br />
              <span className="text-gradient">WHAT I CAN LEAD</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-ink-mute sm:text-lg">
              From storytelling and design to tech and community building — if you want to grow in
              any of these areas, let’s do it together under KOINONIA.
            </p>
          </RevealWrapper>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {SKILL_GROUPS.map((group, i) => (
              <RevealWrapper key={group.title} delay={i + 1}>
                <article className="flex h-full flex-col rounded-[1.75rem] border border-brand-100 bg-white p-6 shadow-glass sm:p-7">
                  <h3 className="font-display text-xl font-bold text-ink">{group.title}</h3>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex gap-2.5 text-sm leading-snug text-ink-mute">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/80 px-4 py-3">
                    <p className="flex gap-2 text-sm font-medium leading-snug text-brand-700">
                      <Users className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{group.lead}</span>
                    </p>
                  </div>
                </article>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Student invitation */}
      <section className="relative overflow-hidden border-t border-line bg-campaign-dark py-16 sm:py-20">
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <RevealWrapper>
            <p className="eyebrow">For KNUST Students</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              WANT TO LEARN?
              <br />
              <span className="text-gradient">I CAN LEAD YOU.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-mute sm:text-lg">
              Whether it’s Canva and content, social media, public speaking, UI/UX, or building a
              campus initiative — reach out. KOINONIA is about growing together, and I’m here to
              guide students who are ready to start.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Message me · {WHATSAPP_DISPLAY}
              </a>
              <Link to="/contact" className="btn-secondary">
                Join the conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section className="relative border-t border-brand-100 bg-ice py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <RevealWrapper>
            <p className="section-eyebrow">Credentials</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              CERTIFICATIONS
              <br />
              <span className="text-gradient">&amp; TRAINING</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-ink-mute">
              The learning journey behind the skills — so you know who’s leading you.
            </p>
          </RevealWrapper>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert, i) => (
              <RevealWrapper key={cert.title} delay={(i % 3) + 1}>
                <article className="flex h-full gap-4 rounded-[1.5rem] border border-brand-100 bg-white p-5 shadow-glass">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lift">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-snug text-ink">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-mute">{cert.detail}</p>
                  </div>
                </article>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
