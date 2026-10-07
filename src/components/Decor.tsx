/** Kept for API compatibility; the white theme uses hairline section borders instead of waves */
export function WaveDivider(_props: { from?: string; to?: string; accent?: string }) {
  return null;
}

export function GlowOrbs() {
  return null;
}

/** Portrait with a soft offset grey panel behind it */
export function OffsetPortrait({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      <div
        className="absolute inset-x-4 bottom-0 top-8 translate-x-3 translate-y-3 rounded-[2rem] bg-paper-cool ring-1 ring-line sm:inset-x-6"
        aria-hidden
      />
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full rounded-[2rem] object-cover object-top shadow-float"
        loading="lazy"
      />
    </div>
  );
}
