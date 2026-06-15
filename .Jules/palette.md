## 2025-06-11 - Logo Button Accessibility
**Learning:** Interactive branding elements (e.g., logos that route home) must use semantic tags (`<button>` or `<a>`) with explicit `focus-visible` styling rather than generic `<div onClick={...}>` wrappers to ensure full keyboard navigation and screen reader support.
**Action:** Always wrap interactive logos or branding elements in a semantic tag and provide an appropriate `aria-label` (e.g., "Return to home") and visible focus ring.

## 2025-06-15 - Redacted Text Accessibility
**Learning:** When implementing visual "redacted" text (e.g., black-on-black text revealed via interaction), it must be fully accessible. Just using CSS `hover` excludes keyboard and touch users, and screen readers lack context.
**Action:** Always wrap redacted text with a native `title` tooltip, add `tabIndex={0}`, use both `focus-visible` and `active` states to match hover behaviors, and include an `<span className="sr-only">Redacted: </span>` prefix to provide context for screen readers.
