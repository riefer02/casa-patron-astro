// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
// import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://casapatronalto.com",
  output: "static",

  // For server-side rendering, uncomment the following and change output to "server" or "hybrid":
  // output: "server", // or "hybrid" for mixed static/SSR
  // adapter: netlify(),

  // Performance optimizations
  build: {
    inlineStylesheets: "auto", // Inline small CSS files
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimize chunk sizes for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
          },
        },
      },
    },
  },

  // Image optimization
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "casapatronalto.com",
      },
    ],
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: 268402689,
      },
    },
  },

  integrations: [
    react({
      include: ["**/react/**/*"],
    }),
    sitemap({
      // Enhanced sitemap configuration
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes("/docs/"), // Exclude internal guest documentation
      customPages: [
        "https://casapatronalto.com/",
        "https://casapatronalto.com/activities/",
        "https://casapatronalto.com/contact-us/",
        // "https://casapatronalto.com/docs/", // Removed - internal guest docs not for public indexing
        "https://casapatronalto.com/posts/",
      ],
    }),
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
        debug: false,
      },
    }),
  ],

  // SEO and performance optimizations
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
