## 2025-02-27 - Explicit Focus Outlines for Tailwind Rings
**Learning:** When adding Tailwind focus rings (e.g., `focus-visible:ring-2`) to icon-only interactive elements or links, it's critical to explicitly include `focus-visible:outline-none` to clear the browser's default focus styling, especially when adding `rounded-sm` or similar border radii, to prevent overlapping/messy focus indicators.
**Action:** Always include `focus-visible:outline-none` alongside `focus-visible:ring-2` when implementing custom keyboard focus states for links and buttons.
