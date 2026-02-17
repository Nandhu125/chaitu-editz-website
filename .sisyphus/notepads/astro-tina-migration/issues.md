
# Wave 3, Task 1 Issues: QA Verification

## Playwright MCP Environment
- The provided `playwright` MCP fails because it expects `chrome` (Google Chrome) to be installed in `/opt/google/chrome/chrome`, but the environment only supports `chromium` installed via `npx playwright install chromium`.
- Workaround: Used local `playwright` package with `chromium` binary.

## TypeScript/LSP Errors
- `src/layouts/Layout.astro`: Multiple errors related to `Particle` type definition (implicit any, missing properties).
- `src/components/sections/Pricing.astro`: Property `style` does not exist on type `Element`.
- `src/components/sections/Portfolio.astro`: Property `style` does not exist on type `Element`.
- `src/components/sections/FAQ.astro`: 'item' is possibly 'null'.

## F4 Scope Fidelity Check - Critical Issues Found (2026-02-17)

### BLOCKER 1: Portfolio Section Missing CMS Integration
- **File**: `src/components/sections/Portfolio.astro`
- **Issue**: Uses hardcoded array `const portfolioItems = [...]` instead of Tina CMS query
- **Impact**: Portfolio works cannot be managed via Tina admin panel - defeats core Phase 1 objective
- **Required Fix**: Replace with `await client.queries.worksConnection()`

### BLOCKER 2: Reviews Section Missing CMS Integration  
- **File**: `src/components/sections/Reviews.astro`
- **Issue**: Uses hardcoded array `const reviews = [...]` instead of Tina CMS query
- **Impact**: Testimonials cannot be managed via CMS - defeats core Phase 1 objective
- **Required Fix**: Replace with `await client.queries.testimonialsConnection({ filter: { approved: { eq: true } } })`

### BLOCKER 3: Layout Architecture Violation
- **File**: `src/layouts/Layout.astro`
- **Issue**: Directly imports and renders Header/Footer (violates Task 3 spec: "Do not add navigation/footer to layout")
- **Impact**: Reduces component reusability, violates separation of concerns
- **Required Fix**: Remove Header/Footer from Layout, add only to pages that need them

### TypeScript Errors (Non-Blocking)
Multiple files have TypeScript errors in inline scripts:
- Layout.astro: Particle class properties not typed (27 errors)
- FAQ.astro: Null check missing for item reference
- Pricing.astro: Style property type assertions needed
- Portfolio.astro: Style property type assertions needed

These don't block build but should be fixed for type safety.

### Build Size Warning
- Total: 779MB (exceeds 100MB target)
- Videos: 713MB (3 files in public/works/reels/)
- Consider: Video compression or external hosting for production

### CSS Extraction Concerns
- grep found no `:root` block in global.css (expected for CSS variables)
- grep found no `@media` queries (expected for responsive design)
- Possible false negative from grep, but warrants manual verification
