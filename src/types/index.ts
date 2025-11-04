// Shop Types
export interface ShopItem {
  id: string;
  category: string;
  title: string;
  price: string;
  icon: string;
  shopifyLink?: string;
  available: boolean;
  featured?: boolean;
  description?: string;
}

// News Types
export interface NewsItem {
  id?: string;
  date: string;
  title: string;
  image: string;
  category: string;
  featured?: boolean;
  link?: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}
