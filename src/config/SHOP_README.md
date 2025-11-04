# Shop Items Management Guide

## Overview
The shop carousel on the Monarch-X website is powered by data files in this directory. This guide explains how to manage shop items and integrate with Shopify.

## Files Structure

### `shopItems.ts`
Contains all shop items displayed in the carousel. Each item has:
- `id`: Unique identifier for the item
- `category`: Product category (e.g., "APPAREL", "ACCESSORIES")
- `title`: Product name displayed in the carousel
- `price`: Display price (e.g., "$89.99")
- `icon`: Emoji icon for visual representation
- `shopifyLink`: URL to the Shopify product page (optional)
- `available`: Boolean to show/hide items
- `featured`: Boolean to highlight special items
- `description`: Product description (optional)

### `shopConfig.ts`
Contains configuration settings for:
- Carousel behavior (rotation speed, transitions)
- Shopify integration settings
- Display preferences

## How to Add New Shop Items

1. Open `shopItems.ts`
2. Add a new item to the `shopItems` array:

```typescript
{
  id: "unique-product-id",
  category: "CATEGORY NAME",
  title: "PRODUCT NAME IN CAPS",
  price: "$XX.99",
  icon: "🎮", // Choose an appropriate emoji
  shopifyLink: "https://your-store.myshopify.com/products/product-handle",
  available: true,
  featured: false, // Set to true for featured items
  description: "Optional product description"
}
```

## How to Connect Shopify Links

### Method 1: Direct Product Links
Add the full Shopify product URL to the `shopifyLink` field:
```typescript
shopifyLink: "https://monarchx.myshopify.com/products/elite-gaming-jersey"
```

### Method 2: Using Product Handles
If you have consistent Shopify URLs, use the helper function:
1. Set your store domain in `shopConfig.ts`
2. Use product handles in `shopItems.ts`:
```typescript
shopifyLink: generateShopifyUrl("elite-gaming-jersey")
```

## Managing Item Visibility

### Hide an Item Temporarily
Set `available: false` to hide an item without deleting it:
```typescript
available: false, // Item won't appear in carousel
```

### Feature an Item
Set `featured: true` to highlight special items:
```typescript
featured: true, // Can be styled differently if needed
```

## Carousel Settings

Edit `shopConfig.ts` to adjust:
- `autoRotate`: Enable/disable automatic rotation
- `rotationInterval`: Time between slides (milliseconds)
- `transitionDuration`: Animation speed (milliseconds)

## Best Practices

1. **Keep titles concise** - They should fit on one or two lines
2. **Use relevant emojis** - They help users quickly identify product types
3. **Test all Shopify links** - Ensure they lead to correct products
4. **Update availability** - Mark out-of-stock items as unavailable
5. **Organize by category** - Group similar items together

## Example: Adding a New Hoodie

```typescript
{
  id: "monarch-hoodie-black",
  category: "APPAREL",
  title: "MONARCH-X STEALTH HOODIE - MIDNIGHT BLACK",
  price: "$74.99",
  icon: "🥷",
  shopifyLink: "https://monarchx.myshopify.com/products/stealth-hoodie-black",
  available: true,
  featured: true,
  description: "Limited edition stealth design hoodie"
}
```

## Troubleshooting

- **Items not showing**: Check `available` is set to `true`
- **Links not working**: Verify Shopify URLs are correct
- **Carousel not rotating**: Check `autoRotate` in config
- **"Coming Soon" appears**: Add a `shopifyLink` to enable the button
