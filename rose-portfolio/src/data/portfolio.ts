import type { PortfolioItem, SkillCategory } from '../types/portfolio';

// Sample portfolio items - Replace with your actual work!
export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Illustration Series',
    description: 'A collection of digital illustrations exploring nature and emotions',
    category: 'Illustration',
    image: 'https://via.placeholder.com/400x300?text=Illustration+1',
    imageAlt: 'Illustration Series',
    tags: ['digital', 'illustration', 'nature'],
    featured: true,
  },
  {
    id: '2',
    title: 'Brand Design Project',
    description: 'Complete branding package including logo, colors, and guidelines',
    category: 'Design',
    image: 'https://via.placeholder.com/400x300?text=Brand+Design',
    imageAlt: 'Brand Design',
    tags: ['branding', 'logo', 'design system'],
    featured: true,
  },
  {
    id: '3',
    title: 'Character Design',
    description: 'Original character designs for an indie game project',
    category: 'Character Design',
    image: 'https://via.placeholder.com/400x300?text=Character+Design',
    imageAlt: 'Character Design',
    tags: ['character', '3d', 'game design'],
  },
  {
    id: '4',
    title: 'UI/UX Design',
    description: 'Mobile app interface design and user experience improvements',
    category: 'UX/UI',
    image: 'https://via.placeholder.com/400x300?text=UI+UX+Design',
    imageAlt: 'UI/UX Design',
    tags: ['ui/ux', 'mobile', 'wireframes'],
  },
  {
    id: '5',
    title: 'Concept Art',
    description: 'Environmental and architectural concept art pieces',
    category: 'Concept Art',
    image: 'https://via.placeholder.com/400x300?text=Concept+Art',
    imageAlt: 'Concept Art',
    tags: ['concept', 'environment', 'architecture'],
  },
  {
    id: '6',
    title: 'Graphic Design',
    description: 'Poster and print design for creative campaigns',
    category: 'Graphic Design',
    image: 'https://via.placeholder.com/400x300?text=Graphic+Design',
    imageAlt: 'Graphic Design',
    tags: ['graphics', 'poster', 'print'],
  },
];

export const skills: SkillCategory[] = [
  {
    name: 'Digital Art',
    skills: ['Illustration', 'Digital Painting', 'Animation'],
  },
  {
    name: 'Design',
    skills: ['UI/UX Design', 'Branding', 'Graphic Design'],
  },
  {
    name: 'Software',
    skills: ['Photoshop', 'Illustrator', 'Figma', 'Blender'],
  },
  {
    name: 'Concepts',
    skills: ['Character Design', 'Environment Design', 'Storyboarding'],
  },
];

export const socialLinks = {
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  email: 'your.email@example.com',
  dribbble: 'https://dribbble.com',
  behance: 'https://behance.net',
};
