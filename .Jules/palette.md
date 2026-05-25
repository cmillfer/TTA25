## 2025-05-25 - Redacted Text Accessibility
**Learning:** Visual 'redacted' text effects (e.g., black-on-black text revealed via interaction) are completely invisible to screen readers and keyboard users without special handling.
**Action:** Always wrap visual redacted text with a `<span className="sr-only">Redacted text: </span>` context tag, add `tabIndex={0}`, use both `focus-visible` and `active` states to match `hover` behaviors, and include a native `title` tooltip to ensure full accessibility.
