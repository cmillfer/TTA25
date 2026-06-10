## 2025-06-10 - Semantic Branding Elements
**Learning:** Interactive branding elements (like logos that act as a "Return to Home" link) are frequently wrapped in generic `<div>` tags with `onClick` handlers, which removes them from the tab order and hides them from screen readers.
**Action:** Always use semantic tags (`<button>` or `<a>`) for interactive branding elements, ensure explicit `focus-visible` styling (including `focus-visible:outline-none` when adding custom rings), and provide an `aria-label` when the text content isn't fully descriptive on its own.
