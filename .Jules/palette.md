## 2025-05-18 - [Semantic Interactive Logos]
**Learning:** Interactive branding elements (like logos that route home) often miss explicit `focus-visible` styling and semantic tags because developers use styling wrappers (like `<div onClick={...}>`). This causes severe navigation issues for keyboard and screen reader users navigating the main landmark.
**Action:** Always ensure any interactive logo element uses a semantic `<button>` or `<a>` tag with explicit `focus-visible` styling matching standard navigational buttons.
