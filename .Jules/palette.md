## 2024-06-04 - Focus-Visible Utility

**Learning:** When generating `focus-visible` ring on components with rounded corners like in EvidenceLocker, adding an explicit outline-none alongside `focus-visible:ring-2` helps clear browser default focus styles for a much cleaner look. A native `title` attribute acts as a clean tooltip on top of standard A11y features. Avoid redundancy by not using both `<span className="sr-only">` and `aria-label` when `aria-label` conveys the same message.

**Action:** Consistently use tailwind `focus-visible:outline-none focus-visible:ring-2` with an appropriate ring-offset color instead of relying on default browser focus behavior. Only use `sr-only` if `aria-label` isn't present or vice versa.
