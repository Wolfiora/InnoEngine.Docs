---
uid: api.3ffb97735c1c3f2c5f3047511370b2124e81e60b6c8d8352f0a94e0a9d623724
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.RemoveLayoutSection(System.String)"
source: xml
reviewed: 9f3e1917496f1c3cec08fc0912136d4403918b1e70a54ced15e51d3f95b2b875
title: "EditorContext.RemoveLayoutSection"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Removes one editor layout section from the in-memory document.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Returns:** `true` when an existing section was removed.

**Exception `T:System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.
