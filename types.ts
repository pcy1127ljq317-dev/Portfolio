
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  role?: string;
  year?: string;
  layout?: 'standard' | 'promo';
  background?: string;
  solution?: string;
  result?: string;
  detailImages?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period?: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}
