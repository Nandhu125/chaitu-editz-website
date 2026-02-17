# Astro + Tina CMS Migration (Phase 1)

## TL;DR

> **Quick Summary**: Migrate the existing Chaitu Editz static HTML website to Astro + Tina CMS while maintaining the exact same design. CMS will manage portfolio works and testimonials only.
> 
> **Deliverables**:
> - Fully functional Astro website matching current design pixel-perfect
> - Tina CMS admin panel for Works and Testimonials management
> - Review submission form with Formspree integration
> - Contact form with WhatsApp redirect
> - Deploy-ready static build for Hostinger
> 
> **Estimated Effort**: Large (2-3 days implementation)
> **Parallel Execution**: YES - 5 waves
> **Critical Path**: Project Setup → Layout/CSS → Section Components → CMS Integration → QA

---

## Context

### Original Request
Rebuild an existing WordPress/static HTML website using Astro + Tina CMS (Phase 1), maintaining the exact same design while making content CMS-manageable. The project is for "Chaitu Editz Digital Media" - a YouTube thumbnail and video editing service.

### Interview Summary
**Key Discussions**:
- Phase 1 focus: Core website & CMS only (ecommerce is Phase 2)
- Tech Stack: Astro (frontend), Tina CMS (Git-based CMS), Hostinger (hosting)
- Must maintain exact same existing design - critical constraint
- Review submission via external form service → manual CMS entry
- Contact form → WhatsApp redirect (no backend needed)

**Research Findings**:
- Astro + Tina integration via `@tinacms/cli` or starter template
- Tina schema in `tina/config.ts` with collections stored as MDX/JSON
- For Hostinger static hosting: TinaCloud required (self-hosted needs Node.js runtime)
- Admin UI accessible at `/admin` route

### Metis Review
**Identified Gaps** (addressed):
- TinaCloud vs self-hosted: Resolved → TinaCloud (free tier: 2 users)
- Form service choice: Resolved → Formspree (free tier)
- Data migration source: Resolved → `js/data.js` (24 portfolio items + 2 reviews)
- Video hosting: Resolved → Keep in repo for Phase 1 (3 videos, ~50MB)
- URL structure: Resolved → Single-page with hash anchors (matches current)
- Deployment method: Resolved → Manual FTP initially

---

## Work Objectives

### Core Objective
Convert the existing 3919-line single-page HTML website to a component-based Astro architecture with Tina CMS for content management, preserving 100% visual and functional parity.

### Concrete Deliverables
- `src/pages/index.astro` - Main single-page site
- `src/pages/privacy.astro` - Privacy policy page
- `src/pages/terms.astro` - Terms of service page
- `src/layouts/Layout.astro` - Base HTML layout
- `src/components/sections/*.astro` - 10 section components
- `src/components/ui/*.astro` - Reusable UI components (Lightbox, ReviewForm, etc.)
- `src/styles/global.css` - Extracted CSS (~2100 lines)
- `tina/config.ts` - CMS schema with Works + Testimonials collections
- `content/works/*.md` - 24 migrated portfolio items
- `content/testimonials/*.md` - 2 migrated testimonials
- `dist/` - Production build ready for Hostinger FTP upload

### Definition of Done
- [ ] `npm run build` succeeds with zero errors
- [ ] Visual comparison: New site matches original at 1920px, 1024px, 768px, 375px viewports
- [ ] All 10 sections render correctly with existing content
- [ ] Portfolio filtering works (thumbnails/reels/posters/logos)
- [ ] Lightbox opens for images and videos with zoom/pan
- [ ] All animations work: typing effect, stats counter, particle canvases, scroll reveals
- [ ] Review form submits to Formspree and shows confirmation
- [ ] Contact form redirects to WhatsApp with pre-filled message
- [ ] Tina CMS admin loads at `/admin` and can CRUD works/testimonials
- [ ] Mobile menu toggle works
- [ ] FAQ accordion expands/collapses

### Must Have
- Pixel-perfect match to existing design
- All current JavaScript functionality preserved
- Works collection with image/video support and category filtering
- Testimonials collection with approval workflow concept (approved field)
- Responsive at all breakpoints (960px, 768px, 640px)
- Production build under 5MB (excluding videos)

### Must NOT Have (Guardrails)
- NO new features beyond current site functionality
- NO design changes or "improvements"
- NO abstracted utility classes - keep existing CSS structure
- NO React/Vue/Svelte components (pure Astro + vanilla JS)
- NO database or server-side functionality
- NO ecommerce features (Phase 2)
- NO authentication/login system
- NO automated email sending
- NO over-engineered component library - simple 1:1 migration

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO (new project)
- **Automated tests**: NONE (user confirmed)
- **Framework**: N/A
- **QA Approach**: Agent-executed visual and functional verification via Playwright

### QA Policy
Every task includes agent-executed QA scenarios.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

| Deliverable Type | Verification Tool | Method |
|------------------|-------------------|--------|
| Page/Component | Playwright (playwright skill) | Navigate, screenshot, compare layout |
| JavaScript | Playwright | Trigger interaction, verify behavior |
| CMS | Playwright | Login to /admin, CRUD operations |
| Forms | Playwright | Submit form, verify response |
| Build | Bash | Run `npm run build`, check exit code |

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately — foundation):
├── Task 1: Initialize Astro project with Tina CMS [quick]
├── Task 2: Extract and setup global CSS [quick]
├── Task 3: Create base Layout component [quick]
├── Task 4: Define Tina CMS schema (Works + Testimonials) [quick]
└── Task 5: Setup asset directories and copy media files [quick]

Wave 2 (After Wave 1 — static sections):
├── Task 6: Hero section with particles + typing animation [visual-engineering]
├── Task 7: About section with profile card [visual-engineering]
├── Task 8: Services section (5 cards) [quick]
├── Task 9: Pricing section (3 plans) [quick]
├── Task 10: FAQ section with accordion [visual-engineering]
└── Task 11: Contact section with WhatsApp redirect [visual-engineering]

Wave 3 (After Wave 2 — CMS-driven sections):
├── Task 12: Portfolio section with filtering + Tina integration [deep]
├── Task 13: Reviews section with Tina integration [deep]
├── Task 14: Clients marquee section [visual-engineering]
├── Task 15: Lightbox component (images + video) [visual-engineering]
└── Task 16: Header/Navbar with mobile menu [visual-engineering]

Wave 4 (After Wave 3 — forms + pages):
├── Task 17: Review submission form with Formspree [unspecified-high]
├── Task 18: Footer component [quick]
├── Task 19: Privacy policy page [quick]
├── Task 20: Terms of service page [quick]
└── Task 21: Migrate content data to Tina collections [quick]

Wave 5 (After Wave 4 — integration + QA):
├── Task 22: Assemble index.astro with all sections [deep]
├── Task 23: Production build and optimization [quick]
└── Task 24: Full site QA verification [unspecified-high]

Wave FINAL (After ALL tasks — independent review, 4 parallel):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Full visual + functional QA (unspecified-high + playwright)
└── Task F4: Scope fidelity check (deep)

