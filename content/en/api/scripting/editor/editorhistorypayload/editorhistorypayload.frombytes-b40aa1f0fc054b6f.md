---
uid: api.b40aa1f0fc054b6f7713ba1ad2f2b31666d39fec26a58a984c9e7e80a9a8d770
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryPayload.FromBytes(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: d3fa2f1829ed81bea5d406ef387347f94cda2f662f0eece45d7c720324bfda2b
title: "EditorHistoryPayload.FromBytes"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates an immutable history payload by copying the supplied bytes.

## Parameters

**Parameter `bytes`:** The neutral bytes to retain for future Undo and Redo transitions.

## Returns

A new independently owned payload.
