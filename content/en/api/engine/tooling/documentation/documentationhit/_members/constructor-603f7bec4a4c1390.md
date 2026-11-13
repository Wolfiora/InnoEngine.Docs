---
uid: api.603f7bec4a4c1390a03aedb5fa3c72cb190917a23176430da311c1c0e62235d6
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationHit.#ctor(System.String,System.String,System.String,System.Int32,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.String,System.String,System.String,System.String,System.String)"
source: xml
reviewed: d02c2644401dc3d3806d9e01dab42e0b99ef02dd4480809384e641546db49e3e
title: "Constructor"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
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
