---
uid: api.inno.tooling.documentation.5cad6c3641b0832f
symbol: "engine:Inno.Tooling.Documentation:T:Inno.Tooling.Documentation.DocumentationPageInfo"
source: xml
reviewed: 53c9443433c065e01214cc550a0acba61d6700dd14ace2fee24e30217a7931cd
title: "DocumentationPageInfo"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
contracts:
- project.inno-tooling-documentation#failure-and-ownership-boundaries
aliases: []
---

Supplies canonical page metadata to navigation and rendered-output checks without a second Markdown parser.

**Parameter `id`:** Stable authored page identity.

**Parameter `path`:** Source path relative to the selected Docs checkout.

**Parameter `contentIdentity`:** SHA-256 of original UTF-8 Markdown text.

**Parameter `title`:** Plain-text H1 derived by the canonical parser.

**Parameter `kind`:** Validated page purpose, such as tutorial, project or api.

**Parameter `owners`:** Actual project identities from the bound manifest.

**Parameter `surface`:** Qualified API surface, or null for shared guidance.

**Parameter `sections`:** Canonical heading anchors mapped to one-based source lines.

**Parameter `symbols`:** Exact XML symbol identities mapped to canonical anchors, signature identities and visible code.

**Parameter `contracts`:** Necessary page or section identities that must remain visible to readers.

**Parameter `includes`:** Source-relative API includes, validated for ownership, existence and cycles.

**Parameter `codeBlocks`:** Canonical fenced code for example selection and declaration comparison, without reparsing Markdown. Compilation contexts and execution evidence belong to the validation caller.

**Parameter `examples`:** Explicit authored reference context, or null when the page declares no example context. A validator must report executable examples without a context as blocked, not guess one from a namespace.
