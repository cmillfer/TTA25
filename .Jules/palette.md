## 2025-06-11 - Logo Button Accessibility
**Learning:** Interactive branding elements (e.g., logos that route home) must use semantic tags (`<button>` or `<a>`) with explicit `focus-visible` styling rather than generic `<div onClick={...}>` wrappers to ensure full keyboard navigation and screen reader support.
**Action:** Always wrap interactive logos or branding elements in a semantic tag and provide an appropriate `aria-label` (e.g., "Return to home") and visible focus ring.

## 2025-06-12 - Icon-Only Interactive Elements Accessibility
**Learning:** Icon-only links (e.g., social media icons in grids or footers) often lack context for sighted users who hover and keyboard users who navigate.
**Action:** Always provide a native `title` attribute for mouse-hover tooltips on icon-only links, alongside `<span className="sr-only">` tags for screen readers, and ensure robust `focus-visible` styling (with appropriate `rounded` utilities for focus ring corners) so keyboard navigation is explicit.
