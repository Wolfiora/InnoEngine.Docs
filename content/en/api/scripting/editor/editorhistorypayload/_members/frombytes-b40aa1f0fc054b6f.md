---
uid: api.b40aa1f0fc054b6f7713ba1ad2f2b31666d39fec26a58a984c9e7e80a9a8d770
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryPayload.FromBytes(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 33e9be18c81476bcce170f16a8cd521dca6bb24081364ddd80d77c0c59944307
title: "FromBytes"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates an immutable history payload by copying the supplied bytes.

**Parameter `bytes`:** The neutral bytes to retain for future Undo and Redo transitions.

**Returns:** A new independently owned payload.
