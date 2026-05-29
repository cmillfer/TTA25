## 2024-05-29 - Header Accessibility Improvement
**Learning:** Interactive branding elements (e.g., logos that route home) must use semantic tags (`<button>` or `<a>`) with explicit `focus-visible` styling rather than generic `<div onClick={...}>` wrappers to ensure full keyboard navigation and screen reader support.
**Action:** Always check interactive elements that act like links or buttons to ensure they have the proper semantic tags, aria-labels if icon-only, and explicit focus indicators.
