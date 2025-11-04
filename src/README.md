# Monarch-X Website - Source Code Structure

## Directory Structure

```
src/
├── components/          # All React components
│   ├── layout/         # Layout components (Header, Footer)
│   └── sections/       # Page sections
│       ├── Hero/       # Shop carousel section
│       ├── Discord/    # Discord join section
│       └── News/       # News section
│
├── config/             # Configuration files
│   ├── shopItems.ts    # Shop items data
│   └── shopConfig.ts   # Shop carousel settings
│
├── styles/             # Global styles
│   └── variables.css   # CSS custom properties
│
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces
│
├── utils/              # Utility functions and constants
│   └── constants.ts    # Site-wide constants
│
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## Component Organization

### Layout Components (`/components/layout/`)
- **Header**: Navigation bar and branding
- **Footer**: Site footer with links and copyright

### Section Components (`/components/sections/`)
Each section is a self-contained folder with:
- Component file (`.tsx`)
- Styles (`.css`)
- Index file for clean imports

### Configuration (`/config/`)
- **shopItems.ts**: Product data for the shop carousel
- **shopConfig.ts**: Settings for carousel behavior and Shopify integration
- **SHOP_README.md**: Documentation for managing shop items

### Types (`/types/`)
Centralized TypeScript interfaces used across the app:
- `ShopItem`: Product data structure
- `NewsItem`: News article structure
- `NavLink`: Navigation link structure

### Utilities (`/utils/`)
- **constants.ts**: Site configuration, navigation links, social links, etc.

## Import Examples

```typescript
// Import layout components
import { Header, Footer } from './components/layout';

// Import sections
import Hero from './components/sections/Hero';
import Discord from './components/sections/Discord';

// Import types
import { ShopItem, NewsItem } from './types';

// Import constants
import { SITE_CONFIG, NAV_LINKS } from './utils/constants';

// Import shop data
import { shopItems, getAvailableShopItems } from './config/shopItems';
```

## Adding New Components

1. **Create a new folder** in the appropriate directory
2. **Add component file** (e.g., `MyComponent.tsx`)
3. **Add styles** (e.g., `MyComponent.css`)
4. **Create index file** for clean exports:
   ```typescript
   export { default } from './MyComponent';
   ```

## Best Practices

1. **Keep components focused**: Each component should have a single responsibility
2. **Use TypeScript**: Define interfaces for all props and data structures
3. **Centralize constants**: Use `utils/constants.ts` for reusable values
4. **Style organization**: Component-specific styles in component folders, global styles in `/styles/`
5. **Clean imports**: Use index files to simplify import statements
