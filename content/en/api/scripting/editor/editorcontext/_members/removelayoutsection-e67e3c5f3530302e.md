---
uid: api.e67e3c5f3530302e95dcf5caff5ed0d2b2b9757ce5698ddc8cf1fad65c89c59b
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.RemoveLayoutSection(System.String)"
source: xml
reviewed: 7856d851a8cc590bdba9cc393bad445625707c93531334872ed4fc585e0f531e
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
