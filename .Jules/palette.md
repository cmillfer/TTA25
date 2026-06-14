## 2025-06-11 - Logo Button Accessibility
**Learning:** Interactive branding elements (e.g., logos that route home) must use semantic tags (`<button>` or `<a>`) with explicit `focus-visible` styling rather than generic `<div onClick={...}>` wrappers to ensure full keyboard navigation and screen reader support.
**Action:** Always wrap interactive logos or branding elements in a semantic tag and provide an appropriate `aria-label` (e.g., "Return to home") and visible focus ring.

## 2025-06-14 - Invisible Focus Traps
**Learning:** Elements visually hidden via CSS using `opacity-0` and `pointer-events-none` are still natively focusable by keyboard navigation. This can create "invisible focus traps" where users tab to an element they cannot see or interact with via a pointer device.
**Action:** Always complement visual fading logic (like `opacity: 0`) with structural accessibility controls like `tabIndex={isVisible ? 0 : -1}` and `aria-hidden={!isVisible}` on interactive elements.
