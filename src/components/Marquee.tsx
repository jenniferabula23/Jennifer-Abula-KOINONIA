interface MarqueeProps {
  items: readonly string[];
  className?: string;
  reverse?: boolean;
  /** Ink band instead of white */
  dark?: boolean;
}

export function Marquee({ items, className = '', reverse = false, dark = false }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden border-y border-line ${
        dark ? 'bg-paper-cool text-ink' : 'bg-white text-ink'
      } ${className}`}
      aria-hidden
    >
      <div
        className={`flex w-max gap-8 whitespace-nowrap py-3 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-display text-xs font-bold uppercase tracking-[0.28em] sm:text-sm"
          >
            <span className="text-ink-faint">✦</span>
            <span className="text-ink">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
