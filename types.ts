
export type Category = 'Starters' | 'Hand Rolls & Sushi' | 'Special Dishes' | 'Drinks & Cocktails' | 'Desserts';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  hours: { [key: string]: string };
  socialLinks: {
    instagram: string;
    facebook: string;
    tiktok: string;
    yelp: string;
  };
}
