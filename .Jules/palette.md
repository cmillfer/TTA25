## 2024-06-07 - Semantic interactive elements and focus states
**Learning:** Interactive branding elements (e.g., logos that route home) must use semantic tags (`<button>` or `<a>`) with explicit `focus-visible` styling rather than generic `<div onClick={...}>` wrappers to ensure full keyboard navigation and screen reader support.
**Action:** When creating clickable elements, always use `<button>` or `<a>` elements and ensure they have explicit focus-visible states for keyboard users.
