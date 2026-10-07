import { useState } from 'react';
import { Megaphone, Banknote, Brush, MessageCircle } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { RevealWrapper } from '@/components/SectionHeading';
import { WHATSAPP_URL } from '@/lib/constants';

const tabs = [
  {
    id: 'publicity',
    label: 'Publicity',
    icon: Megaphone,
    title: 'Publicity',
    text: 'Amplify the message. Help share KOINONIA across halls, faculties, and digital spaces — posters, content, conversations, and campus visibility.',
  },
  {
    id: 'financiers',
    label: 'Financiers',
    icon: Banknote,
    title: 'Financiers',
    text: 'Fuel the movement. Support the campaign with resources that keep outreach, programs, and student-facing work moving.',
  },
  {
    id: 'sweeping',
    label: 'Sweeping',
    icon: Brush,
    title: 'Sweeping',
    text: 'Take the ground. Join the team that moves campus to campus — presence, conversations, and the everyday work that builds real momentum.',
  },
] as const;

type TabId = (typeof tabs)[number]['id'];

export function SupportPage() {
  const [active, setActive] = useState<TabId>('publicity');
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Get Involved"
        title="Support"
        subtitle="Publicity. Financiers. Sweeping. Pick how you want to stand with Jennifer — then connect on WhatsApp."
      />

      <section className="relative overflow-hidden bg-campaign-dark py-16 sm:py-24">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <RevealWrapper>
            <div
              role="tablist"
              aria-label="Support categories"
              className="flex flex-wrap gap-2 rounded-[1.5rem] border border-line bg-white p-2 shadow-soft"
            >
              {tabs.map((tab) => {
                const isActive = tab.id === active;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(tab.id)}
                    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] transition sm:min-w-[8rem] ${
                      isActive
                        ? 'bg-navy text-white'
                        : 'text-ink-mute hover:bg-paper-cool hover:text-ink'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </RevealWrapper>

          <RevealWrapper delay={1} className="mt-8">
            <article
              role="tabpanel"
              className="rounded-[1.75rem] border border-line bg-white p-8 shadow-soft sm:p-10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white">
                <current.icon className="h-6 w-6" />
              </div>
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                {current.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-mute sm:text-lg">
                {current.text}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-8"
              >
                <MessageCircle className="h-4 w-4" />
                Connect
              </a>
            </article>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
}
