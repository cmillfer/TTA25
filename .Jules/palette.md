## 2025-06-11 - Logo Button Accessibility
**Learning:** Interactive branding elements (e.g., logos that route home) must use semantic tags (`<button>` or `<a>`) with explicit `focus-visible` styling rather than generic `<div onClick={...}>` wrappers to ensure full keyboard navigation and screen reader support.
**Action:** Always wrap interactive logos or branding elements in a semantic tag and provide an appropriate `aria-label` (e.g., "Return to home") and visible focus ring.

## 2025-06-11 - Invisible Focus Trap
**Learning:** Elements visually hidden via CSS `opacity: 0` and `pointer-events: none` remain natively focusable by keyboard navigation. Always complement visual fading logic with structural accessibility controls like `tabIndex={isVisible ? 0 : -1}` and `aria-hidden={!isVisible}` to prevent invisible focus traps.
**Action:** When creating components that conditionally render via CSS transitions rather than unmounting, strictly enforce `tabIndex` modifications and `aria-hidden` attributes to sync with the visual state.
