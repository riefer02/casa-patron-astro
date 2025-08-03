import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  // Base JavaScript configuration
  js.configs.recommended,

  // Astro configuration - using recommended config
  ...astro.configs.recommended,

  // JavaScript/TypeScript files configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "unused-imports": unusedImports,
      "@typescript-eslint": typescript,
    },
    rules: {
      // Unused imports detection
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off", // Handled by unused-imports
    },
  },

  // TypeScript specific configuration
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      "unused-imports": unusedImports,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      // TypeScript unused imports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-unused-vars": "off", // Handled by unused-imports
    },
  },

  // React files configuration
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "unused-imports": unusedImports,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // React specific settings
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off", // Using TypeScript for prop validation
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      // Unused imports for React
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Astro files configuration
  {
    files: ["**/*.astro"],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        dataLayer: "writable", // For Google Analytics
      },
    },
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // Astro specific unused imports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Global ignores
  {
    ignores: ["dist/**/*", ".astro/**/*", "node_modules/**/*", "public/**/*"],
  },
];
