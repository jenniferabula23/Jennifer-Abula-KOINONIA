import { Link } from 'react-router-dom';
import { NAV_LINKS } from '@/lib/constants';
import { SocialLinks } from '@/components/SocialLinks';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-campaign-dark text-ink">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            JENNIFER ABULA
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-ink-faint">
            Who is Jennifer? · KOINONIA · KNUST SRC
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="max-w-xs text-sm leading-relaxed text-ink-mute">
              A youthful campaign for community, skill building, and student enterprise at KNUST.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex rounded-full bg-navy px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white"
            >
              Join ✦
            </Link>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink-faint">Explore</p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-ink-mute transition hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink-faint">Social</p>
            <SocialLinks variant="icons" className="mt-4" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Jennifer Abula Campaign. All rights reserved.</p>
          <p>KNUST SRC President Aspirant · KOINONIA</p>
        </div>
      </div>
    </footer>
  );
}
