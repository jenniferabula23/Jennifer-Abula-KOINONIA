import { MessageCircle, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { RevealWrapper } from '@/components/SectionHeading';
import { SocialLinks } from '@/components/SocialLinks';
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/constants';

export function ContactPage() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Join the Conversation"
        title="Contact"
        subtitle="Bring your ideas, questions, and energy. WhatsApp is the fastest way to reach Jennifer and the KOINONIA team."
      />

      <section className="relative overflow-hidden bg-campaign-dark py-16 sm:py-24">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <RevealWrapper>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full overflow-hidden rounded-[2rem] border border-line bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-float sm:p-10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366] text-white">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h2 className="font-display text-3xl font-bold text-ink">WhatsApp</h2>
                <p className="mt-2 font-display text-xl font-bold text-ink-mute">
                  {WHATSAPP_DISPLAY}
                </p>
                <p className="mt-3 text-ink-mute">
                  Message Jennifer Abula directly — share ideas, ask questions, or join the
                  conversation.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink transition group-hover:gap-3">
                  Open WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </RevealWrapper>

            <RevealWrapper delay={1}>
              <div className="h-full rounded-[2rem] border border-line bg-white p-8 shadow-soft sm:p-10">
                <h2 className="font-display text-3xl font-bold text-ink">Follow along</h2>
                <p className="mt-3 text-ink-mute">
                  Stay close to campaign moments across social platforms.
                </p>
                <SocialLinks variant="buttons" className="mt-8" />
              </div>
            </RevealWrapper>
          </div>

          <RevealWrapper delay={2} className="mt-8">
            <div className="rounded-[2rem] border border-line bg-white px-6 py-8 text-center shadow-soft sm:px-10">
              <p className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Ready to build with us?
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm text-ink-mute sm:text-base">
                Call or message {WHATSAPP_DISPLAY} — start the conversation today.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
}
