---
uid: api.e67e3c5f3530302e95dcf5caff5ed0d2b2b9757ce5698ddc8cf1fad65c89c59b
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.RemoveLayoutSection(System.String)"
source: xml
reviewed: dfba94e10027d761e1e11e565c1f90287f416b8c6aba390206b25066e255980b
title: "RemoveLayoutSection"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Removes one editor layout section from the in-memory document.

**Parameter `sectionName`:** The section name without its INI header syntax.

**Returns:** `true` when an existing section was removed.

**Exception `T:System.ArgumentException`:** Thrown when `sectionName` is empty or cannot be represented in the layout.
