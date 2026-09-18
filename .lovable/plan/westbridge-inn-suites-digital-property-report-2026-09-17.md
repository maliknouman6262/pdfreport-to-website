# Westbridge Inn & Suites Digital Property Report

## Goal
Build a single scrolling website that faithfully translates the uploaded 16-page owner report into 16 full-width sections, while preserving its corporate black, gold, and white visual system.

## What will be built
- A sticky section navigator with links for all 16 report pages.
- Sixteen ordered report sections, each with the repeated Crown report header, page-specific content, and numbered disclosure footer.
- Reusable information, photo, timeline, comparison, and QR-card patterns matching the report.
- Exact report wording sourced from the uploaded PDF wherever extractable, including ownership, structural, roof, weather, chronology, action-plan, and disclaimer content.
- Faithful placeholder imagery with precise replacement-friendly captions and accessible labels.
- Clickable QR destinations sourced from the supporting QR PDF where links can be extracted reliably.
- Responsive layouts that retain the report’s hierarchy on phones and larger screens.
- Subtle professional reveal motion with reduced-motion support.

## Visual direction
- Near-black report framing with brass-gold rules and titles.
- Bright white document panels with crisp black section headers and restrained borders.
- Elegant editorial serif display type paired with a highly legible sans-serif body.
- Dense, formal report composition rather than a generic marketing-page treatment.

## Technical approach
- Keep the experience at `/` as a TanStack Start page.
- Implement reusable React components and content-driven section arrays.
- Define all colors, typography, spacing, shadows, and motion as semantic tokens in the global design system.
- Add unique page metadata for the report route.
- Validate the rendered site at desktop and mobile sizes, including anchor navigation, section count, content overflow, and console errors.

## Scope note
The uploaded report remains the source of truth. Photography will appear as labeled placeholders as requested; the PDF itself will not be embedded as the website.
