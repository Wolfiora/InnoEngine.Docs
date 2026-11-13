---
uid: api.inno.tooling.documentation.1c4ba59d81c5562a
symbol: "engine:Inno.Tooling.Documentation:T:Inno.Tooling.Documentation.DocumentationHit"
source: xml
reviewed: 74a0038413a051ef855e67e1cf34a901cc017e3cd6cfe4ce3b3b1bcead3961bd
title: "DocumentationHit"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
contracts:
- project.inno-tooling-documentation#failure-and-ownership-boundaries
aliases: []
---

Identifies an original content unit or an explicitly incomplete search excerpt.

**Parameter `pageId`:** Stable page identity independent of its title or current path.

**Parameter `page`:** Relative path within the documentation checkout.

**Parameter `section`:** Stable section anchor, or an empty string for a whole page.

**Parameter `line`:** One-based source line of the selected content.

**Parameter `projects`:** Actual source project owners declared by the page and validated against the reference manifest.

**Parameter `surface`:** Qualified API surface, or null for surface-independent guidance.

**Parameter `symbol`:** Exact XML symbol identity when resolving a symbol, otherwise null.

**Parameter `reason`:** Why this content was selected.

**Parameter `completeness`:** CompleteUnit, Excerpt or Partial; complete units may still have necessary related contracts.

**Parameter `text`:** Original Markdown for reads, or an explicitly marked excerpt for search.

**Parameter `resource`:** Stable inno-doc resource URI bound to the returned snapshot and page.
