## 2024-05-24 - Initializing UX Journal\n**Learning:** Started UX journal to track critical UX/a11y patterns.\n**Action:** Will document important learnings here.

## 2024-05-24 - Semantic Buttons for Branding Navigation
**Learning:** Interactive branding elements (e.g., logos that route home) often use `div` with `onClick`, breaking keyboard navigation and screen reader support.
**Action:** Always convert interactive wrapper `div`s to semantic `<button>` or `<a>` tags with explicit `focus-visible` styling and `aria-label`s to ensure full accessibility without disrupting visual design.
