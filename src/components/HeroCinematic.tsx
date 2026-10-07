import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AjLogo } from '@/components/AjLogo';

const HERO_PORTRAIT = '/images/jennifer-hero.jpg';

const vars = (v: Record<string, string>) => v as CSSProperties;
const delay = (ms: number) => vars({ '--d': `${ms}ms` });

/** Editorial hero: art-directed portrait panel, name framing it from the left */
export function HeroCinematic() {
  const [ready, setReady] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let a = 0;
    const b = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => setReady(true));
    });
    return () => {
      cancelAnimationFrame(a);
      cancelAnimationFrame(b);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = rootRef.current;
    if (!root) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
        if (copyRef.current && window.innerWidth >= 1024) {
          copyRef.current.style.transform = `translate3d(0, ${y * -0.06}px, 0)`;
        }
      });
    };

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      root.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      root.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    };
    const fine = window.matchMedia('(pointer: fine)').matches;

    window.addEventListener('scroll', onScroll, { passive: true });
    if (fine) root.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('scroll', onScroll);
      root.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className={`bg-campaign-light relative overflow-hidden pb-10 lg:h-[100svh] lg:min-h-[700px] lg:pb-0 ${
        ready ? 'is-ready' : ''
      }`}
    >
      {/* Background layer */}
      <div className="hero-grid pointer-events-none absolute inset-0 hidden lg:block" aria-hidden />
      <div
        className="pointer-events-none absolute -left-48 top-1/4 h-[34rem] w-[34rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(47,95,255,0.10), transparent 65%)' }}
        aria-hidden
      />

      {/* Portrait layer */}
      <div className="relative mx-3 mt-[5.5rem] h-[60svh] min-h-[400px] max-h-[600px] overflow-hidden rounded-[2rem] bg-[#6e5244] shadow-float sm:mx-6 lg:absolute lg:inset-y-0 lg:right-0 lg:m-0 lg:h-auto lg:max-h-none lg:w-[54%] lg:rounded-none lg:rounded-bl-[4rem] lg:shadow-none xl:w-[52%]">
        <div className="ha-clip absolute inset-0" style={delay(80)}>
          <div
            className="depth absolute -inset-[3%]"
            style={vars({ '--dx': '-12px', '--dy': '-8px' })}
          >
            <div ref={imgRef} className="absolute inset-0 will-change-transform">
              <div className="ha-zoom absolute inset-0" style={{ ...delay(80), transitionDuration: '2.4s' }}>
                <img
                  src={HERO_PORTRAIT}
                  alt="Jennifer Abula"
                  className="h-full w-full object-cover object-[50%_28%]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Light & depth treatment — the face area stays clear */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 85% 70% at 52% 34%, transparent 52%, rgba(7,26,61,0.42) 100%)',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(7,26,61,0.62) 0%, rgba(7,26,61,0.18) 26%, rgba(7,26,61,0) 44%)',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{
            background:
              'linear-gradient(140deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 38%), linear-gradient(320deg, rgba(11,31,77,0.5) 0%, rgba(11,31,77,0) 45%)',
          }}
          aria-hidden
        />
        <div className="bg-noise pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="ha-fade pointer-events-none absolute inset-3 rounded-[1.5rem] border border-white/25 sm:inset-4 lg:inset-6 lg:rounded-[1.75rem] lg:rounded-bl-[3rem]"
          style={delay(1300)}
          aria-hidden
        />

        {/* Floating labels on the photograph */}
        <div
          className="ha-fade glass-photo absolute right-5 top-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white lg:right-10 lg:top-28"
          style={delay(1350)}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-dot" />
          KOINONIA Agenda
        </div>

        <p
          className="ha-fade pointer-events-none absolute right-11 top-[38%] hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.4em] text-white/60 [writing-mode:vertical-rl] xl:block"
          style={delay(1500)}
          aria-hidden
        >
          One community — One fellowship
        </p>

        <div
          className="depth absolute bottom-6 left-6 z-10 lg:bottom-12 lg:left-12"
          style={vars({ '--dx': '-14px', '--dy': '-10px' })}
        >
          <div className="ha-fade text-white/80 drop-shadow-[0_2px_10px_rgba(7,26,61,0.45)]" style={delay(1300)}>
            <AjLogo className="h-14 w-auto lg:h-20" />
          </div>
        </div>
      </div>

      {/* Typography & UI layer */}
      <div className="container-x relative z-10 lg:flex lg:h-full lg:items-center">
        <div ref={copyRef} className="pt-7 will-change-transform lg:w-[45%] lg:pt-20 xl:w-[46%]">
          <div className="ha-up flex items-center gap-3" style={delay(300)}>
            <span className="hidden font-display text-xs font-semibold text-navy sm:inline">01</span>
            <span className="hidden h-px w-8 bg-navy/25 sm:block" />
            <span className="glass-paper inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-mute sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-royal" />
              KNUST SRC · President Aspirant
            </span>
          </div>

          <div className="depth mt-5 lg:mt-7" style={vars({ '--dx': '10px', '--dy': '6px' })}>
            <h1 className="font-display text-white font-semibold uppercase leading-[0.86] tracking-tightest text-[clamp(3.6rem,17vw,6.5rem)] lg:text-[clamp(5rem,9.2vw,10.25rem)]">
              <span className="ha-side">
                <span className="text-navy" style={delay(420)}>
                  Jennifer
                </span>
              </span>
              <span className="ha-side">
                <span className="text-royal" style={delay(540)}>
                  Abula.
                </span>
              </span>
            </h1>
          </div>

          <p
            className="ha-up mt-5 max-w-md text-base leading-relaxed text-ink-mute sm:text-lg lg:mt-6 lg:max-w-sm"
            style={delay(800)}
          >
            Present leadership, real skills, and a campus that moves forward together.
          </p>

          <div className="ha-up mt-7 flex flex-wrap items-center gap-3 lg:mt-8" style={delay(1080)}>
            <Link to="/contact" className="btn-primary">
              Join the Movement
              <span className="btn-icon">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link to="/about" className="btn-secondary">
              Meet Jennifer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
