import { type ReactNode } from 'react';
import { RevealWrapper } from '@/components/SectionHeading';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-line bg-campaign-light pb-12 pt-32 sm:pb-16 sm:pt-40">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <RevealWrapper variant="up">
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-tightest text-ink">
            {title}
          </h1>
        </RevealWrapper>
        {subtitle && (
          <RevealWrapper delay={1} variant="up" className="mt-6 max-w-2xl">
            <p className="text-base leading-relaxed text-ink-mute sm:text-lg">{subtitle}</p>
          </RevealWrapper>
        )}
        {children && (
          <RevealWrapper delay={2} className="mt-6">
            {children}
          </RevealWrapper>
        )}
      </div>
    </div>
  );
}
