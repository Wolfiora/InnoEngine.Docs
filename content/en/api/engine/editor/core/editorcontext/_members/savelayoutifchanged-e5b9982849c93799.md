---
uid: api.e5b9982849c9379944dec9f2c72d0a7b4bbebdec28542f1988ab253c3f091a0f
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.SaveLayoutIfChanged"
source: xml
reviewed: 14e528b22c24d4ebfdcd020479d422949a13d918572758c421b17ba26128ef55
title: "SaveLayoutIfChanged"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Atomically saves the project editor layout when it changed.

**Returns:** `true` when a changed document was written.

**Exception `T:System.IO.IOException`:** Thrown when the layout document cannot be written atomically.

**Exception `T:System.UnauthorizedAccessException`:** Thrown when the layout document is inaccessible.
