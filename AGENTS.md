# Chaitu Editz Website - Agentic Guidelines

This document provides context, patterns, and guidelines for AI agents working on this Astro + TinaCMS codebase.

## 1. Project Overview
- **Type**: Portfolio/Service website for a video editor/thumbnail artist.
- **Stack**: Astro 5.x, TinaCMS (Git-based), TypeScript, Native CSS.
- **Package Manager**: Bun (preferred) or npm.

## 2. Build & Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Astro + TinaCMS) |
| `npm run build` | Build for production (Static Site Generation) |
| `npm run preview` | Preview build locally |
| `npx tinacms dev -c "astro dev"` | Run TinaCMS with Astro (Alternative dev) |
| `npx playwright test` | Run E2E tests |

**Important**: 
- Always verify changes with `npm run build` to check for TypeErrors in content collections.
- Run `npx astro check` if you are unsure about types.

## 3. Code Style & Conventions

### Astro Components (`.astro`)
- **Structure**:
  ```astro
  ---
  // 1. Imports (Components, Utils, Content)
  import Layout from '../layouts/Layout.astro';
  import { getCollection } from 'astro:content';

  // 2. Types/Interfaces
  interface Props {
    title: string;
  }

  // 3. Logic & Data Fetching
  const { title } = Astro.props;
  const posts = await getCollection('blog');
  ---

  <!-- 4. Template -->
  <Layout title={title}>
    <h1>{title}</h1>
  </Layout>

  <!-- 5. Client-side Scripts (Scoped) -->
  <script>
    // Pure vanilla JS, no framework-specific hydration unless necessary
    document.addEventListener('DOMContentLoaded', () => { ... });
  </script>

  <!-- 6. Scoped Styles -->
  <style>
    /* CSS Variables from global.css used here */
    h1 { color: var(--accent); }
  </style>
  ```

### TypeScript
- **Strictness**: `strict` mode is enabled. No `any` unless absolutely necessary.
- **Interfaces**: Define `Props` interface for all components receiving props.
- **Content Collections**: Use `zod` schemas in `src/content/config.ts` to enforce content shape. Use `getCollection` for type-safe data access.

### Styling
- **Approach**: **Native CSS**.
- **Global**: `src/styles/global.css` contains variables (`--accent`, fonts, reset).
- **Scoped**: Use `<style>` blocks in `.astro` components for component-specific styles.
- **Responsive**: Mobile-first media queries are preferred, or max-width desktop overrides.

### TinaCMS Integration
- **Config**: `tina/config.ts`.
- **Collections**: Defined in `schema.collections`.
- **Relationship**: 
  - `tina/config.ts` defines the *Editor* schema.
  - `src/content/config.ts` defines the *Astro* schema (runtime validation).
  - **Keep these in sync**. If you add a field in Tina, add it to Astro content config too.
- **Media**: Images uploaded via Tina go to `public/uploads`.

## 4. Directory Structure
- `src/components/sections/`: Landing page sections (Hero, About, Portfolio).
- `src/components/ui/`: Reusable UI elements (Lightbox, Buttons).
- `src/content/`: Markdown files managed by TinaCMS.
- `src/layouts/`: Page wrappers (`Layout.astro`).
- `tina/`: CMS configuration.

## 5. Testing (Playwright)
- Tests located in `tests/` or `e2e/`.
- Run specific test: `npx playwright test tests/example.spec.ts`.
- Write tests for critical flows: Form submission, Navigation, Portfolio filtering.

## 6. Common Patterns
- **Portfolio Filtering**: Done client-side in `Portfolio.astro` using data attributes (`data-category`) and vanilla JS.
- **Review System**: 
  - Content stored in `src/content/testimonials`.
  - Frontend submission uses Formspree (or similar API).
  - Display filters by `approved: true`.
- **Animations**: Canvas-based particle animations in `Layout.astro` (global) or specific sections.

## 7. Error Handling
- **Forms**: User feedback via vanilla JS DOM manipulation (Success/Error messages).
- **Images**: Always provide `alt` text. Use standard `<img>` or Astro `<Image />` (preferred for optimization).

## 8. Git Workflow
- **Commit Messages**: Conventional Commits (e.g., `feat: add works section`, `fix: mobile menu`).
- **CMS Content**: Content changes (markdown files) are committed to Git.
