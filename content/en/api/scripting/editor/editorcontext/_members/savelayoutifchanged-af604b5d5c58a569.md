---
uid: api.af604b5d5c58a56937427641fa98a3cfc9307e1dbc2391b3784840791196932c
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.SaveLayoutIfChanged"
source: xml
reviewed: 8718a7b4bc65d8b9c660ec1a044423171def82da02734c79a484eca1fb55e502
title: "SaveLayoutIfChanged"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Atomically saves the project editor layout when it changed.

**Returns:** `true` when a changed document was written.

**Exception `T:System.IO.IOException`:** Thrown when the layout document cannot be written atomically.

**Exception `T:System.UnauthorizedAccessException`:** Thrown when the layout document is inaccessible.
