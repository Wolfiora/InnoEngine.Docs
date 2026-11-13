---
uid: api.72ec8bd1250c67c9d106b7f8f7812f5248357642f546222d4555b76b1a905275
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.SaveLayout"
source: xml
reviewed: 614420822d35dc2bc924c6a79c4bb13d31345116ab57048385406cb84ae70de1
title: "SaveLayout"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Atomically rewrites the complete project editor layout document.

**Exception `T:System.IO.IOException`:** Thrown when the layout document cannot be written atomically.

**Exception `T:System.UnauthorizedAccessException`:** Thrown when the layout document is inaccessible.
