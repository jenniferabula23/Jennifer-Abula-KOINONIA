interface AjLogoProps {
  className?: string;
  /** 'brand' = blue gradient, 'mono' = inherits currentColor */
  tone?: 'brand' | 'mono';
  title?: string;
}

/** AJ · KOINONIA campaign mark */
export function AjLogo({ className = '', tone = 'mono', title = 'AJ — KOINONIA' }: AjLogoProps) {
  const letter = tone === 'brand' ? 'url(#aj-letter)' : 'currentColor';
  const wave = tone === 'brand' ? 'url(#aj-wave)' : 'currentColor';

  return (
    <svg
      viewBox="0 0 220 180"
      className={className}
      role="img"
      aria-label={title}
      fontWeight={600}
    >
      {tone === 'brand' && (
        <defs>
          <linearGradient id="aj-letter" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4a7fc4" />
            <stop offset="1" stopColor="#2f5f9e" />
          </linearGradient>
          <linearGradient id="aj-wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#5d8fd0" />
            <stop offset="0.6" stopColor="#a9cdf0" />
            <stop offset="1" stopColor="#7fa9dc" />
          </linearGradient>
        </defs>
      )}

      <text
        x="104"
        y="118"
        textAnchor="end"
        fontFamily="'Cormorant Garamond', 'Instrument Serif', Georgia, 'Times New Roman', serif"
        fontSize="118"
        fill={letter}
      >
        A
      </text>
      <text
        x="96"
        y="118"
        fontFamily="'Cormorant Garamond', 'Instrument Serif', Georgia, 'Times New Roman', serif"
        fontSize="118"
        fill={letter}
      >
        J
      </text>

      <path
        d="M30 98 C62 98 92 74 124 72 C146 71 162 84 190 88 C162 86 148 80 126 80 C94 80 66 100 30 98 Z"
        fill={wave}
        opacity={tone === 'mono' ? 0.75 : 1}
      />

      <g fill={letter}>
        <rect x="18" y="157" width="34" height="1.6" />
        <rect x="168" y="157" width="34" height="1.6" />
        <text
          x="110"
          y="163"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', 'Instrument Serif', Georgia, 'Times New Roman', serif"
          fontSize="17"
          letterSpacing="5"
        >
          KOINONIA
        </text>
      </g>
    </svg>
  );
}
