export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
