import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { AjMark } from '@/components/AjMark';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const linksRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useLayoutEffect(() => {
    const measure = () => {
      const active = linksRef.current?.querySelector<HTMLElement>('a[aria-current="page"]');
      setPill(active ? { left: active.offsetLeft, width: active.offsetWidth } : null);
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ease-out-expo ${
            scrolled
              ? 'border-white/80 bg-white/85 px-2.5 py-1.5 shadow-[0_0_0_1px_rgba(11,31,77,0.06),0_18px_40px_-20px_rgba(11,31,77,0.35)] sm:px-3'
              : 'border-white/70 bg-white/65 px-3 py-2.5 shadow-[0_0_0_1px_rgba(11,31,77,0.05),0_10px_30px_-18px_rgba(11,31,77,0.25)] sm:px-4'
          }`}
        >
          <NavLink to="/" className="flex items-center gap-2.5 px-2" onClick={() => setOpen(false)}>
            <AjMark size="sm" />
            <div className="leading-none">
              <span className="block font-display text-sm font-bold tracking-[0.14em] text-navy sm:text-base">
                JENNIFER ABULA
              </span>
              <span className="hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-ink-faint sm:block">
                KOINONIA · AJ
              </span>
            </div>
          </NavLink>

          <div ref={linksRef} className="relative hidden items-center gap-0.5 xl:flex">
            {pill && (
              <span
                className="absolute inset-y-0 rounded-full bg-navy shadow-[0_8px_18px_-8px_rgba(11,31,77,0.6)] transition-all duration-500 ease-out-expo"
                style={{ left: pill.left, width: pill.width }}
                aria-hidden
              />
            )}
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-ink-mute hover:text-navy'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <NavLink
              to="/contact"
              className="hidden rounded-full bg-navy px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_18px_-8px_rgba(11,31,77,0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-navy-soft sm:inline-flex"
            >
              Join ✦
            </NavLink>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white xl:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-300 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-navy-deep/30 backdrop-blur-sm"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(20rem,88vw)] flex-col border-l border-line bg-white p-6 shadow-float transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-display text-lg font-bold tracking-wide text-navy">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-paper-cool text-ink"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-semibold ${
                    isActive ? 'bg-navy text-white' : 'text-ink-mute hover:bg-paper-cool hover:text-navy'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6"
          >
            Join the Movement ✦
          </NavLink>
        </div>
      </div>
    </>
  );
}
