---
uid: api.3ffb97735c1c3f2c5f3047511370b2124e81e60b6c8d8352f0a94e0a9d623724
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.RemoveLayoutSection(System.String)"
source: xml
reviewed: ee69dd948319d144bb29560506c2c96a412842b79617b08ee9ab2d1b66564206
title: "RemoveLayoutSection"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Removes one editor layout section from the in-memory document.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Returns:** `true` when an existing section was removed.

**Exception `T:System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.