Critical Path: Task 1 → Task 3 → Task 6 → Task 12 → Task 22 → Task 24 → F1-F4
Parallel Speedup: ~60% faster than sequential
Max Concurrent: 6 (Waves 2 & 3)
```

### Dependency Matrix

| Task | Depends On | Blocks | Wave |
|------|------------|--------|------|
| 1 | — | 2-5 | 1 |
| 2 | 1 | 6-16 | 1 |
| 3 | 1 | 6-11, 22 | 1 |
| 4 | 1 | 12, 13, 21 | 1 |
| 5 | 1 | 6, 12-15 | 1 |
| 6-11 | 2, 3 | 22 | 2 |
| 12 | 2, 3, 4, 5 | 22 | 3 |
| 13 | 2, 3, 4 | 22 | 3 |
| 14-16 | 2, 3, 5 | 22 | 3 |
| 17 | 13 | 22 | 4 |
| 18-20 | 2, 3 | 22, 23 | 4 |
| 21 | 4 | 12, 13, 24 | 4 |
| 22 | 6-21 | 23, 24 | 5 |
| 23 | 22 | 24, F1-F4 | 5 |
| 24 | 22, 23 | F1-F4 | 5 |
| F1-F4 | 24 | — | FINAL |

### Agent Dispatch Summary

| Wave | # Parallel | Tasks → Agent Category |
|------|------------|----------------------|
| 1 | **5** | T1-T5 → `quick` |
| 2 | **6** | T6-T7,T10-T11 → `visual-engineering`, T8-T9 → `quick` |
| 3 | **5** | T12-T13 → `deep`, T14-T16 → `visual-engineering` |
| 4 | **5** | T17 → `unspecified-high`, T18-T21 → `quick` |
| 5 | **3** | T22 → `deep`, T23 → `quick`, T24 → `unspecified-high` |
| FINAL | **4** | F1 → `oracle`, F2-F3 → `unspecified-high`, F4 → `deep` |

---

## TODOs

### Wave 1: Foundation

- [x] 1. Initialize Astro project with Tina CMS

  **What to do**:
  - Run `npm create astro@latest chaitu-editz-astro -- --template minimal`
  - Initialize Tina CMS: `npx @tinacms/cli@latest init`
  - Configure for TinaCloud (set placeholder env vars)
  - Verify dev server runs: `npx tinacms dev -c "astro dev"`
  - Configure `astro.config.mjs` for static output

  **Must NOT do**:
  - Do not use a complex starter template
  - Do not add React/Vue/Svelte integrations
  - Do not configure SSR/hybrid mode

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Standard project scaffolding with well-documented CLI commands
  - **Skills**: []
    - No special skills needed for npm commands

  **Parallelization**:
  - **Can Run In Parallel**: NO (foundation task)
  - **Parallel Group**: Wave 1 (first task)
  - **Blocks**: Tasks 2, 3, 4, 5
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - None (greenfield project)

  **API/Type References**:
  - Astro docs: https://docs.astro.build/en/install-and-setup/
  - Tina + Astro: https://tina.io/docs/frameworks/astro/

  **External References**:
  - `npx @tinacms/cli@latest init` - Tina CLI initialization

  **Acceptance Criteria**:
  - [ ] `package.json` exists with astro and tinacms dependencies
  - [ ] `astro.config.mjs` exists with `output: 'static'`
  - [ ] `tina/config.ts` exists (placeholder schema)
  - [ ] `npx tinacms dev -c "astro dev"` starts without errors
  - [ ] Browser shows Astro welcome page at http://localhost:4321

  **QA Scenarios**:

  ```
  Scenario: Verify Astro dev server starts
    Tool: Bash
    Preconditions: Project initialized, dependencies installed
    Steps:
      1. Run: cd chaitu-editz-astro && npm run dev &
      2. Wait 5 seconds for server startup
      3. Run: curl -s http://localhost:4321 | grep -q "Astro"
    Expected Result: Exit code 0, HTML contains "Astro" text
    Failure Indicators: curl fails, no response, or missing Astro text
    Evidence: .sisyphus/evidence/task-1-dev-server.txt

  Scenario: Verify Tina admin route exists
    Tool: Bash
    Preconditions: Dev server running
    Steps:
      1. Run: curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/admin/
      2. Assert response code is 200 or 301/302
    Expected Result: HTTP 200 or redirect to Tina admin
    Failure Indicators: 404 response
    Evidence: .sisyphus/evidence/task-1-tina-admin.txt
  ```

  **Commit**: YES
  - Message: `feat(setup): initialize Astro project with Tina CMS`
  - Files: `package.json`, `astro.config.mjs`, `tina/config.ts`, `src/pages/index.astro`
  - Pre-commit: `npm run build`

---

- [x] 2. Extract and setup global CSS

  **What to do**:
  - Extract all CSS from `public_html/index.html` `<style>` tag (~2100 lines)
  - Create `src/styles/global.css` with extracted CSS
  - Preserve all CSS custom properties (`:root` block)
  - Preserve all media queries exactly as-is
  - Verify no CSS is lost in extraction

  **Must NOT do**:
  - Do not refactor or reorganize CSS
  - Do not convert to CSS modules or Tailwind
  - Do not change any selectors or values
  - Do not remove "unused" CSS

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Direct copy-paste extraction, no logic required
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (after Task 1)
  - **Parallel Group**: Wave 1 (with Tasks 3, 4, 5)
  - **Blocks**: Tasks 6-16 (all section components need CSS)
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `public_html/index.html:32-2132` - Inline `<style>` block to extract

  **API/Type References**:
  - CSS custom properties block starts at `:root {` (line ~35)

  **Acceptance Criteria**:
  - [ ] `src/styles/global.css` exists
  - [ ] File contains ~2100 lines of CSS
  - [ ] `:root` block with all CSS variables preserved
  - [ ] All media queries preserved (@media rules)
  - [ ] No syntax errors: `npx stylelint src/styles/global.css` (if available) OR manual check

  **QA Scenarios**:

  ```
  Scenario: Verify CSS file created with correct content
    Tool: Bash
    Preconditions: Task completed
    Steps:
      1. Run: wc -l src/styles/global.css
      2. Assert line count is between 2000 and 2200
      3. Run: grep -c ":root" src/styles/global.css
      4. Assert count is 1 (single :root block)
      5. Run: grep -c "@media" src/styles/global.css
      6. Assert count is >= 10 (multiple media queries)
    Expected Result: Line count ~2100, :root block exists, media queries present
    Failure Indicators: File missing, wrong line count, missing :root
    Evidence: .sisyphus/evidence/task-2-css-verification.txt
  ```

  **Commit**: YES
  - Message: `feat(styles): extract global CSS from index.html`
  - Files: `src/styles/global.css`
  - Pre-commit: None

---

- [x] 3. Create base Layout component

  **What to do**:
  - Create `src/layouts/Layout.astro`
  - Include full HTML boilerplate from `index.html` `<head>` section
  - Import `global.css`
  - Add `<slot />` for page content
  - Include meta tags, favicon, fonts (Google Fonts: Poppins)
  - Add particles canvas scripts setup

  **Must NOT do**:
  - Do not add navigation/footer to layout (separate components)
  - Do not modify meta tags content
  - Do not remove any existing head elements

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Template extraction with slot pattern
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (after Task 1)
  - **Parallel Group**: Wave 1 (with Tasks 2, 4, 5)
  - **Blocks**: Tasks 6-11, 22
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `public_html/index.html:1-31` - `<!DOCTYPE>` through `</head>` section
  - `public_html/index.html:3880-3918` - Script tags at end of body

  **API/Type References**:
  - Astro Layout docs: https://docs.astro.build/en/basics/layouts/

  **Acceptance Criteria**:
  - [ ] `src/layouts/Layout.astro` exists
  - [ ] Contains `<!DOCTYPE html>` and full `<head>` section
  - [ ] Imports `../styles/global.css`
  - [ ] Contains `<slot />` element
  - [ ] Google Fonts link for Poppins included
  - [ ] Meta viewport, charset, description preserved

  **QA Scenarios**:

  ```
  Scenario: Verify Layout structure
    Tool: Bash
    Preconditions: Layout file created
    Steps:
      1. Run: grep -c "<slot" src/layouts/Layout.astro
      2. Assert count is 1
      3. Run: grep -c "global.css" src/layouts/Layout.astro
      4. Assert count is 1
      5. Run: grep -c "Poppins" src/layouts/Layout.astro
      6. Assert count >= 1
    Expected Result: Slot exists, CSS imported, fonts included
    Failure Indicators: Missing slot, CSS import, or fonts
    Evidence: .sisyphus/evidence/task-3-layout-structure.txt
  ```

  **Commit**: YES (group with Task 2)
  - Message: `feat(layout): create base Layout component with global styles`
  - Files: `src/layouts/Layout.astro`
  - Pre-commit: `npm run build`

---

- [x] 4. Define Tina CMS schema (Works + Testimonials)

  **What to do**:
  - Edit `tina/config.ts` to define two collections:
  - **Works Collection**: title, description, image, category (enum), type (image/video), order
  - **Testimonials Collection**: name, youtubeLink, rating (1-5), message, approved (boolean), date
  - Configure media storage to `public/` folder
  - Set content path to `content/works/` and `content/testimonials/`
  - Add TinaCloud configuration placeholders

  **Must NOT do**:
  - Do not add collections beyond Works and Testimonials
  - Do not configure authentication (TinaCloud handles this)
  - Do not add complex field validations

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Schema definition following documented patterns
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (after Task 1)
  - **Parallel Group**: Wave 1 (with Tasks 2, 3, 5)
  - **Blocks**: Tasks 12, 13, 21
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `public_html/js/data.js:1-50` - Current portfolio item structure
  - `public_html/js/data.js:52-70` - Current review structure

  **API/Type References**:
  - Tina schema docs: https://tina.io/docs/reference/collections/
  - Tina field types: https://tina.io/docs/reference/types/

  **External References**:
  - TinaCloud setup: https://tina.io/docs/tina-cloud/

  **Acceptance Criteria**:
  - [ ] `tina/config.ts` defines `works` collection with 6 fields
  - [ ] `tina/config.ts` defines `testimonials` collection with 6 fields
  - [ ] Category field uses enum: `['thumbnails', 'reels', 'posters', 'logos']`
  - [ ] Rating field is number type with 1-5 range concept
  - [ ] `npx tinacms dev -c "astro dev"` starts without schema errors

  **QA Scenarios**:

  ```
  Scenario: Verify Tina schema compiles
    Tool: Bash
    Preconditions: Schema defined in tina/config.ts
    Steps:
      1. Run: cd chaitu-editz-astro && npx tinacms build
      2. Assert exit code is 0
      3. Run: ls tina/__generated__/
      4. Assert generated files exist
    Expected Result: Tina build succeeds, generates types
    Failure Indicators: Build errors, missing generated files
    Evidence: .sisyphus/evidence/task-4-tina-schema.txt
  ```

  **Commit**: YES
  - Message: `feat(cms): define Tina CMS schema for Works and Testimonials`
  - Files: `tina/config.ts`
  - Pre-commit: `npx tinacms build`

---

- [x] 5. Setup asset directories and copy media files

  **What to do**:
  - Create `public/works/thumbnails/`, `public/works/reels/`, `public/works/posters/`, `public/works/logos/`
  - Create `public/clients/`
  - Copy all images from `public_html/Thumbnails works/` → `public/works/thumbnails/`
  - Copy all videos from `public_html/Reels/` → `public/works/reels/`
  - Copy all images from `public_html/Posters/` → `public/works/posters/`
  - Copy all images from `public_html/Logo/` → `public/works/logos/`
  - Copy all images from `public_html/Clients Images/` → `public/clients/`
  - Rename files to lowercase, replace spaces with hyphens

  **Must NOT do**:
  - Do not compress or optimize images (Astro handles this)
  - Do not delete original files
  - Do not reorganize structure beyond the defined folders

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: File system operations with bash commands
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (after Task 1)
  - **Parallel Group**: Wave 1 (with Tasks 2, 3, 4)
  - **Blocks**: Tasks 6, 12-15
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `public_html/Thumbnails works/` - 6 thumbnail images
  - `public_html/Reels/` - 3 video files
  - `public_html/Posters/` - 9 poster images
  - `public_html/Logo/` - 6 logo images
  - `public_html/Clients Images/` - 17 client images

  **Acceptance Criteria**:
  - [ ] `public/works/thumbnails/` contains 6 images
  - [ ] `public/works/reels/` contains 3 videos
  - [ ] `public/works/posters/` contains 9 images
  - [ ] `public/works/logos/` contains 6 images
  - [ ] `public/clients/` contains 17 images
  - [ ] All filenames are lowercase with hyphens

  **QA Scenarios**:

  ```
  Scenario: Verify all assets copied correctly
    Tool: Bash
    Preconditions: Copy commands executed
    Steps:
      1. Run: ls public/works/thumbnails/ | wc -l
      2. Assert count is 6
      3. Run: ls public/works/reels/ | wc -l
      4. Assert count is 3
      5. Run: ls public/works/posters/ | wc -l
      6. Assert count is 9
      7. Run: ls public/works/logos/ | wc -l
      8. Assert count is 6
      9. Run: ls public/clients/ | wc -l
      10. Assert count is 17
    Expected Result: Correct file counts in each directory
    Failure Indicators: Missing files, wrong counts
    Evidence: .sisyphus/evidence/task-5-assets-copied.txt
  ```

  **Commit**: YES
  - Message: `feat(assets): setup asset directories and copy media files`
  - Files: `public/works/**/*`, `public/clients/*`
  - Pre-commit: None

---

### Wave 2: Static Sections

- [ ] 6. Hero section with particles + typing animation

  **What to do**:
  - Create `src/components/sections/Hero.astro`
  - Extract Hero HTML from `index.html` (`#home` section, lines ~2133-2270)
  - Include stats counter section (15+ clients, 250+ works, etc.)
  - Implement typing animation with vanilla JS
  - Implement particle canvas animation
  - Add scroll-down indicator

  **Must NOT do**:
  - Do not change animation timing or effects
  - Do not modify particle colors or density
  - Do not add React/Vue for animations

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Complex animations (particles, typing) requiring visual verification
  - **Skills**: [`playwright`]
    - `playwright`: For visual verification of animations

  **Parallelization**:
  - **Can Run In Parallel**: YES (after Wave 1)
  - **Parallel Group**: Wave 2 (with Tasks 7-11)
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3, 5

  **References**:

  **Pattern References**:
  - `public_html/index.html:2133-2270` - Hero section HTML structure
  - `public_html/index.html:2970-3100` - Typing animation JS
  - `public_html/index.html:3500-3700` - Particle canvas JS

  **API/Type References**:
  - CSS classes: `.hero`, `.hero-content`, `.typing-text`, `.stats-grid`

  **Acceptance Criteria**:
  - [ ] `src/components/sections/Hero.astro` exists
  - [ ] Typing animation cycles through all titles
  - [ ] Particle canvas renders with correct colors
  - [ ] Stats show: 15+ clients, 250+ works, 4.9 rating, 100% satisfaction
  - [ ] Scroll indicator animates

  **QA Scenarios**:

  ```
  Scenario: Verify Hero section renders correctly
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running, Hero component integrated
    Steps:
      1. Navigate to http://localhost:4321
      2. Wait for selector: .hero-content
      3. Assert element .typing-text exists
      4. Assert element .stats-grid has 4 child stat items
      5. Take screenshot of viewport
    Expected Result: Hero visible with typing text and 4 stats
    Failure Indicators: Missing elements, no animation
    Evidence: .sisyphus/evidence/task-6-hero-render.png

  Scenario: Verify typing animation works
    Tool: Playwright (playwright skill)
    Preconditions: Hero component rendered
    Steps:
      1. Navigate to http://localhost:4321
      2. Get initial text content of .typing-text
      3. Wait 3 seconds
      4. Get new text content of .typing-text
      5. Assert text has changed (animation working)
    Expected Result: Text content differs after 3 seconds
    Failure Indicators: Text unchanged, animation not running
    Evidence: .sisyphus/evidence/task-6-typing-animation.txt
  ```

  **Commit**: YES
  - Message: `feat(hero): implement Hero section with particles and typing animation`
  - Files: `src/components/sections/Hero.astro`
  - Pre-commit: `npm run build`

---

- [ ] 7. About section with profile card

  **What to do**:
  - Create `src/components/sections/About.astro`
  - Extract About HTML from `index.html` (`#about` section)
  - Include profile card with image, name, title
  - Add scroll reveal animation
  - Include social links

  **Must NOT do**:
  - Do not make content CMS-editable (static for Phase 1)
  - Do not change layout or spacing

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Profile card with animations requires visual verification
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 6, 8-11)
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3

  **References**:

  **Pattern References**:
  - `public_html/index.html:2271-2350` - About section HTML
  - `public_html/index.html:3100-3150` - Profile card animation JS

  **Acceptance Criteria**:
  - [ ] `src/components/sections/About.astro` exists
  - [ ] Profile card renders with image, name, title
  - [ ] Social links present and clickable
  - [ ] Scroll reveal animation works

  **QA Scenarios**:

  ```
  Scenario: Verify About section renders
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/#about
      2. Wait for selector: #about
      3. Assert .profile-card exists
      4. Assert social links count >= 3
      5. Take screenshot
    Expected Result: About section visible with profile card
    Failure Indicators: Missing profile card or social links
    Evidence: .sisyphus/evidence/task-7-about-render.png
  ```

  **Commit**: YES (group with Task 8)
  - Message: `feat(sections): implement About and Services sections`
  - Files: `src/components/sections/About.astro`
  - Pre-commit: `npm run build`

---

- [ ] 8. Services section (5 cards)

  **What to do**:
  - Create `src/components/sections/Services.astro`
  - Extract Services HTML from `index.html` (`#services` section)
  - Include all 5 service cards with icons and descriptions
  - Add hover effects and scroll reveal

  **Must NOT do**:
  - Do not make CMS-editable
  - Do not change card order or content

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Static HTML extraction with existing CSS
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3

  **References**:

  **Pattern References**:
  - `public_html/index.html:2351-2480` - Services section HTML

  **Acceptance Criteria**:
  - [ ] `src/components/sections/Services.astro` exists
  - [ ] Contains 5 service cards
  - [ ] Each card has icon, title, description
  - [ ] Hover effects work

  **QA Scenarios**:

  ```
  Scenario: Verify Services cards render
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/#services
      2. Count .service-card elements
      3. Assert count is 5
    Expected Result: 5 service cards visible
    Failure Indicators: Wrong card count
    Evidence: .sisyphus/evidence/task-8-services.png
  ```

  **Commit**: YES (group with Task 7)

---

- [ ] 9. Pricing section (3 plans)

  **What to do**:
  - Create `src/components/sections/Pricing.astro`
  - Extract Pricing HTML from `index.html` (`#pricing` section)
  - Include 3 pricing cards: Basic, Standard, Premium
  - Add hover effects and "popular" badge on Standard

  **Must NOT do**:
  - Do not make CMS-editable
  - Do not change prices or features

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Static HTML extraction
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3

  **References**:

  **Pattern References**:
  - `public_html/index.html:2620-2780` - Pricing section HTML

  **Acceptance Criteria**:
  - [ ] `src/components/sections/Pricing.astro` exists
  - [ ] Contains 3 pricing cards
  - [ ] Standard plan has "popular" badge
  - [ ] WhatsApp booking buttons work

  **QA Scenarios**:

  ```
  Scenario: Verify Pricing cards render
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/#pricing
      2. Count .pricing-card elements
      3. Assert count is 3
      4. Assert .popular-badge exists on one card
    Expected Result: 3 pricing cards, one with popular badge
    Failure Indicators: Wrong count or missing badge
    Evidence: .sisyphus/evidence/task-9-pricing.png
  ```

  **Commit**: YES (group with Task 10)

---

- [ ] 10. FAQ section with accordion

  **What to do**:
  - Create `src/components/sections/FAQ.astro`
  - Extract FAQ HTML from `index.html` (`#faq_section`)
  - Implement accordion expand/collapse with vanilla JS
  - Include all 10 FAQ items

  **Must NOT do**:
  - Do not change FAQ content
  - Do not use a library for accordion

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Interactive accordion requires behavior verification
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3

  **References**:

  **Pattern References**:
  - `public_html/index.html:2850-2960` - FAQ section HTML
  - `public_html/index.html:3200-3280` - FAQ accordion JS

  **Acceptance Criteria**:
  - [ ] `src/components/sections/FAQ.astro` exists
  - [ ] Contains 10 FAQ items
  - [ ] Click on question expands answer
  - [ ] Click again collapses answer
  - [ ] Only one item expanded at a time

  **QA Scenarios**:

  ```
  Scenario: Verify FAQ accordion functionality
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/#faq_section
      2. Count .faq-item elements
      3. Assert count is 10
      4. Click first .faq-question
      5. Assert first .faq-answer is visible
      6. Click second .faq-question
      7. Assert first .faq-answer is hidden
      8. Assert second .faq-answer is visible
    Expected Result: Accordion toggles correctly, one at a time
    Failure Indicators: Multiple open, no toggle
    Evidence: .sisyphus/evidence/task-10-faq-accordion.txt
  ```

  **Commit**: YES (group with Task 9)

---

- [ ] 11. Contact section with WhatsApp redirect

  **What to do**:
  - Create `src/components/sections/Contact.astro`
  - Extract Contact HTML from `index.html` (`#contact` section)
  - Implement form that redirects to WhatsApp with pre-filled message
  - Include contact info, email, phone
  - Add particle canvas background

  **Must NOT do**:
  - Do not implement server-side form handling
  - Do not add email sending functionality

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Form UX + particle canvas requires visual verification
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3

  **References**:

  **Pattern References**:
  - `public_html/index.html:2781-2849` - Contact section HTML
  - WhatsApp API: `https://wa.me/PHONE?text=MESSAGE`

  **Acceptance Criteria**:
  - [ ] `src/components/sections/Contact.astro` exists
  - [ ] Form fields: Name, Email, Phone, Message
  - [ ] Submit opens WhatsApp with pre-filled message
  - [ ] Contact info displayed (email, phone, location)

  **QA Scenarios**:

  ```
  Scenario: Verify Contact form WhatsApp redirect
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/#contact
      2. Fill input[name="name"] with "Test User"
      3. Fill input[name="email"] with "test@example.com"
      4. Fill input[name="message"] with "Hello"
      5. Click submit button
      6. Get new page URL
      7. Assert URL contains "wa.me" or "whatsapp"
    Expected Result: Form redirects to WhatsApp URL
    Failure Indicators: No redirect, wrong URL
    Evidence: .sisyphus/evidence/task-11-contact-whatsapp.txt
  ```

  **Commit**: YES
  - Message: `feat(sections): implement FAQ and Contact sections`
  - Files: `src/components/sections/FAQ.astro`, `src/components/sections/Contact.astro`
  - Pre-commit: `npm run build`

---

### Wave 3: CMS-Driven Sections

- [ ] 12. Portfolio section with filtering + Tina integration

  **What to do**:
  - Create `src/components/sections/Portfolio.astro`
  - Query works from Tina CMS using generated client
  - Implement category filter tabs (All, Thumbnails, Reels, Posters, Logos)
  - Display grid of portfolio items
  - Handle both image and video types
  - Add click handler to open lightbox

  **Must NOT do**:
  - Do not hardcode portfolio items
  - Do not change filter behavior
  - Do not add pagination (all items shown)

  **Recommended Agent Profile**:
  - **Category**: `deep`
    - Reason: CMS integration + filtering logic requires thorough implementation
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (after Wave 2)
  - **Parallel Group**: Wave 3 (with Tasks 13-16)
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3, 4, 5, 21

  **References**:

  **Pattern References**:
  - `public_html/index.html:2481-2619` - Portfolio section HTML
  - `public_html/index.html:3280-3400` - Portfolio filter JS
  - `public_html/js/data.js:1-50` - Portfolio data structure

  **API/Type References**:
  - Tina client: `import client from '../../tina/__generated__/client'`
  - Query: `client.queries.worksConnection()`

  **Acceptance Criteria**:
  - [ ] `src/components/sections/Portfolio.astro` exists
  - [ ] Queries works from Tina CMS
  - [ ] Filter tabs work (All shows all, category shows filtered)
  - [ ] Grid displays correct number of items per category
  - [ ] Images and videos render correctly
  - [ ] Click opens lightbox (Task 15)

  **QA Scenarios**:

  ```
  Scenario: Verify Portfolio filtering works
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running, content migrated
    Steps:
      1. Navigate to http://localhost:4321/#portfolio
      2. Count .portfolio-item elements (should be 24)
      3. Click filter button for "thumbnails"
      4. Count visible .portfolio-item elements (should be 6)
      5. Click filter button for "reels"
      6. Count visible .portfolio-item elements (should be 3)
      7. Click filter button for "all"
      8. Count visible .portfolio-item elements (should be 24)
    Expected Result: Correct item counts per filter
    Failure Indicators: Wrong counts, filter not working
    Evidence: .sisyphus/evidence/task-12-portfolio-filter.txt

  Scenario: Verify video items render
    Tool: Playwright (playwright skill)
    Preconditions: Portfolio rendered
    Steps:
      1. Click filter for "reels"
      2. Assert .portfolio-item[data-type="video"] count is 3
      3. Assert each has video element or poster image
    Expected Result: 3 video items visible
    Failure Indicators: Missing videos
    Evidence: .sisyphus/evidence/task-12-portfolio-videos.png
  ```

  **Commit**: YES
  - Message: `feat(portfolio): implement Portfolio section with Tina CMS integration`
  - Files: `src/components/sections/Portfolio.astro`
  - Pre-commit: `npm run build`

---

- [ ] 13. Reviews section with Tina integration

  **What to do**:
  - Create `src/components/sections/Reviews.astro`
  - Query approved testimonials from Tina CMS
  - Display review cards with name, rating (stars), message
  - Include YouTube channel link
  - Add particle canvas background

  **Must NOT do**:
  - Do not display unapproved reviews (filter by approved: true)
  - Do not include review form here (separate component)

  **Recommended Agent Profile**:
  - **Category**: `deep`
    - Reason: CMS integration with filtering logic
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3, 4

  **References**:

  **Pattern References**:
  - `public_html/index.html:2530-2618` - Reviews section HTML
  - `public_html/js/data.js:52-70` - Review data structure

  **API/Type References**:
  - Tina query: `client.queries.testimonialsConnection({ filter: { approved: { eq: true } } })`

  **Acceptance Criteria**:
  - [ ] `src/components/sections/Reviews.astro` exists
  - [ ] Only displays testimonials where `approved: true`
  - [ ] Each review shows: name, rating (stars), message, YouTube link
  - [ ] Particle canvas background renders

  **QA Scenarios**:

  ```
  Scenario: Verify Reviews display approved only
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running, testimonials in CMS (some approved, some not)
    Steps:
      1. Navigate to http://localhost:4321/#reviews
      2. Count .review-card elements
      3. Verify count matches number of approved testimonials in CMS
    Expected Result: Only approved reviews shown
    Failure Indicators: Unapproved reviews visible, wrong count
    Evidence: .sisyphus/evidence/task-13-reviews-approved.txt

  Scenario: Verify review card content
    Tool: Playwright (playwright skill)
    Preconditions: At least one approved review exists
    Steps:
      1. Navigate to http://localhost:4321/#reviews
      2. Get first .review-card
      3. Assert .reviewer-name exists and not empty
      4. Assert .rating-stars exists with star icons
      5. Assert .review-message exists and not empty
    Expected Result: Review card has all required elements
    Failure Indicators: Missing name, stars, or message
    Evidence: .sisyphus/evidence/task-13-review-card.png
  ```

  **Commit**: YES
  - Message: `feat(reviews): implement Reviews section with Tina CMS integration`
  - Files: `src/components/sections/Reviews.astro`
  - Pre-commit: `npm run build`

---

- [ ] 14. Clients marquee section

  **What to do**:
  - Create `src/components/sections/Clients.astro`
  - Extract Clients HTML from `index.html` (`#clients` section)
  - Implement infinite scroll marquee with CSS animation
  - Load all 17 client images from `public/clients/`
  - Add particle canvas background

  **Must NOT do**:
  - Do not make CMS-editable (static images)
  - Do not use JavaScript for marquee (CSS only)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: CSS animation marquee requires visual verification
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3, 5

  **References**:

  **Pattern References**:
  - `public_html/index.html:2700-2780` - Clients section HTML
  - CSS `.marquee` animation in global.css

  **Acceptance Criteria**:
  - [ ] `src/components/sections/Clients.astro` exists
  - [ ] Displays all 17 client images
  - [ ] Marquee scrolls infinitely with CSS
  - [ ] Particle canvas renders

  **QA Scenarios**:

  ```
  Scenario: Verify Clients marquee
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/#clients
      2. Count img elements in .marquee-track
      3. Assert count >= 17 (may be duplicated for seamless loop)
      4. Take screenshot at t=0
      5. Wait 2 seconds
      6. Take screenshot at t=2
      7. Compare screenshots show marquee moved
    Expected Result: Images visible, marquee animating
    Failure Indicators: No images, static marquee
    Evidence: .sisyphus/evidence/task-14-clients-marquee.gif
  ```

  **Commit**: YES (group with Task 15)

---

- [ ] 15. Lightbox component (images + video)

  **What to do**:
  - Create `src/components/ui/Lightbox.astro`
  - Implement modal overlay for fullscreen view
  - Support both images and videos
  - Add zoom/pan functionality for images (current site has this)
  - Add close button, keyboard escape, click-outside-to-close
  - Navigation arrows for prev/next if multiple items

  **Must NOT do**:
  - Do not use a library (vanilla JS)
  - Do not change zoom/pan behavior

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Complex modal UX with zoom/pan requires detailed verification
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3, 5

  **References**:

  **Pattern References**:
  - `public_html/index.html:3400-3500` - Lightbox JS implementation
  - `public_html/index.html:2600-2618` - Lightbox HTML structure

  **Acceptance Criteria**:
  - [ ] `src/components/ui/Lightbox.astro` exists
  - [ ] Opens on portfolio item click
  - [ ] Displays image fullscreen
  - [ ] Displays video with controls
  - [ ] Zoom/pan works on images
  - [ ] Close on X button, Escape key, or outside click
  - [ ] Prev/Next navigation works

  **QA Scenarios**:

  ```
  Scenario: Verify Lightbox opens for image
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running, Portfolio rendered
    Steps:
      1. Navigate to http://localhost:4321/#portfolio
      2. Click first .portfolio-item (image type)
      3. Wait for .lightbox-overlay to be visible
      4. Assert .lightbox-image src matches clicked item
      5. Press Escape key
      6. Assert .lightbox-overlay is not visible
    Expected Result: Lightbox opens, shows image, closes on Escape
    Failure Indicators: No lightbox, wrong image, doesn't close
    Evidence: .sisyphus/evidence/task-15-lightbox-image.png

  Scenario: Verify Lightbox zoom functionality
    Tool: Playwright (playwright skill)
    Preconditions: Lightbox open with image
    Steps:
      1. Open lightbox with image
      2. Get initial image transform scale
      3. Scroll wheel up (zoom in)
      4. Get new image transform scale
      5. Assert new scale > initial scale
    Expected Result: Image zooms in on scroll
    Failure Indicators: No zoom effect
    Evidence: .sisyphus/evidence/task-15-lightbox-zoom.txt
  ```

  **Commit**: YES (group with Task 14)
  - Message: `feat(ui): implement Clients marquee and Lightbox component`
  - Files: `src/components/sections/Clients.astro`, `src/components/ui/Lightbox.astro`
  - Pre-commit: `npm run build`

---

- [ ] 16. Header/Navbar with mobile menu

  **What to do**:
  - Create `src/components/layout/Header.astro`
  - Extract header HTML from `index.html`
  - Include logo, navigation links to sections (hash anchors)
  - Implement mobile hamburger menu toggle
  - Add scroll-based header background change (transparent → solid)

  **Must NOT do**:
  - Do not change navigation items
  - Do not add dropdown menus

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Mobile menu interaction requires behavior testing
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3

  **References**:

  **Pattern References**:
  - `public_html/index.html:2133-2160` - Header HTML
  - `public_html/js/main.js` - Mobile menu toggle JS

  **Acceptance Criteria**:
  - [ ] `src/components/layout/Header.astro` exists
  - [ ] Logo links to #home
  - [ ] All nav links work (About, Services, Portfolio, Reviews, Pricing, Contact)
  - [ ] Mobile menu toggles on hamburger click
  - [ ] Header background changes on scroll

  **QA Scenarios**:

  ```
  Scenario: Verify mobile menu toggle
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321
      2. Set viewport to mobile (375x667)
      3. Assert .nav-links is not visible (hidden on mobile)
      4. Click .hamburger-menu button
      5. Assert .nav-links is visible
      6. Click .hamburger-menu button again
      7. Assert .nav-links is not visible
    Expected Result: Mobile menu toggles correctly
    Failure Indicators: Menu doesn't show/hide
    Evidence: .sisyphus/evidence/task-16-mobile-menu.txt
  ```

  **Commit**: YES
  - Message: `feat(layout): implement Header with mobile menu`
  - Files: `src/components/layout/Header.astro`
  - Pre-commit: `npm run build`

---

### Wave 4: Forms + Pages

- [ ] 17. Review submission form with Formspree

  **What to do**:
  - Create `src/components/ui/ReviewForm.astro`
  - Form fields: Name, YouTube Channel Link, Rating (1-5 stars), Message
  - Integrate with Formspree (or similar) for submission
  - Show success/error messages
  - Add to Reviews section

  **Must NOT do**:
  - Do not auto-add to CMS (admin manual process)
  - Do not implement server-side handling
  - Do not store submissions locally

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Third-party integration + form UX
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (after Wave 3)
  - **Parallel Group**: Wave 4
  - **Blocks**: Task 22
  - **Blocked By**: Task 13

  **References**:

  **Pattern References**:
  - `public_html/index.html:2580-2618` - Review form HTML

  **External References**:
  - Formspree docs: https://formspree.io/guides/astro/

  **Acceptance Criteria**:
  - [ ] `src/components/ui/ReviewForm.astro` exists
  - [ ] Form fields: name, youtube link, rating selector, message textarea
  - [ ] Form action points to Formspree endpoint
  - [ ] Success message shows after submission
  - [ ] Validation: required fields, valid URL format

  **QA Scenarios**:

  ```
  Scenario: Verify review form structure
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/#reviews
      2. Assert form#review-form exists
      3. Assert input[name="name"] exists
      4. Assert input[name="youtube_link"] exists
      5. Assert rating selector exists
      6. Assert textarea[name="message"] exists
      7. Assert submit button exists
    Expected Result: All form fields present
    Failure Indicators: Missing fields
    Evidence: .sisyphus/evidence/task-17-review-form.png

  Scenario: Verify form validation
    Tool: Playwright (playwright skill)
    Preconditions: Review form visible
    Steps:
      1. Click submit without filling fields
      2. Assert validation message appears for required fields
      3. Fill name with "Test"
      4. Fill message with "Great work"
      5. Leave rating empty
      6. Click submit
      7. Assert rating required message
    Expected Result: Validation prevents empty submissions
    Failure Indicators: Form submits with empty required fields
    Evidence: .sisyphus/evidence/task-17-form-validation.txt
  ```

  **Commit**: YES
  - Message: `feat(forms): implement review submission form with Formspree`
  - Files: `src/components/ui/ReviewForm.astro`
  - Pre-commit: `npm run build`

---

- [ ] 18. Footer component

  **What to do**:
  - Create `src/components/layout/Footer.astro`
  - Extract footer HTML from `index.html`
  - Include copyright, social links, quick links
  - Add particle canvas background

  **Must NOT do**:
  - Do not change links or content

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Static HTML extraction
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 4
  - **Blocks**: Task 22
  - **Blocked By**: Tasks 2, 3

  **References**:

  **Pattern References**:
  - `public_html/index.html:2860-2920` - Footer HTML

  **Acceptance Criteria**:
  - [ ] `src/components/layout/Footer.astro` exists
  - [ ] Copyright text with current year
  - [ ] Social media links (YouTube, Instagram, etc.)
  - [ ] Quick links to sections

  **QA Scenarios**:

  ```
  Scenario: Verify Footer content
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Scroll to bottom of page
      2. Assert footer element exists
      3. Assert copyright text contains "Chaitu Editz"
      4. Assert social links count >= 3
    Expected Result: Footer visible with content
    Failure Indicators: Missing copyright or social links
    Evidence: .sisyphus/evidence/task-18-footer.png
  ```

  **Commit**: YES (group with Tasks 19, 20)

---

- [ ] 19. Privacy policy page

  **What to do**:
  - Create `src/pages/privacy.astro`
  - Use Layout component
  - Copy content from `public_html/privacy.html`
  - Style consistently with site design

  **Must NOT do**:
  - Do not modify legal text content
  - Do not make CMS-editable

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple page with static content
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 4
  - **Blocks**: Task 23
  - **Blocked By**: Tasks 2, 3

  **References**:

  **Pattern References**:
  - `public_html/privacy.html` - Source content

  **Acceptance Criteria**:
  - [ ] `src/pages/privacy.astro` exists
  - [ ] Accessible at `/privacy`
  - [ ] All privacy policy content present
  - [ ] Consistent styling with main site

  **QA Scenarios**:

  ```
  Scenario: Verify Privacy page renders
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/privacy
      2. Assert page title contains "Privacy"
      3. Assert main content area not empty
    Expected Result: Privacy page loads with content
    Failure Indicators: 404 or empty page
    Evidence: .sisyphus/evidence/task-19-privacy.png
  ```

  **Commit**: YES (group with Tasks 18, 20)

---

- [ ] 20. Terms of service page

  **What to do**:
  - Create `src/pages/terms.astro`
  - Use Layout component
  - Copy content from `public_html/terms.html`
  - Style consistently with site design

  **Must NOT do**:
  - Do not modify legal text content
  - Do not make CMS-editable

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple page with static content
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 4
  - **Blocks**: Task 23
  - **Blocked By**: Tasks 2, 3

  **References**:

  **Pattern References**:
  - `public_html/terms.html` - Source content

  **Acceptance Criteria**:
  - [ ] `src/pages/terms.astro` exists
  - [ ] Accessible at `/terms`
  - [ ] All terms content present
  - [ ] Consistent styling with main site

  **QA Scenarios**:

  ```
  Scenario: Verify Terms page renders
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321/terms
      2. Assert page title contains "Terms"
      3. Assert main content area not empty
    Expected Result: Terms page loads with content
    Failure Indicators: 404 or empty page
    Evidence: .sisyphus/evidence/task-20-terms.png
  ```

  **Commit**: YES (group with Tasks 18, 19)
  - Message: `feat(pages): implement Footer, Privacy, and Terms pages`
  - Files: `src/components/layout/Footer.astro`, `src/pages/privacy.astro`, `src/pages/terms.astro`
  - Pre-commit: `npm run build`

---

- [ ] 21. Migrate content data to Tina collections

  **What to do**:
  - Create markdown files for all 24 portfolio items in `content/works/`
  - Create markdown files for 2 testimonials in `content/testimonials/`
  - Data source: `public_html/js/data.js`
  - Map fields correctly to Tina schema
  - Set `approved: true` for existing testimonials

  **Must NOT do**:
  - Do not change content or descriptions
  - Do not add new items

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Data transformation from JS to markdown
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 4
  - **Blocks**: Tasks 12, 13, 24
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - `public_html/js/data.js` - Source data

  **Acceptance Criteria**:
  - [ ] `content/works/` contains 24 markdown files
  - [ ] `content/testimonials/` contains 2 markdown files
  - [ ] Each work file has: title, category, type, image path
  - [ ] Each testimonial has: name, youtubeLink, rating, message, approved: true

  **QA Scenarios**:

  ```
  Scenario: Verify content files created
    Tool: Bash
    Preconditions: Migration completed
    Steps:
      1. Run: ls content/works/ | wc -l
      2. Assert count is 24
      3. Run: ls content/testimonials/ | wc -l
      4. Assert count is 2
      5. Run: grep -l "approved: true" content/testimonials/*.md | wc -l
      6. Assert count is 2
    Expected Result: Correct file counts, all testimonials approved
    Failure Indicators: Wrong counts
    Evidence: .sisyphus/evidence/task-21-content-migration.txt
  ```

  **Commit**: YES
  - Message: `content: migrate portfolio and testimonial data to Tina CMS`
  - Files: `content/works/*.md`, `content/testimonials/*.md`
  - Pre-commit: `npx tinacms build`

---

### Wave 5: Integration + QA

- [ ] 22. Assemble index.astro with all sections

  **What to do**:
  - Edit `src/pages/index.astro`
  - Import and arrange all section components in correct order
  - Use Layout component as wrapper
  - Include Header at top, Footer at bottom
  - Ensure all section IDs match for hash navigation

  **Must NOT do**:
  - Do not add any content directly in index.astro
  - Do not change section order

  **Recommended Agent Profile**:
  - **Category**: `deep`
    - Reason: Critical integration requiring all components work together
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: NO (depends on all previous tasks)
  - **Parallel Group**: Wave 5 (first task)
  - **Blocks**: Tasks 23, 24
  - **Blocked By**: Tasks 6-21

  **References**:

  **Pattern References**:
  - `public_html/index.html` - Section order reference

  **Section Order**:
  1. Header
  2. Hero (#home)
  3. About (#about)
  4. Services (#services)
  5. Portfolio (#portfolio)
  6. Reviews (#reviews)
  7. Pricing (#pricing)
  8. Clients (#clients)
  9. FAQ (#faq_section)
  10. Contact (#contact)
  11. Footer

  **Acceptance Criteria**:
  - [ ] `src/pages/index.astro` imports all 10 sections + Header + Footer
  - [ ] All sections render in correct order
  - [ ] Hash navigation works (#about, #portfolio, etc.)
  - [ ] No console errors
  - [ ] All JavaScript functionality works

  **QA Scenarios**:

  ```
  Scenario: Verify all sections render
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to http://localhost:4321
      2. Assert #home exists
      3. Assert #about exists
      4. Assert #services exists
      5. Assert #portfolio exists
      6. Assert #reviews exists
      7. Assert #pricing exists
      8. Assert #clients exists
      9. Assert #faq_section exists
      10. Assert #contact exists
      11. Assert footer exists
    Expected Result: All 10 sections present
    Failure Indicators: Missing sections
    Evidence: .sisyphus/evidence/task-22-all-sections.txt

  Scenario: Verify hash navigation
    Tool: Playwright (playwright skill)
    Preconditions: Full page rendered
    Steps:
      1. Navigate to http://localhost:4321
      2. Click nav link for "Portfolio"
      3. Assert URL contains #portfolio
      4. Assert #portfolio section is in viewport
    Expected Result: Hash navigation scrolls to section
    Failure Indicators: No scroll, wrong section
    Evidence: .sisyphus/evidence/task-22-hash-nav.txt
  ```

  **Commit**: YES
  - Message: `feat(pages): assemble index.astro with all sections`
  - Files: `src/pages/index.astro`
  - Pre-commit: `npm run build`

---

- [ ] 23. Production build and optimization

  **What to do**:
  - Run `npm run build` to generate production output
  - Verify `dist/` folder created with all assets
  - Check bundle sizes are reasonable
  - Verify all images copied correctly
  - Test build locally with `npm run preview`

  **Must NOT do**:
  - Do not add additional optimization plugins
  - Do not modify Astro's default optimization

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Standard build commands with verification
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO (sequential after Task 22)
  - **Parallel Group**: Wave 5
  - **Blocks**: Task 24, F1-F4
  - **Blocked By**: Task 22

  **References**:

  **External References**:
  - Astro build docs: https://docs.astro.build/en/guides/deploy/

  **Acceptance Criteria**:
  - [ ] `npm run build` completes without errors
  - [ ] `dist/` folder exists
  - [ ] `dist/index.html` exists
  - [ ] `dist/privacy/index.html` exists
  - [ ] `dist/terms/index.html` exists
  - [ ] `dist/admin/` folder exists (Tina admin)
  - [ ] All images in `dist/` (or `dist/_astro/`)
  - [ ] `npm run preview` serves site correctly

  **QA Scenarios**:

  ```
  Scenario: Verify production build
    Tool: Bash
    Preconditions: All components completed
    Steps:
      1. Run: npm run build
      2. Assert exit code is 0
      3. Run: ls dist/index.html
      4. Assert file exists
      5. Run: du -sh dist/
      6. Assert size < 100MB
    Expected Result: Build succeeds, dist under 100MB
    Failure Indicators: Build fails, dist too large
    Evidence: .sisyphus/evidence/task-23-build.txt

  Scenario: Verify preview server
    Tool: Playwright (playwright skill)
    Preconditions: Build completed
    Steps:
      1. Start: npm run preview &
      2. Wait 3 seconds
      3. Navigate to http://localhost:4321
      4. Assert page title contains "Chaitu Editz"
      5. Take full page screenshot
    Expected Result: Preview serves production build
    Failure Indicators: Server error, wrong content
    Evidence: .sisyphus/evidence/task-23-preview.png
  ```

  **Commit**: NO (build artifacts not committed)

---

- [ ] 24. Full site QA verification

  **What to do**:
  - Compare new site against original at multiple viewports
  - Test all interactive features (lightbox, filters, forms, accordion)
  - Verify all animations work
  - Test CMS admin functionality
  - Document any visual differences

  **Must NOT do**:
  - Do not skip any section
  - Do not accept "close enough" - must match exactly

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Comprehensive QA requiring multiple verification types
  - **Skills**: [`playwright`]

  **Parallelization**:
  - **Can Run In Parallel**: NO (final verification)
  - **Parallel Group**: Wave 5 (last task before FINAL)
  - **Blocks**: F1-F4
  - **Blocked By**: Tasks 22, 23

  **References**:

  **External References**:
  - Original site: `public_html/index.html` (open in browser)
  - New site: `http://localhost:4321` (Astro preview)

  **Acceptance Criteria**:
  - [ ] Visual match at 1920px viewport
  - [ ] Visual match at 1024px viewport
  - [ ] Visual match at 768px viewport
  - [ ] Visual match at 375px viewport
  - [ ] All animations work (typing, stats, particles, reveals)
  - [ ] Portfolio filter works
  - [ ] Lightbox works for images and videos
  - [ ] FAQ accordion works
  - [ ] Mobile menu works
  - [ ] Review form submits
  - [ ] Contact form redirects to WhatsApp
  - [ ] Tina CMS admin loads and can edit content

  **QA Scenarios**:

  ```
  Scenario: Visual comparison at desktop
    Tool: Playwright (playwright skill)
    Preconditions: Both original and new site accessible
    Steps:
      1. Set viewport to 1920x1080
      2. Navigate to http://localhost:4321
      3. Take full page screenshot
      4. Compare manually against original site
    Expected Result: Visually identical layout, colors, spacing
    Failure Indicators: Layout differences, wrong colors, spacing issues
    Evidence: .sisyphus/evidence/task-24-desktop-1920.png

  Scenario: Visual comparison at mobile
    Tool: Playwright (playwright skill)
    Preconditions: Sites accessible
    Steps:
      1. Set viewport to 375x667
      2. Navigate to http://localhost:4321
      3. Take full page screenshot
      4. Verify mobile menu appears
      5. Verify responsive adjustments
    Expected Result: Mobile layout matches original
    Failure Indicators: Broken layout, overflow, wrong sizing
    Evidence: .sisyphus/evidence/task-24-mobile-375.png

  Scenario: Tina CMS admin test
    Tool: Playwright (playwright skill)
    Preconditions: Dev server with Tina running
    Steps:
      1. Navigate to http://localhost:4321/admin
      2. Wait for admin UI to load
      3. Click on "Works" collection
      4. Assert list of works appears
      5. Click first work item
      6. Assert edit form appears with fields
      7. Change title text
      8. Click save (or verify save button exists)
    Expected Result: Admin UI functional, can view and edit content
    Failure Indicators: Admin fails to load, can't navigate collections
    Evidence: .sisyphus/evidence/task-24-tina-admin.png
  ```

  **Commit**: NO (QA only, no code changes)

---

### Wave FINAL: Independent Review

- [ ] F1. **Plan Compliance Audit** — `oracle`

  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, curl endpoint, run command). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

---

- [ ] F2. **Code Quality Review** — `unspecified-high`

  Run `npm run build` (should have zero errors). Review all changed files for: console.log in prod, commented-out code, unused imports. Check for AI slop: excessive comments, over-abstraction, generic names. Verify CSS is unchanged from original.
  
  Output: `Build [PASS/FAIL] | Code Quality [N issues] | CSS Integrity [PASS/FAIL] | VERDICT`

---

- [ ] F3. **Full Visual + Functional QA** — `unspecified-high` + `playwright`

  Start from clean state. Execute EVERY QA scenario from EVERY task — follow exact steps, capture evidence. Test cross-section integration. Test all interactive features. Compare against original site.
  
  Output: `Scenarios [N/N pass] | Visual Match [N/10 sections] | Interactions [N/N working] | VERDICT`

---

- [ ] F4. **Scope Fidelity Check** — `deep`

  For each task: read "What to do", read actual implementation. Verify 1:1 — everything in spec was built (no missing), nothing beyond spec was built (no creep). Check "Must NOT do" compliance. Detect any unaccounted files or features.
  
  Output: `Tasks [N/N compliant] | Scope Creep [CLEAN/N issues] | VERDICT`

---

## Commit Strategy

| After Task(s) | Message | Key Files |
|---------------|---------|-----------|
| 1 | `feat(setup): initialize Astro project with Tina CMS` | package.json, astro.config.mjs |
| 2, 3 | `feat(layout): create base Layout with global styles` | Layout.astro, global.css |
| 4 | `feat(cms): define Tina CMS schema` | tina/config.ts |
| 5 | `feat(assets): setup asset directories` | public/works/**, public/clients/* |
| 6 | `feat(hero): implement Hero section` | Hero.astro |
| 7, 8 | `feat(sections): implement About and Services` | About.astro, Services.astro |
| 9, 10 | `feat(sections): implement Pricing and FAQ` | Pricing.astro, FAQ.astro |
| 11 | `feat(sections): implement Contact with WhatsApp` | Contact.astro |
| 12 | `feat(portfolio): implement Portfolio with Tina` | Portfolio.astro |
| 13 | `feat(reviews): implement Reviews with Tina` | Reviews.astro |
| 14, 15 | `feat(ui): implement Clients marquee and Lightbox` | Clients.astro, Lightbox.astro |
| 16 | `feat(layout): implement Header with mobile menu` | Header.astro |
| 17 | `feat(forms): implement review form with Formspree` | ReviewForm.astro |
| 18, 19, 20 | `feat(pages): implement Footer, Privacy, Terms` | Footer.astro, privacy.astro, terms.astro |
| 21 | `content: migrate data to Tina CMS` | content/works/**, content/testimonials/** |
| 22 | `feat(pages): assemble index.astro` | index.astro |

---

## Success Criteria

### Verification Commands
```bash
# Build succeeds
npm run build  # Expected: Exit 0, dist/ folder created

# Page count
ls dist/*.html dist/**/*.html 2>/dev/null | wc -l  # Expected: 3 (index, privacy, terms)

# Asset count
ls dist/works/**/* 2>/dev/null | wc -l  # Expected: 24+ files

# Tina admin exists
ls dist/admin/index.html  # Expected: File exists
```

### Final Checklist
- [ ] All "Must Have" present (pixel-perfect match, CMS working, all sections)
- [ ] All "Must NOT Have" absent (no new features, no React/Vue, no DB)
- [ ] Production build under 100MB
- [ ] All 24 QA scenarios pass
- [ ] Tina CMS admin functional
- [ ] Ready for Hostinger FTP upload
