
import { MenuItem, BlogPost, SiteConfig } from './types';

export const SITE_CONFIG: SiteConfig = {
  name: "Sonmari",
  tagline: "Contemporary Korean-Inspired Sushi & Hand Rolls",
  address: "3503 W Sunset Blvd, Los Angeles, CA 90026, USA",
  phone: "(323) 555-0123",
  email: "hello@sonmari.com",
  hours: {
    "Mon - Thu": "5:00 PM - 10:00 PM",
    "Fri - Sat": "5:00 PM - 11:30 PM",
    "Sun": "4:00 PM - 9:00 PM"
  },
  socialLinks: {
    instagram: "https://instagram.com/sonmari",
    facebook: "https://facebook.com/sonmari",
    tiktok: "https://tiktok.com/@sonmari",
    yelp: "https://yelp.com/biz/sonmari"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Uni Toast",
    description: "Santa Barbara Uni, toasted brioche, kimchi butter, smoked sea salt.",
    price: 24,
    category: "Starters",
    image: "https://picsum.photos/seed/uni/800/600"
  },
  {
    id: "2",
    name: "Yellowtail Crudo",
    description: "Hamachi, perilla leaf oil, gochugaru ponzu, pickled radish.",
    price: 18,
    category: "Starters",
    image: "https://picsum.photos/seed/crudo/800/600"
  },
  {
    id: "3",
    name: "Spicy Tuna Hand Roll",
    description: "Bigeye tuna, gochujang aioli, toasted seaweed, cucumber.",
    isSpicy: true,
    price: 9,
    category: "Hand Rolls & Sushi",
    image: "https://picsum.photos/seed/tuna/800/600"
  },
  {
    id: "4",
    name: "Truffle Ribeye Roll",
    description: "Korean bulgogi ribeye, truffle shavings, chives, soy glaze.",
    price: 12,
    category: "Hand Rolls & Sushi",
    image: "https://picsum.photos/seed/ribeye/800/600"
  },
  {
    id: "5",
    name: "Gochujang Braised Octopus",
    description: "Grilled octopus, gochujang glaze, crispy smashed fingerlings.",
    price: 32,
    category: "Special Dishes",
    image: "https://picsum.photos/seed/octopus/800/600"
  },
  {
    id: "6",
    name: "Yuja Sorbet",
    description: "Refreshing Korean citron sorbet with ginger crumble.",
    price: 10,
    category: "Desserts",
    image: "https://picsum.photos/seed/sorbet/800/600"
  },
  {
    id: "7",
    name: "Soju Mule",
    description: "Premium Jinro soju, ginger beer, fresh lime, mint.",
    price: 15,
    category: "Drinks & Cocktails",
    image: "https://picsum.photos/seed/cocktail/800/600"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Art of the Perfect Hand Roll",
    excerpt: "Discover the secret behind our crisp seaweed and warm seasoned rice.",
    content: "At Sonmari, we believe the essence of a great hand roll lies in the contrast...",
    author: "Chef Kim",
    date: "May 15, 2024",
    image: "https://picsum.photos/seed/blog1/1200/800",
    category: "Technique",
    tags: ["Sushi", "Hand Rolls", "Culinary"]
  },
  {
    id: "2",
    title: "Sourcing Local: The Santa Barbara Uni Story",
    excerpt: "Journey with us to the coast as we select the finest sea urchin for our signature toast.",
    content: "Sustainability is at the heart of our sourcing strategy...",
    author: "Elena Park",
    date: "June 2, 2024",
    image: "https://picsum.photos/seed/blog2/1200/800",
    category: "Sustainability",
    tags: ["Seafood", "Local", "Uni"]
  }
];
