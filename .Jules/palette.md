
## 2024-05-28 - Semantic Navigation Logos
**Learning:** Interactive branding elements (e.g., logos that route home) must use semantic tags (`<button>` or `<a>`) with explicit `focus-visible` styling rather than generic `<div onClick={...}>` wrappers. While the `onClick` event works for mouse users, a simple `<div>` misses out on native keyboard support (tabbing and Enter/Space activation) and fails to convey its interactive nature to screen readers out of the box.
**Action:** When creating or reviewing interactive logo/branding wrappers, always use a `<button>` (if routing locally without anchor semantics) or `<a>` tag, provide an `aria-label`, and enforce `focus-visible` styles matching the site's palette (e.g. `focus-visible:outline-primary-red`).
