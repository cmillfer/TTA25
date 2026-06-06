## 2024-05-15 - Icon-Only Link Accessibility
**Learning:** Icon-only interactive elements in components like `Socials.tsx` and `Footer.tsx` often lack `focus-visible` styling for keyboard navigation and native `title` attributes for mouse hover tooltips, presenting a recurring accessibility gap.
**Action:** Always include explicit `focus-visible` styling (e.g., `focus-visible:ring-2 focus-visible:ring-primary-red focus-visible:ring-offset-2`) and native `title` tooltips for icon-only links alongside `<span className="sr-only">` screen reader tags.
