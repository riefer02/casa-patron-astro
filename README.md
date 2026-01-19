# Casa Patron - Vacation Rental Website

A modern, responsive website for Casa Patron, a luxury vacation rental cabin located in Alto, New Mexico, near Ruidoso and Ski Apache. Built with Astro, React, and Tailwind CSS for optimal performance and user experience.

## 🏡 About Casa Patron

Casa Patron is a VIP vacation rental offering comfortable and accessible accommodations in the stunning mountains of Alto, NM. The property features multiple suites, modern amenities, and breathtaking mountain views, making it perfect for family retreats, group getaways, and ski trips.

**Website:** [casapatronalto.com](https://casapatronalto.com)

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (recommended package manager) - [Installation guide](https://pnpm.io/installation)
  ```bash
  npm install -g pnpm
  ```

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd casa-patron-astro
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the website running locally.

## 📜 Available Scripts

| Command           | Action                                            |
| ----------------- | ------------------------------------------------- |
| `pnpm dev`        | Starts the development server at `localhost:4321` |
| `pnpm build`      | Builds the production site to `./dist/`           |
| `pnpm preview`    | Preview the production build locally              |
| `pnpm lint`       | Run ESLint to check code quality                  |
| `pnpm lint:fix`   | Run ESLint and automatically fix issues           |
| `pnpm lint:check` | Run ESLint with zero warnings tolerance           |
| `pnpm astro ...`  | Run Astro CLI commands                            |

## 🏗️ Project Structure

```
casa-patron-astro/
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── assets/            # Optimized images and media files
│   ├── components/        # Reusable Astro and React components
│   │   ├── react/         # React components for interactivity
│   │   └── mdx/          # MDX components
│   ├── content/           # Content collections (docs, posts, attractions)
│   │   ├── docs/          # Guest documentation
│   │   ├── posts/         # Blog posts
│   │   └── local-attractions/ # Local activities data
│   ├── layouts/           # Page layouts
│   ├── pages/            # File-based routing
│   │   ├── docs/         # Documentation pages
│   │   └── posts/        # Blog pages
│   ├── styles/           # Global CSS and Tailwind configuration
│   └── utils/            # Utility functions
├── astro.config.mjs       # Astro configuration
├── netlify.toml          # Netlify deployment configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── eslint.config.js      # ESLint configuration
```

## 🎨 Key Features

### Technologies Used

- **[Astro](https://astro.build/)** - Static site generator for optimal performance
- **[React](https://reactjs.org/)** - Interactive components (Header, LocalAttractions, BackToTop)
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework with custom theme
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better developer experience
- **[ESLint](https://eslint.org/)** - Code quality and consistency

### Features

- **Responsive Design** - Mobile-first approach with optimized layouts
- **Image Optimization** - Automatic image optimization using Astro's Sharp integration
- **SEO Optimized** - Comprehensive meta tags, structured data, and sitemap
- **Performance Focused** - Static generation with minimal JavaScript
- **Content Management** - Organized content collections for easy maintenance
- **Analytics Ready** - Partytown integration for performance-optimized analytics

### Custom Components

- **Image Gallery** - Responsive photo galleries
- **JumboPanel** - Hero sections with images and content
- **Local Attractions** - Interactive activities and attractions display
- **SEO Component** - Comprehensive meta tags and structured data

## 🎯 Content Structure

### Pages

- **Homepage** (`/`) - Main landing page with hero, amenities, and galleries
- **Activities** (`/activities/`) - Local attractions and things to do
- **Contact** (`/contact-us/`) - Booking and contact information
- **Documentation** (`/docs/`) - Guest information and house rules
- **Blog** (`/posts/`) - Articles about the property and area

### Content Collections

- **Docs** - Guest documentation (amenities, rules, checkout, etc.)
- **Posts** - Blog posts about the property and local area
- **Local Attractions** - Structured data for activities and attractions

## 🌈 Styling & Theme

The project uses Tailwind CSS v4 with a custom theme reflecting Casa Patron's brand:

### Brand Colors

- **Primary Yellow** (`#fee43a`) - Casa Patron's signature color
- **Secondary Blue** (`#1c68cb`) - Mountain sky blue
- **Tertiary Orange** (`#ff715b`) - Sunset orange accent
- **Grey Neutral** (`#273240`) - Text and backgrounds
- **Success Green** (`#28d679`) - Success states

### Typography

- Custom text shadows for enhanced readability
- Responsive font sizes across all breakpoints
- Typography plugin for rich content formatting

## 🚀 Deployment

The site is configured for deployment on Netlify:

### Automatic Deployment

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 18

### Performance Optimizations

- Static HTML generation for fast loading
- Optimized image delivery
- CSS and JavaScript minification
- Comprehensive caching headers

### Environment Setup

The production build is optimized for:

- SEO with meta tags and structured data
- Security headers and best practices
- Performance monitoring and analytics

## 🔧 Development Guidelines

### Code Quality

- ESLint configuration with strict rules
- TypeScript for type safety
- Consistent formatting and naming conventions

### Component Structure

- Astro components for static content
- React components for interactivity
- Shared components in `/components`
- Page-specific components in respective directories

### Path Aliases

TypeScript is configured with path aliases for clean imports:

```typescript
import Logo from "@/components/Logo.astro";
import { localAttractions } from "@/content/local-attractions/local-attractions.js";
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run linting and tests**
   ```bash
   pnpm lint:check
   pnpm build
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

## 📞 Support

For questions about the Casa Patron property:

- **Website:** [casapatronalto.com](https://casapatronalto.com)
- **Email:** valerie@casapatronalto.com
- **Phone:** +1-817-223-0272

For technical issues with this codebase, please open an issue in the repository.

## 📄 License

This project is proprietary software for Casa Patron vacation rental.

---

_Built with ❤️ using Astro, React, and Tailwind CSS_
