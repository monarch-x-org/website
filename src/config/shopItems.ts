import { ShopItem } from '../types';

// Re-export for convenience
export type { ShopItem } from '../types';

export const shopItems: ShopItem[] = [
  {
    id: "jersey-2025",
    category: "APPAREL",
    title: "MONARCH-X OFFICIAL JERSEY 2025",
    price: "$89.99",
    icon: "👕",
    shopifyLink: "", // Add your Shopify product URL here
    available: true,
    featured: true,
    description: "Official team jersey with premium materials"
  },
  {
    id: "hoodie-purple",
    category: "APPAREL", 
    title: "MONARCH-X CHAMPIONSHIP HOODIE - PURPLE REIGN",
    price: "$79.99",
    icon: "🎮",
    shopifyLink: "", // Add your Shopify product URL here
    available: true,
    description: "Limited edition championship hoodie"
  },
  {
    id: "cap-elite",
    category: "ACCESSORIES",
    title: "MONARCH-X ELITE CAP - LIMITED EDITION",
    price: "$39.99",
    icon: "🧢",
    shopifyLink: "", // Add your Shopify product URL here
    available: true,
    featured: true,
    description: "Premium snapback with embroidered logo"
  },
  {
    id: "mousepad-royal",
    category: "ACCESSORIES",
    title: "MONARCH-X GAMING MOUSE PAD - ROYAL PURPLE EDITION", 
    price: "$29.99",
    icon: "🖱️",
    shopifyLink: "", // Add your Shopify product URL here
    available: true,
    description: "Extended gaming mousepad with anti-slip base"
  }
];

// Helper function to get only available items
export const getAvailableShopItems = (): ShopItem[] => {
  return shopItems.filter(item => item.available);
};

// Helper function to get featured items
export const getFeaturedShopItems = (): ShopItem[] => {
  return shopItems.filter(item => item.available && item.featured);
};

// Helper function to get item by ID
export const getShopItemById = (id: string): ShopItem | undefined => {
  return shopItems.find(item => item.id === id);
};
