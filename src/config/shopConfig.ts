// Shop Configuration
// This file contains settings for the shop carousel and Shopify integration

export const shopConfig = {
  // Carousel Settings
  carousel: {
    autoRotate: true,
    rotationInterval: 7000, // 7 seconds
    transitionDuration: 250, // milliseconds
  },
  
  // Shopify Settings
  shopify: {
    // Add your Shopify store domain here (e.g., "your-store.myshopify.com")
    storeDomain: "",
    
    // Add your Shopify Buy Button channel ID if using Buy Button
    buyButtonChannelId: "",
    
    // Default collection ID for shop items
    defaultCollectionId: "",
  },
  
  // Display Settings
  display: {
    showPrices: true,
    showCategories: true,
    showOutOfStockItems: false,
    placeholderIcon: "📦",
  }
};

// Helper function to generate Shopify product URL
export const generateShopifyUrl = (handle: string): string => {
  const { storeDomain } = shopConfig.shopify;
  if (!storeDomain) return "";
  
  return `https://${storeDomain}/products/${handle}`;
};
