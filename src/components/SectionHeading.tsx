import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

export function RevealWrapper({
  children,
  delay = 0,
  className = '',
  variant = 'up',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}) {
  const { ref, visible } = useReveal();
  const delayClass = delay === 0 ? '' : `reveal-delay-${delay}`;

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${delayClass} ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
