# Presentation requirements

Use Astro/Starlight with readable Markdown content loaded directly from `content/en/`. The website is a presentation of the canonical content, not a separate source of API facts.

## Reading experience

Provide hierarchical navigation, a comfortable main column, an in-page contents list, visible search, light/dark themes, and responsive navigation. Use the InnoEngine logo with its author credit and separate license. Do not copy Godot branding or invent another logo source.

Keep keyboard focus visible. Use semantic headings, meaningful accessible names, and sufficient contrast. Ordinary prose must not overflow horizontally. Signatures, code, and data tables may scroll inside their own containers. Necessary information must remain available without client JavaScript.

Theme components own layout. Ordinary content does not import MDX components or execute scripts. Important constraints must remain visible without expanding a disclosure. Supported Markdown must agree between the canonical parser, GitHub reading, and rendered anchors.

## Verification

Inspect landing, manual, tutorial, API, search, and error states in both themes at desktop, tablet, and mobile widths. Verify deep links under the GitHub Pages base path, keyboard navigation, copy controls, and code/table overflow. A successful static build alone is not visual or accessibility acceptance.
