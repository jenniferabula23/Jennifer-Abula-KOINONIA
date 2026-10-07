export type ArticleCategory = 'technology' | 'agriculture' | 'youth';

export interface Achievement {
  id: string;
  year: string;
  title: string;
  detail: string;
  tag: string;
  image: string;
  /** Tailwind object-position class for framing (e.g. object-top, object-[center_30%]) */
  imagePosition?: string;
}

export interface Article {
  slug: string;
  category: ArticleCategory;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  image: string;
  body: string[];
}

/** Sourced from LinkedIn, resume, UNICEF & AgriVest public materials */
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'millennium',
    year: '2026',
    title: 'UN Millennium Fellow',
    detail:
      'Selected by United Nations Academic Impact and MCN among 5,500+ undergraduate leaders from 330+ campuses worldwide for bold social impact.',
    tag: 'Leadership',
    image: '/images/unicef-feature.webp',
  },
  {
    id: 'enactus',
    year: '2026',
    title: 'Enactus KNUST',
    detail:
      'Joined Enactus KNUST to create human-centered solutions where entrepreneurial action improves lives and sustains itself.',
    tag: 'Youth',
    image: '/images/unicef-agrivest-5.webp',
  },
  {
    id: 'campus-design',
    year: '2026',
    title: 'Campus Design Revolution',
    detail:
      'Launched free digital-skills bootcamps at KNUST — Canva, design fundamentals, and monetizable web skills — with 150+ students signed up.',
    tag: 'Technology',
    image: '/images/agrivest-pitch.png',
  },
  {
    id: 'knust',
    year: '2025',
    title: 'KNUST · Agribusiness Management',
    detail:
      'Began BSc Agribusiness Management at CANR after six years of preparation beyond SHS — and completed first year with purpose.',
    tag: 'Agriculture',
    image: '/images/jennifer-studio-04.jpg',
  },
  {
    id: 'unicef-lab',
    year: '2024',
    title: 'UNICEF Startup Lab · Cohort 4',
    detail:
      'Represented AgriVest Africa in the UNICEF Startup Lab (KOICA / MEST Africa) to scale agri-fintech for rural farmers.',
    tag: 'Agriculture',
    image: '/images/unicef-agrivest-1.webp',
  },
  {
    id: 'unicef-feature',
    year: '2024',
    title: 'Featured · UNICEF Ghana',
    detail:
      'AgriVest Africa’s journey — and Jennifer’s software-driven vision for rural farming — was highlighted by UNICEF Ghana.',
    tag: 'Impact',
    image: '/images/unicef-certificate-web.jpg',
    imagePosition: 'object-[center_28%]',
  },
  {
    id: 'agrivest',
    year: '2022',
    title: 'Co-Founder · AgriVest Africa',
    detail:
      'Co-founded an agri-fintech crowdfunding platform linking farmers, investors, and traders across Ghana.',
    tag: 'Entrepreneurship',
    image: '/images/jennifer-agrivest-team.webp',
  },
  {
    id: 'agrivest-comms',
    year: '2022–2025',
    title: 'Communications Lead · AgriVest',
    detail:
      'Built storytelling campaigns, social strategy, graphics, video, and voice-over work that grew AgriVest’s digital community.',
    tag: 'Communication',
    image: '/images/agrivest-community.webp',
  },
  {
    id: 'agricentric',
    year: '2023–2025',
    title: 'Business Development · Agricentric',
    detail:
      'Drove market research, stakeholder mapping, and engagement growth as Business Development & Engagement Officer.',
    tag: 'Business',
    image: '/images/unicef-agrivest-2.webp',
  },
  {
    id: 'freelance',
    year: '2022–2025',
    title: 'Freelance Designer & Developer',
    detail:
      'Designed responsive sites, brand identities, UI/UX prototypes, and digital campaigns for organisations and social enterprises.',
    tag: 'Technology',
    image: '/images/jennifer-studio-01.jpg',
  },
  {
    id: 'voiceover',
    year: '2023–2025',
    title: 'Voice Over & Audio Storytelling',
    detail:
      'Delivered professional voice-over for campaigns, education, and promotional content across diverse audiences.',
    tag: 'Creative',
    image: '/images/jennifer-studio-03.jpg',
  },
  {
    id: 'codetrain',
    year: '2018–2021',
    title: 'Branch Manager · Codetrain',
    detail:
      'Led team coordination, stakeholder relationships, and operations at Codetrain while growing in technology and education.',
    tag: 'Technology',
    image: '/images/jennifer-studio-07.jpg',
  },
  {
    id: 'kic',
    year: 'Fellow',
    title: 'KIC Fellow',
    detail:
      'Recognised as a KIC Fellow — part of a network strengthening innovation, learning, and youth leadership pathways.',
    tag: 'Leadership',
    image: '/images/unicef-agrivest-3.webp',
  },
];

