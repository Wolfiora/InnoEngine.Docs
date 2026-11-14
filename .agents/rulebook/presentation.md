# Presentation requirements

Use Astro/Starlight with readable Markdown content loaded directly from `content/en/`. The website is a presentation of the canonical content, not a separate source of API facts.

## Reading experience

Provide hierarchical navigation, a comfortable main column, an in-page contents list, visible search, light/dark themes, and responsive navigation. Use the InnoEngine logo with its author credit and separate license. Do not copy Godot branding or invent another logo source.

Use Starlight's canonical sidebar entries with native HTML disclosures, initially collapsed, and persist only the reader's choices. Do not automatically expand the active path or prune inactive categories to reduce artifact size. A category's label links to its page; its separate arrow toggles children. Render a registered group-home entry in the label, never as a duplicate child. Canonical category and symbol identities supply routes. Include alphabetically sorted types within Engine categories and Scripting Scopes; members remain accessible through their type's table with kind, name and description.

XML-managed pages start with the actual source summary below the title. Generate remarks, parameters, returns, exceptions and examples as readable Markdown sections, separate from declarations. Preserve manually owned prose. Explicit XML-owned explanations show a brief Tip above required contracts; omit body editing links and target/configuration dumps. Put Project/API/Scope metadata immediately above inheritance (or before Declaration when no inheritance applies). Put source provenance directly above the footer's GitHub editing link. Preserve applicability facts in canonical references and query provenance.

Keep keyboard focus visible. Use semantic headings, meaningful accessible names, and sufficient contrast. Ordinary prose must not overflow horizontally. Signatures, code, and data tables may scroll inside their own containers. Necessary information must remain available without client JavaScript.

Theme components own layout. Ordinary content does not import MDX components or execute scripts. Important constraints must remain visible without expanding a disclosure. Supported Markdown must agree between the canonical parser, GitHub reading, and rendered anchors.

## Verification

Inspect landing, manual, tutorial, API, search, and error states in both themes at desktop, tablet, and mobile widths. Verify deep links under the documentation base path on the selected host, keyboard navigation, copy controls, and code/table overflow. A successful static build alone is not visual or accessibility acceptance.
