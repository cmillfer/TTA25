## 2025-06-11 - Logo Button Accessibility
**Learning:** Interactive branding elements (e.g., logos that route home) must use semantic tags (`<button>` or `<a>`) with explicit `focus-visible` styling rather than generic `<div onClick={...}>` wrappers to ensure full keyboard navigation and screen reader support.
**Action:** Always wrap interactive logos or branding elements in a semantic tag and provide an appropriate `aria-label` (e.g., "Return to home") and visible focus ring.
