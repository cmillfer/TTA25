## 2025-06-11 - Logo Button Accessibility
**Learning:** Interactive branding elements (e.g., logos that route home) must use semantic tags (`<button>` or `<a>`) with explicit `focus-visible` styling rather than generic `<div onClick={...}>` wrappers to ensure full keyboard navigation and screen reader support.
**Action:** Always wrap interactive logos or branding elements in a semantic tag and provide an appropriate `aria-label` (e.g., "Return to home") and visible focus ring.

## 2025-06-11 - Invisible Focus Trap
**Learning:** Elements visually hidden via CSS `opacity: 0` and `pointer-events: none` remain natively focusable by keyboard navigation. Always complement visual fading logic with structural accessibility controls like `tabIndex={isVisible ? 0 : -1}` and `aria-hidden={!isVisible}` to prevent invisible focus traps.
**Action:** When creating components that conditionally render via CSS transitions rather than unmounting, strictly enforce `tabIndex` modifications and `aria-hidden` attributes to sync with the visual state.

## 2025-06-12 - Redacted Text Accessibility
**Learning:** When implementing visual "redacted" text (e.g., black-on-black text revealed via interaction), it requires explicit structural support to be accessible. A pure CSS `hover` effect leaves keyboard-only and screen reader users completely unaware of the content or its interaction.
**Action:** Always complement visual "redacted" text with `tabIndex={0}`, `focus-visible` and `active` states to match hover behaviors, a native `title` tooltip for context, and a `<span className="sr-only">` tag to announce the redaction to screen readers.

## 2025-06-28 - Dynamic Screen Reader Text on Toggles
**Learning:** For toggle buttons (like mobile menus), screen reader text (e.g., `sr-only` or `aria-label`) must dynamically reflect the *next* action that will occur (e.g., "Close menu" when open, "Open menu" when closed) rather than using a static description, to avoid confusing non-visual users.
**Action:** When creating toggle buttons without visual text, ensure the structural accessible text conditionally updates based on the toggle's state variable.
