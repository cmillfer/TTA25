## 2024-10-24 - Accessible "Redacted" Text
**Learning:** Visual "redacted" text (black-on-black) creates an exclusionary experience if relying solely on hover. Screen readers announce it as normal text, missing context, and keyboard/touch users cannot reveal it.
**Action:** Always wrap visual redacted text with a `<span className="sr-only">Redacted: </span>` context tag, add `tabIndex={0}`, use `focus-visible` and `active` states to match hover states, and add a native `title` tooltip.
