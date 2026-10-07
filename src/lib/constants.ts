export const WHATSAPP_URL = 'https://wa.me/233556530107';
export const WHATSAPP_DISPLAY = '055 653 0107';
export const EMAIL = 'jenniferabula8@gmail.com';
export const EMAIL_URL = `mailto:${EMAIL}`;
export const LINKEDIN_URL = 'https://www.linkedin.com/in/jennifer-abula-74b928242/';
export const LINKEDIN_COMPANY_URL = 'https://www.linkedin.com/company/agrivest-africa';
export const INSTAGRAM_URL = 'https://www.instagram.com/agrivestafrica/';
export const FACEBOOK_URL = 'https://www.facebook.com/agrivestAfrica';
export const X_URL = 'https://x.com/agrivestAfrica';
export const AGRIVEST_URL = 'https://www.agrivestafrica.com/';

export type SocialNetwork =
  | 'instagram'
  | 'twitter'
  | 'facebook'
  | 'linkedin'
  | 'email'
  | 'website';

/** LinkedIn + Facebook only (campaign socials) */
export const SOCIAL_LINKS: {
  label: string;
  href: string;
  network: SocialNetwork;
  external: boolean;
}[] = [
  { label: 'LinkedIn · Jennifer Abula', href: LINKEDIN_URL, network: 'linkedin', external: true },
  { label: 'Facebook · AgriVest Africa', href: FACEBOOK_URL, network: 'facebook', external: true },
];

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Policies', to: '/koinonia' },
  { label: 'Skills', to: '/skills' },
  { label: 'Support', to: '/support' },
  { label: 'Gallery', to: '/media' },
  { label: 'Contact', to: '/contact' },
] as const;

export const MARQUEE_TOP = [
  'KOINONIA',
  'JENNIFER ABULA',
  'KNUST SRC',
  'AGRIVEST AFRICA',
  'SKILL BUILDING',
  'ENTREPRENEURSHIP',
] as const;

export const MARQUEE_BOTTOM = [
  'MILLENNIUM FELLOW',
  'ENACTUS KNUST',
  'CANR',
  'DIGITAL SKILLS',
  'FELLOWSHIP',
  'KOINONIA',
] as const;

export const HOME_STATS = [
  { value: 'CANR', label: 'Agribusiness Management, KNUST' },
  { value: 'MD', label: 'Co-founder, AgriVest Africa' },
  { value: '2026', label: 'UN Millennium Fellow' },
  { value: '∞', label: 'Commitment to student impact' },
] as const;

export const JOURNEY = [
  {
    title: 'Technology & education',
    text: 'From Codetrain to software development and UI/UX — building skills she now uses to serve others.',
  },
  {
    title: 'AgriVest Africa',
    text: 'Co-founded a crowdfunding platform connecting farmers, investors, and traders across Ghana.',
  },
  {
    title: 'KNUST & Enactus',
    text: 'An Agribusiness Management student at CANR and an Enactor creating human-centered impact.',
  },
  {
    title: 'Campus Design Revolution',
    text: 'Launched free digital-skills bootcamps so more students can design, create, and earn.',
  },
] as const;

export const FOCUS_PREVIEWS = [
  {
    title: 'Digital Skills',
    text: 'Tools and fluency for a campus that creates, connects, and competes online.',
    to: '/skills',
  },
  {
    title: 'Practical Skills',
    text: 'Capabilities that travel beyond the lecture hall into work and leadership.',
    to: '/skills',
  },
  {
    title: 'Student Businesses',
    text: 'Space for ideas that can become real ventures on and beyond campus.',
    to: '/koinonia',
  },
  {
    title: 'Mentorship & Networks',
    text: 'People and pathways that help student enterprise take the next step.',
    to: '/koinonia',
  },
] as const;

export const KOINONIA_SHIFTS = [
  'Distant leadership → Present, listening leadership',
  'Limited access → Wider learning opportunities',
  'Ideas without support → Mentorship & networks',
  'Silent students → Shared voice & participation',
  'Campaign noise → Real fellowship',
] as const;

export const MEDIA_PREVIEWS = [
  {
    title: 'Global Entrepreneurship Festival',
    image: '/images/gallery/01-global-entrepreneurship-festival.jpg',
    tag: 'Gallery',
  },
  {
    title: 'Campus Design Revolution',
    image: '/images/gallery/06-campus-design-revolution.jpg',
    tag: 'Gallery',
  },
  {
    title: 'Farmer empowerment',
    image: '/images/gallery/09-farmer-empowerment.jpg',
    tag: 'Gallery',
  },
] as const;