/** Top three milestones for the home page glimpse */
export const HOME_ACHIEVEMENT_HIGHLIGHTS: Achievement[] = (
  ['millennium', 'agrivest', 'unicef-feature'] as const
).map((id) => ACHIEVEMENTS.find((a) => a.id === id)!);

export const ARTICLES: Article[] = [
  {
    slug: 'tech-that-serves-people',
    category: 'technology',
    title: 'Tech That Serves People: Building Skills Beyond the Screen',
    excerpt:
      'From Codetrain to Campus Design Revolution — why Jennifer Abula believes digital skills should create value for others, not just résumés.',
    date: '2026-03-20',
    readMinutes: 5,
    image: '/images/jennifer-studio-02.jpg',
    body: [
      'Jennifer Abula’s relationship with technology did not begin with a title. It began with showing up — at Codetrain, in freelance software work, in UI/UX design — learning systems that help people move faster and dream bigger.',
      'That same instinct shaped the Campus Design Revolution at KNUST: a free bootcamp for students who wanted real digital skills. Not theory. Not vibes. Canva, design fundamentals, and practical web abilities they could use to create, earn, and stand out. When more than 150 students signed up, it confirmed what she already believed: access is the missing bridge.',
      'As a software developer and designer, Jennifer sees technology as a tool of fellowship. Skills should travel beyond the person who holds them. That is why KOINONIA places skill building at the center of campus leadership — so more KNUST students can build, ship, and serve.',
      '“The skills and opportunities we gain should extend beyond us and create value for others,” she wrote when selected as a Millennium Fellow. Technology, in her hands, is never just code. It is capacity — shared.',
    ],
  },
  {
    slug: 'agriculture-meets-innovation',
    category: 'agriculture',
    title: 'When Agriculture Meets Innovation: The AgriVest Story',
    excerpt:
      'How visits to rural communities and a software background led Jennifer Abula to co-found AgriVest Africa — and join the UNICEF Startup Lab.',
    date: '2026-03-18',
    readMinutes: 6,
    image: '/images/agriculture-field-web.jpg',
    body: [
      'Jennifer Abula’s visits to rural farming communities left a clear imprint: farmers were working hard, yet financing, inputs, and market access remained out of reach for too many. With a background in software development, she chose to build rather than only observe.',
      'In 2022 she co-founded AgriVest Africa — a crowdfunding platform connecting farmers, investors, and commodity traders. The vision is practical and ambitious: transparent investment in crop production and aggregation, support for smallholders, and a path toward stronger food security across Ghana.',
      'As Co-Founder and Managing Director, Jennifer helped carry AgriVest into the UNICEF Startup Lab Cohort 4, supported by KOICA and implemented by MEST Africa. Mentorship, partnerships, and model refinement became fuel for scale — not just a badge.',
      'Today, as an Agribusiness Management student at KNUST’s College of Agriculture and Natural Resources, she stands at a rare intersection: technology, enterprise, and the soil. KOINONIA’s entrepreneurship focus grows from this same root — student ideas deserve systems that help them thrive.',
    ],
  },
  {
    slug: 'youth-leadership-koinonia',
    category: 'youth',
    title: 'Youth Leadership Is Action: Enactus, Fellowship & KOINONIA',
    excerpt:
      'Millennium Fellow. Enactor. Campus builder. Jennifer Abula on leadership that identifies challenges, gathers people, and creates impact together.',
    date: '2026-08-22',
    readMinutes: 5,
    image: '/images/jennifer-studio-06.jpg',
    body: [
      'When Jennifer Abula was named a 2026 Millennium Fellow by the United Nations Academic Impact and MCN, she framed leadership without vanity: it is not only about titles. It is about seeing a challenge, taking responsibility, and bringing people together for something larger than yourself.',
      'That philosophy also drew her to Enactus KNUST. Entrepreneurial Action for Us is more than a slogan — it is the belief that students can walk into a community with curiosity and conviction, and leave having built something that improves lives and sustains itself.',
      'Her own words capture the difference: most places ask you to talk about impact; Enactus asks you to create it. Combined with free campus skill sessions and agri-enterprise work through AgriVest, her youth leadership record is not abstract. It is a pattern of starting.',
      'KOINONIA is the campaign expression of that pattern — fellowship on campus, skill access for every student, and entrepreneurial pathways that feel human. Jennifer Abula is not asking KNUST to wait for change. She is inviting students to build it together.',
    ],
  },
  {
    slug: 'from-six-years-to-knust',
    category: 'youth',
    title: 'Six Years After SHS: A Path That Led to KNUST',
    excerpt:
      'Every delay prepared her. Jennifer Abula’s journey to Agribusiness Management at KNUST — and why patience became purpose.',
    date: '2026-01-30',
    readMinutes: 4,
    image: '/images/jennifer-studio-04.jpg',
    body: [
      '“It’s been six years since SHS, and honestly, it feels like every step, every delay, every preparation led me here.” When Jennifer Abula wrote those words, she was celebrating something earned: a place at Kwame Nkrumah University of Science and Technology as an Agribusiness Management student — and the completion of her first year.',
      'Those six years were not empty. They held Codetrain, software development, design, entrepreneurship, and the founding of AgriVest Africa. Preparation became a portfolio of service.',
      'For young people who feel behind a timeline, her story is a corrective: leadership is not a race to a title. It is the willingness to keep building until the door opens — and then to hold that door for others.',
      'That is the spirit KOINONIA carries into SRC: patient courage, practical skills, and a campus where late bloomers and early builders alike belong.',
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}

/** Jennifer's skills — also what she can lead students through */
export const SKILL_GROUPS = [
  {
    title: 'Communication & Storytelling',
    lead: 'I can lead you to tell stories that move people — on campus and online.',
    skills: [
      'Digital Storytelling & Narrative Development',
      'Social Media Strategy & Analytics (LinkedIn, X, Instagram, Facebook, TikTok)',
      'Content Creation (Written Stories, Graphics, Video, Infographics)',
      'Voice Over & Audio Storytelling',
      'Brand Development & Strategic Communications',
      'Public Speaking & Advocacy',
    ],
  },
  {
    title: 'Design & Technology',
    lead: 'I can walk you through real digital skills — design, web, and tools you can use to create and earn.',
    skills: [
      'UI/UX Design & Front-End Development',
      'Canva',
      'Adobe Creative Suite',
      'Microsoft Office',
      'WordPress / CMS',
      'Responsive Web Design',
      'Wireframes & Interactive Prototypes',
    ],
  },
  {
    title: 'Business & Community',
    lead: 'I can guide you in building networks, running initiatives, and leading with people — not just titles.',
    skills: [
      'Community & Network Engagement',
      'Market Research & Stakeholder Mapping',
      'Event Support & Administrative Coordination',
      'Partnership Development',
      'Team Leadership & Operations',
    ],
  },
] as const;

/** From Jennifer Abula resume — certifications & professional development */
export const CERTIFICATIONS = [
  {
    title: 'SDG Innovation Challenge 2023',
    detail: 'Certificate of Participation',
  },
  {
    title: 'Africa Business Challenge 2023',
    detail: 'Certificate of Participation',
  },
  {
    title: 'Kosmos Innovation Challenge',
    detail: 'AgriTech Classic Certification',
  },
  {
    title: 'Soronko Academy',
    detail: 'Certificate of Participation',
  },
  {
    title: 'American Corner',
    detail: 'Certificate of Participation',
  },
  {
    title: 'UniAthena',
    detail: 'Certificate of Participation',
  },
  {
    title: 'Canva Certification',
    detail: 'Professional design credential',
  },
] as const;
