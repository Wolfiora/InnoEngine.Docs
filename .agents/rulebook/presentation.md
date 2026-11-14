# Presentation requirements

Use Astro/Starlight with readable Markdown content loaded directly from `content/en/`. The website is a presentation of the canonical content, not a separate source of API facts.

## Reading experience

Provide hierarchical navigation, a comfortable main column, an in-page contents list, visible search, light/dark themes, and responsive navigation. Use the InnoEngine logo with its author credit and separate license. Do not copy Godot branding or invent another logo source.

Use the native Starlight sidebar with its complete expandable hierarchy and persisted state; do not prune inactive categories to reduce artifact size. Canonical category identities supply its routes. API types use one member table with kind, name and description. Explicit XML-owned explanations show a brief Tip above required contracts; omit body editing links and target/configuration dumps. Put source provenance directly above the footer's GitHub editing link. Preserve applicability facts in canonical references and query provenance.

Keep keyboard focus visible. Use semantic headings, meaningful accessible names, and sufficient contrast. Ordinary prose must not overflow horizontally. Signatures, code, and data tables may scroll inside their own containers. Necessary information must remain available without client JavaScript.

Theme components own layout. Ordinary content does not import MDX components or execute scripts. Important constraints must remain visible without expanding a disclosure. Supported Markdown must agree between the canonical parser, GitHub reading, and rendered anchors.

## Verification

Inspect landing, manual, tutorial, API, search, and error states in both themes at desktop, tablet, and mobile widths. Verify deep links under the documentation base path on the selected host, keyboard navigation, copy controls, and code/table overflow. A successful static build alone is not visual or accessibility acceptance.
