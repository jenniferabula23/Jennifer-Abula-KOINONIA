import { Link } from 'react-router-dom';

interface AjMarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  to?: string;
}

const sizes = {
  sm: 'h-8 w-8 text-[10px]',
  md: 'h-10 w-10 text-xs',
  lg: 'h-14 w-14 text-sm',
  xl: 'h-20 w-20 text-xl',
};

/** Clean AJ monogram for Jennifer Abula */
export function AjMark({ size = 'md', className = '', to }: AjMarkProps) {
  const classes = `inline-flex shrink-0 items-center justify-center rounded-full bg-navy font-display font-bold tracking-tight text-white ring-2 ring-ink/10 ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label="Jennifer Abula — AJ">
        AJ
      </Link>
    );
  }

  return (
    <span className={classes} aria-hidden>
      AJ
    </span>
  );
}
