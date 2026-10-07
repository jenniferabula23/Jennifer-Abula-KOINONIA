export interface GalleryItem {
  id: number;
  image: string;
  caption: string;
  tag: string;
}

/** Jennifer Abula — campaign gallery (pics 1–9) */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image: '/images/gallery/01-global-entrepreneurship-festival.jpg',
    caption: 'At Global Entrepreneurship Festival',
    tag: 'Entrepreneurship',
  },
  {
    id: 2,
    image: '/images/gallery/02-mastercard-health-collaborative.jpg',
    caption: 'Mastercard Health Collaborative alumni',
    tag: 'Leadership',
  },
  {
    id: 3,
    image: '/images/gallery/03-womens-haven-judge.jpg',
    caption: 'A judge',
    tag: 'Leadership',
  },
  {
    id: 4,
    image: '/images/gallery/04-campus-design-initiative.jpg',
    caption: 'Campus design initiative',
    tag: 'Skills',
  },
  {
    id: 5,
    image: '/images/gallery/05-global-entrepreneurship-festival-speaking.jpg',
    caption: 'Global Entrepreneurship Festival',
    tag: 'Entrepreneurship',
  },
  {
    id: 6,
    image: '/images/gallery/06-campus-design-revolution.jpg',
    caption: 'First edition of Campus Design Revolution',
    tag: 'Skills',
  },
  {
    id: 7,
    image: '/images/gallery/07-unicef-cohort-pitch-day.jpg',
    caption: 'UNICEF cohort pitch day',
    tag: 'Impact',
  },
  {
    id: 8,
    image: '/images/gallery/08-women-empowerment.jpg',
    caption: 'Women empowerment',
    tag: 'Community',
  },
  {
    id: 9,
    image: '/images/gallery/09-farmer-empowerment.jpg',
    caption: 'Farmer empowerment',
    tag: 'Agriculture',
  },
];
