---
uid: api.72ec8bd1250c67c9d106b7f8f7812f5248357642f546222d4555b76b1a905275
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.SaveLayout"
source: xml
reviewed: 76fadf6424731b92e6f228be948d70c4c3c93b995a005fd86d3b97c9d15d6b6f
title: "EditorContext.SaveLayout"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Atomically rewrites the complete project editor layout document.

## Exceptions

**Exception `T:System.IO.IOException`:** Thrown when the layout document cannot be written atomically.

**Exception `T:System.UnauthorizedAccessException`:** Thrown when the layout document is inaccessible.
