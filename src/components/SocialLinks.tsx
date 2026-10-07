import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import { SOCIAL_LINKS, type SocialNetwork } from '@/lib/constants';

const ICONS: Record<SocialNetwork, LucideIcon> = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
  email: Mail,
  website: Globe,
};

type Variant = 'icons' | 'buttons';

export function SocialLinks({
  variant = 'buttons',
  className = '',
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === 'icons') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {SOCIAL_LINKS.map(({ href, label, network, external }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink-mute transition hover:border-ink hover:text-ink"
          >
            <SocialIcon network={network} className="h-4 w-4" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {SOCIAL_LINKS.map(({ href, label, network, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink-mute transition hover:border-ink hover:text-ink"
        >
          <SocialIcon network={network} className="h-4 w-4 shrink-0" />
          {label}
        </a>
      ))}
    </div>
  );
}

function SocialIcon({
  network,
  className,
}: {
  network: SocialNetwork;
  className?: string;
}) {
  const Icon = ICONS[network];
  return <Icon className={className} />;
}
