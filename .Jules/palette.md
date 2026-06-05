## 2026-06-05 - Semantic branding elements
**Learning:** Interactive branding elements (e.g., logos that route home) must use semantic tags (`<button>` or `<a>`) with explicit `focus-visible` styling rather than generic `<div onClick={...}>` wrappers to ensure full keyboard navigation and screen reader support.
**Action:** Ensure all interactive elements, especially primary site navigation like home logos, use semantic `<button>` or `<a>` tags with `aria-label` and `focus-visible` states.
