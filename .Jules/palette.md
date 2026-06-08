## 2026-06-08 - Semantic Wrappers for Interactive Branding
**Learning:** Interactive branding elements (e.g., logos that route home) often use generic `<div>` tags with `onClick` handlers, which breaks keyboard navigation and screen reader support. Additionally, they often lack focus styling.
**Action:** Always use semantic tags (`<button>` or `<a>`) for interactive branding elements and include explicit `focus-visible` styling (e.g., `focus-visible:outline-none focus-visible:ring-2`) to ensure full accessibility.
