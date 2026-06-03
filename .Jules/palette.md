## 2025-06-03 - Interactive Branding Semantic Tags & Focus Rings
**Learning:** Interactive branding elements (e.g., logos that act as a "Return to Home" button) are frequently built using generic `<div onClick={...}>` wrappers without keyboard focus styles, breaking keyboard navigation.
**Action:** When creating interactive branding, always use semantic tags (`<button>` or `<a>`) with explicit `focus-visible` styling rather than generic generic wrappers to ensure full keyboard navigation and screen reader support.

## 2025-06-03 - Focus Visible Outline Pattern
**Learning:** Many interactive elements across the application (e.g., Header nav buttons, ScrollToTop, EvidenceLocker links) are missing `focus-visible` styling for proper keyboard accessibility.
**Action:** Apply consistent focus outlines (e.g., `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 rounded-sm`) across all interactive elements, making sure to include necessary border-radius rounding matching the element's shape.
